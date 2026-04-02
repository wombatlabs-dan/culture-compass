import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import OpenAI from "openai";

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post(api.vibe.generate.path, async (req, res) => {
    try {
      const { query } = api.vibe.generate.input.parse(req.body);

      // Call OpenAI to analyze the location
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
        model: "gpt-4o",
        messages: [
          { role: "system", content: "You are VibeCheck, a cultural etiquette guide. You only speak JSON." },
          { role: "user", content: prompt }
        ],
        response_format: { type: "json_object" }
      });

      const content = response.choices[0].message.content;
      if (!content) throw new Error("No response from AI");

      const result = JSON.parse(content);

      // Validate structure roughly
      const vibeResult = {
        location: result.location || query,
        country: result.country || "Unknown",
        category: result.category || "General",
        rules: Array.isArray(result.rules) ? result.rules.slice(0, 3) : ["Respect the locals.", "Be polite.", "Enjoy the vibe."],
        scam: result.scam || null,
        coordinates: result.coordinates || { lat: 0, lng: 0 }
      };

      // Store in history
      await storage.createSearchHistory({
        query,
        location: vibeResult.location,
        result: vibeResult
      });

      res.json(vibeResult);
    } catch (error) {
      console.error("Vibe generation error:", error);
      res.status(500).json({ message: "Failed to generate vibe check" });
    }
  });

  app.get(api.vibe.history.path, async (req, res) => {
    const history = await storage.getRecentSearches();
    res.json(history);
  });

  return httpServer;
}
