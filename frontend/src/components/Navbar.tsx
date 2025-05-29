// components/Navbar.tsx
import { Link } from 'react-router-dom'
import { useTheme } from '@/components/theme-provider'
import { useEffect, useState } from 'react'
import { ModeToggle } from '@/components/ui/mode-toggle'

export function Navbar() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null // Avoid hydration mismatch for theme-based logo

  const logoSrc = theme === 'dark' ? '/src/assets/logo_white.svg' : '/src/assets/logo_black.svg'

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/30 dark:bg-zinc-900/30 border-b border-zinc-200 dark:border-zinc-800 transition-all">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo + name */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logoSrc} alt="Logo" className="h-8 w-auto" />
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-700 dark:text-zinc-300">
          <Link to="/#about" className="hover:text-zinc-900 dark:hover:text-white transition">
            About
          </Link>
          <Link to="/#projects" className="hover:text-zinc-900 dark:hover:text-white transition">
            Projects
          </Link>
          <Link to="/#contact" className="hover:text-zinc-900 dark:hover:text-white transition">
            Contact
          </Link>
          {/* Theme toggle button */}
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}