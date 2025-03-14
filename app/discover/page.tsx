'use client'

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Terminal, Search, Code, Package, Github, ExternalLink, Server } from "lucide-react"
import { features } from "@/config/features"
import { TiltPanel } from "@/components/tilt-panel"

// Define types for our platform items
interface PlatformItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  type: 'package-manager' | 'dev-environment' | 'version-control' | 'other';
}

// Define types for repository items
interface RepositoryItem {
  id: string;
  name: string;
  description: string;
  author: string;
  type: 'MCP' | 'SLOP' | 'other';
  technologies: string[];
  activity: {
    stars: number;
    commits: number;
    lastUpdated: string;
  };
  url: string;
}

// Sample platform data
const platformItems: PlatformItem[] = [
  {
    id: 'valtown',
    name: 'Valtown',
    icon: <Server className="h-6 w-6 text-emerald-400" />,
    description: 'A cloud platform for running serverless JavaScript functions with MCP support.',
    type: 'dev-environment'
  },
  {
    id: 'codesandbox',
    name: 'CodeSandbox',
    icon: <Code className="h-6 w-6 text-emerald-400" />,
    description: 'Online code editor and development environment with MCP integration.',
    type: 'dev-environment'
  },
  {
    id: 'npm',
    name: 'npm',
    icon: <Package className="h-6 w-6 text-emerald-400" />,
    description: 'Node.js package manager with a growing collection of MCP packages.',
    type: 'package-manager'
  },
  {
    id: 'pip',
    name: 'pip',
    icon: <Package className="h-6 w-6 text-emerald-400" />,
    description: 'Python package manager with MCP libraries and tools.',
    type: 'package-manager'
  },
  {
    id: 'github',
    name: 'GitHub',
    icon: <Github className="h-6 w-6 text-emerald-400" />,
    description: 'Find MCP repositories and projects on the leading version control platform.',
    type: 'version-control'
  }
];

// Sample repository data (would be fetched from API in real implementation)
const sampleRepositories: RepositoryItem[] = [
  {
    id: 'mcp-server-template',
    name: 'MCP Server Template',
    description: 'A starter template for creating MCP servers with TypeScript.',
    author: 'mcpsx-team',
    type: 'MCP',
    technologies: ['TypeScript', 'Node.js', 'MCP'],
    activity: {
      stars: 128,
      commits: 47,
      lastUpdated: '2025-02-28'
    },
    url: 'https://github.com/mcpsx-team/mcp-server-template'
  },
  {
    id: 'slop-weather-api',
    name: 'Weather API SLOP',
    description: 'A SLOP wrapper for weather API services that can be converted to MCP.',
    author: 'weather-tools',
    type: 'SLOP',
    technologies: ['JavaScript', 'API', 'SLOP'],
    activity: {
      stars: 86,
      commits: 32,
      lastUpdated: '2025-03-01'
    },
    url: 'https://github.com/weather-tools/weather-api-slop'
  },
  {
    id: 'image-processing-mcp',
    name: 'Image Processing MCP',
    description: 'MCP server for image processing and manipulation.',
    author: 'image-ai',
    type: 'MCP',
    technologies: ['Python', 'OpenCV', 'MCP'],
    activity: {
      stars: 215,
      commits: 89,
      lastUpdated: '2025-03-10'
    },
    url: 'https://github.com/image-ai/image-processing-mcp'
  }
];

export default function DiscoverPage() {
  // State for selected platform
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  // State for search query
  const [searchQuery, setSearchQuery] = useState('');
  // State for filtered repositories
  const [repositories, setRepositories] = useState<RepositoryItem[]>([]);
  // State for loading
  const [loading, setLoading] = useState(false);
  // State for error
  const [error, setError] = useState<string | null>(null);
  // State for expanded repository
  const [expandedRepo, setExpandedRepo] = useState<string | null>(null);

  // Fetch repositories when platform or search query changes
  useEffect(() => {
    if (!selectedPlatform) {
      setRepositories([]);
      return;
    }

    const fetchRepositories = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Build the API URL with query parameters
        const url = new URL('/api/discover', window.location.origin);
        url.searchParams.append('platform', selectedPlatform);
        if (searchQuery) {
          url.searchParams.append('search', searchQuery);
        }
        
        // Fetch repositories from the API
        const response = await fetch(url.toString());
        
        if (!response.ok) {
          throw new Error(`Error fetching repositories: ${response.statusText}`);
        }
        
        const data = await response.json();
        setRepositories(data.repositories || []);
      } catch (err) {
        console.error('Error fetching repositories:', err);
        setError('Failed to fetch repositories. Please try again later.');
        setRepositories([]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchRepositories();
  }, [selectedPlatform, searchQuery]);

  // Toggle repository expansion
  const toggleRepoExpansion = (repoId: string) => {
    if (expandedRepo === repoId) {
      setExpandedRepo(null);
    } else {
      setExpandedRepo(repoId);
    }
  };

  // Handle platform selection
  const handlePlatformSelect = (platformId: string) => {
    setSelectedPlatform(platformId);
  };

  // Handle install action
  const handleInstall = (repo: RepositoryItem) => {
    // In a real implementation, this would provide installation instructions
    console.log(`Installing ${repo.name}`);
  };

  // Handle create MCP action
  const handleCreateMCP = async (repo: RepositoryItem) => {
    try {
      const response = await fetch('/api/discover', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          repoId: repo.id,
          platform: selectedPlatform,
        }),
      });
      
      if (!response.ok) {
        throw new Error(`Error creating MCP: ${response.statusText}`);
      }
      
      const data = await response.json();
      console.log('MCP creation response:', data);
      
      // In a real implementation, we would show a success message or redirect to the new MCP
      alert(`Successfully created MCP template for ${repo.name}`);
    } catch (err) {
      console.error('Error creating MCP:', err);
      alert('Failed to create MCP. Please try again later.');
    }
  };

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
            {features.discover && (
              <li>
                <Link href="/discover" className="text-emerald-400 transition-colors">
                  Discover
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
            <Link href="/#install">Get Started</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>
          
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-emerald-900/30 text-emerald-400 text-sm font-medium rounded-full">
              Discover
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover MCP Resources</h1>
          
          <p className="text-xl text-gray-400 mb-12 max-w-3xl">
            Explore a curated collection of Model Context Protocol (MCP) resources from popular development platforms, package managers, and version control systems. Find, install, or create MCPs to enhance your AI workflows.
          </p>

          {/* Search Bar */}
          <div className="relative mb-12 max-w-2xl">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input 
              type="search" 
              className="block w-full p-4 pl-10 text-sm border rounded-lg bg-gray-900 border-gray-700 placeholder-gray-400 text-white focus:ring-emerald-500 focus:border-emerald-500" 
              placeholder="Search for MCPs, SLOPs, or repositories..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Platform Grid */}
          <h2 className="text-2xl font-bold mb-6">Popular Platforms</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {platformItems.map((platform) => (
              <TiltPanel 
                key={platform.id}
                className={`p-6 rounded-lg border hover-shimmer cursor-pointer ${
                  selectedPlatform === platform.id 
                    ? 'bg-gray-800 border-emerald-600' 
                    : 'bg-gray-900 border-gray-800 hover:border-emerald-900'
                }`}
                onClick={() => handlePlatformSelect(platform.id)}
              >
                <div className="flex items-center mb-4">
                  {platform.icon}
                  <h3 className="text-xl font-bold ml-2">{platform.name}</h3>
                </div>
                <p className="text-gray-400 mb-4">{platform.description}</p>
                <div className="flex justify-between items-center">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-800 text-gray-300">
                    {platform.type === 'dev-environment' && 'Development Environment'}
                    {platform.type === 'package-manager' && 'Package Manager'}
                    {platform.type === 'version-control' && 'Version Control'}
                    {platform.type === 'other' && 'Platform'}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-emerald-400 hover:text-emerald-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </TiltPanel>
            ))}
          </div>

          {/* Repository List */}
          {selectedPlatform && (
            <>
              <h2 className="text-2xl font-bold mb-6">
                {platformItems.find(p => p.id === selectedPlatform)?.name} Repositories
              </h2>
              {loading ? (
                <div className="flex justify-center items-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
                </div>
              ) : error ? (
                <div className="text-center py-12 bg-gray-900 rounded-lg border border-gray-800">
                  <p className="text-red-400">{error}</p>
                </div>
              ) : (
                <div className="space-y-6 mb-16">
                  {repositories.length > 0 ? (
                    repositories.map((repo) => (
                      <div 
                        key={repo.id}
                        className={`p-6 rounded-lg border transition-all duration-200 ${
                          expandedRepo === repo.id
                            ? 'bg-gray-800 border-emerald-600'
                            : 'bg-gray-900 border-gray-800 hover:border-gray-700'
                        }`}
                      >
                        <div 
                          className="flex justify-between items-start cursor-pointer"
                          onClick={() => toggleRepoExpansion(repo.id)}
                        >
                          <div>
                            <div className="flex items-center mb-2">
                              <h3 className="text-xl font-bold">{repo.name}</h3>
                              <span className={`ml-3 px-2 py-1 text-xs font-semibold rounded-full ${
                                repo.type === 'MCP' 
                                  ? 'bg-emerald-900 text-emerald-300' 
                                  : repo.type === 'SLOP'
                                  ? 'bg-blue-900 text-blue-300'
                                  : 'bg-gray-800 text-gray-300'
                              }`}>
                                {repo.type}
                              </span>
                            </div>
                            <p className="text-gray-400">{repo.description}</p>
                          </div>
                          <div className="flex flex-col items-end">
                            <div className="flex items-center text-sm text-gray-500 mb-2">
                              <span className="mr-4">⭐ {repo.activity.stars}</span>
                              <span>🔄 {repo.activity.commits} commits</span>
                            </div>
                            <span className="text-xs text-gray-600">
                              Updated: {new Date(repo.activity.lastUpdated).toLocaleDateString()}
                            </span>
                          </div>
                        </div>

                        {/* Expanded content */}
                        {expandedRepo === repo.id && (
                          <div className="mt-6 pt-6 border-t border-gray-800">
                            <div className="mb-4">
                              <h4 className="text-sm font-semibold mb-2">Technologies</h4>
                              <div className="flex flex-wrap gap-2">
                                {repo.technologies.map((tech, index) => (
                                  <span 
                                    key={index}
                                    className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-800 text-gray-300"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="mb-4">
                              <h4 className="text-sm font-semibold mb-2">Author</h4>
                              <span className="text-gray-400">{repo.author}</span>
                            </div>
                            <div className="flex space-x-4 mt-6">
                              {repo.type === 'MCP' ? (
                                <Button 
                                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
                                  onClick={() => handleInstall(repo)}
                                >
                                  Install
                                </Button>
                              ) : (
                                <Button 
                                  className="bg-blue-600 hover:bg-blue-700 text-white"
                                  onClick={() => handleCreateMCP(repo)}
                                >
                                  Create MCP
                                </Button>
                              )}
                              <Button
                                variant="outline"
                                className="border-gray-700 bg-transparent text-white hover:bg-gray-800"
                                asChild
                              >
                                <Link href={repo.url} target="_blank" rel="noopener noreferrer">
                                  View Repository
                                </Link>
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12 bg-gray-900 rounded-lg border border-gray-800">
                      <p className="text-gray-400">No repositories found. Try adjusting your search.</p>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </main>
      
      <footer className="bg-gray-950 py-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Terminal className="h-5 w-5 text-emerald-400" />
              <span className="font-bold">mcpsx</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">© {new Date().getFullYear()} CyberFish Ltd. All rights reserved.</p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="https://github.com/jasonkneen/mcpsx" className="text-gray-400 hover:text-emerald-400">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}