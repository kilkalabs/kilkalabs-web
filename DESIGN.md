---
name: KilkaLabs
description: Independent Software Editions
colors:
  blue: "#243dab"
  pale: "#e4eaff"
  paper: "#fafbff"
  ink: "#1d2441"
  muted: "#4f5877"
  line: "#c6cde4"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(3.6rem, 7.3vw, 6rem)"
    fontWeight: 800
    lineHeight: 1.06
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(2.65rem, 5.3vw, 4.8rem)"
    fontWeight: 800
    lineHeight: 1.06
    letterSpacing: "-0.04em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  action: "4px"
  status: "3px"
  phone-preview: "26px"
spacing:
  gutter: "clamp(1.25rem, 4.5vw, 5rem)"
  release: "clamp(3.5rem, 6vw, 6rem)"
  actions: "2rem"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.white}"
    rounded: "{rounded.action}"
    padding: "0.8rem 1.1rem"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
  button-inverse:
    backgroundColor: "{colors.white}"
    textColor: "{colors.blue}"
    rounded: "{rounded.action}"
    padding: "0.8rem 1.1rem"
---

# Design System: KilkaLabs

## Overview

**Creative North Star: "Independent Software Editions"**

Bold maker typography and broad color fields frame the apps themselves. Product imagery supplies detail; the surrounding interface is flat, direct, and unornamented.

**Key Characteristics:**
- Large, self-hosted display lettering.
- Cobalt and periwinkle release fields.
- Real app previews with plainly labeled actions.

## Colors

Cobalt carries both large surfaces and actions. Periwinkle provides a lighter related field. Paper and white create quiet regions; ink and muted blue supply readable text. Fine blue-gray rules organize navigation and contact areas. On cobalt, text is white or periwinkle.

## Typography

Self-hosted Manrope ExtraBold is the display and wordmark face, licensed under the accompanying OFL. Body text uses the platform sans stack. Headlines are balanced; descriptive copy is normally limited to 42ch. Secondary release statements use a fluid 1.35–2rem size with 1.3 line-height. Small captions remain subordinate at 0.8rem.

## Layout

The shared container tops out at 1440px with fluid gutters. Release entries use unequal two-column grids rather than identical cards. At 900px gaps tighten; at 640px the entries, index, and support stack. Navigation remains directly available without a hamburger. Release padding is fluid; contact spacing is more compact. Images preserve their intrinsic ratios.

## Elevation & Depth

Broad flat fields provide hierarchy. Only the Letterwright phone preview has an ambient shadow (`0 18px 35px rgb(29 36 65 / 13%)`). Do not apply that shadow to every container.

## Shapes

Actions are nearly square with slight rounding; the availability label is a thin outlined rectangle. The phone screenshot uses its own rounded silhouette. Release regions have no enclosing card borders or radii.

## Components

- **Website action:** filled link, minimum 50px high, inline stroked arrow; inverse on cobalt. Hover changes the fill; active adds an inset outline.
- **Download link:** underlined text with a minimum 44px hit area. Active thickens its underline.
- **Navigation:** inline text links; the app index uses fine top rules and platform labels. It becomes three full-width rows on mobile.
- **Availability:** noninteractive outlined text, never a disabled download button.
- **Preview:** real image plus a small caption. A release hover or focus-within lifts its image 5px using a 450ms exponential ease-out. Reduced-motion removes the transition and movement.
- **Focus and browser surfaces:** visible 3px current-color outlines with 6px offsets; inverse text selection in cobalt regions; blue/pale scrollbar colors. Skip link appears on keyboard focus.

## Do's and Don'ts

- **Do** let app imagery supply the detail.
- **Do** use contrasting inverse actions on cobalt.
- **Do** keep navigation and downloads usable without JavaScript.
- **Don't** turn every release into an identical bordered card.
- **Don't** introduce owner portraits or personal attribution; use Made by KilkaLabs.
