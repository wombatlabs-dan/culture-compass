# Culture Compass — Hackathon Story

This document is the complete ideation record for Culture Compass: the actual prompts, the AI-generated research, and the decisions made before a single line of code was written. It's here because the methodology that produced a winning idea is as interesting as the product itself.

**The event:** [New Founder School AI Hackathon with Fractal](https://lu.ma/new-founder-school-ai-hackathon-with-fra) — January 31, 2026 · Frontier Tower, 995 Market Street, San Francisco. A one-day hackathon for non-technical founders: build an AI app, get it demo-ready, pitch to judges. 150 in-person participants, Demo Day judging at 4pm, prizes valued at ~$5,000. Culture Compass won.

Most hackathon teams spend 80% of their time arguing about what to build. This project used a structured 7-step framework to compress that into a focused session — and it produced a winner.

---

## The Ideation Framework

The framework runs in 7 sequential steps. Each step takes an input, produces a concrete output, and feeds the next step. The goal: move from vague interests to a buildable, pitchable, well-researched idea in one session.

The steps are: Problem Discovery → Idea Clarification → Market Signal Research → Competitive Analysis → Market Sizing → One-Pager PRD → Build-Ready PRD.

---

## Step 1 — Problem Discovery

**The prompt:**

> I'm at a hackathon and need to identify a problem worth solving.
>
> My interests/expertise: Travel, learning languages, exploring cultures
> Industries I care about: Travel, Hospitality, Education
>
> Generate 3 specific problems that real people complain about regularly, have existing solutions that are clunky or outdated, and could be solved with a simple digital tool. For each: who has this problem, how urgent is it, what do they currently do?

**What came back:** Three options. The one that stuck:

> **The Hyper-Local Language "Cheat Sheet"** — Language apps like Duolingo teach general fluency, but travelers need *survival fluency* for specific contexts (ordering at a non-tourist tapas bar in Seville, navigating a pharmacy in Tokyo). Culturally conscious travelers who want to avoid being "the loud tourist" currently use Google Translate mid-conversation (awkward) or carry bulky phrasebooks that aren't context-specific.

This wasn't the final product — it was the seed. The insight about *contextual survival knowledge* rather than general language learning pointed toward something bigger: not just phrases, but the full set of unwritten social rules.

---

## Step 2 — Idea Clarification ("ELI 10")

Starting from the language cheat sheet concept, the idea evolved: what if instead of just phrases, it covered the full cultural *vibe* of a place? The prompt pushed for ruthless clarity:

**The prompt:**

> I'm building a location-aware "Cultural Vibe-Check" tool. It uses GPS to detect you're at a Shinto Shrine or a Parisian café and pushes a 3-bullet "Cheat Sheet" to your lock screen: 1. No photos inside. 2. Bow slightly. 3. Quiet voices.
>
> Describe this in one sentence a 10-year-old would understand. What's the #1 pain point? Who specifically would pay for this? What would they search on Google?

**The responses that shaped everything:**

**One-sentence pitch:**
> "It's like a secret guardian angel for your phone that whispers the local rules so you never accidentally act like a rude tourist."

**The #1 pain point — named precisely:**
> The "Scorn of the Local." The deep-seated anxiety of being The Ugly Tourist. People are terrified of getting "The Look" from a Parisian waiter, being scolded in a Japanese temple, or accidentally disrespecting a sacred space and having it go viral for the wrong reasons. The product solves the *frozen-moment indecision*: "Do I bow? Do I tip? Can I take this photo?"

**Who pays:**
- **The "Luxury Learner" (B2C):** Ages 35–60, high disposable income, traveling to high-context cultures (Japan, Middle East, Southeast Asia). Values authentic travel but is terrified of being disrespectful. Hangs out on FlyerTalk, luxury travel Facebook groups, Condé Nast Traveler.
- **The Boutique Travel Advisor (B2B):** Independent travel planners charging $500+ for custom itineraries. Would buy a pro license to give clients as a value-add.

**What they search:**
- *"Is it rude to tip in Japan restaurants"*
- *"What to wear to a mosque in Dubai"*
- *"Parisian cafe etiquette for Americans"*
- *"How to not be an annoying tourist in Italy"*

---

## Step 3 — Market Signal Research

**The prompt:**

> Show me 3 Reddit threads, tweets, or forum posts where people complain about this exact problem. What hashtags are people using? Are there products that partially solve this — and what do their 1-star reviews say?

**The proof-of-pain that came back:**

Three real community signals:

- **r/solotravel:** *"I am so tired of Americans being everywhere, speaking at twice the volume... the rules for polite and rude are different here."* — The anxiety of being perceived as rude is universal among self-aware travelers.
- **r/relationships:** A user accidentally offended a Japanese friend over a basic cultural question. Even well-meaning curiosity can cause offense without the right context.
- **r/travel:** The Istanbul shoe-shine scam. *"She is the nicest person I know... he ended up grabbing her wallet."* — Polite people are the easiest targets. The product needs a scam-shield layer.

**Competitor 1-star failures:**

| Product | Core Offering | 1-Star Complaint |
|---|---|---|
| Culture Trip | Content + bookings | "It's just a travel agency now. Too many ads, not enough actual culture tips." |
| GlobeTips | Tipping guide app | "Data is 3 years old. Told me 15% for the US — that gets you yelled at now." |
| Culture Smart Books | Deep-dive country guides | "Way too long to read at a restaurant. Geared toward businessmen, not tourists." |

**The white space:** All competitors are static (books) or clunky (manual searching). The gap is proactivity — the tool shouldn't wait for the user to search; it should push the answer before they need to ask.

---

## Step 3a — The High-Stakes Pivot

During the research step, a second angle emerged that changed the business model entirely:

**The question that opened it:**

> Could this also protect people from being filmed doing something culturally insensitive and having it go viral? Especially high-net-worth individuals, politicians, and celebrities?

**The answer that reshaped the pitch:**

For a regular traveler, a cultural gaffe is embarrassing. For a CEO, politician, or influencer, it's a **PR disaster, a stock-price dip, or a cancellation event.**

This led to a VIP tier concept:

| Feature | Regular User | VIP / HNWI Version |
|---|---|---|
| Alert type | "Bow slightly" | "Reputation Red Zone" alerts |
| Privacy mode | Standard GPS | Privacy-first geofencing (offline) |
| Social guard | Etiquette tips | "No-Photo Zones" for taboo areas |
| Scam alerts | General warnings | Real-time threat intelligence |

**The 30-second elevator pitch that came out of this step:**

> "Most travelers are one accidental hand gesture away from a viral PR disaster.
>
> We're building **VibeCheck**, a location-aware 'cultural guardian angel.' Using GPS, it pushes 3-bullet-point etiquette cheat sheets directly to your lock screen the moment you walk into a sensitive area — like a Shinto Shrine or a Parisian café.
>
> For the average tourist, it eliminates the anxiety of being 'the rude American.' But for our high-stakes users — politicians, CEOs, and influencers — VibeCheck is **reputation insurance**. It prevents the one culturally insensitive photo that can end a brand deal or cause a diplomatic incident.
>
> We're not just providing travel tips; we're providing a **social safety net for a world that's always filming.**"

---

## Step 4 — Competitive Analysis

**The prompt:**

> List 5 existing solutions people use today. What's the gap nobody is filling? If I could only be better at ONE thing than all of these, what should it be?

**The competitive map:**

| Solution | Core Offering | The Failure |
|---|---|---|
| Culture Smart Books | 200-page country deep dives | Too slow; requires homework before the trip |
| GlobeTips (App) | Tipping calculator for 200 countries | Outdated data; misses current norms |
| Culture Trip (App) | "Top 10" lists + cultural articles | Became a booking engine; lost the culture focus |
| Reddit (r/travel) | Crowd-sourced real-time advice | Conflicting opinions; more confusing than helpful |
| Google Maps / TripAdvisor | Location + reviews | Tells you *where* the temple is, nothing about *how to behave* inside it |

**The gap — named precisely:**

> The market has Pre-Trip Education (books/Reddit) and Post-Trip Reviews (TripAdvisor). **The gap is the "In-The-Moment" Guardrail.** There is no digital tool that bridges the 10 seconds between "walking through the door" and "making a mistake."

**The single winning differentiator:**

> **Contextual Proactivity.** If the user has to unlock their phone, open an app, and type "how to bow in Japan," you've already lost. By the time they find the answer, the interaction is over. The winning edge is "Zero-Click Knowledge" — information that finds the user, not the other way around.

---

## Step 5 — Market Sizing

**The prompt:**

> How many people in the US have this problem? How much do they currently spend solving it? What would they pay for a better solution? Is this a growing problem?

**The numbers:**

- **TAM:** ~85 million Americans traveling internationally annually
- **Target segment:** ~33 million "Anxious Travelers" (39% of travelers who actively worry about cultural perception)
- **High-stakes segment:** ~24 million US millionaires and public figures for whom reputation insurance is a real line item

**Current spend (what they already pay to solve this badly):**
- Time: 10–20 hours per trip researching customs, scams, and dress codes
- Money (B2C): $50–100/trip on guidebooks, language subscriptions, cultural tours
- Money (B2B): Corporations spend thousands on cultural sensitivity training; a single PR crisis firm charges $10K+ retainers

**Willingness to pay:**
- Casual traveler: $4.99 "Destination Pass" or $29/year
- VIP/Corporate: $499/year "Executive Shield" tier

**Growth direction:** Accelerating. Three reasons:
1. The always-on camera culture means the social cost of a gaffe has never been higher
2. Overtourism backlash (Kyoto, Venice, Barcelona) means locals are increasingly hostile to "ignorant" tourists
3. The rise of immersive/slow travel requires deeper cultural precision than tourism ever did before

**The killer stat for the pitch:**
> "39% of US travelers are afraid of being 'The Ugly American.' In 2026, that's a 33-million-person market looking for a social safety net."

---

## Step 6 — The One-Pager PRD

*The document that went into the build session:*

---

### 🌍 Project: VibeCheck — *Your Cultural Guardian Angel*

**The Vision:** Eliminate social gaffes and reputation risk for travelers through proactive, location-aware etiquette intelligence.

**The Core Pain Point:** The frozen-moment indecision of "Do I bow? Do I tip? Can I take this photo?" — and the deeper fear of being The Ugly Tourist, or for high-profile users, becoming The Viral Clip.

**Why current solutions fail:**

| Solution | The Fail Factor |
|---|---|
| Guidebooks | Too slow; requires pre-trip homework |
| Google Search | Reactive — by the time you search, the moment is over |
| Social media | Conflicting, cluttered, non-localized |

**The offering:** Just-In-Time Intelligence. VibeCheck fills the 10-second gap between arriving somewhere and making a social mistake.

**Core MVP features:**
1. Geofenced triggers — GPS detects location type (Religious, Dining, Transit, Social)
2. Lock-screen cheat sheet — 3-bullet notification pushed automatically
3. Scam Shield — real-time warnings for known tourist-area scams

**Market:**
- 85M Americans traveling internationally / year
- 33M in the "Anxious Traveler" segment (the TAM that actually pays)
- 24M US millionaires as the high-ticket VIP tier

**Monetization:**
- B2C: $4.99 Destination Pass / $29/year "Unlimited Vibes"
- B2B: $499/year "Executive Shield" for celebrity management and executive protection firms

---

## Step 7 — The Build-Ready PRD (for Replit)

This is the prompt that went directly into Replit Agent to start building. It shows how the ideation session translated cleanly into technical requirements:

---

**The Replit Agent master prompt:**

> I want to build a mobile-first web prototype for an app called **VibeCheck**.
>
> **The Core Concept:** A location-aware tool that tells travelers how to behave in specific cultural contexts.
>
> **Key Features to Build:**
>
> 1. **Simulator Mode:** Since this is a browser demo, create a search bar where I can type a location (e.g., "Senso-ji Temple" or "A Paris Café"). Use the OpenAI API to get the cultural vibe for that place.
> 2. **The Vibe Engine:** Use the OpenAI API to generate 3 short, punchy etiquette rules (max 10 words each) based on that specific location and culture.
> 3. **The UI:** Design the interface to look like a smartphone. When a location is "detected," show a notification bubble on a mock "Lock Screen" that displays the 3 rules. Use Tailwind CSS for a clean, premium aesthetic.
> 4. **Scam Alert:** If the location is a famous tourist landmark, add a small red alert icon with a one-sentence warning about a common local scam.
>
> **Technical Stack:** React frontend, Node.js/Express backend, PostgreSQL for history, OpenAI API for the vibe engine.

**What Replit Agent built from this:** The full-stack TypeScript application in this repo — React + Express + PostgreSQL + OpenAI multimodal integration — plus voice and image capabilities that emerged naturally from the Replit environment's tooling.

The project shipped in a single hackathon session and won.

---

## The methodology, open-sourced

The 7-step framework used here is now available as a reusable coaching tool. If you're going into a hackathon and want to run this process yourself, the prompts are above — use them sequentially, and don't skip steps 3 and 4. The competitive analysis and market signal research are where most teams cut corners, and they're the steps that make judges believe you've actually validated the idea.

The framework is also the basis for the [hackathon-ideation skill](https://wombatlabs.ai) at WombatLabs — a structured AI coaching session that walks teams through all 7 steps interactively.

**The core lesson from this project:** The difference between hackathon projects that win and ones that don't usually isn't the code. It's the clarity of the idea. Teams that can explain the problem, the customer, and the competitive advantage in 60 seconds win. Teams that can only explain the tech don't.

---

*Built by [Dan Harrison](https://github.com/wombatlabs-dan) · [dan@wombatlabs.ai](mailto:dan@wombatlabs.ai)*
