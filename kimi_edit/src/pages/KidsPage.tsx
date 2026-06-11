import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Play, ShoppingBag, Ruler, Printer, Truck } from 'lucide-react'
import NewsletterForm from '../components/NewsletterForm'

const characters = [
  {
    name: 'ZEKE',
    tag: 'Boy \u00B7 The Bold One \u26A1',
    color: 'from-[#2D1B69] to-[#4C2889]',
    badge: 'Greater Is He that is in me!',
    songs: 'Greater Is He \u00B7 I Will Fear No Evil',
    image: '/images/character-zeke.png',
    traits: [
      '\u26A1 First one in the room and the loudest one singing',
      '\uD83E\uDD81 Never backs down when it\'s time to declare the truth',
      '\uD83C\uDFA4 The friend who reminds everyone else who they are in God',
    ],
  },
  {
    name: 'G.G',
    tag: 'Girl \u00B7 The Wise One \uD83D\uDC9C',
    color: 'from-[#6B21A8] to-[#9333EA]',
    badge: 'I am what He says I am!',
    songs: 'I Am What God Says I Am \u00B7 Scripture Songs',
    image: '/images/character-gg.png',
    traits: [
      '\uD83D\uDCD6 She knows the scripture for every single situation',
      '\uD83C\uDF38 Gentle but never quiet when truth needs speaking',
      '\uD83D\uDC9C The friend who prays with you not just for you',
    ],
  },
  {
    name: 'O.V',
    tag: 'Boy \u00B7 The Joyful One \uD83C\uDF1F',
    color: 'from-[#059669] to-[#10B981]',
    badge: 'My cup runs over!',
    songs: 'Joy of the Lord \u00B7 Rejoice Always',
    image: '/images/character-ov.png',
    traits: [
      '\uD83D\uDC83 Cannot hear music without dancing \u2014 impossible',
      '\uD83C\uDF8A Turns every single room into a celebration',
      '\u2600\uFE0F Reminds everyone that the Gospel is the best news ever',
    ],
  },
  {
    name: 'MOE',
    tag: 'Boy \u00B7 The Prayerful One \uD83D\uDE4F',
    color: 'from-[#D97706] to-[#F59E0B]',
    badge: 'The Holy Spirit is my friend!',
    songs: 'Holy Spirit \u00B7 Prayer Songs',
    image: '/images/character-moe.png',
    traits: [
      '\uD83D\uDD4A\uFE0F First one on his knees and the last one to leave',
      '\uD83D\uDD25 Talks to God like He is right there \u2014 because He is',
      '\uD83C\uDF0A Has a peace that everyone runs to when things feel hard',
    ],
  },
]

const products = [
  { name: 'Glosome Kids T-Shirt', price: '$24.99', image: '/images/character-zeke.png' },
  { name: 'Glosome Kids Hoodie', price: '$44.99', image: '/images/character-gg.png' },
  { name: 'Glosome Kids Cap', price: '$19.99', image: '/images/character-ov.png' },
  { name: 'Glosome Kids Mug', price: '$14.99', image: '/images/character-moe.png' },
  { name: 'Zeke Character Tee', price: '$26.99', image: '/images/character-zeke.png' },
  { name: 'G.G Wise Girl Tee', price: '$26.99', image: '/images/character-gg.png' },
]

export default function KidsPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="pt-[65px]">
      {/* Hero */}
      <section className="bg-gw-warmwhite py-20 lg:py-28 section-padding">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="w-20 h-20 rounded-3xl bg-gw-cardPurple flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">&#xD83D;&#xDC55;</span>
          </div>
          <h1 className="font-nunito font-black text-4xl lg:text-6xl text-gw-purple mb-4 leading-tight">
            Meet the Glosome Kids!
          </h1>
          <p className="font-nunito font-bold text-gw-gold text-xl lg:text-2xl mb-6">
            Four friends. One truth. Endless joy.
          </p>
          <p className="font-dmsans text-gw-dark/60 max-w-2xl mx-auto mb-10">
            Zeke, G.G, O.V, and Moe are the Glosome Kids &mdash; four friends who love Jesus, love each other, and love sharing the truth of who they are in Christ. Every week on Glosome TV, they sing, dance, pray, and declare the Word together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.youtube.com/@GlosomeTV"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-purple flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-current" />
              Watch them on YouTube
            </a>
            <a href="#shop" className="btn-gold flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              Shop the collection
            </a>
          </div>
        </div>
      </section>

      {/* Character cards */}
      <section className="bg-white py-20 lg:py-28 section-padding">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-nunito font-black text-3xl lg:text-4xl text-gw-dark text-center mb-12">
            Meet the crew! <span className="text-gw-gold">&#xD83C;&#xDF89;</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {characters.map((char) => (
              <div key={char.name} className={`rounded-3xl overflow-hidden shadow-card hover:shadow-lift hover:-translate-y-2 transition-all duration-300 bg-gradient-to-br ${char.color}`}>
                <div className="p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    {/* Character image */}
                    <div className="w-full sm:w-40 h-48 sm:h-52 rounded-2xl border-2 border-dashed border-gw-gold/40 flex items-center justify-center bg-white/10 shrink-0 overflow-hidden">
                      <img src={char.image} alt={char.name} className="w-full h-full object-contain p-2" />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-nunito font-black text-gw-gold text-3xl lg:text-4xl mb-1">{char.name}</h3>
                      <p className="font-dmsans text-gw-lightpurple text-sm mb-4">{char.tag}</p>

                      <ul className="space-y-2 mb-5">
                        {char.traits.map((trait, i) => (
                          <li key={i} className="font-dmsans text-white/80 text-sm leading-relaxed">{trait}</li>
                        ))}
                      </ul>

                      <span className="inline-block bg-gw-gold/20 text-gw-goldlight font-dmsans font-semibold text-xs px-4 py-2 rounded-full mb-3">
                        {char.badge}
                      </span>
                      <p className="font-dmsans text-white/50 text-xs mt-2">
                        Songs: {char.songs}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Watch strip */}
      <section className="bg-gw-dark py-8 section-padding">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-nunito font-bold text-white text-lg">
            Catch them every week on Glosome TV! <span className="text-gw-gold">&#xD83D;&#xDCFA;</span>
          </p>
          <a
            href="https://www.youtube.com/@GlosomeTV"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold flex items-center gap-2"
          >
            <Play className="w-4 h-4 fill-current" />
            Watch on YouTube
          </a>
        </div>
      </section>

      {/* Shop strip */}
      <section className="bg-gw-gold py-8 section-padding">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="font-nunito font-black text-gw-dark text-xl">
            They sing it. Now wear it. <span className="text-2xl">&#xD83D;&#xDC55;</span>
          </p>
        </div>
      </section>

      {/* Shop section */}
      <section id="shop" className="bg-gw-warmwhite py-20 lg:py-28 section-padding">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-nunito font-black text-3xl lg:text-4xl text-gw-dark mb-2">
              The Glosome Kids Shop
            </h2>
            <p className="font-nunito font-bold text-gw-gold text-lg mb-4">Wear the truth every day</p>
            <p className="font-dmsans text-gw-dark/60 max-w-xl mx-auto">
              Every item in the Glosome Kids collection is a declaration your child can wear. These aren't just clothes &mdash; they're statements of identity in Christ.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.name} className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-lift hover:-translate-y-2 transition-all duration-300 group">
                <div className="h-56 bg-gw-lavender flex items-center justify-center p-6">
                  <img src={product.image} alt={product.name} className="h-full w-auto object-contain" />
                </div>
                <div className="p-6">
                  <h3 className="font-nunito font-bold text-gw-dark text-lg mb-1">{product.name}</h3>
                  <p className="font-nunito font-black text-gw-gold text-xl mb-4">{product.price}</p>
                  <button className="w-full bg-gw-purple text-white font-dmsans font-semibold py-3 rounded-2xl hover:bg-gw-purple/90 transition-colors flex items-center justify-center gap-2">
                    <ShoppingBag className="w-4 h-4" />
                    Coming Soon
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info cards */}
      <section className="bg-white py-16 section-padding">
        <div className="max-w-[1200px] mx-auto grid sm:grid-cols-3 gap-6">
          {[
            { icon: Ruler, title: 'Sizing', desc: 'Available in sizes 2T through Youth XL. Check our size guide for the perfect fit.' },
            { icon: Printer, title: 'Printing', desc: 'Premium DTG printing for vibrant, long-lasting designs that survive every wash.' },
            { icon: Truck, title: 'Shipping', desc: 'Worldwide shipping from our fulfilment partners. Free shipping on orders over $50.' },
          ].map((info) => (
            <div key={info.title} className="bg-gw-lavender rounded-3xl p-8 text-center">
              <div className="w-12 h-12 rounded-2xl bg-gw-purple/10 flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-6 h-6 text-gw-purple" />
              </div>
              <h4 className="font-nunito font-bold text-gw-dark mb-2">{info.title}</h4>
              <p className="font-dmsans text-gw-dark/60 text-sm">{info.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platform links */}
      <section className="bg-gw-warmwhite py-16 section-padding">
        <div className="max-w-[800px] mx-auto">
          <p className="font-dmsans text-gw-dark/60 text-center mb-6">Also available on</p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-8 shadow-card text-center">
              <h4 className="font-nunito font-bold text-gw-dark text-lg mb-2">Redbubble</h4>
              <span className="inline-block bg-gw-gold/10 text-gw-gold font-dmsans text-xs px-3 py-1 rounded-full mb-4">More designs coming soon</span>
              <button className="btn-primary-purple w-full">Visit Redbubble</button>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-card text-center">
              <h4 className="font-nunito font-bold text-gw-dark text-lg mb-2">TeePublic</h4>
              <span className="inline-block bg-gw-gold/10 text-gw-gold font-dmsans text-xs px-3 py-1 rounded-full mb-4">More designs coming soon</span>
              <button className="btn-primary-purple w-full">Visit TeePublic</button>
            </div>
          </div>
        </div>
      </section>

      {/* Declaration section */}
      <section className="bg-gw-dark py-16 section-padding">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="font-lora italic text-gw-lightpurple/70 text-lg mb-6">
            Not just clothing. A declaration. Every Glosome Kids item is designed to remind your child who they are in Christ &mdash; whether they're at school, at the park, or at home.
          </p>
          <Link to="/books" className="btn-gold inline-flex items-center gap-2">
            Explore Glosome Books
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gw-warmwhite py-20 lg:py-28 section-padding">
        <div className="max-w-[600px] mx-auto text-center">
          <span className="text-3xl mb-4 block">&#x2709;&#xFE0F;</span>
          <h2 className="font-nunito font-black text-2xl lg:text-3xl text-gw-dark mb-8">
            Get notified when new merch drops
          </h2>
          <NewsletterForm />
        </div>
      </section>
    </div>
  )
}
