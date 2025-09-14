# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Velvet Cow is a Next.js 15 application built with React 19, TypeScript, and Tailwind CSS v3. It uses the modern App Router architecture and Turbopack for enhanced development performance.

## Tech Stack

- **Framework**: Next.js 15.5.2 with App Router
- **Runtime**: React 19.1.0
- **Styling**: Tailwind CSS v3 with PostCSS
- **Typography**: Tailwind Typography plugin for rich text
- **Fonts**: Cinzel and Quattrocento via next/font/google
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
- Tailwind CSS v3 with standard configuration
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
The project uses Next.js font optimization with Google Fonts (Cinzel and Quattrocento), loaded as CSS variables for efficient font loading and layout shift prevention.

### Tailwind v3 Features
- Uses standard Tailwind directives (`@tailwind base`, `@tailwind components`, `@tailwind utilities`)
- Theme configuration via `tailwind.config.js`
- PostCSS integration for processing

### Component Organization
- All reusable React components should be placed in `src/components/`
- Use PascalCase for component file names (e.g., `Button.tsx`, `NavigationMenu.tsx`)
- Import components using the `@/components` path alias
- Each component should be in its own file with a default export
- Complex components can have their own subdirectory within `src/components/`

### Analytics and SEO Requirements

#### Google Analytics 4 (GA4) Event Tracking
When adding new features or components, ensure proper GA4 event tracking is maintained:

- **New Interactive Components**: Add appropriate `gtag('event', ...)` calls for user interactions
- **Form Submissions**: Track form completions with relevant event parameters
- **Navigation Events**: Track section scrolling, button clicks, and user engagement
- **Package/Service Interactions**: Track user selections and preferences
- **Contact Actions**: Monitor quote requests, contact form usage, and lead generation

**GA4 Configuration Location**: `src/app/layout.tsx` (lines 114-150)

#### SEO and Structured Data
Maintain SEO optimization when adding new content or features:

- **Structured Data**: Update `src/components/StructuredData.tsx` for business schema changes
- **Component-Level Schema**: Include relevant schema markup within components (e.g., FAQ, services)
- **Sitemap Updates**: Modify `src/app/sitemap.ts` when adding new routes or pages
- **Metadata**: Update page metadata in `src/app/layout.tsx` for title, description, and keywords
- **Open Graph**: Ensure social media sharing remains optimized with proper OG tags

**Key SEO Files**:
- `src/app/layout.tsx` - Main metadata and structured data inclusion
- `src/components/StructuredData.tsx` - Business, website, and service schema
- `src/app/sitemap.ts` - Site structure for search engines
- Individual components - Component-specific structured data (e.g., FAQPage schema)

## Browser Compatibility

### Overview
The project uses standard Tailwind CSS v3 which has excellent cross-browser compatibility. No special compatibility layers are needed for Safari or other browsers.

### Standard CSS Support
- All modern browsers support Tailwind CSS v3 without additional configuration
- Custom properties defined in `globals.css` work across all browsers
- No browser-specific workarounds needed
