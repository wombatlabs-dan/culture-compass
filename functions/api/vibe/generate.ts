import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { desc } from 'drizzle-orm';
import * as schema from '../../../shared/schema';
import { api } from '../../../shared/routes';
import OpenAI from 'openai';

interface Env {
  DATABASE_URL: string;
  AI_INTEGRATIONS_OPENAI_API_KEY: string;
  AI_INTEGRATIONS_OPENAI_BASE_URL?: string;
}

export async function onRequestPost(context: {
  request: Request;
  env: Env;
}): Promise<Response> {
  const { request, env } = context;

  try {
    const body = await request.json();
    const { query } = api.vibe.generate.input.parse(body);

    const openai = new OpenAI({
      apiKey: env.AI_INTEGRATIONS_OPENAI_API_KEY,
      baseURL: env.AI_INTEGRATIONS_OPENAI_BASE_URL,
    });

    const prompt = `
      Analyze the location: "${query}".
      Return a JSON object with:
      - location: The formal name of the location
      - country: The country
      - category: The place category (e.g., Temple, Cafe, Park)
      - rules: Array of 3 short, punchy etiquette rules (max 10 words each) specific to this place/culture.
      - scam: If this is a famous tourist landmark, provide a 1-sentence warning about a common local scam. If not, return null.
      - coordinates: Approximate {lat, lng} if possible, else null.
    `;

    const response = await openai.chat.completions.create({
      model: 'gpt-5.2',
      messages: [
        { role: 'system', content: 'You are VibeCheck, a cultural etiquette guide. You only speak JSON.' },
        { role: 'user', content: prompt },
      ],
      response_format: { type: 'json_object' },
    });

    const content = response.choices[0].message.content;
    if (!content) throw new Error('No response from AI');

    const result = JSON.parse(content);
    const vibeResult = {
      location: result.location || query,
      country: result.country || 'Unknown',
      category: result.category || 'General',
      rules: Array.isArray(result.rules)
        ? result.rules.slice(0, 3)
        : ['Respect the locals.', 'Be polite.', 'Enjoy the vibe.'],
      scam: result.scam || null,
      coordinates: result.coordinates || { lat: 0, lng: 0 },
    };

    const sql = neon(env.DATABASE_URL);
    const db = drizzle(sql, { schema });
    await db.insert(schema.searchHistory).values({ query, result: vibeResult });

    return Response.json(vibeResult);
  } catch (error) {
    console.error('Vibe generation error:', error);
    return Response.json({ message: 'Failed to generate vibe check' }, { status: 500 });
  }
}
