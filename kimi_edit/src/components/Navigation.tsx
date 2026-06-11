import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Play, Menu } from 'lucide-react'

interface NavigationProps {
  onMenuClick: () => void
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Books', href: '/books' },
  { label: 'Glosome TV', href: '/tv' },
  { label: 'Nursery Rhymes', href: '/nursery-rhymes' },
  { label: 'Parents', href: '/parents' },
  { label: 'Contact', href: '/contact' },
]

export default function Navigation({ onMenuClick }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[65px] transition-all duration-300 ${
        scrolled
          ? 'bg-gw-dark/95 backdrop-blur-md shadow-lg'
          : 'bg-gw-dark'
      }`}
    >
      <div className="h-full flex items-center justify-between section-padding max-w-[1440px] mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 rounded-lg bg-gw-gold flex items-center justify-center">
            <span className="font-nunito font-black text-gw-dark text-lg">G</span>
          </div>
          <span className="font-nunito font-black text-white text-lg hidden sm:block">
            Glosome World
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`font-dmsans font-semibold text-sm transition-colors duration-200 ${
                location.pathname === link.href
                  ? 'text-white'
                  : 'text-white/65 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.youtube.com/@GlosomeTV"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold hidden sm:flex items-center gap-2 text-sm py-2.5 px-4"
          >
            <Play className="w-4 h-4 fill-current" />
            Watch Glosome TV
          </a>
          <button
            onClick={onMenuClick}
            className="lg:hidden w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gw-gold/[0.08]" />
    </nav>
  )
}
