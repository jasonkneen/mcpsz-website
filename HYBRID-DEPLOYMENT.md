# Hybrid Deployment for mcpz Website

This document explains how to deploy the mcpz website to both GitHub Pages (static) and Vercel (dynamic) in a hybrid deployment model.

## Overview

The mcpz website is configured to support a hybrid deployment model:

1. **GitHub Pages** - For static content (main website, docs, pricing, roadmap)
2. **Vercel** - For dynamic features (discover, blog, API endpoints)

This approach allows us to:
- Maintain a fast, reliable static site for most content
- Enable dynamic features that aren't possible with static hosting
- Provide a seamless user experience across both environments

## Configuration Files

### Environment Files

- `.env.github` - Configuration for GitHub Pages deployment
- `.env.vercel` - Configuration for Vercel deployment
- `.env.local` - Local development configuration (overrides defaults)

### Deployment Configuration

- `vercel.json` - Vercel-specific configuration
- `next.config.js` - Next.js configuration with conditional settings based on deployment target

## Deployment Process

### GitHub Pages Deployment

1. Set the deployment target:
   ```bash
   cp .env.github .env.production
   ```

2. Build the static site:
   ```bash
   npm run deploy
   ```

3. The GitHub Actions workflow will deploy the site to GitHub Pages.

### Vercel Deployment

1. Set the deployment target:
   ```bash
   cp .env.vercel .env.production
   ```

2. Deploy to Vercel:
   ```bash
   npm run deploy:vercel
   ```

## Feature Flags

The site uses feature flags to control which features are enabled in each environment:

- `blog` - Blog feature (disabled in GitHub Pages, enabled in Vercel)
- `roadmap` - Roadmap feature (enabled in both environments)
- `discover` - Discover feature (disabled in GitHub Pages, enabled in Vercel)
- `docs` - Documentation feature (enabled in both environments)
- `pricing` - Pricing feature (enabled in both environments)

Feature flags are defined in `config/features.ts` and can be overridden using environment variables:

```
NEXT_PUBLIC_FEATURE_BLOG=true
NEXT_PUBLIC_FEATURE_ROADMAP=true
NEXT_PUBLIC_FEATURE_DISCOVER=true
```

## URL Structure

### GitHub Pages

- Main site: `https://mcpz.tools`
- Docs: `https://mcpz.tools/docs`
- Pricing: `https://mcpz.tools/pricing`
- Roadmap: `https://mcpz.tools/roadmap`
- Blog: `https://news.mcpz.tools` (subdomain pointing to Vercel)
- Discover: `https://discover.mcpz.tools` (subdomain pointing to Vercel)

### Vercel

- Main site: `https://mcpz.vercel.app`
- All features: `https://mcpz.vercel.app/[feature]`

## Hybrid Navigation

The site uses a custom `HybridLink` component to handle navigation between GitHub Pages and Vercel:

```jsx
<HybridLink feature="blog" className="hover:text-emerald-400">
  Blog
</HybridLink>
```

This component:
1. Checks if the feature is enabled in the current environment
2. Determines the appropriate URL based on the deployment target
3. Renders either a Next.js `Link` or an external `<a>` tag as needed

## Development

During development, you can simulate different deployment targets:

```bash
# Simulate GitHub Pages
cp .env.github .env.local
npm run dev

# Simulate Vercel
cp .env.vercel .env.local
npm run dev
```

## Subdomains Setup

To set up the subdomains:

1. Configure DNS for `discover.mcpz.tools` and `news.mcpz.tools` to point to the Vercel deployment
2. Add these domains in the Vercel project settings
3. Verify the domains in Vercel

## Troubleshooting

- **Static export errors**: Ensure that any API routes have `dynamic = 'force-static'` and `revalidate` set
- **Middleware issues**: Middleware doesn't work with static export. Use client-side conditional rendering instead.
- **Missing features**: Check the feature flags in the environment files