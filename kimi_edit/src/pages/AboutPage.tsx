import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Target, Eye, BookOpen, Heart, Star, Music, Users } from 'lucide-react'
import NewsletterForm from '../components/NewsletterForm'

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const values = [
    { icon: BookOpen, title: 'Truth over entertainment', desc: 'Every song, book, and resource is built on new covenant truth first. Joy follows naturally when truth is central.' },
    { icon: Heart, title: 'Identity before behaviour', desc: 'We never use fear, guilt, or shame to motivate change. We declare who children are in Christ, and trust that identity to produce the life.' },
    { icon: Music, title: 'Joy as theology', desc: 'Joy is not an add-on to the Gospel \u2014 it is the natural response to encountering the goodness of God.' },
    { icon: Star, title: 'Excellence without apology', desc: 'Children deserve the very best. We pursue excellence in every song, every illustration, every product.' },
    { icon: Users, title: 'The whole child, the whole family', desc: 'We serve children and equip parents. A Glosome child grows best in a Glosome home.' },
  ]

  const brands = [
    { emoji: '\uD83D\uDCFA', title: 'Glosome TV', tagline: 'New covenant truths. Set to music.', link: '/tv' },
    { emoji: '\uD83D\uDC55', title: 'Glosome Kids', tagline: 'Wear the truth.', link: '/kids' },
    { emoji: '\uD83D\uDCDA', title: 'Glosome Books', tagline: 'Truth in their hands.', link: '/books' },
    { emoji: '\uD83E\uDD1D', title: 'Glosome Parents', tagline: 'Rooted in Christ, growing in love.', link: '/parents' },
  ]

  return (
    <div className="pt-[65px]">
      {/* Hero */}
      <section className="bg-gw-dark py-20 lg:py-28 section-padding">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="eyebrow text-gw-gold mb-4">About Glosome World</p>
          <h1 className="font-nunito font-black text-4xl lg:text-6xl text-white mb-6 leading-tight">
            More than a brand. A movement.
          </h1>
          <p className="font-lora italic text-gw-lightpurple/70 max-w-3xl mx-auto text-lg leading-relaxed">
            Glosome World was born from a question that would not go away &mdash; what if children grew up already knowing who they are in Christ, before the world ever got the chance to tell them who they are not?
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-gw-warmwhite py-20 lg:py-28 section-padding">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-nunito font-black text-3xl lg:text-4xl text-gw-dark mb-8">Our story</h2>
          <div className="space-y-6">
            <p className="font-dmsans text-gw-dark/70 leading-relaxed">
              Glosome World started with a simple conviction: children are not too young to know who they are in Christ. In a world that rushes to define children by their grades, their appearance, their popularity, or their performance, we believe the truth of the Gospel should be the first voice they hear &mdash; and the loudest.
            </p>
            <p className="font-dmsans text-gw-dark/70 leading-relaxed">
              We use Afrobeat gospel music because it is joyful, energetic, and impossible to ignore. But these are not just catchy songs. Every lyric is carefully crafted to plant new covenant truth &mdash; grace, righteousness, the finished work of Christ, the indwelling Spirit &mdash; deep into a child's spirit. We don't just tell Bible stories. We teach Bible truth.
            </p>
            <p className="font-dmsans text-gw-dark/70 leading-relaxed">
              What began as a few songs shared with friends has grown into a vision for a global children's Christian brand &mdash; music, books, merchandise, and a community of parents &mdash; all existing to raise children who know who they are in Christ.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gw-dark py-20 lg:py-28 section-padding">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gw-gold/20 flex items-center justify-center">
                <Target className="w-6 h-6 text-gw-gold" />
              </div>
              <h3 className="font-nunito font-bold text-gw-gold text-2xl">Mission</h3>
            </div>
            <p className="font-dmsans text-white/80 leading-relaxed">
              Helping children discover their identity in Christ through music, books, declarations, and faith-filled resources while equipping parents to raise children rooted in God's truth.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gw-gold/20 flex items-center justify-center">
                <Eye className="w-6 h-6 text-gw-gold" />
              </div>
              <h3 className="font-nunito font-bold text-gw-gold text-2xl">Vision</h3>
            </div>
            <p className="font-dmsans text-white/80 leading-relaxed">
              A generation of children who grow up knowing they are chosen, righteous, loved, and filled with the Holy Spirit &mdash; children who walk in the reality of the new covenant before the world ever gets to speak a different identity over them.
            </p>
          </div>
        </div>
      </section>

      {/* What Glosome Means */}
      <section className="bg-gw-warmwhite py-20 lg:py-28 section-padding">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="font-nunito font-black text-3xl lg:text-4xl text-gw-dark mb-6">What Glosome means</h2>
          <p className="font-nunito font-black text-5xl lg:text-7xl text-gw-gold mb-6">Glory + Awesome</p>
          <p className="font-dmsans text-gw-dark/70 text-lg leading-relaxed max-w-2xl mx-auto">
            A <strong>Glosome child</strong> is complete in Christ, radiant with His glory, living an awesome life by heaven's definition. The name captures everything we believe about who children are when they know their identity in Christ &mdash; they are glorious because He lives in them, and their lives are awesome because He defines what awesome means.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gradient-to-br from-[#4C1D95] to-gw-purple py-20 lg:py-28 section-padding">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-nunito font-black text-3xl lg:text-4xl text-white text-center mb-12">Our core values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/15 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-gw-gold/20 flex items-center justify-center mb-5">
                  <v.icon className="w-6 h-6 text-gw-gold" />
                </div>
                <h3 className="font-nunito font-bold text-white text-lg mb-3">{v.title}</h3>
                <p className="font-dmsans text-white/70 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-brands */}
      <section className="bg-white py-20 lg:py-28 section-padding">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-nunito font-black text-3xl lg:text-4xl text-gw-dark text-center mb-12">The Glosome World family</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.map((b) => (
              <Link key={b.title} to={b.link} className="bg-gw-lavender rounded-3xl p-8 text-center hover:shadow-lift hover:-translate-y-2 transition-all duration-300 group">
                <span className="text-4xl mb-4 block">{b.emoji}</span>
                <h3 className="font-nunito font-bold text-gw-dark text-lg mb-1">{b.title}</h3>
                <p className="font-dmsans text-gw-purple text-sm">{b.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gw-dark py-20 lg:py-28 section-padding">
        <div className="max-w-[600px] mx-auto text-center">
          <span className="text-3xl mb-4 block">&#x2709;&#xFE0F;</span>
          <h2 className="font-nunito font-black text-2xl lg:text-3xl text-white mb-8">
            Join the Glosome family
          </h2>
          <NewsletterForm />
        </div>
      </section>
    </div>
  )
}
