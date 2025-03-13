'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import fs from 'fs/promises'
import path from 'path'

interface AnimatedTerminalProps {
  className?: string
}

export function AnimatedTerminal({ className = '' }: AnimatedTerminalProps) {
  const [commandFiles, setCommandFiles] = useState<string[]>([])
  const [currentFileIndex, setCurrentFileIndex] = useState(0)
  const [displayedLines, setDisplayedLines] = useState<string[]>([]) // Lines already displayed
  const [currentLine, setCurrentLine] = useState('') // Current line being typed
  const [showCursorAfterCommand, setShowCursorAfterCommand] = useState(false) // Show cursor after command
  const [isTypingCommand, setIsTypingCommand] = useState(false) // Whether we're typing a command
  const [isShowingOutput, setIsShowingOutput] = useState(false) // Whether we're showing output lines
  const [outputLineIndex, setOutputLineIndex] = useState(0) // Current output line index
  const [commandLines, setCommandLines] = useState<string[]>([]) // Command lines in current file
  const [outputLines, setOutputLines] = useState<string[][]>([]) // Output lines in current file
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null)
  const commandsRef = useRef<string[][]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const fileLoadedRef = useRef(false)

  // Load command files at initialization
  useEffect(() => {
    async function loadCommandFiles() {
      // For Next.js, we'll use the text files directly
      // This would be done at build time in a real app
      try {
        // Read command files from the terminal-commands directory
        const command1 = await fetch('/terminal-commands/command1.txt')
          .then(response => response.text())
          .then(text => text.split('\n'));
          
        const command2 = await fetch('/terminal-commands/command2.txt')
          .then(response => response.text())
          .then(text => text.split('\n'));
          
        // Initialize with the first two commands
        commandsRef.current = [command1, command2];
        
        // Try to load command3 if it exists
        try {
          const command3 = await fetch('/terminal-commands/command3.txt')
            .then(response => response.text())
            .then(text => text.split('\n'));
            
          commandsRef.current.push(command3);
        } catch (error) {
          console.log('Command3 not found, continuing with just command1 and command2');
        }
        
        // Start with the first command file
        startCommandSet(0);
        fileLoadedRef.current = true
      } catch (error) {
        console.error('Error loading command files:', error)
      }
    }

    loadCommandFiles()
    
    return () => {
      if (typingTimerRef.current) {
        clearTimeout(typingTimerRef.current)
      }
    }
  }, [])

  // Function to prepare and start displaying a command set
  const startCommandSet = (fileIndex: number) => {
    setCurrentFileIndex(fileIndex);
    setDisplayedLines([]);
    setCurrentLine('');
    setIsTypingCommand(false);
    setIsShowingOutput(false);
    setOutputLineIndex(0);
    
    // Split the command file into command lines and output lines
    const allLines = commandsRef.current[fileIndex] || [];
    const commands: string[] = [];
    const outputs: string[][] = [];
    
    let currentOutputs: string[] = [];
    
    // Group lines by command and its outputs
    for (let i = 0; i < allLines.length; i++) {
      const line = allLines[i];
      
      if (line.startsWith('$')) {
        // If we have a previous command with outputs, store them
        if (commands.length > 0 && currentOutputs.length > 0) {
          outputs.push([...currentOutputs]);
          currentOutputs = [];
        }
        
        // Add this command
        commands.push(line);
      } else if (commands.length > 0) {
        // Add this line as output to the current command
        currentOutputs.push(line);
      }
    }
    
    // Add the final outputs if any
    if (currentOutputs.length > 0) {
      outputs.push([...currentOutputs]);
    }
    
    // Start with the first command
    setCommandLines(commands);
    setOutputLines(outputs);
    
    // Start typing the first command
    if (commands.length > 0) {
      typeCommand(commands[0], 0);
    }
  }

  // Type a command character by character
  const typeCommand = (command: string, charIndex: number) => {
    setIsTypingCommand(true);
    
    if (charIndex <= command.length) {
      setCurrentLine(command.substring(0, charIndex));
      
      const delay = Math.random() * 30 + 50; // Random delay for natural typing
      typingTimerRef.current = setTimeout(() => {
        typeCommand(command, charIndex + 1);
      }, delay);
    } else {
      // Command typing complete, add it to displayed lines
      setDisplayedLines(prev => [...prev, command]);
      setCurrentLine(''); 
      setIsTypingCommand(false);
      setShowCursorAfterCommand(true); // Show cursor on the next line after command
      
      // Start showing output lines after a short delay
      setTimeout(() => {
        setShowCursorAfterCommand(false); // Hide cursor when output starts
        setIsShowingOutput(true);
        setOutputLineIndex(0);
        showNextOutputLine(0, 0);
      }, 1000); // Wait a bit longer to show the cursor flashing
    }
  }

  // Show output lines one by one
  const showNextOutputLine = (commandIndex: number, lineIndex: number) => {
    if (!isShowingOutput) return;

    // Get the output lines for the current command
    const outputLinesForCommand = outputLines[commandIndex] || [];

    if (lineIndex < outputLinesForCommand.length) {
      // Add this output line
      setDisplayedLines(prev => [...prev, outputLinesForCommand[lineIndex]]);
      setOutputLineIndex(lineIndex + 1);

      // Scroll container to bottom
      if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }

      // Show next output line after 0.5 seconds
      setTimeout(() => {
        showNextOutputLine(commandIndex, lineIndex + 1);
      }, 500);
    } else if (commandIndex + 1 < commandLines.length) {
      // Move to the next command after a delay
      setTimeout(() => {
        setIsShowingOutput(false);
        typeCommand(commandLines[commandIndex + 1], 0);
      }, 1000);
    } else {
      // We've reached the end of all commands in this set
      // Move to the next command set after 5 seconds
      setTimeout(() => {
        const nextFileIndex = (currentFileIndex + 1) % commandsRef.current.length;
        startCommandSet(nextFileIndex);
      }, 5000);
    }
  }

  // Format the terminal text with proper styling
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [displayedLines, currentLine]);
  
  const formatTerminalText = (text: string) => {
    return text.split('\n').map((line, index) => {
      // Style command lines
      if (line.startsWith('$')) {
        return (
          <p key={index} className="text-gray-400 mt-2">
            $ <span className="text-white">{line.substring(2)}</span>
          </p>
        )
      }
      // Style success messages
      else if (line.startsWith('✓')) {
        return <p key={index} className="text-emerald-400">{line}</p>
      }
      // Style table borders
      else if (line.includes('─') || line.includes('│')) {
        return <p key={index} className="text-gray-500">{line}</p>
      }
      // Style regular text
      else {
        return <p key={index} className="text-white">{line}</p>
      }
    })
  }

  return (
    <div 
      ref={containerRef}
      className={`font-mono p-4 text-sm h-[25rem] overflow-y-auto ${className}`}
      style={{ scrollBehavior: 'smooth' }}
    >
      <div>
        {/* Display all completed lines */}
        {displayedLines.map((line, index) => {
          if (line.startsWith('$')) {
            return (
              <p key={index} className="text-gray-400 mt-2">
                $ <span className="text-white">{line.substring(2)}</span>
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
        
        {/* Display currently typing command */}
        {currentLine && (
          <p className="text-gray-400 mt-2">
            $ <span className="text-white">{currentLine.substring(2)}</span>
            <span className="animate-pulse ml-0.5">█</span>
          </p>
        )}
        
        {/* Blinking cursor after command is typed */}
        {showCursorAfterCommand && (
          <p className="text-white-400 mt-2">
            <span className="animate-pulse">█</span>
          </p>
        )}
        
        {/* Blinking cursor when idle (not typing or showing output) */}
        {!currentLine && !isTypingCommand && !isShowingOutput && !showCursorAfterCommand && (
          <p className="text-white-400 mt-2">
            <span className="animate-pulse">█</span>
          </p>
        )}
      </div>
    </div>
  )
}