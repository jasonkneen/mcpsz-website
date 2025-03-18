# SEO Improvements for mcpz.run

This document outlines the SEO improvements implemented for the mcpz.run website.

## Meta Tags and Metadata

### Root Layout (`app/layout.tsx`)
- Added comprehensive metadata including:
  - Updated title and description to use "Model Context Protocol (MCP)" instead of "Model Context Protocol Server Tools"
  - Keywords
  - Author and publisher information
  - Open Graph tags for social media sharing
  - Twitter Card tags
  - Robots directives
  - Canonical URL
  - Icons and PWA support
  - Verification tags

### Docs Layout (`app/docs/layout.tsx`)
- Added section-specific metadata:
  - Updated title and description to use "Model Context Protocol (MCP)" instead of "Model Context Protocol Server Tools"
  - Keywords specific to documentation
  - Open Graph and Twitter Card tags for documentation
  - Canonical URL for the docs section

## Structured Data (JSON-LD)

Created a JSON-LD component (`components/json-ld.tsx`) with support for:
- SoftwareApplication schema for the CLI tool
- Organization schema for mcpz
- FAQPage schema for frequently asked questions

Implemented structured data on:
- Homepage: Software Application, Organization, and FAQ schemas
- Documentation page: FAQ schema with documentation-specific questions

## Sitemap

- Created a static sitemap.xml in the public directory
- Implemented a dynamic sitemap generator (`app/sitemap.ts`) using Next.js's built-in support
- Listed all important pages with appropriate priority and change frequency

## Robots.txt

- Created a static robots.txt in the public directory
- Implemented a dynamic robots.txt generator (`app/robots.ts`) using Next.js's built-in support
- Allowed all crawlers and linked to the sitemap

## Progressive Web App (PWA) Support

- Created a manifest.json file with app information
- Added theme colors and icons
- Configured PWA metadata in the root layout

## HTML Improvements

- Added proper language and direction attributes
- Added antialiased class for better text rendering
- Ensured proper semantic HTML structure

## Terminology Updates

- Changed all references from "Model Context Protocol Server/s (MCPS)" to "Model Context Protocol (MCP)"
- Updated command examples to use "run" instead of "stdio"
- Changed references from "servers" to "tools" throughout the site
- Updated all examples and code snippets to reflect the new terminology
- Ensured consistent capitalization of "mcpz" (lowercase) throughout the site

## Hydration Error Fixes

- Updated ThemeProvider component to prevent hydration mismatches
- Added client-side mounting detection to ensure consistent rendering
- Added suppressHydrationWarning to the html element
- Fixed theme-related hydration issues that could affect SEO and user experience

## Future Considerations

- Create and add the icon files referenced in the manifest and metadata
- Update all GitHub links to point to https://github.com/jasonkneen/mcpz
- Set up proper Open Graph images for social sharing
- Implement structured data for additional pages as they are created
- Consider implementing a blog for additional content and SEO opportunities
- Set up proper Google Search Console verification
- Monitor SEO performance and make adjustments as needed