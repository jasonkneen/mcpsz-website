'use client'

import React, { useState, useEffect, useRef } from 'react'

interface AnimatedTerminalProps {
  className?: string
}

export function AnimatedTerminal({ className = '' }: AnimatedTerminalProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]) // Lines already displayed
  const [isAnimating, setIsAnimating] = useState(false) // Whether animation is in progress
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<NodeJS.Timeout | null>(null)
  const currentSetRef = useRef(0)
  const currentLineRef = useRef(0)
  const isTypingRef = useRef(false)
  const currentTextRef = useRef('')

  // Fixed command sets
  const commandSets = [
    // Command set 1 (from command1.txt)
    [
      '$ mcpsx run',
      '✓ Connecting to MCP clients...',
      '✓ Found 3 MCP servers in settings',
      '✓ Connected to neural-memory',
      '✓ Listed 9 tools from memory',
      '✓ Connected to prompt-master',
      '✓ Listed 3 tools from prompt-master',
      '✓ Connected to notification-server',
      '✓ Listed 2 tools from notification-server',
      '✓ Connected to 3 MCP clients',
      '✓ 4 Groups loaded, 3 ignored',
      '✓ 6 tools added by AI based on codebase and recent commits',
      '✓ 2 virtual servers created for current context',
      '✓ Tools organised by frequency of use and last used in this code base',
      '✓ Server started successfully on stdio',
      'Ready to handle requests',
      '$'
    ],
    // Command set 2 (from command2.txt)
    [
      '$ mcpsx list tools',
      '┌─────────────────────────────────────────┐',
      '│ Memory Tools                            │',
      '├─────────────────────────────────────────┤',
      '│ memory_create_entities                  │',
      '│ memory_create_relations                 │',
      '│ memory_add_observations                 │',
      '│ memory_delete_entities                  │',
      '│ memory_delete_observations              │',
      '│ memory_delete_relations                 │',
      '│ memory_read_graph                       │',
      '│ memory_search_nodes                     │',
      '│ memory_open_nodes                       │',
      '└─────────────────────────────────────────┘',
      '┌─────────────────────────────────────────┐',
      '│ Prompt Tools                            │',
      '├─────────────────────────────────────────┤',
      '│ prompt-master_get_prompt                │',
      '│ prompt-master_generate_prompt           │',
      '│ prompt-master_save_prompt               │',
      '└─────────────────────────────────────────┘',
      '┌─────────────────────────────────────────┐',
      '│ Notification Tools                      │',
      '├─────────────────────────────────────────┤',
      '│ notification-server_send_notification   │',
      '│ notification-server_broadcast_status    │',
      '└─────────────────────────────────────────┘',
      '$'
    ],
    // Command set 3 (from command3.txt)
    [
      '$ mcpsx create-group web-dev',
      '✓ Creating new group: web-dev',
      '✓ Group created successfully',
      '✓ Adding tools to group...',
      '✓ Added 3 tools from \'code-indexer\'',
      '✓ Added 2 tools from \'file-operations\'',
      '✓ Added 4 tools from \'web-tools\'',
      '✓ Group \'web-dev\' created with 9 tools',
      '$ mcpsx list-groups',
      '┌─────────────────────────────────────────┐',
      '│ Available Groups                        │',
      '├─────────────────────────────────────────┤',
      '│ default                                 │',
      '│ memory                                  │',
      '│ prompts                                 │',
      '│ notifications                           │',
      '│ web-dev                                 │',
      '└─────────────────────────────────────────┘',
      '$'
    ]
  ];

  // Clean up animation on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, []);

  // Start animation when component mounts
  useEffect(() => {
    startAnimation();
  }, []);

  // Ensure terminal scrolls to bottom when content changes
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [displayedLines]);

  // Start the terminal animation
  const startAnimation = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setDisplayedLines([]);
    currentSetRef.current = 0;
    currentLineRef.current = 0;
    isTypingRef.current = false;
    currentTextRef.current = '';
    
    // Start the animation loop
    animateNextStep();
  };

  // Main animation loop
  const animateNextStep = () => {
    const currentSet = currentSetRef.current;
    const currentLine = currentLineRef.current;
    const commandSet = commandSets[currentSet];
    
    // Check if we've reached the end of all command sets
    if (currentSet >= commandSets.length) {
      // Reset to the first command set
      currentSetRef.current = 0;
      currentLineRef.current = 0;
      isTypingRef.current = false;
      currentTextRef.current = '';
      
      // Clear the terminal and start over after a delay
      animationRef.current = setTimeout(() => {
        setDisplayedLines([]);
        animateNextStep();
      }, 3000);
      
      return;
    }
    
    // Check if we've reached the end of the current command set
    if (currentLine >= commandSet.length) {
      // Move to the next command set after a delay
      animationRef.current = setTimeout(() => {
        currentSetRef.current = currentSet + 1;
        currentLineRef.current = 0;
        isTypingRef.current = false;
        currentTextRef.current = '';
        animateNextStep();
      }, 5000);
      
      return;
    }
    
    const line = commandSet[currentLine];
    
    // Check if this is a command line (starts with $)
    if (line.startsWith('$') && !isTypingRef.current) {
      // Start typing the command
      isTypingRef.current = true;
      currentTextRef.current = '';
      typeCommandCharByChar(line, 0);
      return;
    }
    
    // If we're not typing a command, this is an output line
    if (!isTypingRef.current) {
      // Add the output line to the displayed lines
      setDisplayedLines(prev => [...prev, line]);
      currentLineRef.current = currentLine + 1;
      
      // Continue to the next line after a delay
      animationRef.current = setTimeout(animateNextStep, 100);
    }
  };

  // Type a command character by character
  const typeCommandCharByChar = (command: string, charIndex: number) => {
    if (charIndex <= command.length) {
      // Update the current text
      currentTextRef.current = command.substring(0, charIndex);
      
      // Update the displayed lines with the current text
      setDisplayedLines(prev => {
        // Remove the current typing line if it exists
        const newLines = isTypingRef.current && prev.length > 0 && prev[prev.length - 1].startsWith('$') 
          ? prev.slice(0, -1) 
          : prev;
        
        // Add the current typing line
        return [...newLines, currentTextRef.current];
      });
      
      // Continue typing after a random delay
      const delay = Math.random() * 30 + 50; // Random delay for natural typing
      animationRef.current = setTimeout(() => {
        typeCommandCharByChar(command, charIndex + 1);
      }, delay);
    } else {
      // Command typing complete
      isTypingRef.current = false;
      currentLineRef.current = currentLineRef.current + 1;
      
      // Show blinking cursor for a moment before showing output
      animationRef.current = setTimeout(animateNextStep, 1000);
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`font-mono p-4 text-sm h-[25rem] overflow-y-auto ${className}`}
      style={{ scrollBehavior: 'smooth' }}
    >
      <div>
        {/* Display all lines */}
        {displayedLines.map((line, index) => {
          if (line.startsWith('$')) {
            return (
              <p key={index} className="text-gray-400 mt-2">
                $ <span className="text-white">{line.substring(2)}</span>
                {index === displayedLines.length - 1 && isTypingRef.current && (
                  <span className="animate-pulse ml-0.5">█</span>
                )}
              </p>
            );
          } else if (line.startsWith('✓')) {
            return <p key={index} className="text-emerald-400">{line}</p>;
          } else if (line.includes('─') || line.includes('│')) {
            return <p key={index} className="text-gray-500">{line}</p>;
          } else {
            return <p key={index} className="text-white">{line}</p>;
          }
        })}
        
        {/* Show blinking cursor when idle */}
        {displayedLines.length === 0 && (
          <p className="text-white-400 mt-2">
            <span className="animate-pulse">█</span>
          </p>
        )}
      </div>
    </div>
  );
}