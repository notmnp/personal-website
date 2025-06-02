import { Calendar, ExternalLink, Github, FolderOpen, Gamepad2, Train, Sparkles, GraduationCap } from 'lucide-react'

export function Projects() {
  const projects = [
    {
      id: "course-clutch",
      title: "Course Clutch",
      category: "Published",
      description: "Course enrollment notification platform alerting students when spots open in university courses, deployed on AWS.",
      duration: "Feb 2024 - Sep 2024",
      icon: GraduationCap,
      links: [
        { type: "website", url: "https://www.courseclutch.com/", label: "Website" }
      ],
      stats: [
        { label: "Users", value: "80,000+" },
        { label: "Courses", value: "7,000+" }
      ]
    },
    {
      id: "wat-ai",
      title: "WAT.ai",
      category: "Team Project", 
      description: "Machine learning model for Toronto transit delay prediction, helping commuters make informed travel decisions.",
      duration: "Oct 2024 - Apr 2025",
      icon: Train,
      links: [
        { type: "website", url: "https://watai.ca/#/", label: "Website" },
        { type: "github", url: "https://github.com/WAT-ai/DelayNoMore", label: "GitHub" }
      ],
      stats: [
        { label: "Data Points", value: "34M+" },
        { label: "Routes", value: "300+" }
      ]
    },
    {
      id: "minimax-connect4", 
      title: "Minimax Connect 4",
      category: "Personal",
      description: "AI-powered Connect 4 game engine using advanced game theory algorithms to create an unbeatable opponent.",
      duration: "Feb 2025",
      icon: Gamepad2,
      links: [
        { type: "website", url: "https://notmnp.github.io/#play", label: "Website" },
        { type: "github", url: "https://github.com/notmnp/MinimaxConnect4", label: "GitHub" }
      ],
      stats: [
        { label: "Win Rate", value: "95%" },
        { label: "Game States", value: "50,000+" }
      ]
    },
    {
      id: "clai",
      title: "CLAI", 
      category: "Personal",
      description: "Intelligent document processing pipeline powered by Google Gemini for automated content generation and formatting.",
      duration: "Jan 2025",
      icon: Sparkles,
      links: [
        { type: "github", url: "https://github.com/notmnp/CLAI", label: "GitHub" }
      ],
      stats: [
        { label: "Speed", value: "<5 Seconds" },
        { label: "Accuracy", value: "90%" }
      ]
    }
  ]

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
          <FolderOpen className="w-6 h-6 text-zinc-600 dark:text-zinc-400" />
          <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Projects & Teams</h3>
        </div>

        {/* Projects Grid - consistent spacing with other sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-700/50 rounded-2xl p-6 lg:p-8 transition-all duration-200"
            >
              
              {/* Project Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <project.icon className="w-8 h-8 text-zinc-600 dark:text-zinc-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">{project.title}</h4>
                  <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-500">
                    <Calendar className="w-4 h-4" />
                    <span>{project.duration}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {project.stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-zinc-50/60 dark:bg-zinc-800/40 rounded-lg border border-zinc-200/30 dark:border-zinc-700/30 p-4 text-center"
                  >
                    <div className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-zinc-600 dark:text-zinc-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap gap-3">
                {project.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700 shadow-lg transition-all duration-200 px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    {link.type === 'github' ? (
                      <Github className="w-4 h-4" />
                    ) : (
                      <ExternalLink className="w-4 h-4" />
                    )}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
} 