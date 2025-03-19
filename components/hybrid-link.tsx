'use client'

import Link from "next/link"
import { ReactNode, useEffect, useState } from "react"
import { features, getFeatureUrl, deploymentTarget } from "@/config/features"

interface HybridLinkProps {
  feature: keyof typeof features;
  children: ReactNode;
  className?: string;
  fallbackUrl?: string;
  showWhenDisabled?: boolean;
}

/**
 * HybridLink component
 *
 * This component handles links to features that might be hosted on different domains
 * based on the deployment environment. It conditionally renders links based on:
 *
 * 1. Whether the feature is enabled
 * 2. The current deployment target (github, vercel, development)
 *
 * For GitHub Pages deployment:
 * - If the feature is enabled locally, it renders a normal Next.js Link
 * - If the feature is disabled locally but available on a subdomain, it renders an external link
 *
 * For Vercel deployment:
 * - All features are rendered as normal Next.js Links
 */
export function HybridLink({
  feature,
  children,
  className = "",
  fallbackUrl = "/",
  showWhenDisabled = false
}: HybridLinkProps) {
  // If the feature is not enabled and we don't want to show it when disabled
  if (!features[feature] && !showWhenDisabled) {
    return null;
  }
  
  // Get the appropriate URL for this feature
  const featureUrl = getFeatureUrl(feature);
  
  // Initialize isExternalUrl to false for SSR
  const [isExternalUrl, setIsExternalUrl] = useState(false);
  
  // Check if URL is external on the client-side only
  useEffect(() => {
    // Only run this check in the browser
    if (typeof window !== 'undefined') {
      setIsExternalUrl(featureUrl.startsWith('http') && !featureUrl.includes(window.location.host));
    }
  }, [featureUrl]);
  
  // If the feature is disabled but we want to show it anyway
  if (!features[feature] && showWhenDisabled) {
    return (
      <span className={`${className} opacity-50 cursor-not-allowed`}>
        {children}
      </span>
    );
  }
  
  // For external URLs (subdomains in GitHub Pages deployment)
  if (isExternalUrl) {
    return (
      <a
        href={featureUrl}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  
  // For internal Next.js routes
  return (
    <Link href={featureUrl} className={className}>
      {children}
    </Link>
  );
}