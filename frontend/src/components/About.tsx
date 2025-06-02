import { Calendar, MapPin, Briefcase, GraduationCap, User, Mail, TrendingUp } from 'lucide-react'

export function About() {
  // Calculate dynamic degree progress
  const degreeStart = new Date('2023-09-01')
  const degreeEnd = new Date('2028-04-30')
  const currentDate = new Date()
  
  const totalDuration = degreeEnd.getTime() - degreeStart.getTime()
  const elapsed = currentDate.getTime() - degreeStart.getTime()
  const progress = Math.max(0, Math.min(100, Math.round((elapsed / totalDuration) * 100)))

  return (
    <section className="relative overflow-hidden py-32 pb-8">
      {/* Ultra minimal background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/3 w-[400px] h-[400px] bg-gradient-to-bl from-zinc-100/30 to-transparent dark:from-zinc-800/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-gradient-to-tr from-zinc-50/40 to-transparent dark:from-zinc-900/25 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-6 max-w-6xl mx-auto">
        
        {/* Summary */}
        <div className="flex items-center gap-3 mb-8">
          <User className="w-6 h-6 text-zinc-600 dark:text-zinc-400" />
          <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Summary</h3>
        </div>

        {/* Status & Education Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          
          {/* Status Dashboard */}
          <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-700/50 rounded-2xl p-6 lg:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Status</h3>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-zinc-500 dark:text-zinc-400 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-medium text-zinc-900 dark:text-zinc-100">Interning at 8090</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Summer 2025</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-zinc-500 dark:text-zinc-400 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-medium text-zinc-900 dark:text-zinc-100">Seeking Internships</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Winter 2026</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-zinc-500 dark:text-zinc-400 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-medium text-zinc-900 dark:text-zinc-100">2+ Years Experience</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Software development</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-zinc-500 dark:text-zinc-400 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-medium text-zinc-900 dark:text-zinc-100">Toronto, ON</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Open to travel</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-zinc-500 dark:text-zinc-400 flex-shrink-0" />
                <div className="min-w-0">
                  <a href="mailto:mpattni@uwaterloo.ca" className="font-medium text-zinc-900 dark:text-zinc-100 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors break-words">
                    mpattni@uwaterloo.ca
                  </a>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Get in touch</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education - Reorganized */}
          <div className="lg:col-span-2">
            <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-700/50 rounded-2xl p-6 lg:p-8 h-full">
              
              {/* University Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-zinc-600 dark:text-zinc-400" />
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">University of Waterloo</h3>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Sept 2023 - April 2028</div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">Expected Graduation</div>
                </div>
              </div>

              {/* Degree Information */}
              <div className="mb-6">
                <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                  Mechatronics Engineering
                </h4>
                
                {/* Progress Stats - Responsive Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-zinc-50/60 dark:bg-zinc-800/40 rounded-lg border border-zinc-200/30 dark:border-zinc-700/30 p-3 text-center">
                    <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">2B</div>
                    <div className="text-xs text-zinc-600 dark:text-zinc-400">Current Term</div>
                  </div>
                  <div className="bg-zinc-50/60 dark:bg-zinc-800/40 rounded-lg border border-zinc-200/30 dark:border-zinc-700/30 p-3 text-center">
                    <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">AI / ML</div>
                    <div className="text-xs text-zinc-600 dark:text-zinc-400">Specialization</div>
                  </div>
                  <div className="bg-zinc-50/60 dark:bg-zinc-800/40 rounded-lg border border-zinc-200/30 dark:border-zinc-700/30 p-3 text-center">
                    <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">{progress}%</div>
                    <div className="text-xs text-zinc-600 dark:text-zinc-400">Degree Progress</div>
                  </div>
                </div>
              </div>

              {/* Relevant Courses */}
              <div>
                <h5 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-3">Relevant Courses</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="bg-zinc-100/60 dark:bg-zinc-800/60 px-3 py-2 rounded-lg border border-zinc-200/40 dark:border-zinc-700/40">
                    <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">Data Structures & Algorithms</span>
                  </div>
                  <div className="bg-zinc-100/60 dark:bg-zinc-800/60 px-3 py-2 rounded-lg border border-zinc-200/40 dark:border-zinc-700/40">
                    <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">AI & Society</span>
                  </div>
                  <div className="bg-zinc-100/60 dark:bg-zinc-800/60 px-3 py-2 rounded-lg border border-zinc-200/40 dark:border-zinc-700/40">
                    <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">Digital Computation</span>
                  </div>
                  <div className="bg-zinc-100/60 dark:bg-zinc-800/60 px-3 py-2 rounded-lg border border-zinc-200/40 dark:border-zinc-700/40">
                    <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">Computer Structures</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
} 