import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Terminal, Github } from "lucide-react"

export default function TermsConditions() {
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
            
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms & Conditions</h1>
              <p className="text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              
              <div className="prose prose-invert max-w-none space-y-6">
                <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
                <p className="mb-4">
                  These Terms and Conditions ("Terms") govern your use of the mcpz website and services (collectively, the "Service") operated by mcpz.it ("we," "us," or "our"). By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Service.
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
                  <li>By email: <a href="mailto:hello@mcpz.it" className="text-emerald-400 hover:text-emerald-300">hello@mcpz.it</a></li>
                  <li>By visiting our GitHub discussions page: <a href="https://github.com/jasonkneen/mcpz/discussions/" className="text-emerald-400 hover:text-emerald-300">https://github.com/jasonkneen/mcpz/discussions/</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

    </div>
  )
}