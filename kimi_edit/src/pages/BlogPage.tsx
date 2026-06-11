import { useEffect, useState } from 'react'
import { Search, ArrowRight } from 'lucide-react'
import NewsletterForm from '../components/NewsletterForm'

const categories = [
  'All',
  'Grace & Identity',
  'Holy Spirit',
  'Prayer & the Word',
  'Parenting Tips',
  'New Covenant Living',
  'Song Devotionals',
]

const posts = [
  {
    title: 'What Is the New Covenant? A Parent\'s Guide',
    excerpt: 'Understanding grace, righteousness, and the finished work \u2014 and why it matters for your children.',
    category: 'New Covenant Living',
    date: 'June 5, 2026',
    color: 'from-gw-purple to-gw-cardPurple',
  },
  {
    title: 'Teaching Your Child Who the Holy Spirit Is',
    excerpt: 'Practical ways to help your child understand that the Spirit lives inside them.',
    category: 'Holy Spirit',
    date: 'May 28, 2026',
    color: 'from-blue-500 to-gw-cardSky',
  },
  {
    title: 'Why Identity Comes Before Behaviour',
    excerpt: 'The new covenant approach to parenting: declare who they are, and watch the life follow.',
    category: 'Parenting Tips',
    date: 'May 20, 2026',
    color: 'from-gw-green to-gw-cardMint',
  },
  {
    title: '5 Grace-Focused Bedtime Routines',
    excerpt: 'Simple ways to end each day with truth, peace, and the presence of God.',
    category: 'Parenting Tips',
    date: 'May 12, 2026',
    color: 'from-gw-gold to-gw-goldlight',
  },
  {
    title: 'The Story Behind "I Am Righteous"',
    excerpt: 'How one song helped hundreds of children understand their identity in Christ.',
    category: 'Song Devotionals',
    date: 'May 5, 2026',
    color: 'from-pink-500 to-gw-cardPink',
  },
  {
    title: 'Prayer Is Not a Ritual \u2014 It\'s a Relationship',
    excerpt: 'Helping your child see prayer as natural conversation with a Father who loves them.',
    category: 'Prayer & the Word',
    date: 'April 28, 2026',
    color: 'from-teal-500 to-gw-cardMint',
  },
]

export default function BlogPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="pt-[65px]">
      {/* Hero */}
      <section className="bg-gw-dark py-20 lg:py-28 section-padding">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="eyebrow text-gw-gold mb-4">The Glosome Word</p>
          <h1 className="font-nunito font-black text-4xl lg:text-6xl text-white mb-6 leading-tight">
            Truth for parents. Resources for families.
          </h1>
          <p className="font-lora italic text-gw-lightpurple/70 max-w-2xl mx-auto mb-10">
            Articles, devotionals, and practical guides to help you raise children who know who they are in Christ.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gw-dark/40" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-5 py-4 rounded-2xl bg-white font-dmsans text-gw-dark placeholder:text-gw-dark/40 focus:outline-none focus:ring-2 focus:ring-gw-gold/50"
            />
          </div>
        </div>
      </section>

      {/* Category filters + posts */}
      <section className="bg-gw-warmwhite py-12 lg:py-20 section-padding">
        <div className="max-w-[1440px] mx-auto">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-dmsans font-semibold text-sm px-4 py-2 rounded-full transition-all ${
                  activeCategory === cat
                    ? 'bg-gw-purple text-white'
                    : 'bg-white text-gw-dark/70 hover:bg-gw-lavender'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Post grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article key={post.title} className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-lift hover:-translate-y-1 transition-all duration-300 group">
                <div className={`h-44 bg-gradient-to-br ${post.color} flex items-center justify-center`}>
                  <span className="font-nunito font-black text-white/20 text-5xl">G</span>
                </div>
                <div className="p-6">
                  <span className="bg-gw-lavender text-gw-purple font-dmsans font-semibold text-xs px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <h3 className="font-nunito font-bold text-gw-dark text-lg mt-3 mb-2 group-hover:text-gw-purple transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-dmsans text-gw-dark/60 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-dmsans text-gw-dark/40 text-xs">{post.date}</span>
                    <span className="font-dmsans font-semibold text-gw-gold text-sm flex items-center gap-1 group-hover:underline">
                      Read more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="font-dmsans text-gw-dark/50 text-lg">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gw-dark py-20 lg:py-28 section-padding">
        <div className="max-w-[600px] mx-auto text-center">
          <span className="text-3xl mb-4 block">&#x2709;&#xFE0F;</span>
          <h2 className="font-nunito font-black text-2xl lg:text-3xl text-white mb-8">
            Never miss a new resource
          </h2>
          <NewsletterForm />
        </div>
      </section>
    </div>
  )
}
