import type { Metadata } from 'next'
import './globals.css'
import { Exo_2 } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { AnimatedBackground } from '@/components/animated-background'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const exo2 = Exo_2({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-exo2',
})

export const metadata: Metadata = {
  title: 'mcpz | Model Context Protocol Tools',
  description: 'A powerful CLI tool for managing Model Context Protocol (MCP), creating logical groups of tools, and optimizing token usage when interacting with AI models.',
  generator: 'Next.js',
  metadataBase: new URL('https://mcpz.tools'),
  keywords: 'MCP, Model Context Protocol, CLI, tools, AI models, token optimization, developer tools',
  authors: [{ name: 'mcpz Team' }],
  creator: 'mcpz',
  publisher: 'mcpz',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'mcpz | Model Context Protocol Tools',
    description: 'A powerful CLI tool for managing Model Context Protocol (MCP), creating logical groups of tools, and optimizing token usage when interacting with AI models.',
    url: 'https://mcpz.tools',
    siteName: 'mcpz',
    images: [
      {
        url: 'https://mcpz.tools/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'mcpz - Model Context Protocol Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'mcpz | Model Context Protocol Tools',
    description: 'A powerful CLI tool for managing Model Context Protocol (MCP), creating logical groups of tools, and optimizing token usage when interacting with AI models.',
    images: ['https://mcpz.tools/og-image.jpg'],
    creator: '@mcpz',
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
    canonical: 'https://mcpz.tools',
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
    title: 'mcpz',
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
    <html lang="en" dir="ltr" suppressHydrationWarning className={exo2.variable}>
      <body className="antialiased font-sans font-exo2">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <AnimatedBackground />
          <div className="flex min-h-screen flex-col text-white">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
