import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Terminal, Github } from "lucide-react"

export default function PrivacyPolicy() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
              <p className="text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              
              <div className="prose prose-invert max-w-none space-y-6">
                <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
                <p className="mb-6">
                  At mcpz, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and services.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
                <p className="mb-2">
                  We may collect the following types of information:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li><strong>Personal Information:</strong> Name, email address, and other contact details you provide when registering for our services or contacting us.</li>
                  <li><strong>Usage Data:</strong> Information about how you use our website and services, including log data, device information, and analytics.</li>
                  <li><strong>Technical Data:</strong> IP address, browser type and version, time zone setting, operating system, and platform.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
                <p className="mb-2">
                  We use your information for the following purposes:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>To provide and maintain our services</li>
                  <li>To notify you about changes to our services</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information to improve our services</li>
                  <li>To monitor the usage of our services</li>
                  <li>To detect, prevent, and address technical issues</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
                <p className="mb-6">
                  We implement appropriate security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
                <p className="mb-6">
                  We may use third-party services such as analytics providers and payment processors that collect, monitor, and analyze data to help us improve our services. These third parties have their own privacy policies addressing how they use such information.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Your Data Protection Rights</h2>
                <p className="mb-2">
                  Depending on your location, you may have the following rights regarding your personal data:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>The right to access, update, or delete your information</li>
                  <li>The right to rectification (to correct inaccurate data)</li>
                  <li>The right to object to processing of your data</li>
                  <li>The right to restriction of processing</li>
                  <li>The right to data portability</li>
                  <li>The right to withdraw consent</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies</h2>
                <p className="mb-6">
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
                <p className="mb-6">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
                <p className="mb-2">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>By email: <a href="mailto:hello@synthience.ai" className="text-emerald-400 hover:text-emerald-300">hello@Synthience.ai</a></li>
                  <li>By visiting our GitHub discussions page: <a href="https://github.com/jasonkneen/mcpz/discussions/" className="text-emerald-400 hover:text-emerald-300">https://github.com/jasonkneen/mcpz/discussions/</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

    </div>
  )
}