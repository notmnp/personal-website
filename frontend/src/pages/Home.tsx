import { Navbar } from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { ChatDock } from '@/components/ChatDock'
import { Linkedin, FileText, Github } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <main className="relative overflow-hidden">
        {/* AI-themed gradient blob */}
        <div className="absolute -top-48 -left-48 w-[700px] h-[700px] bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-400 rounded-full opacity-30 blur-[80px] pointer-events-none -z-10" />        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-zinc-900 dark:text-zinc-100 drop-shadow-lg">
            Milan Pattni
          </h1>
          <p className="mt-4 max-w-lg text-lg text-zinc-700 dark:text-zinc-300">
            Currently coding, cramming, and caffeinating at the University of Waterloo.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild variant="default" size="lg" className="rounded-xl">
            <a href="https://www.linkedin.com/in/pattni" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-xl">
            <a href="https://drive.google.com/file/d/1PbCPMxl7v5ztaInkgy_vCxyGc2hIEsrI/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <FileText className="w-4 h-4 mr-2" />
              Resume
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-xl">
            <a href="https://github.com/notmnp" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
          </div>
        </div>
      </main>

      {/* Chat Dock */}
      <ChatDock />
    </>
  )
}