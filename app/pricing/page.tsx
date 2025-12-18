import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check, Terminal, Github } from "lucide-react"
import { features } from "@/config/features"
import { TiltPanel } from "@/components/tilt-panel"

export default function Pricing() {
  return (
    <div>



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

              <div className="mt-16 text-center">m
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
                    question="How much can I save on token usage with mcpz?" 
                    answer="Our users typically report 50-70% reduction in token usage after implementing mcpz's intelligent grouping and dynamic provisioning. This translates directly to lower API costs and faster response times."
                  />
                  <FaqItem 
                    question="Can I use mcpz in my existing projects?" 
                    answer="Absolutely! mcpz integrates seamlessly with your existing AI development workflow. Whether you're using Claude, GPT, or other AI models, mcpz optimizes your MCP tool management without disrupting your current setup."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

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