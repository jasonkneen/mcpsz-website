# mcpz-Web

This is a Next.js project built with React 19 and Tailwind CSS, featuring a comprehensive UI component library based on Radix UI.

## Features

- Modern React 19 with Next.js 15
- Fully responsive design with Tailwind CSS
- Comprehensive UI component library
- Dark/light mode support
- Documentation section
- Hybrid deployment support (GitHub Pages + Vercel)

## Development

To run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

### GitHub Pages (Static)

This project is configured for automatic deployment to GitHub Pages:

1. Push your changes to the main branch
2. GitHub Actions will automatically build and deploy the site
3. Your site will be available at https://yourusername.github.io/mcpz-web/

### Vercel (Dynamic)

The project also supports deployment to Vercel for dynamic features:

1. Set up a Vercel project linked to your repository
2. Configure the environment variables as specified in `.env.vercel`
3. Deploy using `npm run deploy:vercel`

### Hybrid Deployment

The project supports a hybrid deployment model that combines GitHub Pages (static) and Vercel (dynamic) deployments. See [HYBRID-DEPLOYMENT.md](./HYBRID-DEPLOYMENT.md) for detailed instructions.

## Configuration

The project uses Next.js with conditional configuration based on the deployment target:

- For GitHub Pages: Static export with `output: 'export'`
- For Vercel: Standard Next.js server-side rendering and API routes

## Feature Flags

The project uses feature flags to enable or disable certain features without modifying the code directly. Feature flags are configured using environment variables.

To enable or disable features, create a `.env.local` file in the root directory with the following content:

```bash
# Feature Flags
# Set to 'true' to enable features, 'false' to disable them

# Deployment target
NEXT_PUBLIC_DEPLOYMENT_TARGET=development  # Options: github, vercel, development

# Blog feature flag (default: false)
NEXT_PUBLIC_FEATURE_BLOG=true  # Change to false to disable the blog

# Roadmap feature flag (default: true)
NEXT_PUBLIC_FEATURE_ROADMAP=true

# Discover feature flag (default: false)
NEXT_PUBLIC_FEATURE_DISCOVER=true

# Docs feature flag (default: true)
NEXT_PUBLIC_FEATURE_DOCS=true

# Pricing feature flag (default: true)
NEXT_PUBLIC_FEATURE_PRICING=true
```

The project includes predefined environment files:

- `.env.github` - Configuration for GitHub Pages deployment
- `.env.vercel` - Configuration for Vercel deployment

You can use these as templates for your deployment:

```bash
# For GitHub Pages deployment
cp .env.github .env.production

# For Vercel deployment
cp .env.vercel .env.production
```

## License

[MIT](https://choosealicense.com/licenses/mit/)