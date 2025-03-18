import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Terminal, Github } from "lucide-react"

export default function TermsConditions() {
  return (
    <div className="flex min-h-screen flex-col text-white">
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
              <Link href="https://github.com/jasonkneen/mcpz/discussions/" className="hover:text-emerald-400 transition-colors">
                Community
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/jasonkneen/mcpz" target="_blank" rel="noopener noreferrer">
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
            
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms & Conditions</h1>
              <p className="text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              
              <div className="prose prose-invert max-w-none space-y-6">
                <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
                <p className="mb-4">
                  These Terms and Conditions ("Terms") govern your use of the mcpz website and services (collectively, the "Service") operated by Synthience.ai ("we," "us," or "our"). By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Service.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Use License</h2>
                <p className="mb-4">
                  The mcpz CLI tool is licensed under the terms of the license specified in the GitHub repository. For the free version, permission is granted to use the software for personal and commercial purposes. For paid versions, additional terms may apply.
                </p>
                <p className="mb-2">
                  This license does not include:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>The right to modify or redistribute the software except as permitted by the license</li>
                  <li>The right to use the software in ways that violate applicable laws or regulations</li>
                  <li>The right to remove any copyright or proprietary notices from the software</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Limitations</h2>
                <p className="mb-6">
                  In no event shall we be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the Service, even if we have been notified of the possibility of such damage.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Accuracy of Materials</h2>
                <p className="mb-6">
                  The materials appearing on the mcpz website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on the website are accurate, complete, or current. We may make changes to the materials contained on the website at any time without notice.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Links</h2>
                <p className="mb-6">
                  We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Modifications</h2>
                <p className="mb-6">
                  We may revise these Terms at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these Terms.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Governing Law</h2>
                <p className="mb-6">
                  These Terms shall be governed and construed in accordance with the laws applicable in the jurisdiction where we operate, without regard to its conflict of law provisions.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Subscription Terms</h2>
                <p className="mb-2">
                  For paid subscriptions:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>Subscriptions are billed in advance on a monthly or annual basis</li>
                  <li>You may cancel your subscription at any time, but no refunds will be provided for partial billing periods</li>
                  <li>We reserve the right to change subscription fees upon reasonable notice</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">User Responsibilities</h2>
                <p className="mb-2">
                  You are responsible for:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Ensuring that your use of the Service complies with all applicable laws and regulations</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Termination</h2>
                <p className="mb-6">
                  We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
                <p className="mb-2">
                  If you have any questions about these Terms, please contact us:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>By email: <a href="mailto:hello@Synthience.ai" className="text-emerald-400 hover:text-emerald-300">hello@Synthience.ai</a></li>
                  <li>By visiting our GitHub discussions page: <a href="https://github.com/jasonkneen/mcpz/discussions/" className="text-emerald-400 hover:text-emerald-300">https://github.com/jasonkneen/mcpz/discussions/</a></li>
                </ul>
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
                <span className="text-lg font-bold">mcpz</span>
              </div>
              <p className="text-gray-400 text-sm">The intelligent Model Context Protocol management platform that optimizes AI interactions, reduces token usage by up to 70%, and transforms how developers work with AI tools.</p>
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
                  <Link href="#" className="hover:text-emerald-400">
                    <span className="flex items-center">
                      Tutorials
                      <span className="ml-2 px-2 py-0.5 text-xs bg-gray-800 rounded-full">Coming Soon</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/jasonkneen/mcpz/issues" className="hover:text-emerald-400">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
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
              <Link href="https://github.com/jasonkneen/mcpz" className="text-gray-400 hover:text-emerald-400">
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