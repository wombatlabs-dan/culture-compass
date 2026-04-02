# 🧭 Culture Compass

> **AI-powered cultural etiquette intelligence** — know the unwritten rules before you land.

**🏆 Hackathon Winner** — built and shipped in a single hackathon sprint.

---

<!-- SCREENSHOT PLACEHOLDER — see notes at bottom of README -->
<!-- ![Culture Compass UI](./docs/screenshot.png) -->

---

## What it does

Culture Compass answers the question every traveler, expat, and business professional has but rarely asks out loud: *"What are the social rules I don't know I'm breaking?"*

Enter a destination city. Get back an AI-generated cultural vibe check — covering greetings, dining etiquette, business norms, taboo topics, dress codes, and the social subtleties that guidebooks miss. The interface renders the response with a cyberpunk city aesthetic, designed to feel like pulling up intelligence on a destination rather than reading a travel blog.

**Key capabilities:**
- 🌏 **Cultural vibe analysis** — GPT-powered deep-dive into local etiquette and social norms for any city worldwide
- 🎙️ **Voice interface** — ask questions and hear responses via OpenAI's real-time audio API
- 🖼️ **AI-generated city imagery** — visual context generated on the fly for each destination
- 💬 **Persistent conversation history** — follow-up questions, session memory, and search history
- ⚡ **Streaming responses** — SSE-powered real-time output so answers feel instant

---

## Why it won

The judges weren't just evaluating the code — they were evaluating the idea. Culture Compass started from a structured opportunity analysis: who has an unmet need, why existing solutions fall short, and whether the problem is big enough to matter.

The insight that drove the win: **travel content is abundant, but cultural intelligence is scattered, shallow, and not conversational.** Google gives you listicles. Guidebooks are outdated. Nothing gives you a real-time, context-aware conversation about the social dynamics of a place. GPT-4 + voice + a focused UX changes that.

See [HACKATHON.md](./HACKATHON.md) for the full story — including the ideation methodology, competitive analysis, and the one-pager that went into the build session.

---

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | React 18, TypeScript, Vite, Tailwind CSS, Framer Motion |
| UI Components | shadcn/ui (New York style), custom glassmorphism theme |
| Backend | Express.js 5, Node.js 20 |
| Database | PostgreSQL 16 + Drizzle ORM |
| AI — Text | OpenAI GPT-4 (cultural analysis, chat) |
| AI — Voice | OpenAI Realtime Audio API (TTS + speech-to-text, WAV/MP3/WebM) |
| AI — Images | OpenAI gpt-image-1 (destination imagery) |
| State / Data | TanStack Query (React Query v5) |
| Routing | Wouter |
| Build | Vite (client) + esbuild (server) |
| Platform | Replit (Node 20 + PostgreSQL 16) |

---

## Architecture

```
culture-compass/
├── client/               # React SPA
│   └── src/
│       ├── pages/        # Home (vibe checker), 404
│       ├── components/   # SearchBar, NotificationBubble, ClockWidget
│       ├── hooks/        # useVibeGenerator, useVibeHistory, useMobile, useToast
│       └── lib/          # queryClient, utils
├── server/               # Express API
│   ├── routes.ts         # Core vibe endpoints + history
│   ├── storage.ts        # DB interface + Drizzle implementation
│   └── replit_integrations/
│       ├── audio/        # Voice chat, TTS, speech-to-text, format detection
│       ├── chat/         # Conversation management + SSE streaming
│       ├── image/        # AI image generation
│       └── batch/        # Concurrent processing with retry + backoff
├── shared/               # Shared types and schemas
│   ├── schema.ts         # DB schema (searchHistory), Zod validators
│   ├── routes.ts         # API endpoint definitions
│   └── models/chat.ts    # Conversation + message schemas
└── script/build.ts       # Two-stage production build
```

The server exposes two primary API endpoints:
- `POST /api/vibe/generate` — takes a city name, returns GPT-generated cultural etiquette analysis
- `GET /api/vibe/history` — retrieves the user's past searches

Audio, chat, and image capabilities are layered in via modular integration packages that can be enabled independently.

---

## Running locally

### Prerequisites

- Node.js 20+
- PostgreSQL 16+
- An [OpenAI API key](https://platform.openai.com/api-keys) with access to GPT-4, Realtime Audio, and image generation

### Setup

```bash
git clone https://github.com/wombatlabs-dan/culture-compass.git
cd culture-compass
npm install
```

### Environment variables

Create a `.env` file in the project root:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/culture_compass
OPENAI_API_KEY=sk-...
```

### Database setup

```bash
npm run db:push    # Apply schema to your database
```

### Run in development

```bash
npm run dev        # Starts Express server + Vite HMR on port 5000
```

### Production build

```bash
npm run build      # Vite (client) + esbuild (server)
npm start
```

---

## Design decisions worth noting

**Why Replit?** The hackathon environment had PostgreSQL and Node preconfigured on Replit, making it the fastest path to a working full-stack app with a real database. The `replit_integrations/` packages are first-party Replit tools for audio, image, and batch processing — they were chosen for speed of integration during the sprint, not as permanent architectural dependencies.

**Why glassmorphism + cyberpunk?** The aesthetic wasn't arbitrary. Cultural intelligence felt like it should look like *intelligence* — something between a spy app and a city guide. The Tokyo-inspired dark theme with animated gradient blobs and glass panels reinforces the "intelligence briefing" framing of the product.

**Why multimodal?** A vibe check is inherently sensory. Being able to *hear* a cultural briefing while looking at an AI-generated image of the destination creates an experience that text-only can't match. The voice interface wasn't scope creep — it was the differentiator.

---

## For judges and reviewers

If you're evaluating this as a portfolio piece or post-hackathon review:

- **The ideation process** is documented in [HACKATHON.md](./HACKATHON.md) — this includes the business opportunity framework, competitive analysis, and one-pager used to scope the build
- **The AI integration** goes well beyond a basic API call: multimodal (text + voice + image), streaming via SSE, concurrent batch processing with retry/backoff, and conversation memory
- **The architecture** is production-shaped: shared type-safe schemas, clean separation of client/server/shared, database persistence, proper error handling
- **Screenshots** — if you'd like to see the UI in action, reach out or see the demo below

---

## Screenshots

> *Screenshots coming — if you're looking at this before they're added, see the "What it does" section above for a description of the UI, or run it locally.*

---

## About the build

Culture Compass was built by [Dan Harrison](https://github.com/wombatlabs-dan) during a hackathon sprint. The idea selection process used a structured framework — business opportunity mapping, product-market fit analysis, and competitive landscape review — before a single line of code was written. That methodology is now open-sourced as the [hackathon-ideation skill](./HACKATHON.md#the-ideation-methodology).

---

*Questions? Open an issue or reach out via [dan@wombatlabs.ai](mailto:dan@wombatlabs.ai)*
