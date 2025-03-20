"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal, Zap, Clock, Code2, Github } from "lucide-react"
import { ReactNode } from "react"
import { SoftwareApplicationJsonLd, OrganizationJsonLd, FAQPageJsonLd } from "@/components/json-ld"
import { AnimatedTerminal } from "@/components/animated-terminal"
import { MediaCarousel } from "@/components/media-carousel"
import { features, getFeatureUrl, deploymentTarget } from "@/config/features"
import { TiltPanel } from "@/components/tilt-panel"
import { HybridLink } from "@/components/hybrid-link"

export default function Home() {
  return (
    <div>
      {/* Structured Data for SEO */}
      <SoftwareApplicationJsonLd
        name="mcpz CLI"
        description="A powerful CLI tool for managing Model Context Protocol (MCP), creating logical groups of tools, and optimizing token usage when interacting with AI models."
        applicationCategory="DeveloperApplication"
        operatingSystem="Windows, macOS, Linux, Web, Cross-platform"
        url="https://mcpz.tools"
        offers={{
          price: "9",
          priceCurrency: "USD"
        }}
      />
      <OrganizationJsonLd
        name="mcpz"
        url="https://mcpz.it"
        logo="https://mcpz.it/logo.png"
        sameAs={["https://github.com/jasonkneen/mcpz"]}
      />
      <FAQPageJsonLd
        questions={[
          {
            question: "What is mcpz CLI?",
            answer: "mcpz CLI is a powerful command line interface for managing Model Context Protocol (MCP), creating logical groups of tools, and optimizing token usage when interacting with AI models."
          },
          {
            question: "How does mcpz optimize token usage?",
            answer: "By categorizing your tools into purpose-specific groups, mcpz significantly reduces token usage when communicating with AI models. Instead of sending all available tools to the system instruction, you can selectively include only the relevant tools for a specific task or context."
          },
          {
            question: "What operating systems does mcpz support?",
            answer: "mcpz is available for macOS, Linux, and Windows."
          }
        ]}
      />

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-10 md:py-32">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            {/* Flex container for the left side with proper alignment */}
            <div className="flex flex-col h-[400px] md:h-[450px] justify-between">
              
              <div className="space-y-6 flex-grow">
                {/* Title section */}
                <div className="mb-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                      Unlock the full power of your AI Coding and <span className="text-emerald-400 block md:inline">MCPs</span>
                    </h1>
                    {/* mcpz.it Logo */}
                    <div className="mb-7 mt-8">
                      <Image 
                        src="/logos/mcpzit.png" 
                        alt="mcpz.it" 
                        width={500} 
                        height={180} 
                        className="object-contain" 
                        priority
                      />
                    </div>
                  </div>
                </div>
                
                {/* Description section */}
                <div className="mt-6 mb-8">
                  <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-md mb-8">
                    The intelligent CLI that transforms how you work with AI. Organize your MCP tools into purpose-driven groups, slash token usage by up to 70%, and get faster, more accurate AI responses while reducing costs.
                  </p>
                </div>
              </div>

              {/* Bottom-aligned buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                {/* Install CLI Button */}
                <div className="w-full sm:w-auto">
                  <Link href="https://www.npmjs.com/package/@mcpz/cli" target="_blank" rel="noopener noreferrer" className="block w-full">
                    <Button 
                      size="lg" 
                      className="bg-emerald-600 hover:bg-emerald-700 text-white w-full text-lg"
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
                      className="border-emerald-500 bg-transparent text-white hover:bg-emerald-950 hover:text-emerald-300 w-full text-lg"
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
                      className="border-gray-700 bg-transparent text-white hover:bg-gray-900 w-full text-lg"
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
                  { type: 'terminal' }                
                ]}
                autoRotateInterval={5000}
                initialAutoRotate={true}
                showHeader={false}

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
                mcpz comes packed with everything you need to streamline your Model Context Protocol workflow, intelligently organize your tools, and optimize model interactions.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon=""
                title="Lightning Fast"
                description="Instantly access and organize hundreds of MCP tools. Our optimized engine delivers 5x faster tool retrieval and intelligent categorization that adapts to your workflow."
              />
              <FeatureCard
                icon=""
                title="One-stop MCP Management"
                description="Eliminate configuration headaches with our unified management hub. Seamlessly sync your custom toolsets across all your environments with zero friction."
              />
              <FeatureCard icon=""                 
                title="Grouping, Tagging, Organising"
                description="Boost productivity with smart tool organization. Create project-specific toolsets that deliver exactly what you need, when you need it, reducing cognitive load and streamlining your workflow."
              />
              <FeatureCard
               icon=""
                title="Ad-hoc and dynamic tooling"
                description="Save up to 70% on token usage with intelligent tool provisioning. Our AI-powered system analyzes your codebase and usage patterns to recommend and deploy only the tools you actually need."
                comingSoon={true}
              />
              <FeatureCard
                icon=""
                title="Talk to your MCP Servers"
                description="Experience seamless AI interaction with our intuitive chat interface. Test, chain, and optimize your MCP workflows in a secure sandbox environment before deployment."
                comingSoon={true}
              />
              <FeatureCard
                icon=""
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
                    <pre className="text-emerald-400">npm install -g @mcpz/cli</pre>
                  </div>
                </div>
                
              </div>


              <div className="space-y-6 mt-6">
                <div className="rounded-lg border border-gray-800 bg-gray-950 overflow-hidden">
                  <div className="border-b border-gray-800 px-4 py-2 bg-gray-900 flex items-center">
                    <span className="text-sm font-medium">Using npx (installed or not)</span>
                  </div>
                  <div className="p-4 font-mono text-sm overflow-x-auto">
                    <pre className="text-emerald-400">npx -y mcpz run</pre>
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
                quote="mcpz is a revolution in MCP usage! Its dynamic token optimization and chat interface are a must-have for any developer."
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
                <Link href="https://www.npmjs.com/package/mcpz" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg">
                  Download Now
                  </Button>
                </Link>
                <Link href="/docs/">
                  <Button size="lg" variant="outline" className="border-emerald-500 bg-transparent text-white hover:bg-emerald-950 hover:text-emerald-300 text-white text-lg">
                    View Documentation
                  </Button>
                </Link>
                <Link href="https://github.com/jasonkneen/mcpz" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-gray-700 bg-transparent text-white hover:bg-gray-900 text-white text-lg">
                    Star on GitHub
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

    </div>
  )
}

interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  comingSoon?: boolean;
}

function FeatureCard({ icon, title, description, comingSoon = false }: FeatureCardProps) {
  return (
    <TiltPanel className="bg-gray-900 p-4 rounded-lg border border-gray-800 hover:border-emerald-900 transition-colors hover-shimmer">
      {comingSoon && (
        <div className="align-middle mb-4">
          <span className="bottom-0 inline-block px-2 py-1 text-xs font-semibold rounded-full bg-emerald-900 text-emerald-300">
            COMING SOON
          </span>
        </div>
      )}
      <div className="mb-0">{icon}</div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
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
