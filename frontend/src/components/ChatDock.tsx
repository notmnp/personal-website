import React, { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { ArrowUp, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { generateInitialPrompt } from '@/lib/prompts'

interface Message {
  role: 'user' | 'bot'
  content: string
}

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY
if (!apiKey) throw new Error('Gemini API key not found')

const genAI = new GoogleGenerativeAI(apiKey)
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-lite-preview-02-05' })

export const ChatDock: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const [chat] = useState(() => {
    const chat = model.startChat({
      generationConfig: {
        maxOutputTokens: 2048,
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      },
    })
    chat.sendMessage(generateInitialPrompt())
    return chat
  })

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isLoading])

  const handleSend = async () => {
    if (!input.trim()) return

    if (!isExpanded) {
      setIsExpanded(true)
    }

    setMessages(prev => [...prev, { role: 'user', content: input }])
    const currentInput = input
    setInput('')
    setIsLoading(true)

    try {
      const result = await chat.sendMessage(currentInput)
      const response = await result.response
      setMessages(prev => [...prev, { role: 'bot', content: response.text() }])
    } catch (error) {
      console.error('Error:', error)
      setMessages(prev => [...prev, { role: 'bot', content: 'Sorry, I encountered an error. Please try again.' }])
    }

    setIsLoading(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
    if (e.key === 'Escape') {
      setIsExpanded(false)
      setInput('')
    }
  }

  const handleClose = () => {
    setIsExpanded(false)
    setInput('')
  }

  return (
    <div className={cn(
      "fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50",
      "bg-background/95 dark:bg-background/20 backdrop-blur-3xl",
      "border border-border/50 dark:border-white/10 rounded-[2rem] lg:rounded-[2.5rem] shadow-2xl",
      "flex flex-col",
      isExpanded && "transition-[width,height] duration-500 ease-out",
      "w-[95vw] max-w-2xl w-[85vw] max-w-[700px]",
      isExpanded 
        ? "h-[85vh] max-h-[600px]" 
        : "h-16 lg:h-20"
    )}>
      
      {/* Header with close button - only when expanded */}
      {isExpanded && (
        <div className="flex-shrink-0 flex items-center justify-between p-4 border-b border-border/50 dark:border-white/5">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-8 h-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0078D4_0%,rgba(0,120,212,0.3)_50%,transparent_100%)] rounded-full opacity-40 blur-sm" />
              <div className="relative w-4 h-4 bg-[#0078D4] rounded-full" />
            </div>
            <div>
              <h2 className="font-medium text-sm text-foreground/90">Chat with Milan</h2>
              <p className="text-xs text-muted-foreground/70">Powered by Google</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            className="h-8 w-8 rounded-full hover:bg-accent text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}

      {/* Messages area - scrollable */}
      {isExpanded && (
        <div className="flex-1 overflow-y-auto p-5 space-y-4 min-h-0">
          {messages.length === 0 && !isLoading ? (
            <div className="flex h-full items-center justify-center">
              <div className="text-center space-y-3">
                <div className="relative mx-auto w-12 h-12">
                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,#0078D4_0%,rgba(0,120,212,0.3)_50%,transparent_100%)] opacity-40 blur-sm" />
                  <div className="relative flex items-center justify-center w-full h-full">
                    <div className="w-6 h-6 bg-[#0078D4] rounded-full" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-[#0078D4] via-[#2B88D8] to-[#0078D4] bg-clip-text text-transparent">
                    Let's chat!
                  </h3>
                  <p className="text-sm text-muted-foreground/70">
                    Ask me anything about my background or interests
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <>
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300",
                    message.role === 'user' && "flex-row-reverse"
                  )}
                >
                  <div
                    className={cn(
                      "px-4 py-3 max-w-[85%] rounded-2xl text-sm",
                      message.role === 'user'
                        ? "bg-[#0078D4] text-white rounded-br-md"
                        : "bg-muted/50 dark:bg-white/10 backdrop-blur-sm rounded-bl-md border border-border/30 dark:border-white/5"
                    )}
                  >
                    <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
                      {message.content}
                    </pre>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="px-4 py-3 rounded-2xl rounded-bl-md bg-muted/50 dark:bg-white/10 backdrop-blur-sm border border-border/30 dark:border-white/5">
                    <div className="flex items-center gap-2 h-5">
                      <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-[bounce_1.4s_ease-in-out_infinite]" />
                      <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-[bounce_1.4s_ease-in-out_infinite_0.2s]" />
                      <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-[bounce_1.4s_ease-in-out_infinite_0.4s]" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>
      )}

      {/* Input area - always at bottom, never moves */}
      <div className={cn(
        "flex-shrink-0 p-3 lg:p-4 h-16 lg:h-20",
        isExpanded && "border-t border-border/50 dark:border-white/5"
      )}>
        <div className={cn(
          "relative flex items-center h-full",
          !isExpanded && "justify-center"
        )}>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything..."
            className={cn(
              "w-full px-4 pr-12 rounded-full transition-[box-shadow] duration-200",
              "bg-muted/30 dark:bg-white/5 backdrop-blur-sm",
              "border border-border/50 dark:border-white/10",
              "text-foreground placeholder:text-muted-foreground/60",
              "focus:outline-none focus:ring-2 focus:ring-[#0078D4]/50 focus:border-transparent",
              "h-10 lg:h-12 text-sm sm:text-base"
            )}
          />
          <Button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            size="icon"
            className={cn(
              "absolute right-2 top-1/2 transform -translate-y-1/2",
              "bg-[#0078D4] hover:bg-[#006CBE] transition-transform duration-200 active:scale-95",
              "disabled:opacity-50 h-7 w-7 sm:h-8 sm:w-8 rounded-full"
            )}
          >
            <ArrowUp className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
          </Button>
        </div>
      </div>
    </div>
  )
} 