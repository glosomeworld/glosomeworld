import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Play, ArrowRight, Eye, Shield, Bird, Heart, Flame, Sparkles, Check, Quote } from 'lucide-react'
import NewsletterForm from '../components/NewsletterForm'

gsap.registerPlugin(ScrollTrigger)

/* ─── Hero Section ─── */
function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.fromTo(cardRef.current, { y: 60, scale: 0.98, opacity: 0 }, { y: 0, scale: 1, opacity: 1, duration: 1 })
        .fromTo(headlineRef.current?.querySelectorAll('.word') || [], { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.04 }, '-=0.5')
        .fromTo(ctaRef.current, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const headlineWords = 'Raising children who know who they are in Christ'.split(' ')

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-gw-dark flex items-center justify-center overflow-hidden pt-[65px]">
      {/* Background arcs */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 1440 900" fill="none">
        <path d="M-100 200 Q400 50 720 300 T1540 150" stroke="#D97706" strokeWidth="1.5" fill="none" />
        <path d="M1540 500 Q1000 350 720 550 T-100 400" stroke="#C4B5FD" strokeWidth="1.5" fill="none" />
      </svg>

      {/* Sparkle dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gw-gold/40 rotate-45"
            style={{ left: `${10 + i * 9}%`, top: `${15 + (i % 4) * 18}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-4 sm:px-6">
        {/* Welcome Card */}
        <div ref={cardRef} className="bg-white rounded-3xl shadow-card p-8 sm:p-12 lg:p-16 text-center relative">
          {/* Top accent bar */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[120px] h-2.5 bg-gw-gold rounded-full" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gw-gold/10 text-gw-gold font-dmsans font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full mb-8 mt-4">
            A children's Christian brand &mdash; for every child, worldwide.
          </div>

          {/* Headline */}
          <h1 ref={headlineRef} className="font-nunito font-black text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gw-dark leading-[0.95] mb-6">
            {headlineWords.map((word, i) => (
              <span key={i} className="word inline-block mr-[0.3em]">
                {word === 'know' || word === 'who' || word === 'they' || word === 'are' ? (
                  <span className="text-gw-goldlight">{word}</span>
                ) : word === 'in' || word === 'Christ' ? (
                  <span className="text-gw-lightpurple italic font-lora">{word}</span>
                ) : (
                  word
                )}
              </span>
            ))}
          </h1>

          {/* Sub-paragraph */}
          <p className="font-lora italic text-gw-lightpurple text-base lg:text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            New covenant truths &mdash; grace, righteousness, the finished work of Christ, and the indwelling Spirit &mdash; planted deep into your child's spirit through music, stories, and resources that make truth joyful, memorable, and alive.
          </p>

          {/* Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="https://www.youtube.com/@GlosomeTV"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-current" />
              Watch Glosome TV
            </a>
            <Link to="/parents" className="btn-ghost flex items-center gap-2">
              For parents <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { num: '127+', label: 'Subscribers' },
              { num: '25+', label: 'Songs' },
              { num: '10', label: 'Playlists' },
              { num: '\u221E', label: 'Truths' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-nunito font-black text-gw-gold text-2xl lg:text-3xl">{stat.num}</div>
                <div className="font-dmsans text-gw-lightpurple/60 text-xs uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Marquee Band ─── */
function MarqueeBand() {
  const text = "Where truth takes root and joy breaks out \u25C6 New covenant truths. Set to music. \u25C6 For every child. Every nation. \u25C6 Rooted in Christ, growing in love \u25C6 Bible truth songs \u2014 not Bible story songs \u25C6 Grace. Righteousness. Identity. "
  return (
    <section className="bg-gw-gold py-5 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="font-nunito font-black text-gw-dark text-sm sm:text-base uppercase tracking-wider mx-4 shrink-0">
            {text}
          </span>
        ))}
      </div>
    </section>
  )
}

/* ─── What Makes Us Different ─── */
function DifferenceSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.diff-heading', { x: -60, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.8,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', end: 'top 45%', scrub: 0.6 }
      })
      gsap.fromTo('.diff-card-left', { x: -100, rotate: -2, opacity: 0 }, {
        x: 0, rotate: 0, opacity: 1, duration: 0.8,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', end: 'top 40%', scrub: 0.7 }
      })
      gsap.fromTo('.diff-card-right', { x: 100, rotate: 2, opacity: 0 }, {
        x: 0, rotate: 0, opacity: 1, duration: 0.8,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', end: 'top 40%', scrub: 0.7 }
      })
      gsap.fromTo('.diff-grid-card', { y: 80, scale: 0.96, opacity: 0 }, {
        y: 0, scale: 1, opacity: 1, duration: 0.7, stagger: 0.08,
        scrollTrigger: { trigger: '.diff-grid', start: 'top 80%', end: 'top 40%', scrub: 0.7 }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const cards = [
    { color: 'bg-gw-purple', icon: Eye, title: 'God\u2011consciousness', desc: 'Children who know God is always present, always near, always thinking about them.' },
    { color: 'bg-gw-gold', icon: Shield, title: 'Righteousness\u2011conscious', desc: 'Children who know they don\'t have to sin because they carry God\'s nature.' },
    { color: 'bg-gw-green', icon: Bird, title: 'New covenant realities', desc: 'Grace, the finished work, the Spirit, the new creation \u2014 planted deep in a child\'s spirit.' },
    { color: 'bg-pink-500', icon: Heart, title: 'Unashamed of the Gospel', desc: 'Children birthed to live the Gospel out loud and share it confidently.' },
    { color: 'bg-blue-500', icon: Flame, title: 'Spirit\u2011filled children', desc: 'Children who know the Holy Spirit is a person \u2014 not a concept \u2014 who lives inside them.' },
    { color: 'bg-teal-500', icon: Sparkles, title: 'Reflecting Christ', desc: 'We raise children who reflect Jesus \u2014 not just children who know about Him.' },
  ]

  return (
    <section ref={sectionRef} className="bg-white py-20 lg:py-28 section-padding">
      <div className="max-w-[1440px] mx-auto">
        <div className="diff-heading mb-12">
          <p className="eyebrow text-gw-purple mb-3">What makes Glosome TV different</p>
          <h2 className="font-nunito font-black text-3xl lg:text-5xl text-gw-dark max-w-2xl leading-tight">
            We don't make Bible story songs. We make Bible truth songs.
          </h2>
        </div>

        {/* Statement cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="diff-card-left bg-gw-cardPurple rounded-3xl p-8 flex items-start gap-4">
            <ArrowRight className="w-6 h-6 text-gw-gold shrink-0 mt-1" />
            <p className="font-dmsans text-gw-dark font-medium text-lg">
              We don't entertain first. We disciple first &mdash; and joy follows naturally.
            </p>
          </div>
          <div className="diff-card-right bg-gw-cardPink rounded-3xl p-8 flex items-start gap-4">
            <ArrowRight className="w-6 h-6 text-gw-gold shrink-0 mt-1" />
            <p className="font-dmsans text-gw-dark font-medium text-lg">
              We don't just teach Bible stories &mdash; we teach new covenant realities.
            </p>
          </div>
        </div>

        {/* 3x2 grid */}
        <div className="diff-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.title} className="diff-grid-card rounded-3xl overflow-hidden shadow-card hover:shadow-lift hover:-translate-y-2 transition-all duration-300">
              <div className={`${card.color} h-2`} />
              <div className="p-6 bg-white">
                <div className="w-12 h-12 rounded-2xl bg-gw-lavender flex items-center justify-center mb-4">
                  <card.icon className="w-6 h-6 text-gw-purple" />
                </div>
                <h3 className="font-nunito font-bold text-gw-dark text-lg mb-2">{card.title}</h3>
                <p className="font-dmsans text-gw-dark/60 text-sm leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Brand Universe ─── */
function UniverseSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.uni-heading', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', end: 'top 55%', scrub: 0.6 }
      })
      gsap.fromTo('.uni-card', { y: 80, scale: 0.96, opacity: 0 }, {
        y: 0, scale: 1, opacity: 1, duration: 0.7, stagger: 0.06,
        scrollTrigger: { trigger: '.uni-grid', start: 'top 80%', end: 'top 36%', scrub: 0.7 }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const brands = [
    { logo: '/images/glosome-books-logo.png', title: 'Glosome Books', badge: 'Live now', badgeColor: 'bg-gw-green', tagline: 'Truth in their hands.', desc: "Christ-centered books, declarations, journals, and resources that make God's truth easy for children to hold, say, and remember.", link: '/books', linkText: 'Browse books', bg: 'bg-gw-cardPeach' },
    { logo: '/images/glosome-tv-logo.jpeg', title: 'Glosome TV', badge: 'Live now', badgeColor: 'bg-gw-green', tagline: 'Rooted in Christ, growing in love.', desc: 'Joyful Christian kids music and videos that plant identity, grace, Scripture, and worship into young hearts.', link: '/tv', linkText: 'Watch now on YouTube', bg: 'bg-gw-cardSky' },
    { logo: '/images/glosome-nursery-rhymes-logo.png', title: 'Glosome Nursery Rhymes', badge: 'Live now', badgeColor: 'bg-gw-green', tagline: 'Rooted in Christ, growing in love.', desc: 'Faith-filled nursery rhymes for little hearts — simple songs that help children sing, learn, and grow in God’s love.', link: '/nursery-rhymes', linkText: 'Watch nursery rhymes', bg: 'bg-gw-cardPink' },
    { logo: '/images/glosome-parents-logo.png', title: 'Glosome Parents', badge: 'Coming soon', badgeColor: 'bg-gw-gold', tagline: 'Rooted in Christ, growing in love.', desc: 'Encouragement and resources for parents raising children who know who they are in Christ.', link: '/parents', linkText: 'For parents', bg: 'bg-gw-cardMint' },
  ]

  return (
    <section ref={sectionRef} className="bg-gw-dark py-20 lg:py-28 section-padding">
      <div className="max-w-[1440px] mx-auto">
        <div className="uni-heading mb-12">
          <p className="eyebrow text-gw-gold mb-3">The Glosome World universe</p>
          <h2 className="font-nunito font-black text-3xl lg:text-5xl text-white max-w-xl leading-tight">
            One mission. Every format.
          </h2>
          <p className="font-lora italic text-gw-lightpurple/70 mt-4 max-w-lg">
            From music to merchandise, books to community &mdash; every Glosome brand exists to plant truth deep into a child's spirit.
          </p>
        </div>

        <div className="uni-grid grid sm:grid-cols-2 gap-6">
          {brands.map((brand) => (
            <Link key={brand.title} to={brand.link} className={`uni-card ${brand.bg} rounded-3xl p-8 hover:shadow-lift hover:-translate-y-2 transition-all duration-300 group`}>
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="w-20 h-20 rounded-2xl bg-white/70 shadow-sm flex items-center justify-center overflow-hidden p-2">
                  <img src={brand.logo} alt={`${brand.title} logo`} className="w-full h-full object-contain" />
                </div>
                <span className={`${brand.badgeColor} text-white font-dmsans font-bold text-xs px-3 py-1 rounded-full`}>{brand.badge}</span>
              </div>
              <h3 className="font-nunito font-bold text-gw-dark text-2xl mb-1">{brand.title}</h3>
              <p className="font-dmsans text-gw-purple font-semibold text-sm mb-3">{brand.tagline}</p>
              <p className="font-dmsans text-gw-dark/60 text-sm mb-4">{brand.desc}</p>
              <span className="font-dmsans font-semibold text-gw-gold text-sm group-hover:underline">{brand.linkText} &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Scripture Section ─── */
function ScriptureSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.scripture-card', { y: 60, scale: 0.98, opacity: 0 }, {
        y: 0, scale: 1, opacity: 1, duration: 0.8,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', end: 'top 40%', scrub: 0.7 }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-gradient-to-br from-[#4C1D95] to-gw-purple py-20 lg:py-28 section-padding">
      <div className="max-w-[1200px] mx-auto">
        <div className="scripture-card bg-white/10 backdrop-blur-sm rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden">
          {/* Decorative quotes */}
          <Quote className="absolute top-6 left-6 w-20 h-20 text-white/10" />
          <Quote className="absolute bottom-6 right-6 w-20 h-20 text-white/10 rotate-180" />

          <blockquote className="font-lora italic text-gw-goldlight text-xl sm:text-2xl lg:text-3xl leading-relaxed max-w-4xl mx-auto mb-6">
            &ldquo;But you are a chosen generation, a royal priesthood, a holy nation, His own special people, that you may proclaim the praises of Him who called you out of darkness into His marvellous light.&rdquo;
          </blockquote>
          <cite className="font-dmsans text-gw-gold/60 text-sm not-italic">
            1 Peter 2:9 &mdash; the Glosome child
          </cite>
        </div>
      </div>
    </section>
  )
}

/* ─── Heart Behind Glosome ─── */
function HeartSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.heart-heading', { x: -50, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.7,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', end: 'top 55%' }
      })
      gsap.fromTo('.heart-photo', { y: 80, scale: 0.98, opacity: 0 }, {
        y: 0, scale: 1, opacity: 1, duration: 0.8,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 72%', end: 'top 38%', scrub: 0.7 }
      })
      gsap.fromTo('.heart-card', { x: 80, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.7, stagger: 0.1,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', end: 'top 35%', scrub: 0.7 }
      })
      gsap.fromTo('.heart-manifesto', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7,
        scrollTrigger: { trigger: '.heart-manifesto', start: 'top 85%', end: 'top 55%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const beliefs = [
    { num: '01', title: 'We believe in the new covenant', text: 'Grace is not a licence to sin \u2014 it is the power not to. A child who knows they are the righteousness of God in Christ does not need to be frightened into good behaviour.' },
    { num: '02', title: 'We believe the Spirit lives in children', text: 'The Holy Spirit lives in children the same way He lives in adults \u2014 fully, completely, without measure.' },
    { num: '03', title: 'We believe the finished work is finished', text: 'Jesus said It is finished. Glosome World does not give children a gospel of striving. We give them a gospel of rest.' },
    { num: '04', title: 'What Glosome means', text: 'Glosome equals Glory plus Awesome. A Glosome child is complete in Christ, radiant with His glory, living an awesome life by heaven\'s definition.' },
  ]

  return (
    <section ref={sectionRef} className="bg-gw-warmwhite py-20 lg:py-28 section-padding">
      <div className="max-w-[1440px] mx-auto">
        <div className="heart-heading mb-12">
          <p className="eyebrow text-gw-purple mb-3">The heart behind Glosome World</p>
          <h2 className="font-nunito font-black text-3xl lg:text-5xl text-gw-dark max-w-2xl leading-tight">
            Before the world speaks, let truth go in first.
          </h2>
        </div>

        {/* 2x2 belief cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {beliefs.map((b) => (
            <div key={b.num} className="heart-card bg-white rounded-3xl p-8 shadow-card hover:shadow-lift hover:-translate-y-1 transition-all duration-300">
              <span className="font-nunito font-black text-5xl text-gw-lightpurple/30">{b.num}</span>
              <h3 className="font-nunito font-bold text-gw-purple text-lg mt-3 mb-3">{b.title}</h3>
              <p className="font-dmsans text-gw-dark/60 text-sm leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>

        {/* Photo + side cards */}
        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          <div className="heart-photo rounded-3xl overflow-hidden shadow-card h-[320px] lg:h-[400px]">
            <img src="/images/family-listening.jpg" alt="Family listening to Glosome music" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6">
            <div className="heart-card bg-gw-dark rounded-3xl p-8">
              <h3 className="font-nunito font-bold text-gw-gold text-xl mb-3">
                This is not just a brand. This is a movement.
              </h3>
              <p className="font-lora italic text-gw-lightpurple/80 text-sm leading-relaxed">
                We are not trying to make children behave. We are raising children who glow &mdash; with the glory of a God who lives inside them. Every song on Glosome TV is a truth planted. Every book is a reality declared. Every hoodie is a statement worn.
              </p>
            </div>
            <div className="heart-card bg-gw-cardPurple rounded-3xl p-8">
              <h3 className="font-nunito font-bold text-gw-dark text-xl mb-3">What Glosome means</h3>
              <p className="font-dmsans text-gw-dark/70 text-sm leading-relaxed">
                Glosome equals Glory plus Awesome. A Glosome child is complete in Christ, radiant with His glory, living an awesome life by heaven's definition.
              </p>
            </div>
          </div>
        </div>

        {/* Manifesto bar */}
        <div className="heart-manifesto bg-gw-lavender rounded-3xl p-8 text-center">
          <p className="font-nunito font-black text-gw-dark text-lg lg:text-xl">
            Every song is a truth planted. Every book is a reality declared. Every hoodie is a statement worn.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── How It Works ─── */
function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hiw-heading', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', end: 'top 55%' }
      })
      gsap.fromTo('.hiw-circle', { scale: 0.6, opacity: 0 }, {
        scale: 1, opacity: 1, duration: 0.6, stagger: 0.07,
        scrollTrigger: { trigger: '.hiw-steps', start: 'top 80%', end: 'top 42%', scrub: 0.7 }
      })
      gsap.fromTo('.hiw-text', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.07,
        scrollTrigger: { trigger: '.hiw-steps', start: 'top 70%', end: 'top 35%', scrub: 0.7 }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const steps = [
    { color: 'bg-gw-cardPurple', num: '01', title: 'A child hears a song', desc: 'An Afrobeat gospel song plays. The child is drawn in before they realise truth is being delivered.', icon: '\uD83C\uDFB5' },
    { color: 'bg-gw-gold', num: '02', title: 'They sing it on repeat', desc: 'Each replay plants the truth deeper. "I am righteous." "God is always with me." Truth goes deeper every time.', icon: '\uD83D\uDD04' },
    { color: 'bg-gw-green', num: '03', title: 'Truth takes root', desc: 'What a child sings becomes what they believe. What they believe becomes who they are.', icon: '\uD83C\uDF31' },
    { color: 'bg-gw-cardPink', num: '04', title: 'A child who glows', desc: 'They walk into school knowing they are loved. That is a Glosome child \u2014 and that is the mission.', icon: '\u2728' },
  ]

  return (
    <section ref={sectionRef} className="bg-white py-20 lg:py-28 section-padding">
      <div className="max-w-[1440px] mx-auto">
        <div className="hiw-heading mb-16">
          <p className="eyebrow text-gw-purple mb-3">How it works</p>
          <h2 className="font-nunito font-black text-3xl lg:text-5xl text-gw-dark leading-tight">
            From a song to a life changed.
          </h2>
        </div>

        <div className="hiw-steps grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="text-center">
              <div className={`hiw-circle ${step.color} w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-6 animate-float shadow-card`}>
                <span className="text-4xl">{step.icon}</span>
              </div>
              <div className="hiw-text">
                <span className="font-nunito font-black text-gw-gold text-sm">Step {step.num}</span>
                <h3 className="font-nunito font-bold text-gw-dark text-lg mt-2 mb-3">{step.title}</h3>
                <p className="font-dmsans text-gw-dark/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Parent Trust ─── */
function TrustSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.trust-heading', { x: -50, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.7,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      })
      gsap.fromTo('.trust-card', { y: 60, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.08,
        scrollTrigger: { trigger: '.trust-grid', start: 'top 80%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const checks = [
    { title: 'Doctrinally rooted in grace', desc: 'Every Glosome song is built on new covenant truth \u2014 grace, righteousness, the finished work of Christ. Nothing is watered down.' },
    { title: 'Identity before behaviour', desc: 'We never use fear, guilt, or shame. We declare who children are in Christ and trust that identity produces the life.' },
    { title: 'Safe for all ages', desc: 'Every Glosome TV video is designed for children from toddlers to pre-teens \u2014 joyful, bright, and always age-appropriate.' },
    { title: 'Globally minded', desc: 'The Gospel belongs to every child on earth. Glosome World is for families everywhere \u2014 every nation, every home.' },
  ]

  return (
    <section ref={sectionRef} className="bg-gw-warmwhite py-20 lg:py-28 section-padding">
      <div className="max-w-[1440px] mx-auto">
        <div className="trust-heading mb-12">
          <p className="eyebrow text-gw-purple mb-3">For parents</p>
          <h2 className="font-nunito font-black text-3xl lg:text-5xl text-gw-dark max-w-3xl leading-tight">
            A brand you can trust completely with your child.
          </h2>
          <p className="font-lora italic text-gw-dark/50 mt-4 max-w-2xl">
            You are the gatekeeper of what enters your child's heart. We take that seriously.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Trust checklist */}
          <div className="trust-grid grid sm:grid-cols-2 gap-4">
            {checks.map((check) => (
              <div key={check.title} className="trust-card bg-white rounded-3xl p-6 shadow-card">
                <div className="w-10 h-10 rounded-full bg-gw-green/10 flex items-center justify-center mb-4">
                  <Check className="w-5 h-5 text-gw-green" />
                </div>
                <h4 className="font-nunito font-bold text-gw-dark text-base mb-2">{check.title}</h4>
                <p className="font-dmsans text-gw-dark/60 text-sm leading-relaxed">{check.desc}</p>
              </div>
            ))}
          </div>

          {/* Photo + testimonial */}
          <div className="space-y-6">
            <div className="rounded-3xl overflow-hidden shadow-card h-[240px]">
              <img src="/images/reading-together.jpg" alt="Parent reading with child" className="w-full h-full object-cover" />
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-card">
              <Quote className="w-8 h-8 text-gw-lightpurple/30 mb-3" />
              <p className="font-lora italic text-gw-dark/70 text-sm leading-relaxed mb-4">
                &ldquo;My daughter asks to play Glosome TV songs every morning. I've heard her singing 'I am righteous' while brushing her teeth. These songs are planting truth deeper than any conversation could.&rdquo;
              </p>
              <p className="font-dmsans font-semibold text-gw-dark text-xs">&mdash; A Glosome parent</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Newsletter CTA ─── */
function CTASection() {
  return (
    <section className="bg-gw-dark py-20 lg:py-28 section-padding">
      <div className="max-w-[1200px] mx-auto text-center">
        <span className="text-4xl mb-4 block">&#x2709;&#xFE0F;</span>
        <p className="eyebrow text-gw-gold mb-4">Stay connected</p>
        <h2 className="font-nunito font-black text-3xl lg:text-5xl text-white mb-4 leading-tight">
          Join the Glosome parent community.
        </h2>
        <p className="font-lora italic text-gw-lightpurple/70 max-w-2xl mx-auto mb-10">
          Get new song alerts, parent devotionals, book releases, and new covenant resources for your family &mdash; delivered to your inbox. Free. Always.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 text-gw-goldlight font-dmsans text-sm">
            <Check className="w-4 h-4 text-gw-gold" />
            New Glosome TV song alerts every time we release
          </div>
          <div className="flex items-center gap-2 text-gw-goldlight font-dmsans text-sm">
            <Check className="w-4 h-4 text-gw-gold" />
            First access to every Glosome Books release
          </div>
          <div className="flex items-center gap-2 text-gw-goldlight font-dmsans text-sm">
            <Check className="w-4 h-4 text-gw-gold" />
            Grace parenting devotionals
          </div>
        </div>

        <div className="max-w-xl mx-auto">
          <NewsletterForm />
        </div>
      </div>
    </section>
  )
}

/* ─── HomePage Assembly ─── */
export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HeroSection />
      <MarqueeBand />
      <DifferenceSection />
      <UniverseSection />
      <ScriptureSection />
      <HeartSection />
      <HowItWorksSection />
      <TrustSection />
      <CTASection />
    </>
  )
}
