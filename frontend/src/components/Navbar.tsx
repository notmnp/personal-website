// components/Navbar.tsx
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '@/components/theme-provider'
import { useEffect, useState } from 'react'
import { ModeToggle } from '@/components/ui/mode-toggle'
import Hamburger from 'hamburger-react'
import logoLight from '@/assets/logo_black.svg'
import logoDark from '@/assets/logo_white.svg'

interface NavItem {
  href: string
  label: string
  external?: boolean
}

const navItems: NavItem[] = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

function NavLink({ href, label, external = false, onClick }: NavItem & { onClick?: () => void }) {
  const location = useLocation()
  const isActive = location.pathname === href || 
                   (href === '/' && location.pathname === '/')

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className="relative text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-all duration-200 group"
      >
        {label}
        <span className={`absolute -bottom-1 left-0 h-0.5 bg-zinc-900 dark:bg-white transition-all duration-200 ${
          isActive ? 'w-full' : 'w-0 group-hover:w-full'
        }`} />
      </a>
    )
  }

  return (
    <Link
      to={href}
      onClick={onClick}
      className="relative text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-all duration-200 group"
    >
      {label}
      <span className={`absolute -bottom-1 left-0 h-0.5 bg-zinc-900 dark:bg-white transition-all duration-200 ${
        isActive ? 'w-full' : 'w-0 group-hover:w-full'
      }`} />
    </Link>
  )
}

export function Navbar() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  const logoSrc = theme === 'dark' ? logoDark : logoLight

  return (
    <>
      <nav className={`fixed top-0 w-full z-[10000] transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-xl bg-white/80 dark:bg-zinc-900/80 border-b border-zinc-200/60 dark:border-zinc-800/60 shadow-lg' 
          : 'backdrop-blur-lg bg-white/30 dark:bg-zinc-900/30 border-b border-zinc-200/30 dark:border-zinc-800/30'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 transition-transform duration-200 hover:scale-105 relative z-[10001]"
            >
              <img 
                src={logoSrc} 
                alt="Logo" 
                className="h-8 w-auto transition-opacity duration-200" 
              />
            </Link>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex items-center gap-6">
                {navItems.map((item) => (
                  <NavLink key={item.href} {...item} />
                ))}
              </nav>
              
              <div className="h-6 w-px bg-zinc-300 dark:bg-zinc-700" />
              
              <ModeToggle />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden relative z-[10001]">
              <Hamburger
                toggled={isMobileMenuOpen}
                toggle={setIsMobileMenuOpen}
                size={24}
                duration={0.3}
                distance="md"
                rounded
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-[9998] bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Mobile menu panel */}
          <div className="fixed top-0 left-0 right-0 z-[9999] bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800 md:hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Navigation links */}
              <nav className="py-6 pt-20">
                <div className="space-y-6">
                  {navItems.map((item) => (
                    <div key={item.href} className="block">
                      <NavLink {...item} onClick={() => setIsMobileMenuOpen(false)} />
                    </div>
                  ))}
                </div>
              </nav>
              
              {/* Footer with theme toggle */}
              <div className="py-4 border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">Theme</span>
                  <ModeToggle />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}