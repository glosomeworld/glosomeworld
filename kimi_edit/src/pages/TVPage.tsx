import { useEffect } from 'react'
import { Play, ExternalLink, Crown, Bird, Sparkles, Hand, BookOpen } from 'lucide-react'
import NewsletterForm from '../components/NewsletterForm'

const playlists = [
  { emoji: '\u2B50', color: 'bg-gw-gold', name: 'Start Here', desc: 'The Best of Glosome TV', ages: 'All ages' },
  { emoji: '\uD83D\uDD4A\uFE0F', color: 'bg-gw-cardSky', name: 'Grace Songs', desc: 'You Are Free', ages: '3-12' },
  { emoji: '\uD83D\uDC51', color: 'bg-gw-cardPurple', name: 'Who I Am', desc: 'Identity in Christ', ages: '4-12' },
  { emoji: '\u2764\uFE0F', color: 'bg-gw-cardPink', name: 'Loved', desc: "God's Love for Children", ages: '2-10' },
  { emoji: '\uD83D\uDD25', color: 'bg-orange-400', name: 'The Holy Spirit', desc: 'He Lives in You', ages: '5-12' },
  { emoji: '\uD83D\uDCAA', color: 'bg-gw-green', name: 'Faith and Trust', desc: 'I Believe', ages: '4-12' },
  { emoji: '\uD83D\uDE4F', color: 'bg-blue-400', name: 'Prayer and The Word', desc: 'Talk to Him', ages: '4-12' },
  { emoji: '\uD83D\uDCD6', color: 'bg-teal-400', name: 'Scripture Songs', desc: 'The Word in Their Mouths', ages: '3-12' },
  { emoji: '\uD83C\uDF89', color: 'bg-pink-400', name: 'Family Praise', desc: 'Worship Together', ages: 'All ages' },
  { emoji: '\uD83D\uDC11', color: 'bg-green-300', name: 'The Shepherd Series', desc: 'Psalm 23', ages: '3-10' },
]

const platforms = [
  { name: 'Spotify', href: '#' },
  { name: 'Apple Music', href: '#' },
  { name: 'Amazon Music', href: '#' },
  { name: 'YouTube Music', href: '#' },
  { name: 'Deezer', href: '#' },
  { name: 'Tidal', href: '#' },
]

const learnings = [
  { icon: Crown, title: 'Who they are in Christ', desc: 'Every song declares their identity: righteous, chosen, loved, and complete.' },
  { icon: Bird, title: 'The Holy Spirit is real', desc: 'Children learn the Spirit is a person who lives inside them, not just a concept.' },
  { icon: Sparkles, title: 'Grace sets them free', desc: 'They understand grace as power, not permission \u2014 the ability to live holy.' },
  { icon: Hand, title: 'Prayer is natural', desc: 'Talking to God becomes as natural as breathing, not a religious ritual.' },
]

const trustChecks = [
  { title: 'Doctrinally rooted in grace', desc: 'Every Glosome song is built on new covenant truth \u2014 grace, righteousness, the finished work of Christ.' },
  { title: 'Identity before behaviour', desc: 'We never use fear, guilt, or shame. We declare who children are in Christ.' },
  { title: 'Safe for all ages', desc: 'Every video is designed for children from toddlers to pre-teens \u2014 joyful, bright, and age-appropriate.' },
  { title: 'Globally minded', desc: 'The Gospel belongs to every child on earth. Glosome World is for families everywhere.' },
]

export default function TVPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="pt-[65px]">
      {/* Hero */}
      <section className="bg-gw-dark py-20 lg:py-28 section-padding">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="w-28 h-28 rounded-3xl bg-white flex items-center justify-center mx-auto mb-6 overflow-hidden p-2 shadow-card">
            <img src="/images/glosome-tv-logo.jpeg" alt="Glosome TV logo" className="w-full h-full object-contain" />
          </div>
          <p className="eyebrow text-gw-gold mb-4">Watch Glosome TV</p>
          <h1 className="font-nunito font-black text-4xl lg:text-6xl text-white mb-6 leading-tight">
            New covenant truths. Set to music.
          </h1>
          <p className="font-lora italic text-gw-lightpurple/70 max-w-2xl mx-auto mb-10">
            Afrobeat gospel songs that plant new covenant truths into the hearts of children worldwide. Not just songs. Declarations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.youtube.com/@GlosomeTV"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-current" />
              Watch on YouTube
            </a>
            <a href="#playlists" className="btn-ghost text-white border-white/20 hover:text-gw-gold hover:border-gw-gold flex items-center gap-2">
              Browse playlists <span className="text-lg">&darr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* Parent note */}
      <section className="bg-white py-12 section-padding">
        <div className="max-w-[900px] mx-auto">
          <div className="bg-gw-lavender rounded-3xl p-8">
            <p className="font-dmsans text-gw-dark/70 text-sm leading-relaxed">
              <strong className="text-gw-purple">A note for parents:</strong> Glosome TV songs are not just Bible story songs. They are <strong>Bible truth songs</strong>. Each song teaches a new covenant reality &mdash; who children are in Christ, the power of grace, the reality of the Holy Spirit living inside them. These are doctrines many adults are still learning, presented in a way children can understand, enjoy, and remember.
            </p>
          </div>
        </div>
      </section>

      {/* Playlists */}
      <section id="playlists" className="bg-gw-warmwhite py-20 lg:py-28 section-padding">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-nunito font-black text-3xl lg:text-4xl text-gw-dark mb-4">
            Browse by theme
          </h2>
          <p className="font-dmsans text-gw-dark/60 mb-12">Find the songs your child needs right now.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {playlists.map((pl) => (
              <div key={pl.name} className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-lift hover:-translate-y-2 transition-all duration-300 group">
                <div className={`${pl.color} h-32 flex items-center justify-center`}>
                  <span className="text-5xl">{pl.emoji}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-nunito font-bold text-gw-purple text-lg mb-1">{pl.name}</h3>
                  <p className="font-dmsans text-gw-dark/60 text-sm mb-3">{pl.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-dmsans text-xs text-gw-dark/40 bg-gw-lavender px-2 py-1 rounded-full">{pl.ages}</span>
                    <span className="font-dmsans font-semibold text-gw-gold text-sm group-hover:underline">Watch playlist &rarr;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Streaming platforms */}
      <section className="bg-gw-dark py-16 section-padding">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="font-nunito font-black text-2xl lg:text-3xl text-white mb-8">
            Glosome TV is on all major platforms
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {platforms.map((p) => (
              <a
                key={p.name}
                href={p.href}
                className="bg-white/10 hover:bg-white/20 text-white font-dmsans font-semibold text-sm px-6 py-3 rounded-2xl transition-colors flex items-center gap-2"
              >
                {p.name} <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
          <a href="#" className="btn-gold inline-flex items-center gap-2">
            Follow us on Spotify
          </a>
        </div>
      </section>

      {/* What kids learn */}
      <section className="bg-white py-20 lg:py-28 section-padding">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-nunito font-black text-3xl lg:text-4xl text-gw-dark text-center mb-12">
            What children learn from Glosome TV
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {learnings.map((l) => (
              <div key={l.title} className="bg-gw-lavender rounded-3xl p-8 text-center">
                <div className="w-14 h-14 rounded-2xl bg-gw-purple/10 flex items-center justify-center mx-auto mb-5">
                  <l.icon className="w-7 h-7 text-gw-purple" />
                </div>
                <h3 className="font-nunito font-bold text-gw-dark text-lg mb-3">{l.title}</h3>
                <p className="font-dmsans text-gw-dark/60 text-sm leading-relaxed">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent trust */}
      <section className="bg-gw-warmwhite py-20 lg:py-28 section-padding">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-nunito font-black text-3xl lg:text-4xl text-gw-dark text-center mb-12">
            A brand you can trust
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {trustChecks.map((t) => (
              <div key={t.title} className="bg-white rounded-3xl p-8 shadow-card flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gw-green/10 flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5 text-gw-green" />
                </div>
                <div>
                  <h4 className="font-nunito font-bold text-gw-dark mb-2">{t.title}</h4>
                  <p className="font-dmsans text-gw-dark/60 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gw-dark py-20 lg:py-28 section-padding">
        <div className="max-w-[600px] mx-auto text-center">
          <span className="text-3xl mb-4 block">&#x2709;&#xFE0F;</span>
          <h2 className="font-nunito font-black text-2xl lg:text-3xl text-white mb-8">
            Never miss a new song
          </h2>
          <NewsletterForm />
        </div>
      </section>
    </div>
  )
}
