import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'mcpsx CLI | Context Protocol Tools',
  description: 'A powerful CLI tool for managing Context Protocol (MCP), creating logical groups of tools, and optimizing token usage when interacting with AI models.',
  generator: 'Next.js',
  metadataBase: new URL('https://mcpsx.run'),
  keywords: 'MCP, Context Protocol, CLI, tools, AI models, token optimization, developer tools',
  authors: [{ name: 'mcpsx Team' }],
  creator: 'mcpsx',
  publisher: 'mcpsx',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'mcpsx CLI | Context Protocol Tools',
    description: 'A powerful CLI tool for managing Context Protocol (MCP), creating logical groups of tools, and optimizing token usage when interacting with AI models.',
    url: 'https://mcpsx.run',
    siteName: 'mcpsx CLI',
    images: [
      {
        url: 'https://mcpsx.run/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'mcpsx CLI - Context Protocol Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'mcpsx CLI | Context Protocol Tools',
    description: 'A powerful CLI tool for managing Context Protocol (MCP), creating logical groups of tools, and optimizing token usage when interacting with AI models.',
    images: ['https://mcpsx.run/og-image.jpg'],
    creator: '@mcpsx',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://mcpsx.run',
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/icons/favicon.ico',
    shortcut: '/icons/favicon-16x16.png',
    apple: [
      { url: '/icons/apple-touch-icon.png' }
    ],
  },
  verification: {
    google: 'google-site-verification-code',
  },
  appleWebApp: {
    title: 'mcpsx CLI',
    statusBarStyle: 'black-translucent',
    capable: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
