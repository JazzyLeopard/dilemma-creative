# Site Structure — Dilemma Creative

## URL Hierarchy

```
dilemma-creative.be/
├── / (Home — hero, services overview, social proof, CTA)
│
├── /over-ons (About — brand story, team, values)
│
├── /diensten (Services hub)
│   ├── /diensten/social-media-beheer (Social media management)
│   ├── /diensten/content-creatie (Content creation — photo/video)
│   ├── /diensten/strategie (Social media strategy)
│   └── /diensten/advertenties (Paid social / ads management)
│
├── /niches (Industry expertise hub)
│   ├── /niches/food (Food & horeca specialization)
│   └── /niches/beauty (Beauty & wellness specialization)
│
├── /cases (Case studies / portfolio)
│   ├── /cases/[slug] (Individual case study pages)
│   └── ...
│
├── /blog (Insights & tips)
│   ├── /blog/[slug] (Individual blog posts)
│   └── ...
│
├── /werkwijze (Process — how we work)
│
├── /prijzen (Pricing — packages overview)
│
├── /contact (Contact form + booking)
│
├── /faq (Frequently asked questions)
│
└── /privacy (Privacy policy)
```

## Page Types & Schema

| Page | URL | Schema | Priority |
|------|-----|--------|----------|
| Home | `/` | Organization, ProfessionalService | P0 |
| Over Ons | `/over-ons` | Organization | P1 |
| Diensten Hub | `/diensten` | Service (list) | P1 |
| Service Page | `/diensten/[slug]` | Service | P1 |
| Niche: Food | `/niches/food` | Service, ProfessionalService | P1 |
| Niche: Beauty | `/niches/beauty` | Service, ProfessionalService | P1 |
| Case Study | `/cases/[slug]` | Article | P2 |
| Blog Post | `/blog/[slug]` | BlogPosting | P2 |
| Werkwijze | `/werkwijze` | HowTo | P2 |
| Prijzen | `/prijzen` | — | P2 |
| Contact | `/contact` | ContactPoint | P1 |
| FAQ | `/faq` | FAQPage | P2 |

## Internal Linking Strategy

### Hub & Spoke Model

**Service Hub** (`/diensten`) links to:
- Each service page → links back to hub
- Each service page → links to relevant case studies
- Each service page → links to relevant blog posts

**Niche Hub** (`/niches`) links to:
- Food page → links to food case studies + food blog posts
- Beauty page → links to beauty case studies + beauty blog posts

**Blog posts** always link to:
- Relevant service page (CTA)
- Relevant niche page
- Related blog posts (2-3 per post)

### Contextual Link Rules
1. Every blog post must link to at least 1 service page
2. Every case study must link to the relevant niche page
3. Service pages must link to 2+ case studies
4. Niche pages must link to 3+ blog posts

## Content Requirements Per Page Type

### Service Pages (min 800 words)
- H1: Service name + value proposition
- What it includes (deliverables)
- How it works (process steps)
- Who it's for (food/beauty entrepreneurs)
- Results you can expect
- Relevant case studies (embedded)
- CTA: "Start vandaag" / "Boek een gesprek"

### Niche Pages (min 800 words)
- H1: "Social Media voor [Food/Beauty] in Vlaanderen"
- Industry-specific challenges
- How Dilemma Creative solves them
- Relevant case studies
- Client testimonials
- CTA to contact/pricing

### Blog Posts (min 600 words)
- H1: Keyword-optimized title
- Introduction with hook
- Structured with H2/H3 subheadings
- Actionable tips or insights
- Internal links to services
- CTA at bottom

### Case Studies (min 500 words)
- Client name + industry
- Challenge/situation
- Approach/solution
- Results with specific numbers
- Client quote
- Related services CTA

## Navigation Structure

### Desktop Nav
```
[Logo] Over Ons | Diensten ▼ | Niches ▼ | Werkwijze | Blog | [Start Vandaag →]
                   ├── Social Media Beheer    ├── Food
                   ├── Content Creatie         └── Beauty
                   ├── Strategie
                   └── Advertenties
```

### Footer
```
Diensten          Niches          Bedrijf          Contact
├── SM Beheer     ├── Food        ├── Over Ons     ├── Email
├── Content       └── Beauty      ├── Werkwijze    ├── Instagram
├── Strategie                     ├── Blog         └── LinkedIn
└── Advertenties                  ├── FAQ
                                  └── Privacy
```

## Sitemap Priority

| URL Pattern | Priority | Changefreq |
|-------------|----------|------------|
| `/` | 1.0 | weekly |
| `/diensten/*` | 0.9 | monthly |
| `/niches/*` | 0.9 | monthly |
| `/cases/*` | 0.8 | monthly |
| `/blog/*` | 0.7 | weekly |
| `/over-ons` | 0.6 | monthly |
| `/contact` | 0.6 | yearly |
| `/faq` | 0.5 | monthly |
