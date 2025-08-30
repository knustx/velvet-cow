# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Velvet Cow is a Next.js 15 application built with React 19, TypeScript, and Tailwind CSS v4. It uses the modern App Router architecture and Turbopack for enhanced development performance.

## Tech Stack

- **Framework**: Next.js 15.5.2 with App Router
- **Runtime**: React 19.1.0
- **Styling**: Tailwind CSS v4 with PostCSS
- **Typography**: Tailwind Typography plugin for rich text
- **Fonts**: Geist Sans and Geist Mono via next/font/google
- **Language**: TypeScript 5+
- **Linting**: ESLint with Next.js config
- **Build Tool**: Turbopack (Next.js's Rust-based bundler)

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production with Turbopack
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## Project Structure

```
src/
├── app/              # App Router directory
│   ├── globals.css   # Global CSS with Tailwind imports
│   ├── layout.tsx    # Root layout with font configuration
│   ├── page.tsx      # Home page component
│   └── favicon.ico   # Site favicon
├── components/       # Reusable React components
public/               # Static assets
```

## Architecture Notes

### App Router Pattern
- Uses Next.js App Router (not Pages Router)
- Root layout in `src/app/layout.tsx` handles global HTML structure
- Pages defined as `page.tsx` files in route directories
- Global CSS imported in root layout

### Styling Approach
- Tailwind CSS v4 with inline theme configuration in `globals.css`
- CSS custom properties for theming (`--background`, `--foreground`)
- Dark mode support via `prefers-color-scheme`
- Font variables injected via Next.js font optimization

### TypeScript Configuration
- Path aliasing: `@/*` maps to `./src/*`
- Strict mode enabled
- ES2017 target with modern library support
- Next.js plugin for enhanced TypeScript experience

## Development Notes

### Turbopack Usage
This project is configured to use Turbopack (Next.js's faster Rust-based bundler) for both development and production builds. This provides significantly faster build times compared to Webpack.

### Font Loading
The project uses Next.js font optimization with Google Fonts (Geist family), loaded as CSS variables for efficient font loading and layout shift prevention.

### Tailwind v4 Features
- Uses the new `@import "tailwindcss"` syntax
- Inline theme configuration via `@theme inline`
- PostCSS integration through `@tailwindcss/postcss` plugin

### Component Organization
- All reusable React components should be placed in `src/components/`
- Use PascalCase for component file names (e.g., `Button.tsx`, `NavigationMenu.tsx`)
- Import components using the `@/components` path alias
- Each component should be in its own file with a default export
- Complex components can have their own subdirectory within `src/components/`

## Safari Compatibility (CRITICAL)

### Overview
Due to Tailwind CSS v4 beta's limited Safari support, this project includes a Safari-specific compatibility layer at `src/app/safari-compat.css`. This file MUST be updated whenever CSS classes are added or modified.

### Safari Compatibility File
- **Location**: `src/app/safari-compat.css`
- **Purpose**: Provides fallback CSS for Safari browsers only
- **Detection**: Uses `@supports` with Safari-specific feature detection
- **Impact**: Only affects Safari; Chrome/Firefox remain unchanged

### When to Update safari-compat.css

You MUST update `safari-compat.css` when:
1. Adding new Tailwind utility classes to any component
2. Creating new custom color classes
3. Adding new spacing utilities (padding, margin, gap)
4. Adding new typography classes
5. Creating new responsive breakpoints
6. Adding hover/focus states
7. Modifying layout classes (flex, grid)

### How to Update safari-compat.css

When adding a new Tailwind class like `text-xl` or `bg-accent`:

1. Find the appropriate section in `safari-compat.css`
2. Add the class with its CSS properties and `!important`
3. Use exact color hex values from the theme

Example:
```css
/* If adding text-xl to a component */
.text-xl { 
  font-size: 1.25rem !important; 
  line-height: 1.75rem !important; 
}

/* If adding a new color bg-accent */
.bg-accent { 
  background-color: #D9AD77 !important; 
}
```

### Color Mappings for Safari

**IMPORTANT**: These are the exact color values to use in safari-compat.css:
- `primary`: #D9AD77 (warm gold)
- `secondary`: #733614 (dark brown)
- `light`: #F2F2F2 (light gray)
- `muted`: #8C8C8C (medium gray)
- `dark`: #313131 (charcoal gray)
- `background`: #313131 (dark sections in Safari)

### Testing Safari Compatibility

1. After any CSS changes, test in Safari
2. Check Developer Console for missing styles
3. Verify all sections display correctly
4. Ensure hover/focus states work
5. Test responsive breakpoints

### Known Safari-Specific Adjustments

- `bg-background` maps to #313131 (dark) in Safari for proper section contrast
- Header, Packages, and SiteMap sections appear with charcoal gray backgrounds
- About Us and Contact Form sections remain light (#F2F2F2)
