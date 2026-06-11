import { useEffect } from 'react'
import { Bell, BookOpen, Feather, Users, Puzzle, Monitor } from 'lucide-react'
import NewsletterForm from '../components/NewsletterForm'

const books = [
  {
    title: 'I Am What God Says I Am',
    category: '30-Day Declaration Journal',
    age: '6-10',
    desc: 'A Christ-centered 30-day truth and declaration journal that helps children agree with Scripture, speak God’s truth, and grow confident in their identity in Christ.',
    price: 'Available now',
    image: '/images/i-am-what-god-says-i-am-cover.png',
    status: 'available',
    buttons: [
      { label: 'Amazon — Coming Soon', href: '#', primary: false, disabled: true },
      { label: 'Buy on Gumroad', href: 'https://glosomebooks.gumroad.com', primary: true, disabled: false },
      { label: 'Buy on Selar', href: 'https://selar.com/m/glosomebooks', primary: false, disabled: false },
    ] as Array<{ label: string; href: string; primary: boolean; disabled?: boolean }>,
  },
  {
    title: 'The Glosome 10 Truth Declaration Cards',
    category: 'Free Digital Gift',
    age: '3-12',
    desc: 'Ten joyful truth declaration cards for children. A simple resource parents can use to help children say God’s truth out loud every day.',
    price: 'Free gift',
    image: '/images/glosome-books-logo.png',
    status: 'free',
    buttons: [
      { label: 'Newsletter — Coming Soon', href: '#', primary: true, disabled: true },
      { label: 'View Gumroad Store', href: 'https://glosomebooks.gumroad.com', primary: false, disabled: false },
    ] as Array<{ label: string; href: string; primary: boolean; disabled?: boolean }>,
  },
]
const comingSoon = [
  { title: 'The Glosome Bedtime Devotional', category: 'Devotional', age: '3-8' },
  { title: 'New Covenant Parenting Guide', category: 'Parent Guide', age: 'Adults' },
  { title: 'Colour the Truth Activity Book', category: 'Activity Book', age: '4-12' },
]

const categories = [
  { icon: BookOpen, title: 'Picture Books', desc: 'Beautifully illustrated stories that teach new covenant truths.' },
  { icon: Feather, title: 'Devotional Books', desc: 'Daily devotionals for children and families.' },
  { icon: Users, title: 'Parent & Family Guides', desc: 'Resources to help parents raise Gospel-centred children.' },
  { icon: Puzzle, title: 'Activity Books', desc: 'Colouring, puzzles, and activities rooted in Scripture.' },
  { icon: Monitor, title: 'Digital Courses', desc: 'Online courses for parents and children.' },
]

const platforms = [
  { flag: '\uD83C\uDDFF\uD83C\uDDE6', name: 'Selar', desc: 'For African customers. Pay in NGN, ZAR, and more.', href: 'https://selar.com/m/glosomebooks' },
  { flag: '📦', name: 'Amazon KDP', desc: 'Worldwide shipping. Amazon link coming soon.', href: '#' },
  { flag: '🌐', name: 'Gumroad', desc: 'Digital resources and books from Glosome Books.', href: 'https://glosomebooks.gumroad.com' },
]

export default function BooksPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="pt-[65px]">
      {/* Hero */}
      <section className="bg-gw-dark py-20 lg:py-28 section-padding">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="w-20 h-20 rounded-3xl bg-gw-cardPeach flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">&#xD83D;&#xDCDA;</span>
          </div>
          <p className="eyebrow text-gw-gold mb-4">Glosome Books</p>
          <h1 className="font-nunito font-black text-4xl lg:text-6xl text-white mb-6 leading-tight">
            Truth in their hands.
          </h1>
          <p className="font-lora italic text-gw-lightpurple/70 max-w-2xl mx-auto mb-10">
            Children's books that don't just tell Bible stories &mdash; they teach new covenant realities. Every book is designed to plant truth deep into your child's spirit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#books" className="btn-gold">Browse available books</a>
            <a href="#coming-soon" className="btn-ghost text-white border-white/20 hover:text-gw-gold hover:border-gw-gold">Coming soon</a>
          </div>
        </div>
      </section>

      {/* Available books */}
      <section id="books" className="bg-gw-warmwhite py-20 lg:py-28 section-padding">
        <div className="max-w-[1440px] mx-auto">
          <p className="eyebrow text-gw-gold mb-3">Now available</p>
          <h2 className="font-nunito font-black text-3xl lg:text-4xl text-gw-dark mb-12">
            Start here &mdash; your first Glosome books
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {books.map((book) => (
              <div key={book.title} className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-lift transition-all duration-300">
                <div className="flex flex-col sm:flex-row">
                  {/* Cover */}
                  <div className="w-full sm:w-48 h-64 sm:h-auto bg-gw-lavender flex items-center justify-center p-4 shrink-0">
                    <img src={book.image} alt={book.title} className="h-52 w-auto rounded-lg shadow-lg object-contain" />
                  </div>

                  {/* Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex gap-2 mb-3">
                      <span className="bg-gw-gold/10 text-gw-gold font-dmsans font-semibold text-xs px-3 py-1 rounded-full">{book.category}</span>
                      <span className="bg-gw-lavender text-gw-dark/50 font-dmsans text-xs px-3 py-1 rounded-full">{book.age}</span>
                    </div>
                    <h3 className="font-nunito font-bold text-gw-dark text-xl mb-3">{book.title}</h3>
                    <p className="font-dmsans text-gw-dark/60 text-sm leading-relaxed mb-4 flex-1">{book.desc}</p>
                    <p className="font-nunito font-black text-gw-gold text-2xl mb-4">{book.price}</p>
                    <div className="flex flex-wrap gap-2">
                      {book.buttons.map((btn) => (
                        btn.disabled ? (
                          <span
                            key={btn.label}
                            className="bg-gw-lavender text-gw-dark/50 font-dmsans font-bold text-sm py-2.5 px-4 rounded-full cursor-not-allowed"
                          >
                            {btn.label}
                          </span>
                        ) : (
                          <a
                            key={btn.label}
                            href={btn.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={btn.primary ? 'btn-gold text-sm py-2.5 px-4' : 'btn-ghost text-sm py-2.5 px-4'}
                          >
                            {btn.label}
                          </a>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gw-dark py-20 lg:py-28 section-padding">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-nunito font-black text-3xl lg:text-4xl text-white text-center mb-12">
            Five types of books. One mission.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.title} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/15 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-gw-gold/20 flex items-center justify-center mb-5">
                  <cat.icon className="w-6 h-6 text-gw-gold" />
                </div>
                <h3 className="font-nunito font-bold text-white text-lg mb-3">{cat.title}</h3>
                <p className="font-dmsans text-white/60 text-sm">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming soon */}
      <section id="coming-soon" className="bg-white py-20 lg:py-28 section-padding">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-nunito font-black text-3xl lg:text-4xl text-gw-dark text-center mb-12">
            Coming soon
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {comingSoon.map((book) => (
              <div key={book.title} className="bg-gw-lavender rounded-3xl p-8 text-center">
                <div className="w-full h-48 rounded-2xl border-2 border-dashed border-gw-gold/30 flex items-center justify-center mb-6 bg-white/50">
                  <BookOpen className="w-12 h-12 text-gw-purple/30" />
                </div>
                <span className="inline-block bg-gw-gold/10 text-gw-gold font-dmsans font-semibold text-xs px-3 py-1 rounded-full mb-3">Coming soon</span>
                <h3 className="font-nunito font-bold text-gw-dark text-lg mb-1">{book.title}</h3>
                <p className="font-dmsans text-gw-dark/50 text-sm">{book.category} &middot; {book.age}</p>
                <button className="mt-4 font-dmsans font-semibold text-gw-purple text-sm flex items-center gap-1 mx-auto hover:underline">
                  <Bell className="w-4 h-4" /> Notify me
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-gradient-to-br from-[#4C1D95] to-gw-purple py-20 section-padding">
        <div className="max-w-[900px] mx-auto text-center">
          <blockquote className="font-lora italic text-gw-goldlight text-xl lg:text-2xl leading-relaxed mb-4">
            &ldquo;When truth is in their hands, it finds its way into their hearts. A Glosome book is not just read &mdash; it is lived.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Platforms */}
      <section className="bg-gw-warmwhite py-20 lg:py-28 section-padding">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="font-nunito font-black text-3xl text-gw-dark text-center mb-12">
            Available on these platforms
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {platforms.map((p) => (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="bg-white rounded-3xl p-8 shadow-card hover:shadow-lift hover:-translate-y-2 transition-all duration-300 text-center group">
                <span className="text-3xl mb-4 block">{p.flag}</span>
                <h3 className="font-nunito font-bold text-gw-dark text-lg mb-2">{p.name}</h3>
                <p className="font-dmsans text-gw-dark/60 text-sm mb-4">{p.desc}</p>
                <span className="btn-primary-purple text-sm py-2.5 px-5 inline-block">Visit {p.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gw-dark py-20 lg:py-28 section-padding">
        <div className="max-w-[600px] mx-auto text-center">
          <span className="text-3xl mb-4 block">&#x2709;&#xFE0F;</span>
          <h2 className="font-nunito font-black text-2xl lg:text-3xl text-white mb-8">
            Be first to know when new books launch
          </h2>
          <NewsletterForm />
        </div>
      </section>
    </div>
  )
}
