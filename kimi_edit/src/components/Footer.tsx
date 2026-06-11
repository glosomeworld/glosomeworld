import { Link } from 'react-router-dom'
import { Youtube, Instagram, Music2, Facebook } from 'lucide-react'

const brandLinks = [
  { label: 'Glosome TV', href: '/tv' },
  { label: 'Glosome Nursery Rhymes', href: '/nursery-rhymes' },
  { label: 'Glosome Kids', href: '/kids' },
  { label: 'Glosome Books', href: '/books' },
  { label: 'Glosome Parents', href: '/parents' },
]

const exploreLinks = [
  { label: 'About', href: '/about' },
  { label: 'Watch Glosome TV', href: '/tv' },
  { label: 'Browse TV Playlists', href: '/tv' },
  { label: 'Nursery Rhymes', href: '/nursery-rhymes' },
  { label: 'For Parents', href: '/parents' },
  { label: 'Blog', href: '/blog' },
]

const connectLinks = [
  { label: 'Contact Us', href: '/contact' },
  { label: 'Partnership Enquiry', href: '/contact' },
  { label: 'Join the Newsletter', href: '/parents' },
  { label: 'Nursery Rhymes Channel', href: '/nursery-rhymes' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: "Children's Privacy", href: '/privacy' },
]

const socialLinks = [
  { icon: Youtube, href: 'https://www.youtube.com/@GlosomeTV', label: 'YouTube' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Music2, href: '#', label: 'TikTok' },
  { icon: Facebook, href: '#', label: 'Facebook' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0A0118] relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gw-purple/10 blur-[120px]" />
      </div>

      <div className="relative section-padding py-16 lg:py-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gw-gold flex items-center justify-center">
                <span className="font-nunito font-black text-gw-dark text-xl">G</span>
              </div>
              <span className="font-nunito font-black text-white text-xl">
                Glosome World
              </span>
            </Link>
            <p className="font-lora italic text-gw-lightpurple/70 text-sm mb-6">
              Where truth takes root and joy breaks out.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-gw-gold hover:text-gw-dark transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Our Brands */}
          <div>
            <h4 className="font-nunito font-bold text-white text-lg mb-5">
              Our Brands
            </h4>
            <ul className="space-y-3">
              {brandLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-dmsans text-white/60 hover:text-gw-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Explore */}
          <div>
            <h4 className="font-nunito font-bold text-white text-lg mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-dmsans text-white/60 hover:text-gw-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h4 className="font-nunito font-bold text-white text-lg mb-5">
              Connect
            </h4>
            <ul className="space-y-3">
              {connectLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-dmsans text-white/60 hover:text-gw-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-center font-dmsans text-white/40 text-xs">
            &copy; 2026 Glosome World &middot; Rooted in Christ, growing in love &middot; All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
