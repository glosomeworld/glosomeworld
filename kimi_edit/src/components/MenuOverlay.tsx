import { useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { X } from 'lucide-react'

interface MenuOverlayProps {
  isOpen: boolean
  onClose: () => void
}

const menuLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Glosome Books', href: '/books' },
  { label: 'Glosome TV', href: '/tv' },
  { label: 'Glosome Nursery Rhymes', href: '/nursery-rhymes' },
  { label: 'Glosome Parents', href: '/parents' },
  { label: 'Glosome Kids', href: '/kids' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const location = useLocation()

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  return (
    <div
      className={`fixed inset-0 z-[100] transition-all duration-500 ${
        isOpen ? 'visible' : 'invisible'
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-gw-dark/95 backdrop-blur-xl transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Content */}
      <div
        className={`relative h-full flex flex-col items-center justify-center transition-all duration-500 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>

        <nav className="flex flex-col items-center gap-6">
          {menuLinks.map((link, i) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={onClose}
              className={`font-nunito font-black text-3xl md:text-5xl transition-all duration-300 hover:scale-105 ${
                location.pathname === link.href
                  ? 'text-gw-gold'
                  : 'text-white hover:text-gw-gold'
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-10 left-0 right-0 text-center">
          <p className="font-lora italic text-gw-lightpurple/80 text-sm">
            Where truth takes root and joy breaks out.
          </p>
        </div>
      </div>
    </div>
  )
}
