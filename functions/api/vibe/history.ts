import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { desc } from 'drizzle-orm';
import * as schema from '../../../shared/schema';

interface Env {
  DATABASE_URL: string;
}

export async function onRequestGet(context: {
  request: Request;
  env: Env;
}): Promise<Response> {
  const sql = neon(context.env.DATABASE_URL);
  const db = drizzle(sql, { schema });
  const history = await db
    .select()
    .from(schema.searchHistory)
    .orderBy(desc(schema.searchHistory.createdAt))
    .limit(10);
  return Response.json(history);
}
