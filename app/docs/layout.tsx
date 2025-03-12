import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'mcpsx Documentation | Context Protocol Tools',
  description: 'Comprehensive documentation for the mcpsx CLI tool, including commands, features, and token optimization strategies for Context Protocol (MCP).',
  keywords: 'mcpsx documentation, MCP documentation, CLI documentation, token optimization, Context Protocol, developer tools documentation',
  openGraph: {
    title: 'mcpsx Documentation | Context Protocol Tools',
    description: 'Comprehensive documentation for the mcpsx CLI tool, including commands, features, and token optimization strategies for Context Protocol (MCP).',
    url: 'https://mcpsx.run/docs',
    siteName: 'mcpsx CLI',
    images: [
      {
        url: 'https://mcpsx.run/docs-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'mcpsx Documentation',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'mcpsx Documentation | Context Protocol Tools',
    description: 'Comprehensive documentation for the mcpsx CLI tool, including commands, features, and token optimization strategies for Context Protocol (MCP).',
    images: ['https://mcpsx.run/docs-og-image.jpg'],
  },
  alternates: {
    canonical: 'https://mcpsx.run/docs',
  },
}

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}