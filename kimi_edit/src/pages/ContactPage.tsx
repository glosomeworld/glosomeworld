import { useEffect, useState } from 'react'
import { Mail, Play, MapPin, Church, School, Mic, Building2, ArrowRight, Send } from 'lucide-react'
import NewsletterForm from '../components/NewsletterForm'

const partnershipTypes = [
  { icon: Church, title: 'Churches & Ministries', desc: 'Use Glosome resources in your children\'s ministry, Sunday school, or family services.' },
  { icon: School, title: 'Schools & Educators', desc: 'Integrate Glosome music and books into your curriculum or classroom.' },
  { icon: Mic, title: 'Content Creators & Artists', desc: 'Collaborate on new songs, books, or creative projects that serve children.' },
  { icon: Building2, title: 'Brands & Businesses', desc: 'Partner with us on products, events, or campaigns that align with our mission.' },
]

export default function ContactPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const [generalForm, setGeneralForm] = useState({ name: '', email: '', subject: 'General', message: '' })
  const [partnerForm, setPartnerForm] = useState({ name: '', org: '', email: '', type: 'Church', message: '' })
  const [generalSubmitted, setGeneralSubmitted] = useState(false)
  const [partnerSubmitted, setPartnerSubmitted] = useState(false)

  const handleGeneralSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setGeneralSubmitted(true)
  }

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setPartnerSubmitted(true)
  }

  return (
    <div className="pt-[65px]">
      {/* Hero */}
      <section className="bg-gw-dark py-20 lg:py-28 section-padding">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="eyebrow text-gw-gold mb-4">Connect with Glosome World</p>
          <h1 className="font-nunito font-black text-4xl lg:text-6xl text-white mb-6 leading-tight">
            We would love to hear from you.
          </h1>
          <p className="font-lora italic text-gw-lightpurple/70 max-w-2xl mx-auto mb-10">
            Whether you have a question, a partnership idea, or just want to say hello &mdash; we are here.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="btn-gold">General enquiry</a>
            <a href="#partnership" className="btn-ghost text-white border-white/20 hover:text-gw-gold hover:border-gw-gold">Partnership enquiry</a>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="contact" className="bg-gw-warmwhite py-20 lg:py-28 section-padding">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="font-nunito font-black text-3xl text-gw-dark mb-8">Send us a message</h2>

              {generalSubmitted ? (
                <div className="bg-gw-cardMint rounded-3xl p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-gw-green/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-gw-green" />
                  </div>
                  <h3 className="font-nunito font-bold text-gw-dark text-xl mb-2">Message sent!</h3>
                  <p className="font-dmsans text-gw-dark/60">We will get back to you within 2-3 business days.</p>
                </div>
              ) : (
                <form onSubmit={handleGeneralSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <input
                      type="text"
                      placeholder="Your name"
                      required
                      value={generalForm.name}
                      onChange={(e) => setGeneralForm({ ...generalForm, name: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl bg-white border border-gw-dark/10 font-dmsans text-gw-dark placeholder:text-gw-dark/40 focus:outline-none focus:border-gw-purple/50 focus:ring-1 focus:ring-gw-purple/30"
                    />
                    <input
                      type="email"
                      placeholder="Email address"
                      required
                      value={generalForm.email}
                      onChange={(e) => setGeneralForm({ ...generalForm, email: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl bg-white border border-gw-dark/10 font-dmsans text-gw-dark placeholder:text-gw-dark/40 focus:outline-none focus:border-gw-purple/50 focus:ring-1 focus:ring-gw-purple/30"
                    />
                  </div>
                  <select
                    value={generalForm.subject}
                    onChange={(e) => setGeneralForm({ ...generalForm, subject: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl bg-white border border-gw-dark/10 font-dmsans text-gw-dark focus:outline-none focus:border-gw-purple/50 focus:ring-1 focus:ring-gw-purple/30"
                  >
                    <option>General Enquiry</option>
                    <option>Song Request</option>
                    <option>Technical Support</option>
                    <option>Media Enquiry</option>
                    <option>Prayer Request</option>
                  </select>
                  <textarea
                    placeholder="Your message"
                    required
                    rows={5}
                    value={generalForm.message}
                    onChange={(e) => setGeneralForm({ ...generalForm, message: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl bg-white border border-gw-dark/10 font-dmsans text-gw-dark placeholder:text-gw-dark/40 focus:outline-none focus:border-gw-purple/50 focus:ring-1 focus:ring-gw-purple/30 resize-none"
                  />
                  <button type="submit" className="btn-gold flex items-center gap-2">
                    Send message <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Info cards */}
            <div className="space-y-5">
              <div className="bg-white rounded-3xl p-6 shadow-card">
                <div className="w-10 h-10 rounded-xl bg-gw-purple/10 flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5 text-gw-purple" />
                </div>
                <h4 className="font-nunito font-bold text-gw-dark mb-1">General Contact</h4>
                <a href="mailto:glosomeworld@gmail.com" className="font-dmsans text-gw-purple hover:underline text-sm">
                  glosomeworld@gmail.com
                </a>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-card">
                <div className="w-10 h-10 rounded-xl bg-gw-gold/10 flex items-center justify-center mb-4">
                  <Play className="w-5 h-5 text-gw-gold" />
                </div>
                <h4 className="font-nunito font-bold text-gw-dark mb-1">Glosome TV</h4>
                <a href="https://www.youtube.com/@GlosomeTV" target="_blank" rel="noopener noreferrer" className="font-dmsans text-gw-purple hover:underline text-sm">
                  youtube.com/@GlosomeTV
                </a>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-card">
                <div className="w-10 h-10 rounded-xl bg-gw-green/10 flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5 text-gw-green" />
                </div>
                <h4 className="font-nunito font-bold text-gw-dark mb-1">Location</h4>
                <p className="font-dmsans text-gw-dark/60 text-sm">
                  Nigeria &middot; Serving families worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership strip */}
      <section id="partnership" className="bg-gradient-to-br from-[#4C1D95] to-gw-purple py-16 section-padding">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="font-nunito font-black text-3xl lg:text-4xl text-white mb-3">
            Partnerships and collaboration
          </h2>
          <p className="font-nunito font-bold text-gw-gold text-lg">
            Let's reach children together.
          </p>
        </div>
      </section>

      {/* Partnership types */}
      <section className="bg-white py-20 lg:py-28 section-padding">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-nunito font-black text-3xl text-gw-dark text-center mb-12">
            Who we partner with
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {partnershipTypes.map((p) => (
              <div key={p.title} className="bg-gw-lavender rounded-3xl p-8 hover:shadow-lift hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-gw-purple/10 flex items-center justify-center mb-5">
                  <p.icon className="w-6 h-6 text-gw-purple" />
                </div>
                <h3 className="font-nunito font-bold text-gw-dark text-lg mb-3">{p.title}</h3>
                <p className="font-dmsans text-gw-dark/60 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gw-dark py-16 section-padding">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Reach out', desc: 'Send us your partnership enquiry using the form below.' },
              { num: '02', title: 'We connect', desc: 'Our team will respond within 5-7 business days.' },
              { num: '03', title: 'We build together', desc: 'Together, we create something that serves children worldwide.' },
            ].map((step) => (
              <div key={step.num} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center">
                <span className="font-nunito font-black text-gw-gold text-4xl mb-4 block">{step.num}</span>
                <h3 className="font-nunito font-bold text-white text-lg mb-2">{step.title}</h3>
                <p className="font-dmsans text-white/60 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership form */}
      <section className="bg-gw-warmwhite py-20 lg:py-28 section-padding">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-nunito font-black text-3xl text-gw-dark mb-8">Partnership enquiry</h2>

          {partnerSubmitted ? (
            <div className="bg-gw-cardMint rounded-3xl p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-gw-green/20 flex items-center justify-center mx-auto mb-4">
                <Send className="w-7 h-7 text-gw-green" />
              </div>
              <h3 className="font-nunito font-bold text-gw-dark text-xl mb-2">Enquiry sent!</h3>
              <p className="font-dmsans text-gw-dark/60">We will get back to you within 5-7 business days.</p>
            </div>
          ) : (
            <form onSubmit={handlePartnerSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  value={partnerForm.name}
                  onChange={(e) => setPartnerForm({ ...partnerForm, name: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl bg-white border border-gw-dark/10 font-dmsans text-gw-dark placeholder:text-gw-dark/40 focus:outline-none focus:border-gw-purple/50"
                />
                <input
                  type="text"
                  placeholder="Organisation name"
                  value={partnerForm.org}
                  onChange={(e) => setPartnerForm({ ...partnerForm, org: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl bg-white border border-gw-dark/10 font-dmsans text-gw-dark placeholder:text-gw-dark/40 focus:outline-none focus:border-gw-purple/50"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  value={partnerForm.email}
                  onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl bg-white border border-gw-dark/10 font-dmsans text-gw-dark placeholder:text-gw-dark/40 focus:outline-none focus:border-gw-purple/50"
                />
                <select
                  value={partnerForm.type}
                  onChange={(e) => setPartnerForm({ ...partnerForm, type: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl bg-white border border-gw-dark/10 font-dmsans text-gw-dark focus:outline-none focus:border-gw-purple/50"
                >
                  <option>Church / Ministry</option>
                  <option>School / Educator</option>
                  <option>Content Creator / Artist</option>
                  <option>Brand / Business</option>
                  <option>Other</option>
                </select>
              </div>
              <textarea
                placeholder="Tell us about your partnership idea"
                required
                rows={5}
                value={partnerForm.message}
                onChange={(e) => setPartnerForm({ ...partnerForm, message: e.target.value })}
                className="w-full px-5 py-4 rounded-2xl bg-white border border-gw-dark/10 font-dmsans text-gw-dark placeholder:text-gw-dark/40 focus:outline-none focus:border-gw-purple/50 resize-none"
              />
              <button type="submit" className="btn-primary-purple flex items-center gap-2">
                Send enquiry <ArrowRight className="w-4 h-4" />
              </button>
              <p className="font-dmsans text-gw-dark/40 text-xs">
                We aim to respond to all partnership enquiries within 5-7 business days.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Scripture strip */}
      <section className="bg-gw-dark py-16 section-padding">
        <div className="max-w-[800px] mx-auto text-center">
          <blockquote className="font-lora italic text-gw-goldlight text-lg lg:text-xl leading-relaxed">
            &ldquo;Though one may be overpowered, two can defend themselves. A cord of three strands is not quickly broken.&rdquo;
          </blockquote>
          <cite className="font-dmsans text-gw-gold/50 text-sm mt-4 not-italic block">Ecclesiastes 4:12</cite>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gw-warmwhite py-20 lg:py-28 section-padding">
        <div className="max-w-[600px] mx-auto text-center">
          <span className="text-3xl mb-4 block">&#x2709;&#xFE0F;</span>
          <h2 className="font-nunito font-black text-2xl lg:text-3xl text-gw-dark mb-8">
            Stay connected with Glosome World
          </h2>
          <NewsletterForm />
        </div>
      </section>
    </div>
  )
}
