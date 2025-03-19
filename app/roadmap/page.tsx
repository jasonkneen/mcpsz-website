'use client'

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Terminal, Calendar, User, Clock, ArrowRight, Github, ChevronUp, ChevronDown } from "lucide-react"
import { AnimatedTerminal } from "@/components/animated-terminal"
import { MediaCarousel } from "@/components/media-carousel"
import { features } from "@/config/features"
import { TiltPanel } from "@/components/tilt-panel"

// Define types for our timeline items
interface TimelineItem {
  id: string;
  title: string;
  version: string;
  date: string;
  status: 'past' | 'current' | 'upcoming';
  description: string;
  features: string[];
}

// Configuration for the roadmap
const roadmapConfig = {
  carouselRotationInterval: 5000,
  initialAutoRotate: true,
};

// Sample timeline data
const timelineItems: TimelineItem[] = [
  {
    id: 'initial-release',
    title: 'Initial Release',
    version: 'v1.0',
    date: 'January 15, 2025',
    status: 'past',
    description: 'First public release of mcpz CLI',
    features: [
      'Basic MCP server management',
      'Tool listing and filtering',
      'Command-line interface',
    ],
  },
  {
    id: 'group-management',
    title: 'Group Management',
    version: 'v1.5',
    date: 'February 20, 2025',
    status: 'current',
    description: 'Intelligent tool grouping and organization',
    features: [
      'Create and manage tool groups',
      'Smart group suggestions',
      'Token usage optimization',
    ],
  },
  {
    id: 'cloud-integration',
    title: 'Cloud Integration',
    version: 'v2.0',
    date: 'April 15, 2025',
    status: 'upcoming',
    description: 'Sync your settings across devices',
    features: [
      'Cloud-based configuration',
      'Team sharing capabilities',
      'Version control for settings',
    ],
  },
  {
    id: 'agent-framework',
    title: 'Agent Framework',
    version: 'v2.5',
    date: 'June 30, 2025',
    status: 'upcoming',
    description: 'Transform MCP servers into autonomous agents',
    features: [
      'Agent orchestration',
      'Multi-agent workflows',
      'Custom agent behaviors',
      'Agent marketplace',
    ],
  },
];

export default function Roadmap() {
  // State for active timeline item
  const [activeItemId, setActiveItemId] = useState<string>(
    timelineItems.find(item => item.status === 'current')?.id || timelineItems[0].id
  );
  
  
  // Refs for scrolling to timeline items
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  
  // Scroll to active item when it changes
  useEffect(() => {
    if (itemRefs.current[activeItemId]) {
      itemRefs.current[activeItemId]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [activeItemId]);
  
  // Navigate to previous timeline item
  const handlePreviousItem = () => {
    const currentIndex = timelineItems.findIndex(item => item.id === activeItemId);
    if (currentIndex > 0) {
      setActiveItemId(timelineItems[currentIndex - 1].id);
    }
  };
  
  // Navigate to next timeline item
  const handleNextItem = () => {
    const currentIndex = timelineItems.findIndex(item => item.id === activeItemId);
    if (currentIndex < timelineItems.length - 1) {
      setActiveItemId(timelineItems[currentIndex + 1].id);
    }
  };
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };
  
  // Get status badge component
  const getStatusBadge = (status: TimelineItem['status']) => {
    switch (status) {
      case 'past':
        return (
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-700 text-gray-300">
            Completed
          </span>
        );
      case 'current':
        return (
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-emerald-900 text-emerald-300">
            Current
          </span>
        );
      case 'upcoming':
        return (
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-800 text-gray-400">
            Upcoming
          </span>
        );
      default:
        return null;
    }
  };
  
  return (
    <div>



        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>
          
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-emerald-900/30 text-emerald-400 text-sm font-medium rounded-full">
              Roadmap
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Product Roadmap</h1>
          
          <p className="text-xl text-gray-400 mb-12 max-w-3xl">
            Explore our product roadmap to see what we've delivered and what's coming next. We're constantly working to improve mcpz with new features and enhancements.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-3 mb-16 max-w-5xl mx-auto">
              {/* Removed redundant title */}

              {/* Timeline Section */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Feature Releases</h2>
                  <p className="text-gray-400 mb-8">
                    Our roadmap shows our journey so far and our plans for the future. We're committed to continuously improving mcpz with new features and enhancements.
                  </p>
                  
                  <div className="space-y-4">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start" 
                      onClick={handlePreviousItem}
                    >
                      <ChevronUp className="mr-2 h-4 w-4" />
                      Previous Release
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start" 
                      onClick={handleNextItem}
                    >
                      <ChevronDown className="mr-2 h-4 w-4" />
                      Next Release
                    </Button>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <div className="space-y-8">
                    {timelineItems.map((item, index) => (
                      <div 
                        key={item.id}
                        ref={el => { itemRefs.current[item.id] = el }}
                        className={`relative ${index < timelineItems.length - 1 ? 'pb-8' : ''}`}
                      >
                        {/* Timeline line */}
                        {index < timelineItems.length - 1 && (
                          <div className="absolute left-5 top-5 h-full w-0.5 bg-gray-800"></div>
                        )}

                        {/* Timeline node */}
                        <div className="flex items-start">
                          <div 
                            className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10 ${
                              activeItemId === item.id
                                ? 'bg-emerald-500'
                                : item.status === 'past'
                                ? 'bg-gray-700'
                                : 'bg-gray-800'
                            }`}
                          >
                            {item.status === 'past' && <Clock className="h-5 w-5 text-gray-300" />}
                            {item.status === 'current' && <Clock className="h-5 w-5 text-white" />}
                            {item.status === 'upcoming' && <Clock className="h-5 w-5 text-gray-400" />}
                          </div>
                          
                          <TiltPanel className={`ml-6 p-6 rounded-lg border w-full min-w-[500px] ${
                            activeItemId === item.id
                              ? 'bg-gray-900 border-emerald-900'
                              : 'bg-gray-900 border-gray-800'
                          }`}>
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="text-xl font-bold">{item.title} <span className="text-sm font-normal text-gray-400">{item.version}</span></h3>
                              </div>
                              <div className="ml-4">
                                {getStatusBadge(item.status)}
                              </div>
                            </div>
                            
                            <p className="text-gray-400 mb-4">{item.description}</p>
                            
                            <div className="flex items-center text-sm text-gray-500 mb-4">
                              <Calendar className="mr-2 h-4 w-4" />
                              <span>{formatDate(item.date)}</span>
                            </div>
                            
                            <h4 className="font-medium mb-2">Key Features:</h4>
                            <ul className="space-y-2">
                              {item.features.map((feature, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="mr-2 mt-1.5 h-2 w-2 rounded-full bg-emerald-500"></span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </TiltPanel>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}