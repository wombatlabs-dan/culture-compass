# VibeCheck

## Overview

VibeCheck is a cultural etiquette guide application with an iOS lock screen-inspired UI. Users enter a location (e.g., "Kyoto Temple") and receive AI-generated etiquette rules, scam warnings, and location metadata. The app uses OpenAI for natural language processing and stores search history in PostgreSQL.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Animations**: Framer Motion for smooth transitions
- **Build Tool**: Vite with hot module replacement

The UI mimics an iOS lock screen with a clock widget, notification-style result bubbles, and a floating search bar. Components are organized in `client/src/components/` with reusable UI primitives in `client/src/components/ui/`.

### Backend Architecture
- **Framework**: Express 5 on Node.js
- **Language**: TypeScript with ES modules
- **API Pattern**: REST endpoints defined in `shared/routes.ts` with Zod validation
- **AI Integration**: OpenAI API via Replit AI Integrations for location analysis

Key routes:
- `POST /api/vibe/generate` - Analyzes location and returns etiquette rules
- `GET /api/vibe/history` - Returns recent search history

### Data Storage
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Location**: `shared/schema.ts` for main tables, `shared/models/chat.ts` for chat-related tables
- **Migrations**: Managed via `drizzle-kit push`

Main tables:
- `search_history` - Stores location queries and AI-generated results as JSONB
- `conversations` / `messages` - Chat functionality (infrastructure exists for voice/chat features)

### Shared Code
The `shared/` directory contains code used by both frontend and backend:
- `schema.ts` - Database schema and Zod validation schemas
- `routes.ts` - API route definitions with input/output types

### Replit Integrations
Pre-built utilities in `server/replit_integrations/` and `client/replit_integrations/`:
- **Audio**: Voice recording, playback, and speech-to-text
- **Chat**: Conversation management with streaming responses
- **Image**: Image generation via OpenAI
- **Batch**: Rate-limited batch processing utilities

## External Dependencies

### AI Services
- **OpenAI API**: Used for location analysis and generating etiquette rules
  - Configured via `AI_INTEGRATIONS_OPENAI_API_KEY` and `AI_INTEGRATIONS_OPENAI_BASE_URL` environment variables
  - Model: gpt-5.2 for text, gpt-image-1 for images

### Database
- **PostgreSQL**: Primary data store
  - Connection via `DATABASE_URL` environment variable
  - Uses `pg` driver with Drizzle ORM

### Key NPM Packages
- `drizzle-orm` / `drizzle-kit` - Database ORM and migrations
- `@tanstack/react-query` - Data fetching and caching
- `framer-motion` - Animation library
- `date-fns` - Date formatting
- `zod` - Schema validation
- `openai` - OpenAI API client