# Culture Compass — Hackathon Story

This document covers how Culture Compass came to exist: the ideation methodology used to pick the idea, the one-pager that went into the build session, and what made it win.

Most hackathon teams spend 80% of their time arguing about what to build. This project used a structured framework to compress that into a focused process — and it worked.

---

## The Ideation Methodology

Before writing a single line of code, the idea went through a 7-step validation framework designed for hackathons. The goal: avoid building something technically impressive but commercially incoherent. The framework asks the questions that judges ask — *does this solve a real problem, for a real person, in a way that's meaningfully better than what exists?*

### Step 1 — Problem Discovery

The starting point was a simple question: what do frequent travelers, expats, and business professionals consistently struggle with that digital tools haven't solved well?

The answer surfaced fast: **cultural intelligence**. Not "what to see" or "where to eat" — but the unwritten social rules that determine whether you make a good impression or an embarrassing one. The problem is real, recurring, and emotionally significant. People genuinely worry about inadvertently offending hosts, colleagues, or strangers in unfamiliar cultures.

**Problem framing:**
- **Who has it?** Business travelers, expats, digital nomads, and curious tourists — roughly anyone preparing for a trip to an unfamiliar culture
- **Urgency:** 8/10 — the stakes feel real (professional reputation, relationships, genuine embarrassment)
- **Current solution:** Scattered blog posts, outdated guidebooks, asking friends, hoping for the best

### Step 2 — Idea Clarification

**One-sentence pitch:** *"A conversational AI that gives you a cultural briefing for any city — covering the social norms, etiquette traps, and unwritten rules that guidebooks miss."*

**The #1 pain point:** Existing resources are static, generic, and not conversational. You can't ask a blog post a follow-up question. You can't say "okay, but what about in a formal business dinner context?" and get a useful answer.

**Target customer:** Professionals 28–45, frequent travelers, work in globally distributed companies or consulting. They're on LinkedIn. They read The Economist. They've had an awkward cultural moment on a trip and still think about it. They would pay $10–15/month for a tool that reliably saved them from those moments.

**Search behavior:** "etiquette guide [city]", "business customs in [country]", "what not to do in [country]", "is it rude to [action] in [culture]"

### Step 3 — Market Signal Research

The proof that this problem is real and underserved:

- **Reddit:** r/travel, r/expats, and r/digitalnomad have thousands of posts asking "what should I know before visiting X?" — the top answers are always anecdotal and incomplete. Users regularly complain that guidebook etiquette sections are too vague.
- **App store reviews of travel apps:** 1-star reviews of competitors frequently cite "too surface-level," "nothing I didn't already know," and "doesn't answer follow-up questions."
- **Google Trends:** Searches for "[city] etiquette" and "cultural norms [country]" show consistent, evergreen search volume with spikes before major holidays and events.
- **Quora:** "What are things I should know before visiting Japan/India/Germany/etc." questions consistently attract hundreds of upvotes and dozens of answers — none of them definitive.

The signal: people want this information, they search for it repeatedly, and no single source satisfies them.

### Step 4 — Competitive Landscape

| Competitor | Core offering | Key complaint |
|---|---|---|
| Lonely Planet / guidebooks | Static printed/ebook etiquette sections | Outdated, too generic, no interactivity |
| TripAdvisor / travel blogs | User-generated tips | Inconsistent quality, hard to search |
| Duolingo / language apps | Language learning, some cultural notes | Surface-level cultural content, language-first |
| ChatGPT (direct) | General knowledge including cultural info | No focused UX, no persistence, no voice |
| Culture Smart books | Deep-dive cultural guides | Book format only, slow to update, expensive |

**The gap nobody is filling:** A focused, conversational, multimodal experience purpose-built for cultural intelligence. ChatGPT can answer these questions, but it's not designed for this use case — no city-specific UX, no voice interface, no search history, no visual context.

**The single differentiator to win on:** Conversational depth. The ability to ask follow-ups, get contextual answers, and hear the briefing rather than just read it.

### Step 5 — Market Sizing

- **TAM:** ~100M international travelers from the US annually + ~9M Americans living abroad. Globally, 1.4B international tourist arrivals per year.
- **Current spend:** Business travelers average $1,000–$5,000 per trip; cultural prep tools represent a tiny fraction of that budget. The willingness-to-pay signal from premium guidebook sales ($25–$40/book) suggests $10–15/month SaaS is credible.
- **Is the problem growing?** Yes. Remote work has accelerated cross-cultural professional interactions. Digital nomadism is mainstream. AI has made conversational interfaces expected, not novel.
- **Hackathon-scale opportunity:** Even at 0.1% of the addressable market, the opportunity is in the tens of millions annually. For a hackathon, the more important signal is: the problem is real, the solution is demonstrable, and the tech is compelling.

---

## The One-Pager

*This is the document that went into the build session.*

---

**Culture Compass**

**The Problem**

Travelers, expats, and business professionals regularly encounter cultural situations they're unprepared for — not because they didn't care, but because the information they needed didn't exist in a useful form. Guidebooks are generic and outdated. Blog posts are shallow. Asking locals is awkward. There's no good way to get a real-time, conversational, contextually-aware cultural briefing before you need one.

**The Solution**

An AI-powered cultural intelligence app. Enter a destination city, get a deep-dive vibe check covering greetings, dining, business norms, taboo topics, dress, and social subtleties — delivered conversationally, with voice, and with visual context. Ask follow-ups. Get real answers.

**Target Customer**

Business travelers and expats, 28–45. Globally mobile, professionally conscious, already comfortable with AI tools. They've had an awkward cross-cultural moment and would pay to avoid the next one.

**Market Evidence**

Thousands of Reddit threads asking "what should I know before visiting X?" — none with a satisfying answer. Consistent Google search volume for "[city] etiquette." 1-star reviews of travel apps citing lack of depth and interactivity.

**Competitive Landscape**

Guidebooks (static), travel blogs (shallow), ChatGPT (unfocused). Nobody has built a purpose-designed conversational UX for this use case.

**Market Opportunity**

100M+ US international travelers annually. $10–15/month willingness to pay (anchored to guidebook pricing). Growing market driven by remote work and digital nomadism.

**The Big Bet**

Conversational depth + multimodal delivery (voice + image + text) creates an experience that static content fundamentally cannot replicate.

---

## What made it win

A few things stood out to judges, based on feedback:

**1. The idea was focused.** It wasn't a generic "AI assistant for travelers." It was a specific tool for a specific high-value moment: preparing for cultural immersion. Focused ideas win hackathons because they're easier to demo and easier to evaluate.

**2. The demo was experiential.** Typing a city name and watching a glassmorphic UI stream a culturally-aware briefing — while an AI-generated image of that city renders alongside it — is a compelling demo moment. The voice interface added another layer. Judges could feel what the product was.

**3. The tech went beyond the obvious.** Most hackathon projects do a POST to the OpenAI API and call it AI. Culture Compass used multimodal AI (text + voice + image), real-time streaming, persistent conversation memory, and a proper database layer. That depth showed in the code review.

**4. The idea came from research, not instinct.** The structured ideation process meant the team could articulate *why* this problem mattered, *who* it was for, and *what* made the solution better than existing options. That fluency in the business case impressed judges who were used to teams that could explain the code but not the market.

---

## The methodology, open-sourced

The ideation framework used to pick this idea is now available as a reusable prompt-based tool: the **[hackathon-ideation skill](https://github.com/wombatlabs-dan/culture-compass)**. It walks through all 7 steps — problem discovery, idea clarification, market signal research, competitive landscape, market sizing, one-pager, and PRD — as an interactive coaching session.

The core insight behind the framework: **the difference between hackathon projects that win and ones that don't usually isn't the code — it's the clarity of the idea.** Teams that can explain the problem, the customer, and the competitive advantage in 60 seconds win. Teams that can only explain the tech don't.

If you're going into a hackathon and want to use this framework, it's available at [wombatlabs.ai](mailto:dan@wombatlabs.ai).
