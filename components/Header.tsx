"use client"

import Link from "next/link"
import { Terminal, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { features } from "@/config/features"

export function Header() {
  return (
    <header className="container mx-auto flex h-16 items-center justify-between px-4">
      <div className="flex items-center space-x-2">
        <Terminal className="text-white" />
        <span className="text-3xl font-bold honk text-white">mcpz it!</span>
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
          {features.blog && (
            <li>
              <Link href="/blog" className="hover:text-emerald-400 transition-colors">
                Blog
              </Link>
            </li>
          )}
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
  )
}