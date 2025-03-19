/**
 * Feature flags configuration
 * 
 * This file contains feature flags that can be used to enable or disable
 * certain features of the application without modifying the code directly.
 */

/**
 * Deployment target types
 */
export type DeploymentTarget = 'github' | 'vercel' | 'development';

/**
 * Feature flags interface
 */
export interface FeatureFlags {
  blog: boolean;
  roadmap: boolean;
  discover: boolean;
  docs: boolean;
  pricing: boolean;
}

/**
 * Default feature flags configuration
 * 
 * These are the default values for feature flags.
 * To override these values, modify the .env file or environment variables.
 */
export const defaultFeatures: FeatureFlags = {
  blog: false,
  roadmap: true,
  discover: false,
  docs: true,
  pricing: true,
};

/**
 * Get the current deployment target
 * 
 * This function returns the current deployment target based on environment variables.
 * If no deployment target is specified, it defaults to 'development'.
 */
export function getDeploymentTarget(): DeploymentTarget {
  if (typeof process !== 'undefined' && process.env) {
    const target = process.env.NEXT_PUBLIC_DEPLOYMENT_TARGET;
    if (target === 'github' || target === 'vercel') {
      return target;
    }
  }
  return 'development';
}

/**
 * Get the current feature flags configuration
 * 
 * This function returns the current feature flags configuration,
 * taking into account environment variables if they exist.
 */
export function getFeatures(): FeatureFlags {
  // Start with the default features
  const features = { ...defaultFeatures };
  
  // Override with environment variables if they exist
  if (typeof process !== 'undefined' && process.env) {
    if (process.env.NEXT_PUBLIC_FEATURE_BLOG !== undefined) {
      features.blog = process.env.NEXT_PUBLIC_FEATURE_BLOG === 'true';
    }
    if (process.env.NEXT_PUBLIC_FEATURE_ROADMAP !== undefined) {
      features.roadmap = process.env.NEXT_PUBLIC_FEATURE_ROADMAP === 'true';
    }
    if (process.env.NEXT_PUBLIC_FEATURE_DISCOVER !== undefined) {
      features.discover = process.env.NEXT_PUBLIC_FEATURE_DISCOVER === 'true';
    }
    if (process.env.NEXT_PUBLIC_FEATURE_DOCS !== undefined) {
      features.docs = process.env.NEXT_PUBLIC_FEATURE_DOCS === 'true';
    }
    if (process.env.NEXT_PUBLIC_FEATURE_PRICING !== undefined) {
      features.pricing = process.env.NEXT_PUBLIC_FEATURE_PRICING === 'true';
    }
  }
  
  return features;
}

/**
 * Get the base URL for the current deployment
 */
export function getBaseUrl(): string {
  if (typeof process !== 'undefined' && process.env && process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL;
  }
  return 'https://mcpz.tools';
}

/**
 * Get the URL for a specific feature
 * 
 * This function returns the URL for a specific feature based on the current deployment target.
 * For GitHub Pages deployment, it returns a subdomain URL.
 * For Vercel deployment, it returns a path on the Vercel domain.
 */
export function getFeatureUrl(feature: keyof FeatureFlags): string {
  const deploymentTarget = getDeploymentTarget();
  const baseUrl = getBaseUrl();
  
  // For GitHub Pages deployment, use subdomains for dynamic features
  if (deploymentTarget === 'github') {
    switch (feature) {
      case 'discover':
        return process.env.NEXT_PUBLIC_DISCOVER_URL || 'https://discover.mcpz.tools';
      case 'blog':
        return process.env.NEXT_PUBLIC_NEWS_URL || 'https://news.mcpz.tools';
      default:
        return `${baseUrl}/${feature}`;
    }
  }
  
  // For Vercel deployment, use paths
  return `${baseUrl}/${feature}`;
}

// Export singleton instances for easy import
export const deploymentTarget = getDeploymentTarget();
export const features = getFeatures();