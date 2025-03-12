'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps as NextThemeProviderProps,
} from 'next-themes'
 
type ThemeProviderProps = NextThemeProviderProps & {
  children: React.ReactNode
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false)
  
  // useEffect only runs on the client, so we can safely show the UI when mounted
  React.useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) {
    // Return a placeholder with the same structure but no theme applied
    return <div style={{ visibility: 'hidden' }}>{children}</div>
  }
  
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
