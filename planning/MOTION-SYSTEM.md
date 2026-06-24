# MOTION SYSTEM

## Motion Principles

Motion should feel like a quiet botanical spell: slow, refined, intentional, and supportive. It must never distract from booking information, policy content, or service education.

All animation must:

- Respect `prefers-reduced-motion`
- Avoid flashing
- Avoid large parallax movement
- Avoid layout shifts
- Keep text readable
- Pause or simplify when not visible
- Work if JavaScript fails, with content still visible

## Recommended Signature Effects

Use three to four effects across the site.

## Effect 1: Living Botanical Hero

Where:

- Home-page hero only.

What:

- Delicate botanical line art, soft mist, pearl-like light particles, tiny stars, or translucent petal shapes moving very slowly behind or around the hero image/text.

Why:

- Establishes the custom ethereal/fairy-garden identity immediately.

Behavior:

- Desktop: very slow ambient movement; optional subtle cursor response.
- Mobile: simplified movement or static decorative layer.
- Reduced motion: static botanical background.

Rules:

- Never place animation behind key text unless contrast is excellent.
- Avoid glitter/confetti behavior.
- Keep opacity low.

## Effect 2: Growing Vine Journey

Where:

- Home page between Specialty Snapshot, New Clients, and Nail Art sections.
- Optional later use on New Clients page.

What:

- A thin illustrated vine or curved botanical trail that gently reveals as the visitor scrolls.

Why:

- Gives the site a signature story detail without over-animating every section.

Behavior:

- Desktop: vine reveals gradually as related sections enter the viewport.
- Mobile: shorter static or lightly revealed vine between sections.
- Reduced motion: fully visible static vine.

Rules:

- Do not run behind paragraph text.
- Use once or twice only.

## Effect 3: Refined Scroll Reveals

Where:

- Page sections
- Service cards
- Portfolio cards
- Testimonials

What:

- Gentle fade with small upward movement.
- Slight stagger for galleries.

Why:

- Adds polish while keeping content accessible and readable.

Behavior:

- Desktop and mobile: short, subtle reveal.
- Reduced motion: no movement; content appears immediately.
- JavaScript failure: all content visible by default.

Rules:

- No flying text.
- No bouncing.
- No long delays.

## Effect 4: Interactive Portfolio Cards

Where:

- Portfolio page
- Portfolio preview on home page
- Nail Art examples

What:

- Gentle image lift.
- Contained zoom.
- Soft pearl highlight.
- Optional subtle tilt only on hover-capable devices.

Why:

- Makes the work feel premium and inspectable without distorting the nail photos.

Behavior:

- Desktop: hover/focus interaction.
- Mobile: no hover-dependent information; tap opens or links clearly if needed.
- Reduced motion: static shadow/focus state only.

Rules:

- Do not warp or over-zoom nails.
- Labels must remain readable.

## Optional Effect: Booking Status Highlight

Where:

- Header announcement
- Home hero
- Book / Waitlist page

What:

- Very subtle breathing pearl highlight or slow shimmer line.

Why:

- Helps visitors notice availability status without making the CTA feel pushy.

Behavior:

- Desktop/mobile: extremely subtle.
- Reduced motion: static badge.

Recommended current text:

- Waitlist Only
- Books currently closed to new clients

Confirm exact wording before build.

## Do Not Use

- Autoplay audio
- Autoplay background video
- Flashing sparkles
- Falling confetti
- Dramatic parallax
- Spinning elements
- Bouncing buttons
- Large animation libraries unless absolutely needed

