import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MCPSX CLI Documentation | Model Context Protocol Server Tools',
  description: 'Comprehensive documentation for the MCPSX CLI tool, including commands, features, and token optimization strategies for Model Context Protocol (MCP) servers.',
}

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}