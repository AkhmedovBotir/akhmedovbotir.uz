"use client"

import { useState, useEffect, useRef } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog"
import { Button } from "./ui/button"

interface TerminalModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function TerminalModal({ isOpen, onClose }: TerminalModalProps) {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)

  const commands = {
    help: () => [
      "┌─────────────────────────────────────────────────────────────┐",
      "│                    AVAILABLE COMMANDS                       │",
      "├─────────────────────────────────────────────────────────────┤",
      "│  help          - Show this help message                    │",
      "│  whoami        - Display user information                  │",
      "│  skills        - Show technical skills                     │",
      "│  experience    - Display work experience                   │",
      "│  projects      - List recent projects                      │",
      "│  contact       - Show contact information                  │",
      "│  clear         - Clear terminal screen                     │",
      "│  exit          - Close terminal                            │",
      "│  ls            - List directory contents                   │",
      "│  pwd           - Print working directory                   │",
      "│  date          - Display current date and time             │",
      "│  uname         - Display system information                │",
      "└─────────────────────────────────────────────────────────────┘"
    ],
    whoami: () => [
      "┌─────────────────────────────────────────────────────────────┐",
      "│                    USER INFORMATION                         │",
      "├─────────────────────────────────────────────────────────────┤",
      "│  Username:     botir                                       │",
      "│  Full Name:    Botir                                      │",
      "│  Role:         Full Stack Developer & IT Mentor           │",
      "│  Location:     Andijon, Uzbekistan                        │",
      "│  Experience:   3+ years                                   │",
      "│  Specialization: React, Node.js, React Native, Mobile Apps│",
      "│  Shell:        /bin/bash                                  │",
      "│  Home:         /home/botir                                │",
      "└─────────────────────────────────────────────────────────────┘"
    ],
    skills: () => [
      "┌─────────────────────────────────────────────────────────────┐",
      "│                    TECHNICAL SKILLS                         │",
      "├─────────────────────────────────────────────────────────────┤",
      "│  Frontend:                                                  │",
      "│    ✓ React, Next.js, TypeScript                            │",
      "│    ✓ Tailwind CSS, Ant Design, Material-UI                 │",
      "│    ✓ Vue.js, PWA, Electron.js                              │",
      "│                                                             │",
      "│  Backend:                                                   │",
      "│    ✓ Node.js, Express.js, PHP                              │",
      "│    ✓ GraphQL, Socket.io, Handlebars                        │",
      "│    ✓ Sequelize ORM                                         │",
      "│                                                             │",
      "│  Database:                                                  │",
      "│    ✓ MongoDB, MySQL, PostgreSQL                            │",
      "│    ✓ SQLite, Redis                                         │",
      "│                                                             │",
      "│  Mobile:                                                    │",
      "│    ✓ React Native, Expo                                    │",
      "│                                                             │",
      "│  DevOps:                                                    │",
      "│    ✓ Docker, Nginx, Apache                                 │",
      "│    ✓ PM2, Vercel                                           │",
      "│    ✓ Git, GitHub, GitLab                                   │",
      "└─────────────────────────────────────────────────────────────┘"
    ],
    experience: () => [
      "Current Position:",
      "  Sarget Academy - Mentor & Full Stack Developer (2025 May - Present)",
      "  • Teaching 50+ students in IT courses",
      "  • Creating unified management system",
      "  • Developing CRM and ERP modules",
      "",
      "Previous Experience:",
      "  Winstrike - Full Stack & Mobile Developer (2024 Nov - 2025 Mar)",
      "  • Developed Mixmall e-commerce platform",
      "  • Created mobile apps for couriers and customers",
      "  • Built admin panels and OrzuCRM integration",
      "",
      "  Andijon Teri-Tanosil Dispanseri - IT Specialist (2024 Feb - 2025 Oct)",
      "  • Implemented medical electronic systems",
      "  • Developed small projects with Next.js and Node.js",
      "",
      "  Barkamol Avlod - IT Mentor (2022 Sep - 2023 Feb)",
      "  • Taught computer literacy and programming basics",
      "  • Developed web projects for the institution",
      "",
      "  Digital City - Frontend Developer Intern (2022 May - 2022 Sep)",
      "  • Worked on ReactJS projects",
      "  • Developed sports portal with news, accessories, tournaments"
    ],
    projects: () => [
      "Recent Projects:",
      "  • CRM System - Multi-level management system for stores",
      "  • Marketplace with Installment Payment Service",
      "  • Taxi Service App - Similar to Yandex Go and MyTaxi",
      "  • Cat Trading & Service App - For buying/selling cats in Uzbekistan",
      "  • Store Automation System - Complete automation with reports",
      "  • Ramadan Calendar App - Prayer times and calendar",
      "",
      "Technologies Used:",
      "  • React, Node.js, React Native",
      "  • MySQL, MongoDB, PostgreSQL",
      "  • Express.js, Socket.io, GraphQL"
    ],
    contact: () => [
      "┌─────────────────────────────────────────────────────────────┐",
      "│                    CONTACT INFORMATION                      │",
      "├─────────────────────────────────────────────────────────────┤",
      "│  Email:        botircoders@gmail.com                       │",
      "│  Phone:        +998 93 228 18 84                           │",
      "│  Phone:        +998 88 273 17 18                           │",
      "│  Location:     Andijon viloyati, Uzbekistan                │",
      "│  GitHub:       github.com/AkhmedovBotir                    │",
      "│  LinkedIn:     linkedin.com/in/ahmedov-botir-uz            │",
      "│  Telegram:     t.me/botircode                              │",
      "│                                                             │",
      "│  Available for:                                             │",
      "│    ✓ Web Development Projects                               │",
      "│    ✓ Mobile App Development                                │",
      "│    ✓ IT Mentoring & Training                               │",
      "│    ✓ System Integration                                    │",
      "│    ✓ Telegram Bot Development                              │",
      "│    ✓ API Development                                       │",
      "└─────────────────────────────────────────────────────────────┘"
    ],
    clear: () => [],
    exit: () => [
      "┌─────────────────────────────────────────────────────────────┐",
      "│                    TERMINAL CLOSED                          │",
      "├─────────────────────────────────────────────────────────────┤",
      "│  Thank you for using Botir's Portfolio Terminal!           │",
      "│  Goodbye and see you next time!                            │",
      "│                                                             │",
      "│  Contact: botircoders@gmail.com                            │",
      "│  GitHub: github.com/AkhmedovBotir                          │",
      "│  Telegram: t.me/botircode                                  │",
      "└─────────────────────────────────────────────────────────────┘"
    ],
    ls: () => [
      "┌─────────────────────────────────────────────────────────────┐",
      "│                    DIRECTORY CONTENTS                       │",
      "├─────────────────────────────────────────────────────────────┤",
      "│  drwxr-xr-x  2 botir botir 4096 Jan 15 10:30 .            │",
      "│  drwxr-xr-x  3 root root  4096 Jan 15 10:00 ..            │",
      "│  -rw-r--r--  1 botir botir 1024 Jan 15 10:25 skills.txt   │",
      "│  -rw-r--r--  1 botir botir 2048 Jan 15 10:20 projects.txt │",
      "│  -rw-r--r--  1 botir botir 1536 Jan 15 10:15 experience.txt│",
      "│  -rw-r--r--  1 botir botir  512 Jan 15 10:10 contact.txt  │",
      "│  -rw-r--r--  1 botir botir  256 Jan 15 10:05 about.txt    │",
      "└─────────────────────────────────────────────────────────────┘"
    ],
    pwd: () => ["/home/botir/portfolio"],
    date: () => [
      `Current date and time: ${new Date().toLocaleString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
      })}`
    ],
    uname: () => [
      "┌─────────────────────────────────────────────────────────────┐",
      "│                    SYSTEM INFORMATION                       │",
      "├─────────────────────────────────────────────────────────────┤",
      "│  System:     Kali Linux 2024.1                             │",
      "│  Kernel:     6.1.0-kali7-amd64                            │",
      "│  Architecture: x86_64                                      │",
      "│  Hostname:   kali-terminal                                  │",
      "│  User:       botir                                         │",
      "│  Shell:      /bin/bash                                     │",
      "│  Terminal:   xterm-256color                                │",
      "└─────────────────────────────────────────────────────────────┘"
    ]
  }

  const executeCommand = (cmd: string) => {
    const command = cmd.trim().toLowerCase()
    const output = (commands as any)[command] ? (commands as any)[command]() : [
      `┌─────────────────────────────────────────────────────────────┐`,
      `│                    COMMAND NOT FOUND                        │`,
      `├─────────────────────────────────────────────────────────────┤`,
      `│  Command '${cmd}' not found.                                │`,
      `│  Type 'help' to see available commands.                    │`,
      `└─────────────────────────────────────────────────────────────┘`
    ]
    
    setHistory(prev => [...prev, `botir@kali:~$ ${cmd}`, ...output, ""])
    setInput("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (input.trim() === "exit") {
        onClose()
        return
      }
      executeCommand(input)
    }
  }

  const typeWelcomeMessage = () => {
    const welcome = [
      "╔═══════════════════════════════════════════════════════════════╗",
      "║                    KALI LINUX TERMINAL                        ║",
      "║                                                               ║",
      "║  Welcome to Botir's Portfolio Terminal Interface              ║",
      "║  Type 'help' to see available commands                        ║",
      "║  Type 'whoami' to learn about me                              ║",
      "║                                                               ║",
      "╚═══════════════════════════════════════════════════════════════╝",
      "",
      "botir@kali:~$  "
    ]
    
    let index = 0
    setIsTyping(true)
    
    const typeNext = () => {
      if (index < welcome.length) {
        setHistory(prev => [...prev, welcome[index]])
        index++
        setTimeout(typeNext, 50)
      } else {
        setIsTyping(false)
      }
    }
    
    typeNext()
  }

  useEffect(() => {
    if (isOpen) {
      setHistory([])
      setInput("")
      // Delay welcome message to prevent hydration issues
      setTimeout(() => {
        typeWelcomeMessage()
      }, 100)
    }
  }, [isOpen])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-[1400px] h-[700px] bg-black border-2 border-green-400/50 rounded-none p-0 overflow-hidden">
        <DialogHeader className="bg-gray-900 border-b border-green-400/30 p-0">
          <DialogTitle className="text-green-400 font-mono flex items-center justify-between p-4 text-sm">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full border border-red-400"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full border border-yellow-400"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full border border-green-400"></div>
              </div>
              <span className="text-green-400">botir@kali:~/portfolio</span>
            </div>
            <div className="text-gray-400 text-xs pr-5">
              Kali Linux Terminal v2.0
            </div>
          </DialogTitle>
          <DialogDescription className="sr-only">
            Interactive terminal interface for Botir's portfolio. Use commands like help, whoami, skills, experience, projects, and contact to explore the portfolio.
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex-1 bg-black text-green-400 font-mono text-sm overflow-hidden relative">
          {/* Terminal background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-20 grid-rows-20 h-full">
              {Array.from({ length: 400 }).map((_, i) => (
                <div key={i} className="border border-green-400/10"></div>
              ))}
            </div>
          </div>
          
          <div 
            ref={terminalRef}
            className="h-full overflow-y-auto p-4 space-y-0 relative z-10"
            style={{ 
              background: 'linear-gradient(135deg, #000000 0%, #001100 50%, #000000 100%)',
              fontFamily: 'Consolas, Monaco, "Courier New", monospace'
            }}
          >
            {history.map((line, index) => (
              <div 
                key={index} 
                className="whitespace-pre-wrap leading-tight"
                style={{ 
                  color: line.includes('┌') || line.includes('│') || line.includes('└') || line.includes('╔') || line.includes('║') || line.includes('╚') 
                    ? '#00ff00' 
                    : line.includes('botir@kali:~$ ') 
                      ? '#00ff88' 
                      : '#00ff00',
                  textShadow: '0 0 5px rgba(0, 255, 0, 0.3)'
                }}
              >
                {line}
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center">
                <span className="animate-pulse text-green-400" style={{ textShadow: '0 0 10px #00ff00' }}>█</span>
              </div>
            )}
            {!isTyping && (
              <div className="flex items-center">
                <span className="text-green-400 font-bold pr-2" style={{ textShadow: '0 0 5px #00ff00' }}>botir@kali:~$  </span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="bg-transparent text-green-400 outline-none flex-1 font-mono"
                  style={{ 
                    textShadow: '0 0 5px rgba(0, 255, 0, 0.3)',
                    caretColor: '#00ff00'
                  }}
                  autoFocus
                />
                <span className="animate-pulse text-green-400" style={{ textShadow: '0 0 10px #00ff00' }}>█</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="bg-gray-900 border-t border-green-400/30 p-3 flex justify-between items-center">
          <div className="text-green-400 font-mono text-xs">
            <span className="text-gray-400">Status:</span> Ready | 
            <span className="text-gray-400"> Mode:</span> Interactive | 
            <span className="text-gray-400"> User:</span> botir
          </div>
          <Button 
            onClick={onClose}
            className="bg-red-600 hover:bg-red-700 text-white font-mono text-xs px-3 py-1 rounded-none border border-red-500"
          >
            [X] Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
