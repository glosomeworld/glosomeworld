
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Play, Music, Heart, BookOpen, Baby, Sparkles, ShieldCheck } from 'lucide-react'
import NewsletterForm from '../components/NewsletterForm'

const themes = [
  { icon: Baby, title: 'Simple songs for little hearts', desc: 'Gentle lyrics and joyful melodies made for toddlers, preschoolers, and early learners.' },
  { icon: Heart, title: 'Faith-filled from the start', desc: 'Every rhyme is designed to help children sing, learn, and grow in God’s love.' },
  { icon: BookOpen, title: 'Truth made memorable', desc: 'Short, repeatable lines help children remember God’s goodness, love, and care.' },
  { icon: ShieldCheck, title: 'Safe for families', desc: 'Bright, clean, child-friendly content parents can confidently play at home.' },
]

const comingSoon = [
  'Jesus Loves Me From Head to Toe',
  'God Is Good',
  'I Am Loved',
  'Thank You Jesus',
  'God Made Me Special',
  'Sing, Learn, Grow',
]

export default function NurseryRhymesPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="pt-[65px]">
      <section className="bg-gw-dark py-20 lg:py-28 section-padding overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-20 left-10 text-gw-gold text-4xl"><Sparkles /></div>
          <div className="absolute bottom-20 right-14 text-gw-lightpurple text-5xl"><Music /></div>
        </div>
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <p className="eyebrow text-gw-gold mb-4">Glosome Nursery Rhymes</p>
            <h1 className="font-nunito font-black text-4xl lg:text-6xl text-white mb-6 leading-tight">
              Faith-filled nursery rhymes for little hearts.
            </h1>
            <p className="font-lora italic text-gw-lightpurple/70 max-w-xl mb-10 leading-relaxed">
              Rooted in Christ, growing in love. Joyful songs that help little children sing, learn, and grow in God’s love through simple melodies and colorful visuals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.youtube.com/@Glosomenurseryrhymes"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex items-center gap-2 justify-center"
              >
                <Play className="w-4 h-4 fill-current" />
                Watch Nursery Rhymes
              </a>
              <Link to="/parents" className="btn-ghost text-white border-white/20 hover:text-gw-gold hover:border-gw-gold flex items-center gap-2 justify-center">
                For parents
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-card">
            <img src="/images/glosome-nursery-rhymes-logo.png" alt="Glosome Nursery Rhymes logo" className="w-full rounded-2xl object-contain" />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 section-padding">
        <div className="max-w-[900px] mx-auto text-center">
          <p className="font-dmsans text-gw-dark/70 text-lg leading-relaxed">
            Glosome Nursery Rhymes creates joyful, faith-filled songs for little hearts. Through simple melodies, colorful visuals, and Christ-centered messages, children can sing, learn, and grow in God’s love.
          </p>
        </div>
      </section>

      <section className="bg-gw-warmwhite py-20 lg:py-28 section-padding">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-nunito font-black text-3xl lg:text-4xl text-gw-dark text-center mb-12">
            Made for early learning and joyful faith
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {themes.map((item) => (
              <div key={item.title} className="bg-white rounded-3xl p-8 shadow-card hover:shadow-lift hover:-translate-y-2 transition-all duration-300 text-center">
                <div className="w-14 h-14 rounded-2xl bg-gw-purple/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-gw-purple" />
                </div>
                <h3 className="font-nunito font-bold text-gw-dark text-lg mb-3">{item.title}</h3>
                <p className="font-dmsans text-gw-dark/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28 section-padding">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow text-gw-gold mb-3">Coming playlists</p>
            <h2 className="font-nunito font-black text-3xl lg:text-4xl text-gw-dark">
              Sing, learn, grow in God’s love
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {comingSoon.map((title) => (
              <div key={title} className="bg-gw-lavender rounded-3xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gw-gold/20 flex items-center justify-center shrink-0">
                  <Music className="w-6 h-6 text-gw-gold" />
                </div>
                <h3 className="font-nunito font-bold text-gw-dark">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gw-dark py-20 lg:py-28 section-padding">
        <div className="max-w-[650px] mx-auto text-center">
          <span className="text-3xl mb-4 block">🎵</span>
          <h2 className="font-nunito font-black text-2xl lg:text-3xl text-white mb-4">
            Be first to know when new nursery rhymes launch
          </h2>
          <p className="font-dmsans text-white/60 mb-8">
            Join the Glosome family for updates, free resources, and new faith-filled songs for children.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  )
}
