import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Music, Heart, Users, Check, ArrowRight, Bell } from 'lucide-react'
import NewsletterForm from '../components/NewsletterForm'

const values = [
  { icon: BookOpen, title: 'New covenant resources', desc: 'Books, devotionals, and guides built on the truth of grace, righteousness, and the finished work.' },
  { icon: Music, title: 'Using Glosome TV at home', desc: 'Tips for making Glosome TV part of your family rhythm &mdash; car rides, bedtime, morning routines.' },
  { icon: Heart, title: 'Grace-based parenting', desc: 'Parenting from identity, not behaviour. Raising children who know who they are in Christ.' },
  { icon: Users, title: 'Growing community', desc: 'Connect with other parents raising children in the new covenant. Share, learn, and grow together.' },
]

const resources = [
  { category: 'Parenting Tips', title: 'How to Talk to Your Child About the Holy Spirit', excerpt: 'Practical ways to help your child understand that the Spirit lives inside them.', date: 'June 2026' },
  { category: 'Grace & Identity', title: 'Why Identity Comes Before Behaviour', excerpt: 'The new covenant approach to parenting: declare who they are, and watch the life follow.', date: 'May 2026' },
  { category: 'Free Download', title: 'The Glosome Family Devotional Guide', excerpt: 'A 7-day devotional for families, with Scripture, discussion questions, and prayers.', date: 'Free' },
]

const comingSoon = [
  { emoji: '\uD83D\uDCD6', title: 'Glosome Parents Devotional Book' },
  { emoji: '\uD83C\uDF93', title: 'New Covenant Parenting Course' },
  { emoji: '\uD83D\uDCC5', title: 'Community Events' },
]

export default function ParentsPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="pt-[65px]">
      {/* Hero */}
      <section className="bg-gw-dark py-20 lg:py-28 section-padding">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="eyebrow text-gw-gold mb-4">Glosome Parents</p>
          <h1 className="font-nunito font-black text-4xl lg:text-6xl text-white mb-6 leading-tight">
            Raising the raised.
          </h1>
          <p className="font-lora italic text-gw-lightpurple/70 max-w-3xl mx-auto text-lg leading-relaxed mb-10">
            You are raising children who are already complete in Christ &mdash; already loved, already righteous, already chosen. Glosome Parents exists for the parent who knows this and wants their home to reflect it. You have found your people.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#community" className="btn-gold">Join our community</a>
            <a href="#resources" className="btn-ghost text-white border-white/20 hover:text-gw-gold hover:border-gw-gold">Browse resources</a>
          </div>
        </div>
      </section>

      {/* Value cards */}
      <section className="bg-white py-20 lg:py-28 section-padding">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-nunito font-black text-3xl lg:text-4xl text-gw-dark text-center mb-12">
            A home for grace-conscious parents
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-gw-warmwhite rounded-3xl p-8 border-t-4 border-gw-gold hover:shadow-lift hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-gw-purple/10 flex items-center justify-center mb-5">
                  <v.icon className="w-6 h-6 text-gw-purple" />
                </div>
                <h3 className="font-nunito font-bold text-gw-dark text-lg mb-3">{v.title}</h3>
                <p className="font-dmsans text-gw-dark/60 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / Community */}
      <section id="community" className="bg-gw-dark py-20 lg:py-28 section-padding">
        <div className="max-w-[800px] mx-auto text-center">
          <span className="text-4xl mb-4 block">&#x2709;&#xFE0F;</span>
          <p className="eyebrow text-gw-gold mb-4">Join the community</p>
          <h2 className="font-nunito font-black text-3xl lg:text-4xl text-white mb-4 leading-tight">
            The Glosome parent newsletter &mdash; free, always
          </h2>
          <p className="font-lora italic text-gw-lightpurple/70 mb-10">
            Get new song alerts, parent devotionals, book releases, and new covenant resources &mdash; delivered to your inbox.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 text-gw-goldlight font-dmsans text-sm">
              <Check className="w-4 h-4 text-gw-gold" />
              New Glosome TV song alerts
            </div>
            <div className="flex items-center gap-2 text-gw-goldlight font-dmsans text-sm">
              <Check className="w-4 h-4 text-gw-gold" />
              First access to book releases
            </div>
            <div className="flex items-center gap-2 text-gw-goldlight font-dmsans text-sm">
              <Check className="w-4 h-4 text-gw-gold" />
              Grace parenting devotionals
            </div>
          </div>

          <NewsletterForm />
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="bg-gw-warmwhite py-20 lg:py-28 section-padding">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-nunito font-black text-3xl lg:text-4xl text-gw-dark mb-12">
            Resources for parents
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {resources.map((r) => (
              <div key={r.title} className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-lift hover:-translate-y-1 transition-all duration-300">
                <div className="h-40 bg-gradient-to-br from-gw-purple to-gw-cardPurple flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-white/30" />
                </div>
                <div className="p-6">
                  <span className="bg-gw-lavender text-gw-purple font-dmsans font-semibold text-xs px-3 py-1 rounded-full">{r.category}</span>
                  <h3 className="font-nunito font-bold text-gw-dark text-lg mt-3 mb-2">{r.title}</h3>
                  <p className="font-dmsans text-gw-dark/60 text-sm mb-4">{r.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-dmsans text-gw-dark/40 text-xs">{r.date}</span>
                    <Link to="/blog" className="font-dmsans font-semibold text-gw-gold text-sm hover:underline flex items-center gap-1">
                      Read more <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/blog" className="btn-gold inline-flex items-center gap-2">
              Read all articles
            </Link>
          </div>
        </div>
      </section>

      {/* Community group */}
      <section className="bg-gw-dark py-20 lg:py-28 section-padding">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-nunito font-black text-3xl text-white text-center mb-12">
            Join the Glosome Parents community group
          </h2>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-gw-gold/20 mb-10">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-20 h-20 rounded-3xl bg-gw-gold/20 flex items-center justify-center shrink-0">
                <Users className="w-10 h-10 text-gw-gold" />
              </div>
              <div className="text-center lg:text-left">
                <h3 className="font-nunito font-bold text-white text-xl mb-3">The Glosome Parents Community</h3>
                <p className="font-dmsans text-white/70 leading-relaxed mb-4">
                  A grace-filled space for parents raising children who know who they are in Christ. Share resources, ask questions, celebrate wins, and grow together with parents from around the world.
                </p>
                <button className="btn-gold">Join Community</button>
              </div>
            </div>
          </div>

          {/* Coming soon cards */}
          <div className="grid sm:grid-cols-3 gap-6">
            {comingSoon.map((item) => (
              <div key={item.title} className="bg-white/5 rounded-3xl p-8 text-center">
                <span className="text-3xl mb-4 block">{item.emoji}</span>
                <h4 className="font-nunito font-bold text-white text-lg mb-2">{item.title}</h4>
                <span className="inline-block bg-gw-gold/10 text-gw-gold font-dmsans text-xs px-3 py-1 rounded-full">
                  <Bell className="w-3 h-3 inline mr-1" /> Coming soon
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold strip */}
      <section className="bg-gw-gold py-10 section-padding">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="font-nunito font-black text-gw-dark text-xl lg:text-2xl mb-4">
            You are not raising your children alone.
          </p>
          <a href="#community" className="inline-block bg-gw-dark text-white font-dmsans font-bold px-8 py-3 rounded-2xl hover:bg-gw-dark/90 transition-colors">
            Join the community
          </a>
        </div>
      </section>
    </div>
  )
}
