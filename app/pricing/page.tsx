import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check, Terminal, Github } from "lucide-react"
import { features } from "@/config/features"
import { TiltPanel } from "@/components/tilt-panel"

export default function Pricing() {
  return (
    <div className="flex min-h-screen flex-col text-white">
      <header className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Terminal className="h-6 w-6 text-emerald-400" />
          <div className="flex items-center">
            <span className="text-xl font-bold">mcpsx</span>
            <div className="ml-3 flex items-center">
             {/*  <div className="bg-gradient-to-r from-emerald-600 to-emerald-400 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center shadow-lg">
                <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                </svg>
                Co-pilot Ready
              </div> */}
            </div>
          </div>
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
              <Link href="/pricing" className="text-emerald-400 transition-colors">
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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <Link href="/" className="inline-flex items-center text-emerald-400 hover:text-emerald-300">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Simple, Transparent Pricing</h1>
              <p className="text-xl text-gray-400 mb-12 text-center max-w-3xl mx-auto">
                Maximize your AI capabilities with a pricing plan that scales with your needs. Start for free and upgrade as your success grows.
              </p>

              <div className="grid gap-8 md:grid-cols-3">
                {/* FREE Plan */}
                <TiltPanel className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden hover-shimmer">
                  <div className="p-6 border-b border-gray-800">
                    <h2 className="text-2xl font-bold mb-1">FREE</h2>
                    <div className="flex items-baseline mb-4">
                      <span className="text-4xl font-bold">$0</span>
                      <span className="text-gray-400 ml-2">/ forever</span>
                    </div>
                    <p className="text-gray-400">Powerful essentials for developers ready to transform their AI workflow.</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3 mb-6">
                      <FeatureItem text="Unlimited MCP servers & tools" />
                      <FeatureItem text="Unlimited groups & filters" />
                      <FeatureItem text="Prompt optimisation" />
                      <FeatureItem text="Fully local" />
                      <FeatureItem text="Command-line interface" />
                      <FeatureItem text="Chat with MCPs (your keys)" />
                      <FeatureItem text="Open Source VSCode extension" />
                      <FeatureItem text="Basic analytics" />
                      <FeatureItem text="Community support" />
                    </ul>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                      Get Started Now
                    </Button>
                  </div>
                </TiltPanel>

                {/* PRO Plan */}
                <TiltPanel className="bg-gray-900 rounded-xl border border-emerald-600 overflow-hidden hover-shimmer relative transform scale-105 shadow-xl">
                  <div className="absolute top-0 right-0 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg shadow-md">
                    COMING SOON
                  </div>
                  <div className="p-6 border-b border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800">
                    <h2 className="text-2xl font-bold mb-1">PRO</h2>
                    <div className="flex items-baseline mb-4">
                      <span className="text-4xl font-bold">$9</span>
                      <span className="text-gray-400 ml-2">a month (paid annually)</span>
                    </div>
                    <p className="text-gray-400">Enhanced capabilities for professionals who demand maximum efficiency and collaboration.</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3 mb-6">
                      <FeatureItem text="Everything in FREE" />
                      <FeatureItem text="Config cloud syncing" />
                      <FeatureItem text="Workflows & MCP Agents" />
                      <FeatureItem text="Unlimited chat with MCPs" />
                      <FeatureItem text="Voice control" />
                      <FeatureItem text="CLI source code access with annual plans" />
                      <FeatureItem text="Priority support with annual plans" />
                      <FeatureItem text="Advanced Analytics & usage" />
                      <FeatureItem text="or $15 per month " />
                    </ul>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white" disabled>
                      Coming Soon
                    </Button>
                  </div>
                </TiltPanel>

                {/* ENTERPRISE Plan */}
                <TiltPanel className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden hover-shimmer">
                  <div className="absolute top-0 right-0 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg shadow-md">
                    COMING SOON
                  </div>
                  <div className="p-6 border-b border-gray-800">
                    <h2 className="text-2xl font-bold mb-1">ENTERPRISE</h2>
                    <div className="flex items-baseline mb-4">
                      <span className="text-4xl font-bold">Custom</span>
                    </div>
                    <p className="text-gray-400">Tailored solutions for organizations building mission-critical AI applications at scale.</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3 mb-6">
                      <FeatureItem text="Everything in PRO" />
                      <FeatureItem text="Advanced tooling" />
                      <FeatureItem text="Codebase optimization" />
                      <FeatureItem text="Indexing capabilities" />
                      <FeatureItem text="Knowledge graph learning" />
                      <FeatureItem text="Dedicated support" />
                      <FeatureItem text="Custom integrations" />
                    </ul>
                    <Button className="w-full bg-gray-700 hover:bg-gray-600 text-white" disabled>
                      Contact Sales
                    </Button>
                  </div>
                </TiltPanel>
              </div>

              <div className="mt-16 text-center">
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto text-left">
                  <FaqItem 
                    question="How does the FREE plan compare to PRO?" 
                    answer="The FREE plan delivers everything you need to start optimizing your AI workflow, including unlimited MCP servers, grouping, and basic analytics. The PRO plan adds cloud syncing, advanced workflow capabilities, voice control, and priority support - perfect for professionals seeking enhanced collaboration and efficiency."
                  />
                  <FaqItem 
                    question="Can I upgrade from FREE to PRO later?" 
                    answer="Absolutely! Upgrading is seamless with zero data loss. All your configurations, groups, and settings transfer instantly to your PRO account, allowing you to continue your work without interruption while enjoying the enhanced capabilities."
                  />
                  <FaqItem 
                    question="What payment methods do you accept?" 
                    answer="We support all major credit cards through Stripe, our secure payment processor. Enterprise clients can also arrange invoicing with our finance team."
                  />
                  <FaqItem 
                    question="Is there a trial period for PRO features?" 
                    answer="Yes, when the PRO plan launches, you'll get a full-featured 7-day trial to experience all PRO capabilities. A credit card is required for the trial, but you won't be charged until the trial ends."
                  />
                  <FaqItem 
                    question="How much can I save on token usage with mcpsx?" 
                    answer="Our users typically report 50-70% reduction in token usage after implementing mcpsx's intelligent grouping and dynamic provisioning. This translates directly to lower API costs and faster response times."
                  />
                  <FaqItem 
                    question="Can I use mcpsx in my existing projects?" 
                    answer="Absolutely! mcpsx integrates seamlessly with your existing AI development workflow. Whether you're using Claude, GPT, or other AI models, mcpsx optimizes your MCP tool management without disrupting your current setup."
                  />
                </div>
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
              <p className="text-gray-400 text-sm">A modern Model Context Protocol management tool designed to optimize AI interactions and reduce token usage.</p>
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
                  <Link href="/pricing" className="hover:text-emerald-400">
                    Pricing
                  </Link>
                </li>
                {features.blog && (
                <li>
                  <Link href="#" className="hover:text-emerald-400">
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
                {features.roadmap && !features.blog && (
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
                  <Link href="#" className="hover:text-emerald-400">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {/* About with Coming Soon badge */}
                <li>
                  <Link href="#" className="hover:text-emerald-400">
                    <span className="flex items-center">
                      About
                      <span className="ml-2 px-2 py-0.5 text-xs bg-gray-800 rounded-full">Coming Soon</span>
                    </span>
                  </Link>
                </li>
                {/* Privacy Policy link */}
                <li>
                  <Link href="/legal/privacy-policy" className="hover:text-emerald-400">
                    Privacy Policy
                  </Link>
                </li>
                {/* Terms & Conditions link */}
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

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-start">
      <div className="flex-shrink-0 mt-0.5">
        <Check className="h-5 w-5 text-emerald-400" />
      </div>
      <span className="ml-2.5 text-gray-300">{text}</span>
    </li>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
      <h3 className="font-bold mb-2">{question}</h3>
      <p className="text-gray-400 text-sm">{answer}</p>
    </div>
  )
}