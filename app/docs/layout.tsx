import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'mcpz Documentation | Model Context Protocol Tools',
  description: 'Comprehensive documentation for the mcpz CLI tool, including commands, features, and token optimization strategies for Model Context Protocol (MCP).',
  keywords: 'mcpz documentation, MCP documentation, CLI documentation, token optimization, Model Context Protocol, developer tools documentation',
  openGraph: {
    title: 'mcpz Documentation | Model Context Protocol Tools',
    description: 'Comprehensive documentation for the mcpz CLI tool, including commands, features, and token optimization strategies for Model Context Protocol (MCP).',
    url: 'https://mcpz.tools/docs',
    siteName: 'mcpz CLI',
    images: [
      {
        url: 'https://mcpz.tools/docs-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'mcpz Documentation',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'mcpz Documentation | Model Context Protocol Tools',
    description: 'Comprehensive documentation for the mcpz CLI tool, including commands, features, and token optimization strategies for Model Context Protocol (MCP).',
    images: ['https://mcpz.tools/docs-og-image.jpg'],
  },
  alternates: {
    canonical: 'https://mcpz.tools/docs',
  },
}

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}