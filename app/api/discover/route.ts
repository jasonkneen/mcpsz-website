import { NextRequest, NextResponse } from 'next/server';

// Configure the route for static generation with revalidation
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

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

// Sample repository data for different platforms
const repositories: Record<string, RepositoryItem[]> = {
  'valtown': [
    {
      id: 'val-mcp-tools',
      name: 'MCP Tools Collection',
      description: 'A collection of MCP tools for Valtown serverless functions.',
      author: 'valtown-community',
      type: 'MCP',
      technologies: ['JavaScript', 'TypeScript', 'MCP'],
      activity: {
        stars: 145,
        commits: 67,
        lastUpdated: '2025-03-05'
      },
      url: 'https://www.valtown.com/val-mcp-tools'
    },
    {
      id: 'val-image-processor',
      name: 'Image Processing SLOP',
      description: 'A SLOP for image processing that can be wrapped as an MCP.',
      author: 'image-ai',
      type: 'SLOP',
      technologies: ['JavaScript', 'Canvas API', 'SLOP'],
      activity: {
        stars: 98,
        commits: 42,
        lastUpdated: '2025-02-28'
      },
      url: 'https://www.valtown.com/val-image-processor'
    }
  ],
  'codesandbox': [
    {
      id: 'mcp-react-components',
      name: 'MCP React Components',
      description: 'React components for building MCP-enabled applications.',
      author: 'react-mcp',
      type: 'MCP',
      technologies: ['React', 'TypeScript', 'MCP'],
      activity: {
        stars: 167,
        commits: 89,
        lastUpdated: '2025-03-10'
      },
      url: 'https://codesandbox.io/s/mcp-react-components'
    },
    {
      id: 'slop-data-visualizer',
      name: 'Data Visualization SLOP',
      description: 'A SLOP for data visualization that can be converted to MCP.',
      author: 'data-viz',
      type: 'SLOP',
      technologies: ['JavaScript', 'D3.js', 'SLOP'],
      activity: {
        stars: 112,
        commits: 56,
        lastUpdated: '2025-03-02'
      },
      url: 'https://codesandbox.io/s/slop-data-visualizer'
    }
  ],
  'npm': [
    {
      id: 'mcp-server-template',
      name: 'MCP Server Template',
      description: 'A starter template for creating MCP servers with TypeScript.',
      author: 'mcpz-team',
      type: 'MCP',
      technologies: ['TypeScript', 'Node.js', 'MCP'],
      activity: {
        stars: 128,
        commits: 47,
        lastUpdated: '2025-02-28'
      },
      url: 'https://github.com/mcpz-team/mcp-server-template'
    },
    {
      id: 'mcp-client-sdk',
      name: 'MCP Client SDK',
      description: 'A client SDK for interacting with MCP servers.',
      author: 'mcpz-team',
      type: 'MCP',
      technologies: ['TypeScript', 'Node.js', 'MCP'],
      activity: {
        stars: 156,
        commits: 73,
        lastUpdated: '2025-03-08'
      },
      url: 'https://github.com/mcpz-team/mcp-client-sdk'
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
    }
  ],
  'pip': [
    {
      id: 'mcp-python-sdk',
      name: 'MCP Python SDK',
      description: 'Python SDK for creating and consuming MCP services.',
      author: 'python-mcp-team',
      type: 'MCP',
      technologies: ['Python', 'MCP'],
      activity: {
        stars: 134,
        commits: 61,
        lastUpdated: '2025-03-07'
      },
      url: 'https://github.com/python-mcp-team/mcp-python-sdk'
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
  ],
  'github': [
    {
      id: 'mcp-gateway',
      name: 'MCP Gateway',
      description: 'A gateway for routing requests to multiple MCP servers.',
      author: 'mcp-community',
      type: 'MCP',
      technologies: ['TypeScript', 'Node.js', 'MCP'],
      activity: {
        stars: 178,
        commits: 83,
        lastUpdated: '2025-03-09'
      },
      url: 'https://github.com/mcp-community/mcp-gateway'
    },
    {
      id: 'mcp-tools-collection',
      name: 'MCP Tools Collection',
      description: 'A collection of tools for working with MCPs.',
      author: 'mcp-community',
      type: 'MCP',
      technologies: ['TypeScript', 'JavaScript', 'MCP'],
      activity: {
        stars: 203,
        commits: 97,
        lastUpdated: '2025-03-12'
      },
      url: 'https://github.com/mcp-community/mcp-tools-collection'
    },
    {
      id: 'slop-to-mcp-converter',
      name: 'SLOP to MCP Converter',
      description: 'Tool for converting SLOPs to MCPs.',
      author: 'mcp-community',
      type: 'MCP',
      technologies: ['TypeScript', 'JavaScript', 'MCP', 'SLOP'],
      activity: {
        stars: 167,
        commits: 72,
        lastUpdated: '2025-03-08'
      },
      url: 'https://github.com/mcp-community/slop-to-mcp-converter'
    }
  ]
};

/**
 * GET handler for the discover API
 * 
 * This API returns repositories for a given platform and optional search query.
 * 
 * Query parameters:
 * - platform: The platform to get repositories for (valtown, codesandbox, npm, pip, github)
 * - search: Optional search query to filter repositories
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const platform = searchParams.get('platform');
  const search = searchParams.get('search');

  // If no platform is specified, return an error
  if (!platform) {
    return NextResponse.json(
      { error: 'Platform parameter is required' },
      { status: 400 }
    );
  }

  // Get repositories for the specified platform
  const platformRepos = repositories[platform.toLowerCase()];

  // If the platform doesn't exist, return an error
  if (!platformRepos) {
    return NextResponse.json(
      { error: `Platform '${platform}' not found` },
      { status: 404 }
    );
  }

  // Filter repositories by search query if provided
  let filteredRepos = platformRepos;
  if (search) {
    const searchLower = search.toLowerCase();
    filteredRepos = platformRepos.filter(repo => 
      repo.name.toLowerCase().includes(searchLower) ||
      repo.description.toLowerCase().includes(searchLower) ||
      repo.technologies.some(tech => tech.toLowerCase().includes(searchLower))
    );
  }

  // Sort repositories by type (MCP first, then SLOP, then others)
  // and then by stars (most stars first)
  filteredRepos.sort((a, b) => {
    if (a.type === 'MCP' && b.type !== 'MCP') return -1;
    if (a.type !== 'MCP' && b.type === 'MCP') return 1;
    if (a.type === 'SLOP' && b.type === 'other') return -1;
    if (a.type === 'other' && b.type === 'SLOP') return 1;
    
    // If same type, sort by activity (stars)
    return b.activity.stars - a.activity.stars;
  });

  // Return the filtered and sorted repositories
  return NextResponse.json({ repositories: filteredRepos });
}

/**
 * POST handler for MCP creation
 * 
 * This API simulates the creation of an MCP from a SLOP.
 * In a real implementation, this would connect to a service that performs the conversion.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { repoId, platform } = body;

    // Validate required fields
    if (!repoId || !platform) {
      return NextResponse.json(
        { error: 'Repository ID and platform are required' },
        { status: 400 }
      );
    }

    // Get repositories for the specified platform
    const platformRepos = repositories[platform.toLowerCase()];
    if (!platformRepos) {
      return NextResponse.json(
        { error: `Platform '${platform}' not found` },
        { status: 404 }
      );
    }

    // Find the repository
    const repo = platformRepos.find(r => r.id === repoId);
    if (!repo) {
      return NextResponse.json(
        { error: `Repository '${repoId}' not found` },
        { status: 404 }
      );
    }

    // Check if it's a SLOP (only SLOPs can be converted to MCPs)
    if (repo.type !== 'SLOP') {
      return NextResponse.json(
        { error: `Repository '${repoId}' is not a SLOP and cannot be converted to an MCP` },
        { status: 400 }
      );
    }

    // In a real implementation, this would trigger the MCP creation process
    // For now, we'll just return a success message with a template
    return NextResponse.json({
      success: true,
      message: `Successfully created MCP template for ${repo.name}`,
      template: {
        name: `${repo.name.replace('SLOP', 'MCP')}`,
        description: `MCP wrapper for ${repo.name}`,
        author: repo.author,
        technologies: [...repo.technologies.filter(t => t !== 'SLOP'), 'MCP'],
        sourceRepo: repo.url,
        mcpTemplate: {
          server: {
            name: `${repo.id}-mcp`,
            version: "1.0.0",
            tools: [
              {
                name: "main",
                description: `Main functionality of ${repo.name}`,
                inputSchema: {
                  type: "object",
                  properties: {
                    // This would be generated based on the SLOP's API
                    input: {
                      type: "string",
                      description: "Input parameter"
                    }
                  },
                  required: ["input"]
                }
              }
            ]
          }
        }
      }
    });
  } catch (error) {
    console.error('Error processing MCP creation request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}