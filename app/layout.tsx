import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MCPSX CLI | Model Context Protocol Server Tools',
  description: 'A powerful CLI tool for managing Model Context Protocol (MCP) servers, creating logical groups of tools, and optimizing token usage when interacting with AI models.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
