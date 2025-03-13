# Feature Flags Configuration

This directory contains configuration files for feature flags in the mcpsx website.

## Overview

Feature flags allow you to enable or disable certain features of the application without modifying the code directly. This is useful for:

- Gradually rolling out new features
- A/B testing
- Temporarily disabling features for maintenance
- Creating different versions of the site for different environments or users

## How It Works

The feature flags system is implemented in `features.ts`. This file exports:

- `FeatureFlags` interface: Defines the available feature flags
- `defaultFeatures` object: Default values for feature flags
- `getFeatures()` function: Returns the current feature flags configuration
- `features` singleton: A pre-initialized instance for easy import

## Available Feature Flags

Currently, the following feature flags are available:

- `blog`: Controls the visibility of the blog section and related links

## Setting Feature Flags

There are two ways to set feature flags:

### 1. Environment Variables

You can set feature flags using environment variables. Create a `.env.local` file in the root directory of the project (you can copy `.env.local.example` as a starting point):

```
NEXT_PUBLIC_FEATURE_BLOG=false
```

Environment variables take precedence over default values.

### 2. Modifying Default Values

You can modify the default values in `features.ts`:

```typescript
export const defaultFeatures: FeatureFlags = {
  blog: false,
  // Add more default values here as needed
};
```

## Adding New Feature Flags

To add a new feature flag:

1. Add the flag to the `FeatureFlags` interface in `features.ts`
2. Add a default value to the `defaultFeatures` object
3. Add environment variable handling in the `getFeatures()` function
4. Update this README with the new feature flag

## Middleware

The application includes middleware (`middleware.ts`) that checks feature flags before allowing access to certain routes. If a feature is disabled, the middleware will redirect to the home page.

## Example Usage

In a component:

```tsx
import { features } from '@/config/features';

function MyComponent() {
  return (
    <div>
      {/* Conditional rendering based on feature flag */}
      {features.blog && (
        <Link href="/blog">Blog</Link>
      )}
    </div>
  );
}