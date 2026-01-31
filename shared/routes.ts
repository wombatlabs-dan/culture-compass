import { z } from 'zod';
import { vibeResultSchema, insertSearchSchema } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  vibe: {
    generate: {
      method: 'POST' as const,
      path: '/api/vibe/generate',
      input: z.object({
        query: z.string().min(1)
      }),
      responses: {
        200: vibeResultSchema,
        400: errorSchemas.validation,
        500: errorSchemas.internal
      },
    },
    history: {
      method: 'GET' as const,
      path: '/api/vibe/history',
      responses: {
        200: z.array(insertSearchSchema.extend({
          id: z.number(),
          createdAt: z.string().or(z.date())
        })),
      }
    }
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
