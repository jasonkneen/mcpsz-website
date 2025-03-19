"use client"

import Link from "next/link"
import { Terminal, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HybridLink } from "@/components/hybrid-link"
import { features } from "@/config/features"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()
  
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path
    }
    return pathname.startsWith(path)
  }
  return (
    <header className="container mx-auto flex h-16 items-center justify-between px-4">
      <div className="flex items-center space-x-2">
        <Terminal className="text-emerald-500" />
        <span className="text-3xl font-bold honk text-white">mcpz</span>
        <span className="text-3xl font-bold honk text-emerald-500">it!</span>
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
            <HybridLink 
              feature="blog" 
              className="hover:text-emerald-400 transition-colors"
            >
              Blog
            </HybridLink>
          </li>
          {/* <li>
            <HybridLink 
              feature="roadmap" 
              className="hover:text-emerald-400 transition-colors"
            >
              Roadmap
            </HybridLink>
          </li>
          <li>
            <HybridLink 
              feature="discover" 
              className="hover:text-emerald-400 transition-colors"
            >
              Discover
            </HybridLink>
            </li>
          <li>
            <Link href="https://github.com/jasonkneen/mcpz/discussions/" className="hover:text-emerald-400 transition-colors">
              Community
            </Link>
          </li> */}
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