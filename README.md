# mcpsx-Web

This is a Next.js project built with React 19 and Tailwind CSS, featuring a comprehensive UI component library based on Radix UI.

## Features

- Modern React 19 with Next.js 15
- Fully responsive design with Tailwind CSS
- Comprehensive UI component library
- Dark/light mode support
- Documentation section

## Development

To run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project is configured for automatic deployment to GitHub Pages:

1. Push your changes to the main branch
2. GitHub Actions will automatically build and deploy the site
3. Your site will be available at https://yourusername.github.io/mcpsx-web/

## Configuration

The project uses Next.js with static export configuration for GitHub Pages compatibility. The deployment is handled through GitHub Actions as defined in `.github/workflows/deploy.yml`.

## Feature Flags

The project uses feature flags to enable or disable certain features without modifying the code directly. Feature flags are configured using environment variables.

To enable or disable features, create a `.env.local` file in the root directory with the following content:

```bash
# Feature Flags
# Set to 'true' to enable features, 'false' to disable them

# Blog feature flag (default: false)
NEXT_PUBLIC_FEATURE_BLOG=true  # Change to false to disable the blog
```

## License

[MIT](https://choosealicense.com/licenses/mit/)