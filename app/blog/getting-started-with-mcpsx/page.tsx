import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Terminal, Calendar, User, Clock, ArrowRight } from "lucide-react"

export default function BlogPost() {
  return (
    <div className="flex min-h-screen flex-col text-white">
      <header className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Terminal className="h-6 w-6 text-emerald-400" />
          <span className="text-xl font-bold">mcpsx</span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link href="/#features" className="hover:text-emerald-400 transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link href="/#install" className="hover:text-emerald-400 transition-colors">
                Install
              </Link>
            </li>
            <li>
              <Link href="/docs/" className="hover:text-emerald-400 transition-colors">
                Docs
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-emerald-400 transition-colors">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-emerald-400 transition-colors">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className="hidden md:flex border-emerald-500 bg-transparent text-emerald-400 hover:bg-emerald-950 hover:text-emerald-300"
            asChild
          >
            <Link href="/docs/#install">Get Started</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <article className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <Link href="/blog" className="inline-flex items-center text-emerald-400 hover:text-emerald-300">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="mb-8">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-emerald-900 text-emerald-300 mb-4">
                  Tutorial
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Getting Started with mcpsx: A Comprehensive Guide</h1>
                
                <div className="flex items-center text-sm text-gray-400 mb-8">
                  <div className="flex items-center mr-6">
                    <User className="h-4 w-4 mr-2" />
                    <span>Jason Kneen</span>
                  </div>
                  <div className="flex items-center mr-6">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>March 10, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>8 min read</span>
                  </div>
                </div>
              </div>

              <div className="prose prose-invert prose-emerald max-w-none">
                <p className="lead text-xl text-gray-300 mb-8">
                  mcpsx is a powerful CLI tool that streamlines how you work with Context Protocol (MCP) tools. In this comprehensive guide, we'll walk through installation, basic configuration, and creating your first tool groups to optimize your AI workflow.
                </p>

                <h2>What is mcpsx?</h2>
                <p>
                  mcpsx is a command-line interface designed to simplify the management of Context Protocol (MCP) tools. It allows you to organize your tools into logical groups, filter by use case, and significantly reduce token usage when interacting with AI models.
                </p>

                <h2>Installation</h2>
                <p>
                  Installing mcpsx is straightforward. You can use npm to install it globally:
                </p>

                <pre className="bg-gray-950 p-4 rounded-md overflow-x-auto mb-6">
                  <code className="text-emerald-400">npm install -g @jasonkneen/mcpsx</code>
                </pre>

                <p>
                  Alternatively, you can use npx to run it without installation:
                </p>

                <pre className="bg-gray-950 p-4 rounded-md overflow-x-auto mb-6">
                  <code className="text-emerald-400">npx -y @jasonkneen/mcpsx run</code>
                </pre>

                <h2>Basic Configuration</h2>
                <p>
                  After installation, the first step is to run mcpsx to connect to your MCP servers:
                </p>

                <pre className="bg-gray-950 p-4 rounded-md overflow-x-auto mb-6">
                  <code className="text-emerald-400">mcpsx run</code>
                </pre>

                <p>
                  This command will:
                </p>
                <ul>
                  <li>Scan your environment for MCP servers</li>
                  <li>Connect to available servers</li>
                  <li>List all available tools</li>
                  <li>Analyze your workspace to recommend relevant tools</li>
                  <li>Start a server on stdio ready to handle requests</li>
                </ul>

                <h2>Creating Your First Tool Group</h2>
                <p>
                  One of the most powerful features of mcpsx is the ability to create logical groups of tools for specific tasks or projects. Here's how to create your first group:
                </p>

                <pre className="bg-gray-950 p-4 rounded-md overflow-x-auto mb-6">
                  <code className="text-emerald-400">mcpsx create-group web-dev --smart</code>
                </pre>

                <p>
                  The <code>--smart</code> flag tells mcpsx to analyze your project and automatically suggest relevant tools based on your codebase.
                </p>

                <p>
                  To see all your available groups:
                </p>

                <pre className="bg-gray-950 p-4 rounded-md overflow-x-auto mb-6">
                  <code className="text-emerald-400">mcpsx list-groups</code>
                </pre>

                <h2>Using Tool Groups</h2>
                <p>
                  To start mcpsx with a specific tool group:
                </p>

                <pre className="bg-gray-950 p-4 rounded-md overflow-x-auto mb-6">
                  <code className="text-emerald-400">mcpsx run --group web-dev</code>
                </pre>

                <p>
                  This will start mcpsx with only the tools in the "web-dev" group, significantly reducing token usage and improving response times when working with AI models.
                </p>

                <h2>Advanced Configuration</h2>
                <p>
                  mcpsx offers several advanced configuration options:
                </p>

                <h3>Adding Tools to a Group</h3>
                <pre className="bg-gray-950 p-4 rounded-md overflow-x-auto mb-6">
                  <code className="text-emerald-400">mcpsx add-tools --group web-dev --tools "code-indexer_search_code,file-operations_write_file"</code>
                </pre>

                <h3>Removing Tools from a Group</h3>
                <pre className="bg-gray-950 p-4 rounded-md overflow-x-auto mb-6">
                  <code className="text-emerald-400">mcpsx remove-tools --group web-dev --tools "notification-server_broadcast_status"</code>
                </pre>

                <h3>Deleting a Group</h3>
                <pre className="bg-gray-950 p-4 rounded-md overflow-x-auto mb-6">
                  <code className="text-emerald-400">mcpsx delete-group web-dev</code>
                </pre>

                <h2>Best Practices</h2>
                <p>
                  Here are some best practices for using mcpsx effectively:
                </p>

                <ul>
                  <li>Create project-specific groups to optimize token usage</li>
                  <li>Use the <code>--smart</code> flag to leverage mcpsx's AI-powered tool recommendations</li>
                  <li>Regularly update your groups as your project evolves</li>
                  <li>Use descriptive group names that reflect their purpose</li>
                  <li>Consider creating task-specific groups for specialized workflows</li>
                </ul>

                <h2>Conclusion</h2>
                <p>
                  mcpsx transforms how you work with Context Protocol tools, making your AI workflow more efficient and cost-effective. By organizing your tools into logical groups, you can significantly reduce token usage and improve response times.
                </p>

                <p>
                  In our next tutorial, we'll dive deeper into advanced features like cloud syncing, custom workflows, and integrating mcpsx with popular AI models.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-800">
                <h3 className="text-xl font-bold mb-6">Continue Reading</h3>
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-emerald-700 transition-colors">
                    <Link href="/blog/token-usage-reduction-case-study" className="flex items-center group">
                      <div className="flex-1">
                        <h4 className="font-bold mb-2 group-hover:text-emerald-400 transition-colors">How We Reduced Token Usage by 70% with Intelligent Grouping</h4>
                        <p className="text-sm text-gray-400">A case study on implementing mcpsx's grouping feature to reduce API costs.</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-emerald-700 transition-colors">
                    <Link href="/blog/integrating-with-ai-models" className="flex items-center group">
                      <div className="flex-1">
                        <h4 className="font-bold mb-2 group-hover:text-emerald-400 transition-colors">Integrating mcpsx with Claude and GPT Models</h4>
                        <p className="text-sm text-gray-400">A step-by-step guide to connecting mcpsx with popular AI models.</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      <footer className="bg-gray-950 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Terminal className="h-5 w-5 text-emerald-400" />
                <span className="text-lg font-bold">mcpsx</span>
              </div>
              <p className="text-gray-400 text-sm">The intelligent Context Protocol management platform that optimizes AI interactions, reduces token usage by up to 70%, and transforms how developers work with AI tools.</p>
            </div>

            <div>
              <h3 className="font-medium mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/#features" className="hover:text-emerald-400">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-emerald-400">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/blog/changelog" className="hover:text-emerald-400">
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link href="/blog/roadmap" className="hover:text-emerald-400">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/docs" className="hover:text-emerald-400">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/docs/tutorials" className="hover:text-emerald-400">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-emerald-400">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/jasonkneen/mcpsx/issues" className="hover:text-emerald-400">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/blog/about" className="hover:text-emerald-400">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog/careers" className="hover:text-emerald-400">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog/contact" className="hover:text-emerald-400">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/blog/privacy" className="hover:text-emerald-400">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Jason Kneen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}