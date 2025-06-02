import { Calendar, MapPin, Briefcase, TrendingUp, Building2, Code2 } from 'lucide-react'
import { useState } from 'react'

export function Experiences() {
  const [selectedCompany, setSelectedCompany] = useState(0)

  const experiences = [
    {
      id: "8090",
      company: "8090 Solutions",
      logo: "/src/assets/logo_8090.svg",
      position: "AI Software Engineering Intern",
      duration: "May 2025 - Aug 2025",
      location: "Menlo Park, California",
      description: "Incoming Summer 2025. Building AI systems and integrating LLMs to enhance enterprise solutions.",
      isUpcoming: true,
      companyType: "Startup",
      focus: "AI / LLMs",
      technologies: ["Python", "TypeScript", "FastAPI", "AWS", "Docker", "Postgres"],
      accentColor: "blue"
    },
    {
      id: "rtx", 
      company: "Pratt & Whitney",
      logo: "/src/assets/logo_rtx.svg",
      position: "Software Engineering Intern",
      duration: "Sep 2024 - Dec 2024",
      location: "Toronto, Ontario",
      description: "Developed full-stack internal tools, optimized SQL queries, and improved backend efficiency.",
      isUpcoming: false,
      companyType: "Aerospace",
      focus: "Full-Stack",
      technologies: ["PHP", "JavaScript", "Postgres", "AJAX", "Symfony", "Twig"],
      accentColor: "slate"
    },
    {
      id: "td",
      company: "TD Bank", 
      logo: "/src/assets/logo_td.svg",
      position: "Software Engineering Intern",
      duration: "Jan 2024 - Apr 2024",
      location: "Toronto, Ontario",
      description: "Designed TypeScript microapps, built REST APIs, and streamlined asset loading.",
      isUpcoming: false,
      companyType: "Financial",
      focus: "Frontend",
      technologies: ["TypeScript", "React", "Java", "REST API", "Jira", "Confluence"],
      accentColor: "emerald"
    }
  ]

  const currentExperience = experiences[selectedCompany]

  const getSelectedStyles = (index: number, accentColor: string) => {
    if (selectedCompany !== index) return ""
    
    switch (accentColor) {
      case "blue": return "ring-2 ring-blue-500/40 bg-blue-500/10 border-blue-500/30"
      case "slate": return "ring-2 ring-slate-500/40 bg-slate-500/10 border-slate-500/30"
      case "emerald": return "ring-2 ring-emerald-500/40 bg-emerald-500/10 border-emerald-500/30"
      default: return "ring-2 ring-zinc-500/40 bg-zinc-500/10 border-zinc-500/30"
    }
  }

  return (
    <section className="relative overflow-hidden pb-20 pt-0">
      {/* Background system - matching other components */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/3 w-[400px] h-[400px] bg-gradient-to-bl from-zinc-100/30 to-transparent dark:from-zinc-800/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-gradient-to-tr from-zinc-50/40 to-transparent dark:from-zinc-900/25 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-gradient-to-r from-transparent via-zinc-50/20 to-transparent dark:via-zinc-900/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-6 max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="w-6 h-6 text-zinc-600 dark:text-zinc-400" />
          <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Work Experience</h3>
        </div>

        {/* Mobile Company Selection */}
        <div className="mb-8 lg:hidden">
          <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-700/50 rounded-2xl p-6">
            <div className="flex items-center justify-center gap-4">
              {experiences.map((exp, index) => (
                <button
                  key={exp.id}
                  onClick={() => setSelectedCompany(index)}
                  className={`w-18 h-18 rounded-xl flex items-center justify-center p-3 transition-all duration-200 border-2 ${
                    selectedCompany === index 
                      ? getSelectedStyles(index, exp.accentColor)
                      : 'border-zinc-200/50 dark:border-zinc-700/50 bg-zinc-50/50 dark:bg-zinc-800/50 hover:bg-zinc-100/70 dark:hover:bg-zinc-700/70 hover:border-zinc-300 dark:hover:border-zinc-600'
                  }`}
                >
                  <img 
                    src={exp.logo} 
                    alt={`${exp.company} logo`}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="flex gap-8">
          
          {/* Vertical Sidebar - Desktop only */}
          <div className="hidden lg:block">
            <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-700/50 rounded-2xl p-6 h-full">
              <div className="flex flex-col space-y-8">
                {experiences.map((exp, index) => (
                  <button
                    key={exp.id}
                    onClick={() => setSelectedCompany(index)}
                    className={`w-18 h-18 rounded-xl flex items-center justify-center p-3 transition-all duration-200 border-2 ${
                      selectedCompany === index 
                        ? getSelectedStyles(index, exp.accentColor)
                        : 'border-zinc-200/50 dark:border-zinc-700/50 bg-zinc-50/50 dark:bg-zinc-800/50 hover:bg-zinc-100/70 dark:hover:bg-zinc-700/70 hover:border-zinc-300 dark:hover:border-zinc-600'
                    }`}
                  >
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1">
            <div 
              key={selectedCompany} 
              className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-700/50 rounded-2xl p-6 lg:p-8"
            >
              
              {/* Company Header */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div className="hidden sm:flex w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-xl items-center justify-center p-3 flex-shrink-0">
                  <img 
                    src={currentExperience.logo} 
                    alt={`${currentExperience.company} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">{currentExperience.company}</h4>
                  <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    {currentExperience.position}
                  </p>
                </div>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-zinc-50/60 dark:bg-zinc-800/40 rounded-lg border border-zinc-200/30 dark:border-zinc-700/30 p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Building2 className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
                    <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{currentExperience.companyType}</span>
                  </div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">Industry</div>
                </div>
                <div className="bg-zinc-50/60 dark:bg-zinc-800/40 rounded-lg border border-zinc-200/30 dark:border-zinc-700/30 p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
                    <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{currentExperience.focus}</span>
                  </div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">Focus Area</div>
                </div>
              </div>

              {/* Duration and Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-zinc-50/60 dark:bg-zinc-800/40 rounded-lg border border-zinc-200/30 dark:border-zinc-700/30 p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Calendar className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
                    <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{currentExperience.duration}</span>
                  </div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">Duration</div>
                </div>
                <div className="bg-zinc-50/60 dark:bg-zinc-800/40 rounded-lg border border-zinc-200/30 dark:border-zinc-700/30 p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
                    <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{currentExperience.location}</span>
                  </div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">Location</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                {currentExperience.description}
              </p>

              {/* Technologies */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Code2 className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
                  <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Technologies</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {currentExperience.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="bg-zinc-100/60 dark:bg-zinc-800/60 px-3 py-2 rounded-lg border border-zinc-200/40 dark:border-zinc-700/40"
                    >
                      <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
} 