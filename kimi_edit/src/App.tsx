import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import MenuOverlay from './components/MenuOverlay'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import TVPage from './pages/TVPage'
import NurseryRhymesPage from './pages/NurseryRhymesPage'
import KidsPage from './pages/KidsPage'
import BooksPage from './pages/BooksPage'
import ParentsPage from './pages/ParentsPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import PrivacyPage from './pages/PrivacyPage'
import { useState, useEffect } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <div className="relative min-h-screen">
      <Navigation onMenuClick={() => setMenuOpen(true)} />
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/tv" element={<TVPage />} />
          <Route path="/nursery-rhymes" element={<NurseryRhymesPage />} />
          <Route path="/kids" element={<KidsPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/parents" element={<ParentsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </main>
      <Footer />
      <div className="grain-overlay" aria-hidden="true" />
    </div>
  )
}

export default App
