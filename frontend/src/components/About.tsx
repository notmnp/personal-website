import { 
  SiPython, SiJavascript, SiTypescript, SiReact, SiNodedotjs, 
  SiHtml5, SiCss3, SiGit, SiGithub, SiDocker, 
  SiPostgresql, SiMongodb, SiRedis, SiGraphql, SiFastapi,
  SiExpress, SiTailwindcss, SiCplusplus
} from 'react-icons/si'
import waterlooLogo from '@/assets/logo_waterloo.png'

export function About() {
  const techStacks = [
    SiPython,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNodedotjs,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiCplusplus,
    SiGit,
    SiGithub,
    SiDocker,
    SiPostgresql,
    SiMongodb,
    SiRedis,
    SiGraphql,
    SiFastapi,
    SiExpress
  ]

  const courses = [
    'Data Structures & Algorithms',
    'Digital Computation', 
    'Digital Logic',
    'AI & Society',
    'Calculus II',
    'Circuits',
    'Sensors & Instrumentation',
    'Computer Structures',
    'Real-Time Systems'
  ]

  // Split tech stacks into two rows for carousel
  const topRowStacks = techStacks.slice(0, Math.ceil(techStacks.length / 2))
  const bottomRowStacks = techStacks.slice(Math.ceil(techStacks.length / 2))

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
          Summary
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 grid-rows-1 md:grid-rows-2 lg:grid-rows-2 gap-6">
        {/* Seeking Internships - 2x1 */}
        <div className="md:col-span-2 lg:col-span-2 md:row-span-1 lg:row-span-1 bg-white/10 dark:bg-zinc-900/30 backdrop-blur-xl border border-white/20 dark:border-zinc-800/50 rounded-2xl p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-500 group flex flex-col justify-center">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mb-2">Status</h3>
              <p className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-100">Seeking Internships</p>
            </div>
            <div className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 text-xs font-medium rounded-full border border-zinc-200 dark:border-zinc-700">
              Winter 2026
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center text-zinc-600 dark:text-zinc-400">
                <div className="w-2 h-2 bg-zinc-500 dark:bg-zinc-400 rounded-full mr-3"></div>
                <span className="text-sm">Actively seeking 4-month co-op opportunities</span>
            </div>
            <div className="flex items-center text-zinc-600 dark:text-zinc-400">
              <div className="w-2 h-2 bg-zinc-500 dark:bg-zinc-400 rounded-full mr-3"></div>
              <span className="text-sm">Interested in AI/ML, Backend, and Full-stack roles</span>
            </div>
          </div>
        </div>

        {/* Current Term Card - 1x1 Square */}
        <div className="md:col-span-1 lg:col-span-1 md:row-span-1 lg:row-span-1 bg-white/10 dark:bg-zinc-900/30 backdrop-blur-xl border border-white/20 dark:border-zinc-800/50 rounded-2xl p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-500 flex flex-col justify-center text-left group">
          <h3 className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mb-4">Current Term</h3>
          <div className="text-center text-7xl font-bold text-zinc-800 dark:text-zinc-200 mb-2 group-hover:scale-105 transition-transform duration-300">
            2B
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 font-medium text-center">Fall 2025</p>
        </div>

        {/* Education Card - 2x2 */}
        <div className="md:col-span-3 lg:col-span-2 md:row-span-2 lg:row-span-2 bg-white/10 dark:bg-zinc-900/30 backdrop-blur-xl border border-white/20 dark:border-zinc-800/50 rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-500">
          <h3 className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mb-3">Education</h3>
          <h4 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 leading-tight">Mechatronics Engineering</h4>
          <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-300 font-semibold mb-6">Artificial Intelligence Option</p>
          
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-white/60 dark:bg-zinc-800/60 backdrop-blur-sm border border-white/40 dark:border-zinc-700/40 rounded-xl shadow-sm flex items-center justify-center">
              <img src={waterlooLogo} alt="University of Waterloo" className="w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold text-zinc-900 dark:text-zinc-100 text-base md:text-lg">University of Waterloo</p>
              <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-medium">Sept 2023 - April 2028</p>
            </div>
          </div>

          <h5 className="text-lg md:text-xl font-bold text-zinc-700 dark:text-zinc-300 mb-4">Relevant Coursework</h5>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {courses.map((course, index) => (
              <div key={index} className="bg-white/40 dark:bg-zinc-800/40 backdrop-blur-sm border border-white/30 dark:border-zinc-700/30 rounded-lg px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-white/60 dark:hover:bg-zinc-800/60 transition-colors duration-200">
                {course}
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Card - 3x1 */}
        <div className="md:col-span-3 lg:col-span-3 md:row-span-1 lg:row-span-1 bg-white/10 dark:bg-zinc-900/30 backdrop-blur-xl border border-white/20 dark:border-zinc-800/50 rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-500 overflow-hidden relative">
          <h3 className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mb-6">Tech Stack</h3>
          
          {/* Fade overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white/10 dark:from-zinc-900/30 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white/10 dark:from-zinc-900/30 to-transparent z-10 pointer-events-none"></div>
          
          <div className="space-y-6">
            {/* Top row - scrolling left */}
            <div className="overflow-hidden">
              <div className="flex gap-6 animate-[scroll-left_30s_linear_infinite] w-max">
                {[...topRowStacks, ...topRowStacks, ...topRowStacks].map((IconComponent, index) => (
                  <div key={index} className="flex-shrink-0 w-14 h-14 bg-white/30 dark:bg-zinc-800/30 backdrop-blur-sm border border-white/20 dark:border-zinc-700/20 rounded-xl shadow-sm flex items-center justify-center hover:scale-110 hover:bg-white/50 dark:hover:bg-zinc-800/50 transition-all duration-300">
                    <IconComponent className="w-7 h-7 text-zinc-700 dark:text-zinc-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom row - scrolling right */}
            <div className="overflow-hidden">
              <div className="flex gap-6 animate-[scroll-right_30s_linear_infinite] w-max">
                {[...bottomRowStacks, ...bottomRowStacks, ...bottomRowStacks].map((IconComponent, index) => (
                  <div key={index} className="flex-shrink-0 w-14 h-14 bg-white/30 dark:bg-zinc-800/30 backdrop-blur-sm border border-white/20 dark:border-zinc-700/20 rounded-xl shadow-sm flex items-center justify-center hover:scale-110 hover:bg-white/50 dark:hover:bg-zinc-800/50 transition-all duration-300">
                    <IconComponent className="w-7 h-7 text-zinc-700 dark:text-zinc-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 