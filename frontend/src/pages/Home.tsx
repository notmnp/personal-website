import { Navbar } from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { ChatDock } from '@/components/ChatDock'
import { Linkedin, FileText, Github } from 'lucide-react'
import { cn } from '@/lib/utils'
import { About } from '@/components/About'
import { Experiences } from '@/components/Experiences'
import { Projects } from '@/components/Projects'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <main className="relative overflow-hidden">
        {/* Subtle minimal background system */}
        <div className="absolute inset-0 -z-10">
          {/* Barely visible depth orb - top right */}
          <div className="absolute -top-96 -right-96 w-[800px] h-[800px] bg-gradient-to-bl from-zinc-100/50 to-transparent dark:from-zinc-800/35 rounded-full blur-3xl" />
          
          {/* Subtle bottom accent */}
          <div className="absolute -bottom-96 -left-96 w-[700px] h-[700px] bg-gradient-to-tr from-zinc-50/60 to-transparent dark:from-zinc-900/45 rounded-full blur-3xl" />
          
          {/* Minimal center glow */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-transparent via-zinc-50/35 to-transparent dark:via-zinc-900/25 rounded-full blur-3xl" />
          
          {/* Paper texture overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-50/70 via-transparent to-zinc-50/45 dark:from-zinc-950/70 dark:via-transparent dark:to-zinc-950/45" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 py-20 -mt-20">
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
            
            <div className="relative z-20 p-16 animate-in fade-in slide-in-from-bottom-6 duration-1000 ease-out">
            {/* Status Badge */}
            <div className="mb-12">
              <a href="mailto:mpattni@uwaterloo.ca" className="inline-block">
                <div className="inline-flex items-center gap-2 border border-zinc-200 dark:border-zinc-700/50 rounded-full px-4 py-2 bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer backdrop-blur-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 whitespace-nowrap">
                    Seeking Winter 2026 Internships!
                  </span>
                </div>
              </a>
            </div>

            <h1 
              className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-zinc-900 dark:text-zinc-100 drop-shadow-lg transition-none mb-8"
              style={{ fontFamily: 'TheBouquetList, serif' }}
            >
              Milan Pattni
            </h1>
            <p className="max-w-md text-lg text-zinc-700 dark:text-zinc-300 transition-none mb-12">
              Currently coding, cramming, and caffeinating at the University of Waterloo.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="default" size="lg" className="rounded-xl bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-zinc-100 dark:text-zinc-900 border-0 shadow-lg backdrop-blur-sm transition-all duration-200">
              <a href="https://www.linkedin.com/in/pattni" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-700 hover:bg-white dark:hover:bg-zinc-800 shadow-lg transition-all duration-200">
              <a href="https://drive.google.com/file/d/1PbCPMxl7v5ztaInkgy_vCxyGc2hIEsrI/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <FileText className="w-4 h-4 mr-2" />
                Resume
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-700 hover:bg-white dark:hover:bg-zinc-800 shadow-lg transition-all duration-200">
              <a href="https://github.com/notmnp" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            </div>
            </div>
          </div>
        </div>

        <div className="h-20"></div>
      </main>

      <About />

      <Experiences />

      <Projects />

      <Footer />

      <ChatDock />
    </>
  )
}