import type { Metadata } from 'next'
import './globals.css'
import { Inter, Quantico, Exo_2 } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
// Custom cursor removed
import { AnimatedBackground } from '@/components/animated-background'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

// Google Fonts import for direct CSS usage
export const fontImport = `
<style>
@import url('https://fonts.googleapis.com/css2?family=Armata&family=Bungee+Tint&family=Honk&family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Orbitron:wght@400..900&family=Quantico:ital,wght@0,400;0,700;1,400;1,700&family=Russo+One&family=Tektur:wght@400..900&family=Exo+2:wght@100..900&display=swap');
</style>
`

// Define the fonts
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const quantico = Quantico({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-quantico',
})

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
    <html lang="en" dir="ltr" suppressHydrationWarning className={`${inter.variable} ${quantico.variable} ${exo2.variable}`}>
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
          {/* Custom cursor removed */}
        </ThemeProvider>
      </body>
    </html>
  )
}
