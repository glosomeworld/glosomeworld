import { useState } from 'react'
import { Check, Gift } from 'lucide-react'

export default function NewsletterForm() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (firstName && email) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-gw-green/20 flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-gw-green" />
        </div>
        <h4 className="font-nunito font-bold text-white text-xl mb-2">
          Welcome to the family, {firstName}!
        </h4>
        <p className="font-lora italic text-gw-lightpurple/70">
          Check your inbox for your free gift — The Glosome 10 Truth Declaration Cards.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          className="w-full px-5 py-3.5 rounded-2xl bg-white/10 border border-white/10 text-white placeholder:text-white/40 font-dmsans text-sm focus:outline-none focus:border-gw-gold/50 focus:ring-1 focus:ring-gw-gold/30 transition-all"
        />
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-5 py-3.5 rounded-2xl bg-white/10 border border-white/10 text-white placeholder:text-white/40 font-dmsans text-sm focus:outline-none focus:border-gw-gold/50 focus:ring-1 focus:ring-gw-gold/30 transition-all"
        />
      </div>
      <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2">
        Join free and get your gift &rarr;
      </button>
      <div className="flex items-center gap-3 pt-2">
        <Gift className="w-5 h-5 text-gw-gold shrink-0" />
        <p className="font-dmsans text-gw-goldlight/80 text-sm">
          Free gift when you join — The Glosome 10 Truth Declaration Cards for your child.
        </p>
      </div>
      <p className="font-dmsans text-white/30 text-xs text-center">
        No spam. Unsubscribe anytime. Your information is never shared.
      </p>
    </form>
  )
}
