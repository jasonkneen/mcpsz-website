'use client'

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Terminal, Calendar, User, Clock, ArrowRight, Github, ChevronUp, ChevronDown } from "lucide-react"
import { AnimatedTerminal } from "@/components/animated-terminal"
import { TiltPanel } from "@/components/tilt-panel"

// Define types for our timeline items
interface TimelineItem {
  id: string;
  title: string;
  description: string;
  date: string; // ISO date string
  status: 'past' | 'current' | 'upcoming';
  features: string[]; // List of features in this release
}

// Sample roadmap data
const roadmapItems: TimelineItem[] = [
  {
    id: 'v1.0',
    title: 'Initial Release',
    description: 'First public release of mcpsx CLI',
    date: '2025-01-15',
    status: 'past',
    features: [
      'Basic MCP server management',
      'Tool listing and filtering',
      'Command-line interface'
    ]
  },
  {
    id: 'v1.5',
    title: 'Group Management',
    description: 'Intelligent tool grouping and organization',
    date: '2025-02-20',
    status: 'current',
    features: [
      'Create and manage tool groups',
      'Smart group suggestions',
      'Token usage optimization'
    ]
  },
  {
    id: 'v2.0',
    title: 'Cloud Integration',
    description: 'Sync your settings across devices',
    date: '2025-04-15',
    status: 'upcoming',
    features: [
      'Cloud-based configuration',
      'Team sharing capabilities',
      'Advanced analytics'
    ]
  },
  {
    id: 'v2.5',
    title: 'Advanced Workflows',
    description: 'Create and manage complex AI workflows',
    date: '2025-06-30',
    status: 'upcoming',
    features: [
      'Visual workflow editor',
      'Conditional tool execution',
      'Workflow templates'
    ]
  },
  {
    id: 'v3.0',
    title: 'Enterprise Features',
    description: 'Advanced features for large teams',
    date: '2025-09-15',
    status: 'upcoming',
    features: [
      'Role-based access control',
      'Audit logging',
      'Enterprise SSO integration',
      'Advanced usage analytics'
    ]
  },
  {
    id: 'v3.5',
    title: 'AI-Powered Optimization',
    description: 'Intelligent optimization of MCP tools',
    date: '2025-12-01',
    status: 'upcoming',
    features: [
      'AI-powered tool recommendations',
      'Automatic context optimization',
      'Usage pattern analysis',
      'Performance optimization'
    ]
  }
];

// Configuration for the roadmap
const roadmapConfig = {
  currentItemId: 'v1.5', // Set the current version
  carouselAutoRotate: true,
  carouselRotationInterval: 5000, // 5 seconds
};

// Define media item types
interface MediaItem {
  type: 'image' | 'terminal';
  src?: string;
  alt?: string;
}

export default function Roadmap() {
  // State for the carousel
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(roadmapConfig.carouselAutoRotate);
  const autoRotateIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // State for the timeline
  const [currentItemId, setCurrentItemId] = useState(roadmapConfig.currentItemId);
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  
  // Media items for the carousel (VSCode images and terminal)
  const mediaItems: MediaItem[] = [
    { type: 'image', src: '/vscode1.png', alt: 'VSCode Screenshot 1' },
    { type: 'terminal' },
    { type: 'image', src: '/vscode2.png', alt: 'VSCode Screenshot 2' },
  ];
  
  // Set up auto-rotation for the carousel
  useEffect(() => {
    if (isAutoRotating) {
      autoRotateIntervalRef.current = setInterval(() => {
        setActiveMediaIndex((prev) => (prev + 1) % mediaItems.length);
      }, roadmapConfig.carouselRotationInterval);
    }
    
    return () => {
      if (autoRotateIntervalRef.current) {
        clearInterval(autoRotateIntervalRef.current);
      }
    };
  }, [isAutoRotating, mediaItems.length]);
  
  // Scroll to the current item when it changes
  useEffect(() => {
    const currentItemRef = itemRefs.current[currentItemId];
    if (currentItemRef && timelineRef.current) {
      const timelineRect = timelineRef.current.getBoundingClientRect();
      const itemRect = currentItemRef.getBoundingClientRect();
      
      // Calculate the scroll position to center the item
      const scrollTop = itemRect.top - timelineRect.top - (timelineRect.height / 2) + (itemRect.height / 2);
      
      timelineRef.current.scrollTo({
        top: scrollTop + timelineRef.current.scrollTop,
        behavior: 'smooth'
      });
    }
  }, [currentItemId]);
  
  // Handle carousel navigation
  const handleCarouselNav = (index: number) => {
    setActiveMediaIndex(index);
    
    // Reset auto-rotation timer when manually navigating
    if (autoRotateIntervalRef.current) {
      clearInterval(autoRotateIntervalRef.current);
    }
    
    if (isAutoRotating) {
      autoRotateIntervalRef.current = setInterval(() => {
        setActiveMediaIndex((prev) => (prev + 1) % mediaItems.length);
      }, roadmapConfig.carouselRotationInterval);
    }
  };
  
  // Toggle auto-rotation
  const toggleAutoRotate = () => {
    setIsAutoRotating(!isAutoRotating);
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
            <li>
              <Link href="/blog" className="text-emerald-400 transition-colors">
                Blog
              </Link>
            </li>
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
        <article className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <Link href="/blog" className="inline-flex items-center text-emerald-400 hover:text-emerald-300">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="mb-12">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-emerald-900 text-emerald-300 mb-4">
                  Roadmap
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">mcpsx Product Roadmap</h1>
                
                <p className="text-xl text-gray-400 mb-8 max-w-3xl">
                  Explore our product roadmap to see what we've delivered and what's coming next. We're constantly working to improve mcpsx with new features and enhancements.
                </p>
              </div>

              {/* Media Carousel Section */}
              <div className="mb-16">
                <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
                  <div className="relative aspect-video">
                    {mediaItems.map((item, index) => (
                      <div 
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 ${
                          activeMediaIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                      >
                        {item.type === 'image' ? (
                          <Image
                            src={item.src || ''}
                            alt={item.alt || ''}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full">
                            <AnimatedTerminal className="h-full" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {/* Carousel Navigation */}
                  <div className="flex justify-center p-4 bg-gray-950 border-t border-gray-800">
                    <div className="flex space-x-2">
                      {mediaItems.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => handleCarouselNav(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            activeMediaIndex === index ? 'bg-emerald-500' : 'bg-gray-700 hover:bg-gray-600'
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                    
                    <button
                      onClick={toggleAutoRotate}
                      className={`ml-4 text-xs px-2 py-1 rounded ${
                        isAutoRotating 
                          ? 'bg-emerald-900 text-emerald-300' 
                          : 'bg-gray-800 text-gray-400'
                      }`}
                    >
                      {isAutoRotating ? 'Auto-rotate: On' : 'Auto-rotate: Off'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Timeline Section */}
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <div className="sticky top-8">
                    <h2 className="text-2xl font-bold mb-4">Development Timeline</h2>
                    <p className="text-gray-400 mb-6">
                      Our roadmap shows our journey so far and our plans for the future. We're committed to continuously improving mcpsx with new features and enhancements.
                    </p>
                    
                    <div className="flex flex-col space-y-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="justify-start"
                        onClick={() => {
                          const currentIndex = roadmapItems.findIndex(item => item.id === currentItemId);
                          if (currentIndex > 0) {
                            setCurrentItemId(roadmapItems[currentIndex - 1].id);
                          }
                        }}
                        disabled={currentItemId === roadmapItems[0].id}
                      >
                        <ChevronUp className="mr-2 h-4 w-4" />
                        Previous Release
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        className="justify-start"
                        onClick={() => {
                          const currentIndex = roadmapItems.findIndex(item => item.id === currentItemId);
                          if (currentIndex < roadmapItems.length - 1) {
                            setCurrentItemId(roadmapItems[currentIndex + 1].id);
                          }
                        }}
                        disabled={currentItemId === roadmapItems[roadmapItems.length - 1].id}
                      >
                        <ChevronDown className="mr-2 h-4 w-4" />
                        Next Release
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div 
                  ref={timelineRef}
                  className="md:col-span-8 relative max-h-[800px] overflow-y-auto pr-4"
                >
                  {/* Timeline track */}
                  <div className="absolute left-0 top-8 bottom-0 w-px bg-gray-800"></div>
                  
                  {/* Timeline items */}
                  <div className="space-y-16 pb-16 pl-8">
                    {roadmapItems.map((item) => (
                      <div 
                        key={item.id}
                        ref={(el: HTMLDivElement | null) => { itemRefs.current[item.id] = el; }}
                        className={`relative transition-opacity duration-500 ${
                          item.id === currentItemId ? 'opacity-100' : 'opacity-70'
                        }`}
                      >
                        {/* Timeline node */}
                        <div 
                          className={`absolute left-0 -translate-x-[17px] top-6 w-8 h-8 rounded-full flex items-center justify-center ${
                            item.status === 'current' 
                              ? 'bg-emerald-500 border-4 border-emerald-900' 
                              : item.status === 'past'
                                ? 'bg-emerald-900 border-2 border-emerald-700'
                                : 'bg-gray-800 border-2 border-gray-700'
                          }`}
                        >
                          {item.status === 'current' && (
                            <div className="absolute w-4 h-4 bg-emerald-500 rounded-full animate-ping opacity-75"></div>
                          )}
                        </div>
                        
                        {/* Timeline content */}
                        <TiltPanel className={`bg-gray-900 p-6 rounded-lg border ${
                          item.status === 'current' 
                            ? 'border-emerald-800' 
                            : item.status === 'past'
                              ? 'border-emerald-950'
                              : 'border-gray-800'
                        } hover:border-emerald-700 transition-colors`}>
                          <div className="flex justify-between items-center mb-3">
                            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                              item.status === 'current' 
                                ? 'bg-emerald-900 text-emerald-300' 
                                : item.status === 'past'
                                  ? 'bg-emerald-950 text-emerald-400'
                                  : 'bg-gray-800 text-gray-300'
                            }`}>
                              {item.status === 'current' ? 'Current' : item.status === 'past' ? 'Released' : 'Upcoming'}
                            </span>
                            <span className="text-sm text-gray-500">
                              {new Date(item.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                              })}
                            </span>
                          </div>
                          
                          <h3 className="text-xl font-bold mb-2 flex items-center">
                            {item.title}
                            <span className="ml-2 text-sm font-normal text-gray-500">{item.id}</span>
                          </h3>
                          
                          <p className="text-gray-400 mb-4">{item.description}</p>
                          
                          <h4 className="font-semibold mb-2 text-sm text-emerald-400">Key Features:</h4>
                          <ul className="space-y-1 text-gray-300">
                            {item.features.map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-2"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </TiltPanel>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
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