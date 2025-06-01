import { Navbar } from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { ChatDock } from '@/components/ChatDock'
import { Linkedin, FileText, Github } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <main className="relative overflow-hidden">
        {/* Modern gradient background system */}
        <div className="absolute inset-0 -z-10">
          {/* Primary gradient orb - top right */}
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-bl from-blue-500/20 via-indigo-500/15 to-purple-600/10 rounded-full blur-3xl" />
          
          {/* Secondary gradient orb - bottom left */}
          <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-gradient-to-tr from-violet-500/15 via-purple-500/10 to-blue-500/8 rounded-full blur-2xl" />
          
          {/* Subtle center highlight for depth */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-transparent via-indigo-50/5 to-transparent dark:via-indigo-950/8 rounded-full blur-3xl" />
          
          {/* Ambient mesh overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.05)_0%,transparent_50%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.08)_0%,transparent_50%)]" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 -mt-20">
          <div className="relative flex items-center justify-center w-full max-w-4xl mx-auto">
            <div
              className={cn(
                "absolute inset-0 rounded-3xl",
                "[background-size:40px_40px]",
                "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                "[mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
              )}
            />
            
            <div className="relative z-20 p-12 animate-in fade-in slide-in-from-bottom-6 duration-1000 ease-out">
            {/* Status Badge */}
            <div className="mb-8 md:mb-12">
              <a href="mailto:mpattni@uwaterloo.ca" className="inline-block">
                <div className="inline-flex items-center gap-2 border border-zinc-200 dark:border-zinc-700/50 rounded-full px-4 py-2 bg-zinc-50/50 dark:bg-zinc-900/50 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/70 transition-all duration-200 cursor-pointer">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 whitespace-nowrap">
                    Seeking Winter 2026 Internships
                  </span>
                </div>
              </a>
            </div>

            <h1 
              className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-zinc-900 dark:text-zinc-100 drop-shadow-lg transition-none"
              style={{ fontFamily: 'TheBouquetList, serif' }}
            >
              Milan Pattni
            </h1>
            <p className="mt-6 md:mt-12 max-w-md text-lg text-zinc-700 dark:text-zinc-300 transition-none">
              Currently coding, cramming, and caffeinating at the University of Waterloo.
            </p>

            <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild variant="default" size="lg" className="rounded-xl transition-none">
              <a href="https://www.linkedin.com/in/pattni" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-xl transition-none">
              <a href="https://drive.google.com/file/d/1PbCPMxl7v5ztaInkgy_vCxyGc2hIEsrI/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <FileText className="w-4 h-4 mr-2" />
                Resume
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-xl transition-none">
              <a href="https://github.com/notmnp" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            </div>
            </div>
          </div>
        </div>


        <div className="h-100"></div>
      </main>

      <ChatDock />
    </>
  )
}