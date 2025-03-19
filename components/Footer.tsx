"use client"

import Link from "next/link"
import { Terminal, Github } from "lucide-react"
import { HybridLink } from "@/components/hybrid-link"

export function Footer() {
  return (
    <footer className="bg-gray-950 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2">
              <Terminal className="text-emerald-500" />
              <span className="text-3xl font-bold honk text-white">mcpz</span>
              <span className="text-3xl font-bold honk text-emerald-500">it!</span>
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
              <li>
                <HybridLink 
                  feature="blog" 
                  className="hover:text-emerald-400"
                >
                  Changelog
                </HybridLink>
              </li>
              {/* <li>
                <HybridLink 
                  feature="blog" 
                  className="hover:text-emerald-400"
                >
                  Roadmap
                </HybridLink>
              </li>
              <li>
                <HybridLink feature="roadmap" className="hover:text-emerald-400">
                  Roadmap
                </HybridLink>
              </li> */}
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
                <Link href="https://github.com/jasonkneen/mcpz/issues" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
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
  )
}