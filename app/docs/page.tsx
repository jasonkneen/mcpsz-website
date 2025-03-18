import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Terminal } from "lucide-react"
import { ReactNode } from "react"
import { FAQPageJsonLd } from "@/components/json-ld"
import { features } from "@/config/features"

export default function Docs() {
  return (
    <div className="flex min-h-screen flex-col text-white">
      {/* Structured Data for SEO */}
      <FAQPageJsonLd
        questions={[
          {
            question: "How do I install mcpz CLI?",
            answer: "You can install mcpz CLI globally using npm: npm install -g mcpz"
          },
          {
            question: "How do I create a tool group in mcpz?",
            answer: "Use the groups add command: mcpz groups add \"python-stack\" --tools=\"python,pytorch,huggingface\""
          },
          {
            question: "How does mcpz reduce token usage?",
            answer: "By creating logical groups of tools, you can send only relevant tools to models, reducing system instruction size and minimizing token consumption and associated costs."
          },
          {
            question: "What are the main commands in mcpz CLI?",
            answer: "The main commands include run (start MCP), groups (manage tool groups), add (add a new MCP configuration), remove (remove an MCP configuration), list (list all MCP configurations), and use (use a specific MCP configuration)."
          }
        ]}
      />
      <header className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Terminal className="h-6 w-6 text-emerald-400" />
          <span className="text-xl font-bold">mcpz</span>
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
              <Link href="/docs/" className="text-emerald-400 transition-colors">
                Docs
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-emerald-400 transition-colors">
                Pricing
              </Link>
            </li>
            {features.blog && (
              <li>
                <Link href="/blog" className="hover:text-emerald-400 transition-colors">
                  Blog
                </Link>
              </li>
            )}
            {features.roadmap && (
              <li>
                <Link href="/roadmap" className="hover:text-emerald-400 transition-colors">
                  Roadmap
                </Link>
              </li>
            )}
            <li>
              <Link href="/#community" className="hover:text-emerald-400 transition-colors">
                Community
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/jasonkneen/mcpz" target="_blank" rel="noopener noreferrer">
            <svg className="h-5 w-5 text-gray-400 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Button
            variant="outline"
            className="hidden md:flex border-emerald-500 bg-transparent text-emerald-400 hover:bg-emerald-950 hover:text-emerald-300"
            asChild
          >
            <Link href="#install">Get Started</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-emerald-400 hover:text-emerald-300">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">CLI Documentation</h1>
          
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mt-8 mb-4 text-emerald-400">Overview</h2>
            <p className="mb-6">
              mcpz CLI is a powerful command line interface for Model Context Protocol (MCP), 
              designed to revolutionize how you manage, query, and interact with Model Context Protocol. 
              At its core, mcpz enables intelligent organization of your MCP ecosystem, 
              allowing you to create logical collections of tools that optimize both your workflow and 
              AI model interactions.
            </p>
            
            <p className="mb-6">
              By categorizing your tools into purpose-specific groups, mcpz significantly reduces token usage 
              when communicating with AI models. Instead of sending all available tools to the system instruction, 
              you can selectively include only the relevant tools for a specific task or context. This focused approach 
              not only improves model performance by reducing distraction, but also minimizes token consumption 
              and associated inference costs.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-emerald-400">Installation</h2>
            <div className="rounded-lg border border-gray-800 bg-gray-950 overflow-hidden mb-6">
              <div className="border-b border-gray-800 px-4 py-2 bg-gray-900 flex items-center">
                <span className="text-sm font-medium">Install globally</span>
              </div>
              <div className="p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-emerald-400">npm install -g mcpz</pre>
              </div>
            </div>
            
            <div className="rounded-lg border border-gray-800 bg-gray-950 overflow-hidden mb-6">
              <div className="border-b border-gray-800 px-4 py-2 bg-gray-900 flex items-center">
                <span className="text-sm font-medium">Or use with npx</span>
              </div>
              <div className="p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-emerald-400">npx @mcpz</pre>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-emerald-400">Usage</h2>
            <p className="mb-4">
              The CLI can be accessed using any of these commands:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li><code className="bg-gray-800 px-1 rounded">mcp</code> (primary command)</li>
              <li><code className="bg-gray-800 px-1 rounded">mcpz</code> (extended alias)</li>
            </ul>

            <div className="rounded-lg border border-gray-800 bg-gray-950 overflow-hidden mb-6">
              <div className="border-b border-gray-800 px-4 py-2 bg-gray-900 flex items-center">
                <span className="text-sm font-medium">Basic commands</span>
              </div>
              <div className="p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-emerald-400"># Show help
mcpz help

# Start MCP
mcpz run

# Start with specific tools
mcpz run --tool="sleep"
mcpz run --tools="python,pytorch,predict"

# Tool group management
mcpz groups add "python-stack" --tools="python,pytorch,huggingface"
mcpz run --tools="python-stack"

# Add a new MCP configuration
mcpz add "My Server" --command "node" --args "server.js"

# List MCP configurations
mcpz list

# Remove an MCP configuration
mcpz remove "My Server"

# Use a specific MCP configuration
mcpz use "My Server"</pre>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-emerald-400">Key Features</h2>
            <p className="mb-4">
              mcpz CLI provides powerful capabilities for working with Model Context Protocol:
            </p>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>
                <strong className="text-emerald-300">Intelligent Tool Organization</strong>: Create logical collections of tools 
                that can be activated selectively, minimizing token usage and improving AI focus.
              </li>
              <li>
                <strong className="text-emerald-300">Run Tools</strong>: Start MCP tools individually or in 
                combination based on your specific workflow needs.
              </li>
              <li>
                <strong className="text-emerald-300">Add & Remove</strong>: Easily manage your MCP configurations from a central location.
              </li>
              <li>
                <strong className="text-emerald-300">Query & List</strong>: View available servers and tools at any time for better visibility.
              </li>
              <li>
                <strong className="text-emerald-300">Grouping</strong>: Create and manage groups of tools for simplified workflows 
                and optimized model interactions.
              </li>
              <li>
                <strong className="text-emerald-300">Flexible Filtering</strong>: Run specific tools or combinations to 
                match your exact requirements while minimizing resource usage.
              </li>
            </ol>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-emerald-400">Commands</h2>
            
            <h3 className="text-xl font-bold mt-6 mb-3 text-white">stdio</h3>
            <p className="mb-4">
              Start MCP over stdio. This is the main command used by the VSCode extension to communicate with MCP.
            </p>
            <div className="rounded-lg border border-gray-800 bg-gray-950 overflow-hidden mb-4">
              <div className="p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-emerald-400">mcpz stdio [options]</pre>
              </div>
            </div>
            <p className="mb-2">Options:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li><code className="bg-gray-800 px-1 rounded">-s, --tool &lt;n&gt;</code> - Load only a specific tool</li>
              <li><code className="bg-gray-800 px-1 rounded">-S, --tools &lt;names&gt;</code> - Load only specific tools (comma-separated)</li>
              <li><code className="bg-gray-800 px-1 rounded">-t, --tool &lt;n&gt;</code> - Load only a specific tool</li>
              <li><code className="bg-gray-800 px-1 rounded">-T, --tools &lt;names&gt;</code> - Load only specific tools (comma-separated)</li>
            </ul>
            <p className="mb-2">Examples:</p>
            <div className="rounded-lg border border-gray-800 bg-gray-950 overflow-hidden mb-6">
              <div className="p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-emerald-400"># Load all servers and tools
mcpz run

# Load only the 'sleep' tool
mcpz run --tool="sleep"

# Load multiple tools
mcpz run --tools="python,pytorch"

# Load specific tools
mcpz run --tools="predict,generate"

# Use a tool group
mcpz run --tools="python-stack"</pre>
              </div>
            </div>

            <h3 className="text-xl font-bold mt-6 mb-3 text-white">groups</h3>
            <p className="mb-4">
              Manage tool groups. Groups allow you to create collections of mcpz tools that can be used together.
              This is the heart of mcpz's token optimization capability, enabling you to create purpose-specific toolsets.
            </p>
            <div className="rounded-lg border border-gray-800 bg-gray-950 overflow-hidden mb-4">
              <div className="p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-emerald-400">mcpz groups &lt;command&gt;</pre>
              </div>
            </div>
            <p className="mb-2">Subcommands:</p>
            
            <h4 className="text-lg font-bold mt-4 mb-2">groups add</h4>
            <p className="mb-4">
              Create a new tool group.
            </p>
            <div className="rounded-lg border border-gray-800 bg-gray-950 overflow-hidden mb-4">
              <div className="p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-emerald-400">mcpz groups add &lt;n&gt; --tools="tool1,tool2,..."</pre>
              </div>
            </div>
            <p className="mb-2">Example:</p>
            <div className="rounded-lg border border-gray-800 bg-gray-950 overflow-hidden mb-6">
              <div className="p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-emerald-400"># Create a 'python-stack' group containing multiple tools
mcpz groups add "python-stack" --tools="python,pytorch,huggingface"

# Create a 'favorites' group
mcpz groups add "favorites" --tools="openai,anthropic"</pre>
              </div>
            </div>

            <h4 className="text-lg font-bold mt-4 mb-2">groups remove</h4>
            <p className="mb-4">
              Remove a tool group.
            </p>
            <div className="rounded-lg border border-gray-800 bg-gray-950 overflow-hidden mb-4">
              <div className="p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-emerald-400">mcpz groups remove &lt;n&gt;</pre>
              </div>
            </div>

            <h4 className="text-lg font-bold mt-4 mb-2">groups list</h4>
            <p className="mb-4">
              List all tool groups.
            </p>
            <div className="rounded-lg border border-gray-800 bg-gray-950 overflow-hidden mb-4">
              <div className="p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-emerald-400">mcpz groups list</pre>
              </div>
            </div>

            <h3 className="text-xl font-bold mt-6 mb-3 text-white">Tool Groups</h3>
            <p className="mb-4">
              Groups are at the core of mcpz's efficiency strategy. They allow you to create collections of mcpz tools 
              that can be used together. This is particularly valuable for organizing related tools by project type, 
              technology stack, or specific workflows—while significantly reducing token usage when interacting with AI models.
            </p>
            <p className="mb-4">
              Groups act as "virtual MCPs" - when you reference a group name with <code className="bg-gray-800 px-1 rounded">--tools</code>, 
              it expands to include all tools in that group. This means you can send only the relevant tools to your AI models, 
              improving focus and reducing token consumption.
            </p>
            <p className="mb-2">Example workflow:</p>
            <div className="rounded-lg border border-gray-800 bg-gray-950 overflow-hidden mb-6">
              <div className="p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-emerald-400"># Create groups for different use cases
mcpz groups add "ai-models" --tools="openai,anthropic,llama"
mcpz groups add "data-tools" --tools="pandas,numpy,sklearn"

# Use a specific group
mcpz run --tools="ai-models"

# Combine groups with individual tools
mcpz run --tools="ai-models,custom-tool,predict"</pre>
              </div>
            </div>

            <h3 className="text-xl font-bold mt-6 mb-3 text-white">add</h3>
            <p className="mb-4">
              Add a new MCP configuration.
            </p>
            <div className="rounded-lg border border-gray-800 bg-gray-950 overflow-hidden mb-4">
              <div className="p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-emerald-400">mcpz add &lt;n&gt; [options]</pre>
              </div>
            </div>
            <p className="mb-2">Options:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li><code className="bg-gray-800 px-1 rounded">-c, --command &lt;command&gt;</code> - Command to run the MCP server</li>
              <li><code className="bg-gray-800 px-1 rounded">-a, --args &lt;args&gt;</code> - Arguments for the command (comma-separated)</li>
              <li><code className="bg-gray-800 px-1 rounded">-e, --env &lt;env&gt;</code> - Environment variables (key=value,key2=value2)</li>
            </ul>
            <p className="mb-2">Example:</p>
            <div className="rounded-lg border border-gray-800 bg-gray-950 overflow-hidden mb-6">
              <div className="p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-emerald-400">mcpz add "GPT Server" --command "node" --args "server.js,--port=3000" --env "API_KEY=abc123,DEBUG=true"</pre>
              </div>
            </div>

            <h3 className="text-xl font-bold mt-6 mb-3 text-white">remove</h3>
            <p className="mb-4">
              Remove an MCP configuration.
            </p>
            <div className="rounded-lg border border-gray-800 bg-gray-950 overflow-hidden mb-4">
              <div className="p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-emerald-400">mcpz remove &lt;n&gt;</pre>
              </div>
            </div>

            <h3 className="text-xl font-bold mt-6 mb-3 text-white">list</h3>
            <p className="mb-4">
              List all MCP configurations.
            </p>
            <div className="rounded-lg border border-gray-800 bg-gray-950 overflow-hidden mb-4">
              <div className="p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-emerald-400">mcpz list</pre>
              </div>
            </div>

            <h3 className="text-xl font-bold mt-6 mb-3 text-white">use</h3>
            <p className="mb-4">
              Use a specific MCP configuration.
            </p>
            <div className="rounded-lg border border-gray-800 bg-gray-950 overflow-hidden mb-4">
              <div className="p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-emerald-400">mcpz use &lt;n&gt;</pre>
              </div>
            </div>

            <h3 className="text-xl font-bold mt-6 mb-3 text-white">help</h3>
            <p className="mb-4">
              Display help information.
            </p>
            <div className="rounded-lg border border-gray-800 bg-gray-950 overflow-hidden mb-4">
              <div className="p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-emerald-400">mcpz help</pre>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-emerald-400">Configuration</h2>
            <p className="mb-6">
              mcpz CLI uses the configuration file located at <code className="bg-gray-800 px-1 rounded">~/.mcpz/config.json</code>. 
              This file is shared with the MCP VSCode extension, ensuring consistent configuration across your entire development environment.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-emerald-400">Token Optimization Strategy</h2>
            <p className="mb-6">
              One of mcpz's most powerful features is its ability to optimize token usage when interacting with AI models. 
              By creating logical groups of tools, you can:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Send only relevant tools to models, reducing system instruction size</li>
              <li>Create specialized toolsets for different types of tasks</li>
              <li>Organize tools by project, platform, or workflow</li>
              <li>Minimize token consumption and associated costs</li>
              <li>Improve model focus by reducing tool-related distractions</li>
            </ul>
            <p className="mb-6">
              This approach is particularly valuable when working with large numbers of tools across different domains. 
              Instead of overwhelming your models with all available tools, mcpz lets you provide just the tools needed 
              for the current context, resulting in more efficient and cost-effective AI interactions.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-950 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Synthience.ai. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="https://github.com/jasonkneen/mcpz" className="text-gray-400 hover:text-emerald-400">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}