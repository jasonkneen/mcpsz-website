"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal, Zap, Clock, Code2, Github } from "lucide-react"
import { ReactNode, useEffect, useState } from "react"
import { SoftwareApplicationJsonLd, OrganizationJsonLd, FAQPageJsonLd } from "@/components/json-ld"
import { AnimatedTerminal } from "@/components/animated-terminal"
import { MediaCarousel } from "@/components/media-carousel"
import { features } from "@/config/features"
import { TiltPanel } from "@/components/tilt-panel"

export default function Home() {
  // State to track the current media type
  const [currentMediaType, setCurrentMediaType] = useState<'terminal' | 'image'>('terminal');
  
  // Handler for media change events
  const handleMediaChange = (mediaItem: { type: 'terminal' | 'image', src?: string, alt?: string }, index: number) => {
    setCurrentMediaType(mediaItem.type);
  };
  
  return (
    <div className="flex min-h-screen flex-col text-white">
      {/* Structured Data for SEO */}
      <SoftwareApplicationJsonLd
        name="mcpsx CLI"
        description="A powerful CLI tool for managing Model Context Protocol (MCP), creating logical groups of tools, and optimizing token usage when interacting with AI models."
        applicationCategory="DeveloperApplication"
        operatingSystem="Windows, macOS, Linux, Web, Cross-platform"
        url="https://mcpsx.run"
        offers={{
          price: "9",
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
            answer: "mcpsx CLI is a powerful command line interface for managing Model Context Protocol (MCP), creating logical groups of tools, and optimizing token usage when interacting with AI models."
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
            {features.discover && (
              <li>
                <Link href="/discover" className="hover:text-emerald-400 transition-colors">
                  Discover
                </Link>
              </li>
            )}
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
            className="hidden md:flex border-emerald-500 bg-transparent text-emerald-400 hover:bg-emerald-950 hover:text-emerald-300"
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
            {/* Flex container for the left side with proper alignment */}
            <div className="flex flex-col h-[400px] md:h-[450px] justify-between">
              <div className="space-y-6 flex-grow">
                {/* Title section */}
                <div className="mb-4">
                  <div 
                    className={`transition-all duration-700 ease-in-out transform ${
                      currentMediaType === 'terminal' 
                        ? 'opacity-100 translate-y-0 block' 
                        : 'opacity-0 hidden'
                    }`}
                  >
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      Unlock the Full Power of <span className="text-emerald-400 block md:inline">the Model Context Protocol</span>
                    </h1>
                  </div>
                  <div 
                    className={`transition-all duration-700 ease-in-out transform ${
                      currentMediaType === 'image' 
                        ? 'opacity-100 translate-y-0 block' 
                        : 'opacity-0 hidden'
                    }`}
                  >
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      Supercharge <span className="text-emerald-400 block md:inline">Copilot</span> with MCP Tools
                    </h1>
                  </div>
                </div>
                
                {/* Description section */}
                <div className="mt-6 mb-8">
                  <div 
                    className={`transition-all duration-700 ease-in-out transform ${
                      currentMediaType === 'terminal' 
                        ? 'opacity-100 translate-y-0 block' 
                        : 'opacity-0 hidden'
                    }`}
                  >
                    <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-md">
                      The intelligent CLI that transforms how you work with AI. Organize your MCP tools into purpose-driven groups, slash token usage by up to 70%, and get faster, more accurate AI responses while reducing costs.
                    </p>
                  </div>
                  <div 
                    className={`transition-all duration-700 ease-in-out transform ${
                      currentMediaType === 'image' 
                        ? 'opacity-100 translate-y-0 block' 
                        : 'opacity-0 hidden'
                    }`}
                  >
                    <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-md">
                      Enable MCPs with Github Copilot and add thousands of tools from the MCP community into your favourite Copilot workflows.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom-aligned buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                {/* Install CLI Button */}
                <div className="w-full sm:w-auto">
                  <Link href="https://www.npmjs.com/package/mcpsx" target="_blank" rel="noopener noreferrer" className="block w-full">
                    <Button 
                      size="lg" 
                      className="bg-emerald-600 hover:bg-emerald-700 text-white w-full"
                    >
                      Install CLI
                    </Button>
                  </Link>
                </div>

                {/* Extension Button */}
                <div className="w-full sm:w-auto">
                  <Link href="https://marketplace.visualstudio.com/items?itemName=jasonkneen.mcpsx-run" target="_blank" rel="noopener noreferrer" className="block w-full">                  
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-emerald-500 bg-transparent text-white hover:bg-emerald-950 hover:text-emerald-300 w-full"
                    >
                      Extension
                    </Button>
                  </Link>
                </div>

                {/* Docs Button */}
                <div className="w-full sm:w-auto">
                  <Link href="/docs/#install" className="block w-full">                  
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-gray-700 bg-transparent text-white hover:bg-gray-900 w-full"
                    >
                      Docs
                    </Button>
                  </Link>
                </div>
              </div>         
            </div>
            <div className="relative rounded-lg border border-gray-800 bg-gray-950 p-2 shadow-2xl">
              <MediaCarousel 
                mediaItems={[
                  { type: 'terminal' }, 
                  { type: 'image', src: '/vscode1.png', alt: 'VSCode Screenshot 1' }, 
                  { type: 'terminal' }, 
                  { type: 'image', src: '/vscode2.png', alt: 'VSCode Screenshot 2' } 
                ]}
                autoRotateInterval={5000}
                initialAutoRotate={true}
                showHeader={true}
                onMediaChange={handleMediaChange}
                className="border-t border-gray-800"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-gray-950 py-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-glow">Powerful Features for MCP Servers</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                mcpsx comes packed with everything you need to streamline your Model Context Protocol workflow, intelligently organize your tools, and optimize model interactions.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<Zap className="h-6 w-6 text-emerald-400 inline-block mr-2" />}
                title="Lightning Fast"
                description="Instantly access and organize hundreds of MCP tools. Our optimized engine delivers 5x faster tool retrieval and intelligent categorization that adapts to your workflow."
              />
              <FeatureCard
                icon={<Code2 className="h-6 w-6 text-emerald-400 inline-block mr-2" />}
                title="One-stop MCP Management"
                description="Eliminate configuration headaches with our unified management hub. Seamlessly sync your custom toolsets across all your environments with zero friction."
              />
              <FeatureCard
                icon={<Clock className="h-6 w-6 text-emerald-400 inline-block mr-2" />}
                title="Grouping, Tagging, Organising"
                description="Boost productivity with smart tool organization. Create project-specific toolsets that deliver exactly what you need, when you need it, reducing cognitive load and streamlining your workflow."
              />
              <FeatureCard
                icon={<Github className="h-6 w-6 text-emerald-400 inline-block mr-2" />}
                title="Ad-hoc and dynamic tooling"
                description="Save up to 70% on token usage with intelligent tool provisioning. Our AI-powered system analyzes your codebase and usage patterns to recommend and deploy only the tools you actually need."
              />
              <FeatureCard
                icon={<Terminal className="h-6 w-6 text-emerald-400 inline-block mr-2" />}
                title="Talk to your MCP Servers"
                description="Experience seamless AI interaction with our intuitive chat interface. Test, chain, and optimize your MCP workflows in a secure sandbox environment before deployment."
                comingSoon={true}
              />
              <FeatureCard
                icon={<ArrowRight className="h-6 w-6 text-emerald-400 inline-block mr-2" />}
                title="MCPs as agents"
                description="Transform your AI capabilities with agent-driven workflows. Connect and orchestrate MCP tools into powerful automation sequences that solve complex problems with minimal oversight."
                comingSoon={true}
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
                    <pre className="text-emerald-400">npx -y mcpsx run</pre>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Loved by AI developers worldwide</h2>

            <div className="grid gap-8 md:grid-cols-3">
              <TestimonialCard
                quote="mcpsx is a revolution in MCP usage! Its dynamic token optimization and chat interface are a must-have for any developer."
                author="@FutbolmeAI"
                role="AI Developer"
              />
              <TestimonialCard
                quote="I'm really excited to see the MCP ecosystem developing. This really is going to be the year of AI tool-driven skills driving real agentic AI."
                author="Martin"
                role="AI Developer"
              />
              <TestimonialCard
                quote="Congratulations to @jasonkneen, the Godfather of MCPs!!! He was the first person to talk about MCPs in this space (when everyone was still sleeping on it) & never stopped exploring the use cases for them. "
                author="Lianna"
                role="Entreprenuer"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to supercharge your MCP workflow?</h2>
              <p className="text-xl text-gray-400 mb-8">
                Join thousands of AI developers who have seen their MCP workflows transformed, reducing tokens, optimising context and saving money.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="https://www.npmjs.com/package/mcpsx" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  Download Now
                  </Button>
                </Link>
                <Link href="/docs/">
                  <Button size="lg" variant="outline" className="border-emerald-500 bg-transparent text-white hover:bg-emerald-950 hover:text-emerald-300">
                    View Documentation
                  </Button>
                </Link>
                <Link href="https://github.com/jasonkneen/mcpsx" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-gray-700 bg-transparent text-white hover:bg-gray-900">
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
              <p className="text-gray-400 text-sm">The intelligent Model Context Protocol management platform that optimizes AI interactions, reduces token usage by up to 70%, and transforms how developers work with AI tools.</p>
            </div>

            <div>
              <h3 className="font-medium mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#features" className="hover:text-emerald-400">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-emerald-400">
                    Pricing
                  </Link>
                </li>
                {features.blog && (
                <li>
                  <Link href="/blog/changelog" className="hover:text-emerald-400">
                    Changelog
                  </Link>
                </li>
                )}
                {features.blog && (
                <li>
                  <Link href="/blog/roadmap" className="hover:text-emerald-400">
                    Roadmap
                  </Link>
                </li>
                )}
                {features.roadmap && (
                <li>
                  <Link href="/roadmap" className="hover:text-emerald-400">
                    Roadmap
                  </Link>
                </li>
                )}
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {/* Documentation link */}
                <li>
                  <Link href="/docs" className="hover:text-emerald-400">
                    Documentation
                  </Link>
                </li>
                {/* Tutorials with Coming Soon badge */}
                <li>
                  <Link href="#" className="hover:text-emerald-400">
                    <span className="flex items-center">
                      Tutorials
                      <span className="ml-2 px-2 py-0.5 text-xs bg-gray-800 rounded-full">Coming Soon</span>
                    </span>
                  </Link>
                </li>
                {/* Support link */}
                <li>
                  <Link href="https://github.com/jasonkneen/mcpsx/issues" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
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
                    <span className="flex items-center">
                      About
                      <span className="ml-2 px-2 py-0.5 text-xs bg-gray-800 rounded-full">Coming Soon</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/legal/privacy-policy" className="hover:text-emerald-400">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/legal/terms-conditions" className="hover:text-emerald-400">
                    Terms & Conditions
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Synthience.ai. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="https://github.com/jasonkneen/mcpsx" className="text-gray-400 hover:text-emerald-400">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://x.com/jasonkneen" className="text-gray-400 hover:text-emerald-400">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                <span className="sr-only">Twitter</span>
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
  comingSoon?: boolean;
}

function FeatureCard({ icon, title, description, comingSoon = false }: FeatureCardProps) {
  return (
    <TiltPanel className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-emerald-900 transition-colors hover-shimmer">
      {comingSoon && (
        <div className="flex justify-end mb-2">
          <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-emerald-900 text-emerald-300">
            Coming Soon
          </span>
        </div>
      )}
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400"><span className="inline">{description}</span></p>
    </TiltPanel>
  )
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <TiltPanel className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover-shimmer">
      <p className="mb-4 text-gray-300">
        <span className="text-emerald-400 text-2xl">"</span>
        {quote}
        <span className="text-emerald-400 text-2xl">"</span>
      </p>
      <div>
        <p className="font-medium">{author}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </TiltPanel>
  )
}
