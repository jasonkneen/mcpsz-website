import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Terminal, Calendar, User, Clock } from "lucide-react"

export default function Blog() {
  return (
    <div className="flex min-h-screen flex-col text-white">
      <header className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Terminal className="h-6 w-6 text-emerald-400" />
          <span className="text-xl font-bold">mcpsx</span>
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
              <Link href="/blog" className="text-emerald-400 transition-colors">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Tutorials</h1>
              <p className="text-xl text-gray-400 mb-12 max-w-3xl">
                Discover the latest news, tutorials, and insights about mcpsx and Context Protocol optimization.
              </p>

              <div className="grid gap-12 mb-16">
                <h2 className="text-2xl font-bold border-b border-gray-800 pb-4">Featured Articles</h2>
                
                <div className="grid gap-8 md:grid-cols-2">
                  <BlogCard 
                    title="Getting Started with mcpsx: A Comprehensive Guide"
                    excerpt="Learn how to set up mcpsx, create your first tool groups, and optimize your AI workflows in this step-by-step tutorial."
                    date="March 10, 2025"
                    author="Jason Kneen"
                    readTime="8 min read"
                    category="Tutorial"
                    slug="/blog/getting-started-with-mcpsx"
                    featured={true}
                  />
                  <BlogCard 
                    title="How We Reduced Token Usage by 70% with Intelligent Grouping"
                    excerpt="A case study on how our team implemented mcpsx's grouping feature to dramatically reduce API costs while improving response quality."
                    date="March 5, 2025"
                    author="Sarah Chen"
                    readTime="6 min read"
                    category="Case Study"
                    slug="/blog/token-usage-reduction-case-study"
                    featured={true}
                  />
                </div>
              </div>

              <div className="grid gap-12 mb-16">
                <h2 className="text-2xl font-bold border-b border-gray-800 pb-4">Latest Tutorials</h2>
                
                <div className="grid gap-8 md:grid-cols-3">
                  <BlogCard 
                    title="Creating Custom Tool Groups for Different Projects"
                    excerpt="Learn how to organize your MCP tools into project-specific groups for maximum efficiency."
                    date="March 8, 2025"
                    author="Michael Rodriguez"
                    readTime="5 min read"
                    category="Tutorial"
                    slug="/blog/custom-tool-groups"
                  />
                  <BlogCard 
                    title="Integrating mcpsx with Claude and GPT Models"
                    excerpt="A step-by-step guide to connecting mcpsx with popular AI models for optimal performance."
                    date="March 3, 2025"
                    author="Jennifer Kwon"
                    readTime="7 min read"
                    category="Tutorial"
                    slug="/blog/integrating-with-ai-models"
                  />
                  <BlogCard 
                    title="Advanced MCP Server Configuration Techniques"
                    excerpt="Dive deep into advanced configuration options to customize your MCP server setup."
                    date="February 28, 2025"
                    author="Jason Kneen"
                    readTime="10 min read"
                    category="Advanced"
                    slug="/blog/advanced-configuration"
                  />
                </div>
              </div>

              <div className="grid gap-12">
                <h2 className="text-2xl font-bold border-b border-gray-800 pb-4">News & Updates</h2>
                
                <div className="grid gap-8 md:grid-cols-3">
                  <BlogCard 
                    title="Announcing mcpsx Pro: Enhanced Features for Teams"
                    excerpt="Introducing our Pro plan with cloud syncing, advanced analytics, and team collaboration features."
                    date="March 12, 2025"
                    author="Jason Kneen"
                    readTime="4 min read"
                    category="Announcement"
                    slug="/blog/announcing-mcpsx-pro"
                  />
                  <BlogCard 
                    title="mcpsx v2.0 Release Notes"
                    excerpt="Explore all the new features, improvements, and bug fixes in our latest major release."
                    date="February 20, 2025"
                    author="Development Team"
                    readTime="6 min read"
                    category="Release"
                    slug="/blog/v2-release-notes"
                  />
                  <BlogCard 
                    title="The Future of Context Protocol Management"
                    excerpt="Our vision for the future of MCP tools and how mcpsx is evolving to meet the changing needs of AI developers."
                    date="February 15, 2025"
                    author="Jason Kneen"
                    readTime="8 min read"
                    category="Vision"
                    slug="/blog/future-of-mcp"
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
              <p className="text-gray-400 text-sm">The intelligent Context Protocol management platform that optimizes AI interactions, reduces token usage by up to 70%, and transforms how developers work with AI tools.</p>
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
                  <Link href="/blog/changelog" className="hover:text-emerald-400">
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link href="/blog/roadmap" className="hover:text-emerald-400">
                    Roadmap
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
                  <Link href="/docs/tutorials" className="hover:text-emerald-400">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-emerald-400">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/jasonkneen/mcpsx/issues" className="hover:text-emerald-400">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/blog/about" className="hover:text-emerald-400">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog/careers" className="hover:text-emerald-400">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog/contact" className="hover:text-emerald-400">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/blog/privacy" className="hover:text-emerald-400">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Jason Kneen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  slug: string;
  featured?: boolean;
}

function BlogCard({ title, excerpt, date, author, readTime, category, slug, featured = false }: BlogCardProps) {
  return (
    <div className={`bg-gray-900 rounded-lg border ${featured ? 'border-emerald-800' : 'border-gray-800'} overflow-hidden hover:border-emerald-700 transition-colors`}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${featured ? 'bg-emerald-900 text-emerald-300' : 'bg-gray-800 text-gray-300'}`}>
            {category}
          </span>
        </div>
        <Link href={slug}>
          <h3 className="text-xl font-bold mb-3 hover:text-emerald-400 transition-colors">{title}</h3>
        </Link>
        <p className="text-gray-400 mb-4">{excerpt}</p>
        <div className="flex items-center text-sm text-gray-500">
          <div className="flex items-center mr-4">
            <User className="h-4 w-4 mr-1" />
            <span>{author}</span>
          </div>
          <div className="flex items-center mr-4">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </div>
  )
}