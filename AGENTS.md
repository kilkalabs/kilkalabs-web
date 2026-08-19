# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a GitHub Pages static website for KilkaLabs OU, a mobile app development and UX/UI design company based in Tallinn, Estonia. The site is hosted at kilkalabs.com and serves as the company's public-facing website.

## Architecture

**Single-Page Application (SPA)**: The entire site is contained in `index.html` with vanilla JavaScript for interactivity. No build system or framework is used.

**Styling**:
- Uses Pico CSS v2 (minimal, semantic CSS framework) loaded via CDN
- Custom styles in `/css/custom.css` for component-specific designs
- Semantic HTML approach - minimal classes, relies on element selectors
- No build process required

**JavaScript**:
- Vanilla JavaScript in `/js/main.js` (loaded with `defer` attribute)
- Handles navigation menu toggles, dropdowns, and interactive elements
- Copyright year auto-update

**Analytics**: Google Analytics is integrated with tracking ID `G-R077NKJ12M` (loaded at end of body for performance).

**SEO Structure**:
- Comprehensive meta tags for SEO, Open Graph, and Twitter Cards
- Structured data using JSON-LD (Schema.org Organization type)
- `sitemap.xml` for search engine crawling
- `robots.txt` for crawler directives
- `CNAME` file for custom domain configuration

## Key Components

**Navigation**:
- Responsive header with mobile hamburger menu
- Desktop dropdown menu for "Our Apps" section (hover-based, uses `.dropdown` and `.dropdown-menu` classes)
- Mobile dropdown menu (click-based, uses `.mobile-dropdown-menu` class)
- JavaScript toggles `.show` class for visibility

**Sections**:
- Hero section (`.hero` class) with call-to-action
- Services section (`.services-grid` for 2-column responsive layout)
- Support section (`.faq-article` for individual FAQ items)
- Contact section (`.contact-box` and `.contact-grid` for layout)

**Contact Information**:
- General inquiries: info@kilkalabs.com
- Technical support: support@kilkalabs.com

## CSS Architecture

**Color Scheme** (defined in `/css/custom.css`):
- Primary: `#3b82f6` (blue)
- Dark background: `#1f2937` (gray-800)
- Light background: `#f3f4f6` (gray-100)
- Text colors: primary (#1f2937), secondary (#4b5563), muted (#9ca3af)

**Key Classes**:
- `.hero` - Hero section styling
- `.section-heading` - Section title styling
- `.services-grid` - 2-column responsive grid
- `.service-card` - Service card styling
- `.faq-article` - FAQ article styling
- `.contact-box` - Contact section container
- `.footer-grid` - 3-column footer layout
- `.dropdown` / `.dropdown-menu` - Dropdown functionality
- `.mobile-menu` / `.show` - Mobile menu visibility

**Responsive Design**:
- Mobile-first approach
- Breakpoint at 768px (tablets/desktop)
- Grids stack on mobile, multi-column on desktop

## Development Workflow

Since this is a static site hosted on GitHub Pages:

1. **Local Testing**: Open `index.html` directly in a browser or use any local HTTP server (e.g., `python -m http.server` or `npx serve`)
2. **CSS Changes**: Edit `/css/custom.css` - no build step needed
3. **JavaScript Changes**: Edit `/js/main.js` - no transpilation needed
4. **Deployment**: Push changes to the `main` branch to deploy to GitHub Pages
5. **Domain**: The site is served at kilkalabs.com via the CNAME configuration

## Important Notes

- **No build process required** - all changes are direct HTML/CSS/JS edits
- Pico CSS provides base styling; custom components use semantic classes
- Update `sitemap.xml` `<lastmod>` dates when making significant content changes
- The site links to an external app: "In The Mood" at https://getinthemood.app/
- JavaScript uses `.show` class pattern for visibility toggles (not `.hidden`)
