/**
 * Feature flags configuration
 * 
 * This file contains feature flags that can be used to enable or disable
 * certain features of the application without modifying the code directly.
 */

export interface FeatureFlags {
  blog: boolean;
  // Add more feature flags here as needed
  // Example: pricing: boolean;
  // Example: docs: boolean;
}

/**
 * Default feature flags configuration
 * 
 * These are the default values for feature flags.
 * To override these values, modify the .env file or environment variables.
 */
export const defaultFeatures: FeatureFlags = {
  blog: true,
  // Add more default values here as needed
};

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
    // Add more environment variable overrides here as needed
  }
  
  return features;
}

// Export a singleton instance for easy import
export const features = getFeatures();