import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal, Zap, Clock, Code2, Github } from "lucide-react"
import { ReactNode } from "react"
import { SoftwareApplicationJsonLd, OrganizationJsonLd, FAQPageJsonLd } from "@/components/json-ld"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Structured Data for SEO */}
      <SoftwareApplicationJsonLd
        name="mcpsx CLI"
        description="A powerful CLI tool for managing Context Protocol (MCP), creating logical groups of tools, and optimizing token usage when interacting with AI models."
        applicationCategory="DeveloperApplication"
        operatingSystem="Windows, macOS, Linux"
        url="https://mcpsx.run"
        offers={{
          price: "0",
          priceCurrency: "USD"
        }}
      />
      <OrganizationJsonLd
        name="mcpsx"
        url="https://mcpsx.run"
        logo="https://mcpsx.run/logo.png"
        sameAs={["https://github.com/jasonkneen/mcpsx"]}
      />
      <FAQPageJsonLd
        questions={[
          {
            question: "What is mcpsx CLI?",
            answer: "mcpsx CLI is a powerful command line interface for managing Context Protocol (MCP), creating logical groups of tools, and optimizing token usage when interacting with AI models."
          },
          {
            question: "How does mcpsx optimize token usage?",
            answer: "By categorizing your tools into purpose-specific groups, mcpsx significantly reduces token usage when communicating with AI models. Instead of sending all available tools to the system instruction, you can selectively include only the relevant tools for a specific task or context."
          },
          {
            question: "What operating systems does mcpsx support?",
            answer: "mcpsx is available for macOS, Linux, and Windows."
          }
        ]}
      />
      <header className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Terminal className="h-6 w-6 text-emerald-400" />
          <span className="text-xl font-bold">mcpsx</span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link href="#features" className="hover:text-emerald-400 transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link href="#install" className="hover:text-emerald-400 transition-colors">
                Install
              </Link>
            </li>
            <li>
              <Link href="/docs/" className="hover:text-emerald-400 transition-colors">
                Docs
              </Link>
            </li>
            <li>
              <Link href="https://github.com/jasonkneen/mcpsx/discussions/" className="hover:text-emerald-400 transition-colors">
                Community
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/jasonkneen/mcpsx" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
          </Link>
          <Button
            variant="outline"
            className="hidden md:flex border-emerald-500 text-emerald-400 hover:bg-emerald-950 hover:text-emerald-300"
            asChild
          >
            <Link href="/docs/#install">Get Started</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-10 md:py-32">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Supercharge your <span className="text-emerald-400">MCP</span> workflow
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-md">
                A powerful, lightweight CLI tool designed to organize and manage Your MCP Server workflow, creating logical collections of tools, filter by use case, and reduce tokens wasted in system prompting with LLMs being able to access specifical tool sets for specific tasks resulting in reduced time, cost, hallucinations and mistakes that usually come with overloading Large Language Models.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://www.npmjs.com/package/@jasonkneen/mcpsx" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  Download Now
                  </Button>
                </Link>
                <Link href="/docs/#install">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-emerald-500 text-emerald-400 hover:bg-emerald-950 hover:text-emerald-300"
                  >
                    View Documentation
                  </Button>
                </Link>
              </div>             
            </div>
            <div className="relative rounded-lg border border-gray-800 bg-gray-950 p-2 shadow-2xl">
              <div className="flex items-center border-b border-gray-800 px-4 py-2">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-sm text-gray-400">terminal</div>
              </div>
              <div className="font-mono p-4 text-sm">
                <p className="text-gray-400 mt-2">
                  $ <span className="text-white">mcpsx run</span>
                </p>
                <p className="text-emerald-400">✓ Directories created successfully</p>
                <p className="text-emerald-400">✓ Connecting to clients...</p>
                <p className="text-emerald-400">✓ Connected to 3 MCP clients</p>
                <p className="text-emerald-400">✓ Found 3 servers in settings</p>
                <p className="text-emerald-400">✓ Connected to 'memory'</p>
                <p className="text-emerald-400">✓ Listed 9 tools from memory</p>
                <p className="text-emerald-400">✓ Connected to 'prompts'</p>
                <p className="text-emerald-400">✓ Listed 3 tools from 'prompts'</p>
                <p className="text-emerald-400">✓ Connected to 'notifications'</p>
                <p className="text-emerald-400">✓ Listed 2 tools from 'notifications'</p>
                <p className="text-emerald-400">✓ co-pilot chat participants created</p>                
                <p className="text-emerald-400">✓ Sorting by recently used / popular</p>     
                <p className="text-emerald-400">✓ Added recommended tools based on recent tasks</p>     
                <p className="text-emerald-400">✓ Server started successfully</p>
                <p className="text-white mt-2">Ready to handle requests</p>
                <p className="text-white-400 mt-2">
                  $ <span className="animate-pulse">█</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-gray-950 py-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-glow">Powerful Features</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                mcpsx comes packed with everything you need to streamline your Context Protocol workflow, intelligently organize your tools, and optimize model interactions.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<Zap className="h-6 w-6 text-emerald-400" />}
                title="Lightning Fast"
                description="Built with performance in mind. Retrieve tooling from 100s of servers instantly and group and categorise all your tooling into logical 'toolboxes'."
              />
              <FeatureCard
                icon={<Code2 className="h-6 w-6 text-emerald-400" />}
                title="One-stop MCP Management"
                description="Add, edit and delete MCP tools in one centralized place, with configurations that sync seamlessly across all your MCP-enabled IDEs."
              />
              <FeatureCard
                icon={<Clock className="h-6 w-6 text-emerald-400" />}
                title="Grouping, Tagging, Organising"
                description="Create logical collections of tools based on a project, workspace, task, stack so you have only the tools you need for the task in hand."
              />
              <FeatureCard
                icon={<Github className="h-6 w-6 text-emerald-400" />}
                title="Ad-hoc and dynamic tooling"
                description="Provision any tool on-the-fly, and adapt tooling recommendations based on usage, git commits, codebase requirements. Why send 100s of tools in every request when they are not needed!"
              />
              <FeatureCard
                icon={<Terminal className="h-6 w-6 text-emerald-400" />}
                title="Talk to your MCP Servers"
                description="Chat and test with your MCPs in a gorgeous, interactive chat interface and chain and test workflows in a sandboxed environment."
              />
              <FeatureCard
                icon={<ArrowRight className="h-6 w-6 text-emerald-400" />}
                title="MCPs as agents"
                description="Use our built-in (and downloadable) Workflow MCPs that can fit between MCP tools providing powerful workflows."
              />
            </div>
          </div>
        </section>

        {/* Installation Section */}
        <section id="install" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Install in seconds</h2>

              <div className="space-y-6">
                <div className="rounded-lg border border-gray-800 bg-gray-950 overflow-hidden">
                  <div className="border-b border-gray-800 px-4 py-2 bg-gray-900 flex items-center">
                    <span className="text-sm font-medium">Using npm</span>
                  </div>
                  <div className="p-4 font-mono text-sm overflow-x-auto">
                    <pre className="text-emerald-400">npm install -g mcpsx</pre>
                  </div>
                </div>
                
              </div>


              <div className="space-y-6 mt-6">
                <div className="rounded-lg border border-gray-800 bg-gray-950 overflow-hidden">
                  <div className="border-b border-gray-800 px-4 py-2 bg-gray-900 flex items-center">
                    <span className="text-sm font-medium">Using npx (installed or not)</span>
                  </div>
                  <div className="p-4 font-mono text-sm overflow-x-auto">
                    <pre className="text-emerald-400">npx -y @jasonkneen/mcpsx run</pre>
                  </div>
                </div>
                
              </div>

              <div className="mt-10 text-center">
                <Link href="/docs/#install">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    View Full Documentation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials/Social Proof */}
        <section className="bg-gray-950 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Loved by developers</h2>

            <div className="grid gap-8 md:grid-cols-3">
              <TestimonialCard
                quote="We have 100s of MCP Servers already, it was a SLOPPY mess. With mcpsx I realised that it was really simple to organise MCPs and now we have easy integration with no JSON, YAML schemas and we save tokens and money!"
                author="Nathan Yesave"
                role="Developer"
              />
              <TestimonialCard
                quote="I thought I could manage it a better way myself, but struggled with basic integration into one of my IDEs. Now I realise what I could have achieved."
                author="Alexis Blah"
                role="Near Tesla, Texas"
              />
              <TestimonialCard
                quote="I didn't understand why people went on about it, and the concept, it just looked like something anyone could have done. I was wrong and things were not ok. So I tried it and I'm hooked and now everything is a-ok!"
                author="Alex Ayoke"
                role="Nonce Crypto Specialist"
              />
            </div>

            <div className="mt-16 text-center">
              <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
                <div className="text-xl font-bold">GitHub</div>
                <div className="text-xl font-bold">Vercel</div>
                <div className="text-xl font-bold">Netlify</div>
                <div className="text-xl font-bold">Stripe</div>
                <div className="text-xl font-bold">Microsoft</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to supercharge your terminal?</h2>
              <p className="text-xl text-gray-400 mb-8">
                Join thousands of developers who are optimizing their MCP workflows and connecting to thousands of available MCP servers..
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="https://www.npmjs.com/package/@jasonkneen/mcpsx" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  Download Now
                  </Button>
                </Link>
                <Link href="https://github.com/jasonkneen/mcpsx" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-900">
                    Star on GitHub
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-950 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Terminal className="h-5 w-5 text-emerald-400" />
                <span className="text-lg font-bold">mcpsx</span>
              </div>
              <p className="text-gray-400 text-sm">A modern Context Protocol management tool designed to optimize AI interactions and reduce token usage.</p>
            </div>

            <div>
              <h3 className="font-medium mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-emerald-400">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400">
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-emerald-400">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-emerald-400">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} mcpsx. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="https://github.com/jasonkneen/mcpsx" className="text-gray-400 hover:text-emerald-400">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-400">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://github.com/jasonkneen/mcpsx" className="text-gray-400 hover:text-emerald-400">
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

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-emerald-900 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
      <div className="mb-4 text-emerald-400">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.59 4.59A2 2 0 1 1 11 8H9.5C8.12 8 7 9.12 7 10.5V16h8v-5.5a2.5 2.5 0 0 0-2.5-2.5H11l2.7-2.7A2 2 0 0 1 9.59 4.59z"
            fill="currentColor"
          />
        </svg>
      </div>
      <p className="mb-4 text-gray-300">{quote}</p>
      <div>
        <p className="font-medium">{author}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  )
}
