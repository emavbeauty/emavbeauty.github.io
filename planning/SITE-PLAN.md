# SITE PLAN

## Project Direction

Build a custom static website for Ema V Beauty that can be hosted through GitHub Pages first, then later connected to `emavbeauty.com` after review and approval. The current Google Site should remain live while this new site is developed.

The first build phase should not create the full site yet. The next approved implementation step should be a polished home-page prototype that proves the visual direction, navigation, mobile behavior, motion system, portfolio interaction, booking-status component, and footer.

## Core Positioning

Ema V Beauty is a private natural-nail studio in Parker, Colorado specializing in:

- Natural nail health and growth support
- Structured gel manicures
- Builder gel overlays
- IBX repair
- Detailed hand-painted and custom nail art
- Ethereal, whimsical, cottagecore, fairy-garden, and seasonal designs
- Calm, personalized private appointments

The site should make clear that Ema V Beauty does not offer acrylic or dip services.

## Ideal Visitor Path

1. Understand the studio specialty within the first screen.
2. See that the work is detailed, natural-nail focused, and artistic.
3. Confirm whether they are a right-fit client.
4. Explore services without needing to decode booking-platform language.
5. Learn the new-client process.
6. Understand nail art timing and expectations.
7. Review policies and FAQ.
8. Join the waitlist or book externally.

## Primary Calls To Action

Use these consistently:

- Join the Waitlist
- Explore Services
- View My Work

When books are open, the primary CTA can become:

- Book an Appointment

## Centralized Booking Status

Create one editable configuration file for:

- Booking status
- Announcement text
- Primary CTA label
- Booking link
- Waitlist link
- Whether booking buttons appear
- Whether waitlist buttons appear

Recommended status options:

- `books_open`
- `limited_availability`
- `waitlist_only`
- `temporarily_closed`

Current observed status from screenshots:

- Books are closed to new clients.
- Visitors are directed to join the waitlist.
- The waitlist form says Ema has very limited availability and reaches out on Mondays or Tuesdays when openings match requested schedules.

Confirm before publishing:

- Whether that status is still current.
- Whether "Mondays or Tuesdays" should remain public.

## Recommended Technical Stack

- Astro
- Static HTML/CSS
- Lightweight JavaScript only where useful
- GitHub Pages deployment
- Centralized content/data files
- No custom booking, payment, account, login, or client database system

## Required Content/Data Files

Create editable files for:

- Business information
- Services
- Prices
- Appointment durations
- Booking status
- Booking and waitlist links
- Policies
- FAQs
- Testimonials
- Social links
- Portfolio items
- Contact information
- Business hours
- Website announcements
- SEO metadata

Use placeholders for unknown values instead of inventing information.

## Image Strategy

Use only supplied images unless Ema approves another source later.

Prioritize images that show:

- Ema clearly and warmly
- Natural nails and detailed nail work
- Botanical, cottagecore, fairy-garden, and ethereal brand feeling
- Clean professional quality

Best current image candidates:

- `brand-assets/DSC03451.jpg`: strongest overall brand/nail image. Hands with flowers, soft botanical setting, visible manicure.
- `brand-assets/DSC03463.jpg`: strong natural texture and nail detail. Good for Services, Nail Art, or Portfolio.
- `brand-assets/DSC03430.jpg`: product/nail detail. Good for natural nail care, cuticle oil, or service education.
- `brand-assets/DSC03403.jpg`: friendly portrait with outdoor greenery. Strong About candidate.
- `brand-assets/DSC03533.jpg`: polished portrait with floral gesture. Strong About or homepage secondary image.
- `brand-assets/DSC03400.jpg` and `DSC03401.jpg`: ethereal outdoor portrait options. Use for atmosphere, not primary service explanation.
- `brand-assets/DSC03255.jpg`: magical mirror image. Use sparingly as an atmospheric accent if it does not obscure the nail-service focus.
- `nail-photos/DSC03451.jpg`, `nail-photos/DSC03463.jpg`, `nail-photos/DSC03430.jpg`: duplicate high-priority nail images suitable for web optimization and portfolio use.

Use cautiously:

- `brand-assets/logo.png`: the black-background logo is recognizable but heavier than the desired botanical direction. Use small, or create a lighter transparent version later.
- `brand-assets/DSC03543.jpg`: beautiful atmospheric image, but nails are not the focus.
- `brand-assets/DSC03706.jpg`: black-and-white portrait is elegant, but less aligned with the soft lavender/sage fairy-garden direction.

## SEO Priorities

Primary local phrases to support naturally:

- Natural nail studio Parker Colorado
- Structured gel manicure Parker CO
- Builder gel nails Parker Colorado
- Natural nail care Parker Colorado
- Hand-painted nail art Parker Colorado
- Private nail studio Parker CO

Avoid keyword stuffing. Use these phrases in titles, page introductions, image alt text, metadata, and local business structured data where natural.

## Accessibility Requirements

- Semantic HTML landmarks
- Keyboard-accessible navigation
- Visible focus states
- Descriptive alt text
- Sufficient contrast
- Readable font sizes
- No text baked into essential images
- Reduced-motion support
- No flashing or distracting animation
- Forms and external links clearly labeled

## Phase Sequence

### Phase 1: Strategy and Planning

Complete these files:

- `SITE-PLAN.md`
- `SITEMAP.md`
- `CONTENT-NEEDED.md`
- `DESIGN-SYSTEM.md`
- `MOTION-SYSTEM.md`
- `PAGE-WIREFRAMES.md`

### Phase 2: Home-Page Prototype

After approval, build only the home page prototype with:

- Desktop navigation
- Mobile navigation
- Hero design
- One signature botanical movement
- Scroll reveal behavior
- Portfolio-card interaction
- Booking-status component
- Footer
- Reduced-motion behavior

### Phase 3: Full Site Build

Build remaining pages after home-page direction is approved.

### Phase 4: QA and GitHub Pages Deployment

Verify:

- Responsive behavior
- Interior-page refresh behavior
- No broken links
- No console errors
- Lighthouse/accessibility basics
- Reduced motion
- SEO metadata
- Sitemap and robots.txt
- Structured data

### Phase 5: Domain Connection Later

Do not modify DNS records or connect the domain until Ema explicitly approves.

