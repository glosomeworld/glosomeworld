import { useEffect, useState } from 'react'
import { Shield, Check, AlertTriangle } from 'lucide-react'

const tocLinks = [
  { id: 'who', label: 'Who we are' },
  { id: 'collect', label: 'What we collect' },
  { id: 'use', label: 'How we use it' },
  { id: 'email', label: 'Email communications' },
  { id: 'cookies', label: 'Cookies' },
  { id: 'third', label: 'Third-party platforms' },
  { id: 'retention', label: 'Data retention' },
  { id: 'rights', label: 'Your rights' },
  { id: 'children', label: "Children's privacy" },
  { id: 'contact', label: 'Contact us' },
]

const rights = [
  { title: 'Right to access', desc: 'You can request a copy of all data we hold about you.' },
  { title: 'Right to rectification', desc: 'You can ask us to correct any inaccurate information.' },
  { title: 'Right to erasure', desc: 'You can request that we delete your personal data.' },
  { title: 'Right to restrict processing', desc: 'You can limit how we use your data in certain circumstances.' },
  { title: 'Right to data portability', desc: 'You can request your data in a machine-readable format.' },
  { title: 'Right to object', desc: 'You can object to how we process your data at any time.' },
]

const platforms = [
  { name: 'YouTube', link: 'https://policies.google.com/privacy' },
  { name: 'Spotify', link: 'https://www.spotify.com/privacy' },
  { name: 'Apple Music', link: 'https://www.apple.com/legal/privacy/' },
  { name: 'Amazon', link: 'https://www.amazon.com/gp/help/customer/display.html?nodeId=468496' },
  { name: 'Gumroad', link: 'https://gumroad.com/privacy' },
  { name: 'Selar', link: 'https://selar.co/privacy' },
  { name: 'Wix', link: 'https://www.wix.com/about/privacy' },
  { name: 'Printful', link: 'https://www.printful.com/privacy' },
  { name: 'Google Drive', link: 'https://policies.google.com/privacy' },
  { name: 'Meta (Facebook/Instagram)', link: 'https://www.facebook.com/privacy/policy/' },
  { name: 'TikTok', link: 'https://www.tiktok.com/legal/privacy-policy' },
]

const commitments = [
  { title: 'No data collection from children', desc: 'We do not knowingly collect personal data from children under 13 without verifiable parental consent.' },
  { title: 'Age-appropriate content', desc: 'All Glosome TV content is designed to be safe, educational, and appropriate for children aged 0-12.' },
  { title: 'No targeted advertising', desc: 'We do not serve targeted ads to children or use their data for advertising purposes.' },
  { title: 'Parental control', desc: 'Parents can request access to, correction of, or deletion of any data related to their child at any time.' },
]

export default function PrivacyPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const [activeSection, setActiveSection] = useState('')

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
    }
  }

  return (
    <div className="pt-[65px]">
      {/* Header */}
      <section className="bg-gw-dark py-20 lg:py-28 section-padding">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gw-gold flex items-center justify-center">
              <span className="font-nunito font-black text-gw-dark text-lg">G</span>
            </div>
            <span className="font-nunito font-black text-white text-lg">Glosome World</span>
          </div>
          <h1 className="font-nunito font-black text-3xl lg:text-5xl text-white mb-4">
            Privacy and Children's Policy
          </h1>
          <p className="font-dmsans text-gw-lightpurple/60 text-sm mb-8">
            Last updated: June 2026
          </p>

          {/* Anchor buttons */}
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'Privacy Policy', id: 'privacy-start' },
              { label: "Children's Policy", id: 'children' },
              { label: 'Your Rights', id: 'rights' },
              { label: 'Contact', id: 'contact' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => scrollTo(btn.id)}
                className="bg-gw-gold/10 hover:bg-gw-gold/20 text-gw-gold font-dmsans font-semibold text-sm px-4 py-2 rounded-full transition-colors"
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* TOC + Content */}
      <section className="bg-white py-12 lg:py-20 section-padding">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-4 gap-10">
            {/* TOC sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gw-lavender rounded-3xl p-6 lg:sticky lg:top-24">
                <h3 className="font-nunito font-bold text-gw-dark text-lg mb-4">Contents</h3>
                <ul className="space-y-2">
                  {tocLinks.map((link) => (
                    <li key={link.id}>
                      <button
                        onClick={() => scrollTo(link.id)}
                        className={`font-dmsans text-sm hover:text-gw-purple transition-colors ${
                          activeSection === link.id ? 'text-gw-purple font-semibold' : 'text-gw-dark/60'
                        }`}
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Main content */}
            <div className="lg:col-span-3 space-y-8">
              <div id="privacy-start" className="bg-white rounded-3xl shadow-card p-8 lg:p-10">
                <h2 className="font-nunito font-black text-2xl text-gw-dark mb-4">Privacy Policy</h2>
                <p className="font-dmsans text-gw-dark/60 text-sm leading-relaxed">
                  At Glosome World, we take your privacy seriously. This policy explains how we collect, use, and protect your personal data when you interact with our website, products, and services.
                </p>
              </div>

              <div id="who" className="bg-white rounded-3xl shadow-card p-8 lg:p-10">
                <h3 className="font-nunito font-bold text-xl text-gw-dark mb-4">Who we are</h3>
                <p className="font-dmsans text-gw-dark/60 text-sm leading-relaxed mb-4">
                  Glosome World is a children's Christian brand creating Afrobeat gospel songs, books, and merchandise. Our mission is to plant new covenant truths into the hearts of children worldwide. We are based in Nigeria and serve families globally.
                </p>
                <p className="font-dmsans text-gw-dark/60 text-sm leading-relaxed">
                  For privacy-related enquiries, contact us at{' '}
                  <a href="mailto:glosomeworld@gmail.com" className="text-gw-purple hover:underline">glosomeworld@gmail.com</a>.
                </p>
              </div>

              <div id="collect" className="bg-white rounded-3xl shadow-card p-8 lg:p-10">
                <h3 className="font-nunito font-bold text-xl text-gw-dark mb-4">What we collect</h3>
                <p className="font-dmsans text-gw-dark/60 text-sm leading-relaxed mb-4">
                  We collect only the information necessary to serve you:
                </p>
                <ul className="space-y-2">
                  {[
                    'Name and email address (when you subscribe to our newsletter)',
                    'Message content (when you contact us via our forms)',
                    'Usage data (pages visited, time spent) via cookies',
                    'Purchase information (when you buy products through our partners)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-gw-green shrink-0 mt-0.5" />
                      <span className="font-dmsans text-gw-dark/60 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div id="use" className="bg-white rounded-3xl shadow-card p-8 lg:p-10">
                <h3 className="font-nunito font-bold text-xl text-gw-dark mb-4">How we use it</h3>
                <p className="font-dmsans text-gw-dark/60 text-sm leading-relaxed mb-4">
                  We use your data to:
                </p>
                <ul className="space-y-2">
                  {[
                    'Send you newsletters and updates you have requested',
                    'Respond to your enquiries and provide customer support',
                    'Improve our website, products, and services',
                    'Process and fulfil orders (through our partners)',
                    'Comply with legal obligations',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-gw-green shrink-0 mt-0.5" />
                      <span className="font-dmsans text-gw-dark/60 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div id="email" className="bg-white rounded-3xl shadow-card p-8 lg:p-10">
                <h3 className="font-nunito font-bold text-xl text-gw-dark mb-4">Email communications</h3>
                <p className="font-dmsans text-gw-dark/60 text-sm leading-relaxed">
                  When you join our newsletter, we send you new song alerts, parent devotionals, book releases, and new covenant resources. Every email includes an unsubscribe link. You can unsubscribe at any time, and we will never share your email address with third parties for marketing purposes.
                </p>
              </div>

              <div id="cookies" className="bg-white rounded-3xl shadow-card p-8 lg:p-10">
                <h3 className="font-nunito font-bold text-xl text-gw-dark mb-4">Cookies</h3>
                <p className="font-dmsans text-gw-dark/60 text-sm leading-relaxed">
                  We use cookies to improve your browsing experience, analyse site traffic, and understand where our visitors come from. You can control cookies through your browser settings. We do not use cookies to track children or collect data from minors.
                </p>
              </div>

              <div id="third" className="bg-white rounded-3xl shadow-card p-8 lg:p-10">
                <h3 className="font-nunito font-bold text-xl text-gw-dark mb-4">Third-party platforms</h3>
                <p className="font-dmsans text-gw-dark/60 text-sm leading-relaxed mb-6">
                  We use trusted third-party services to deliver our content and products. Each has its own privacy policy:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {platforms.map((p) => (
                    <a
                      key={p.name}
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-gw-lavender rounded-xl p-3 hover:bg-gw-purple/10 transition-colors"
                    >
                      <span className="font-dmsans text-gw-dark text-sm">{p.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div id="retention" className="bg-white rounded-3xl shadow-card p-8 lg:p-10">
                <h3 className="font-nunito font-bold text-xl text-gw-dark mb-4">Data retention</h3>
                <p className="font-dmsans text-gw-dark/60 text-sm leading-relaxed">
                  We keep your personal data only for as long as necessary to fulfil the purposes for which it was collected. If you unsubscribe from our newsletter, we will delete your email address within 30 days unless we are legally required to retain it.
                </p>
              </div>

              <div id="rights" className="bg-white rounded-3xl shadow-card p-8 lg:p-10">
                <h3 className="font-nunito font-bold text-xl text-gw-dark mb-4">Your rights</h3>
                <p className="font-dmsans text-gw-dark/60 text-sm leading-relaxed mb-6">
                  Under data protection law, you have the following rights:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {rights.map((r) => (
                    <div key={r.title} className="bg-gw-lavender rounded-2xl p-5">
                      <h4 className="font-nunito font-bold text-gw-dark text-sm mb-2">{r.title}</h4>
                      <p className="font-dmsans text-gw-dark/60 text-xs leading-relaxed">{r.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="bg-gradient-to-r from-[#4C1D95] to-gw-purple rounded-3xl p-8 text-center">
                <Shield className="w-10 h-10 text-gw-gold mx-auto mb-3" />
                <h3 className="font-nunito font-black text-white text-xl">
                  Children's Privacy Policy
                </h3>
              </div>

              <div id="children" className="bg-white rounded-3xl shadow-card p-8 lg:p-10">
                <h3 className="font-nunito font-bold text-xl text-gw-dark mb-4">Our commitment</h3>
                <p className="font-dmsans text-gw-dark/60 text-sm leading-relaxed">
                  Protecting children's privacy is at the heart of everything we do. Glosome World is designed for children, and we are committed to creating a safe online environment for them. We comply with COPPA (Children's Online Privacy Protection Act) and GDPR-K (GDPR for children).
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-card p-8 lg:p-10">
                <h3 className="font-nunito font-bold text-xl text-gw-dark mb-4">Glosome TV on YouTube</h3>
                <p className="font-dmsans text-gw-dark/60 text-sm leading-relaxed">
                  Glosome TV content is hosted on YouTube. YouTube has its own terms of service and privacy policy. We recommend that parents supervise their children's YouTube use and consider YouTube Kids for a safer viewing experience. We do not collect data directly from children who watch our videos on YouTube.
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-card p-8 lg:p-10">
                <h3 className="font-nunito font-bold text-xl text-gw-dark mb-4">Glosome Kids merchandise</h3>
                <p className="font-dmsans text-gw-dark/60 text-sm leading-relaxed">
                  Our merchandise is sold through Printful and other third-party platforms. These platforms handle all order processing, payment, and shipping. We do not collect children's data through merchandise sales. All purchases must be made by adults aged 18 or over.
                </p>
              </div>

              {/* Warning box */}
              <div className="bg-red-50 border-l-4 border-red-400 rounded-r-3xl p-8">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-nunito font-bold text-red-700 text-lg mb-2">Instructions for parents</h4>
                    <p className="font-dmsans text-red-600/70 text-sm leading-relaxed">
                      If you believe your child has provided personal information to us without your consent, please contact us immediately at{' '}
                      <a href="mailto:glosomeworld@gmail.com" className="underline">glosomeworld@gmail.com</a>. We will take steps to remove that information and terminate the child's account where applicable.
                    </p>
                  </div>
                </div>
              </div>

              {/* Commitments */}
              <div className="bg-white rounded-3xl shadow-card p-8 lg:p-10">
                <h3 className="font-nunito font-bold text-xl text-gw-dark mb-6">Our safe content commitment</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {commitments.map((c) => (
                    <div key={c.title} className="bg-gw-cardMint/50 rounded-2xl p-5">
                      <h4 className="font-nunito font-bold text-gw-dark text-sm mb-2">{c.title}</h4>
                      <p className="font-dmsans text-gw-dark/60 text-xs leading-relaxed">{c.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div id="contact" className="bg-white rounded-3xl shadow-card p-8 lg:p-10">
                <h3 className="font-nunito font-bold text-xl text-gw-dark mb-4">Contact us</h3>
                <p className="font-dmsans text-gw-dark/60 text-sm leading-relaxed mb-4">
                  If you have any questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="bg-gw-lavender rounded-2xl p-6">
                  <p className="font-dmsans text-gw-dark text-sm mb-1"><strong>Email:</strong>{' '}
                    <a href="mailto:glosomeworld@gmail.com" className="text-gw-purple hover:underline">glosomeworld@gmail.com</a>
                  </p>
                  <p className="font-dmsans text-gw-dark text-sm">
                    <strong>Response time:</strong> We aim to respond within 5-7 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer strip */}
      <section className="bg-gw-dark py-10 section-padding">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="font-lora italic text-gw-lightpurple/50 text-sm mb-2">
            Where truth takes root and joy breaks out.
          </p>
          <p className="font-dmsans text-white/30 text-xs">
            &copy; 2026 Glosome World. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  )
}
