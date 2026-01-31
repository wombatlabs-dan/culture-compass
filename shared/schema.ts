import { pgTable, text, serial, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const searchHistory = pgTable("search_history", {
  id: serial("id").primaryKey(),
  query: text("query").notNull(),
  result: jsonb("result").notNull(), // Stores { location, rules[], scam }
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertSearchSchema = createInsertSchema(searchHistory).omit({ 
  id: true, 
  createdAt: true 
});

export type SearchHistory = typeof searchHistory.$inferSelect;
export type InsertSearchHistory = z.infer<typeof insertSearchSchema>;

export const vibeResultSchema = z.object({
  location: z.string(),
  country: z.string(),
  category: z.string(),
  rules: z.array(z.string()),
  scam: z.string().nullable().optional(),
  coordinates: z.object({
    lat: z.number(),
    lng: z.number()
  }).optional()
});

export type VibeResult = z.infer<typeof vibeResultSchema>;
