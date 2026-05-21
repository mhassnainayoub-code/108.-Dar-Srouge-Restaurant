import { Star } from 'lucide-react'
import { FacebookIcon, InstagramIcon } from './SocialIcons'
import { ScrollReveal } from './ScrollReveal'
import { SITE } from '../constants/site'

export function SocialProof() {
  return (
    <ScrollReveal>
      <section className="border-y border-white/5 bg-midnight-light/50 py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-300 sm:text-base">
            <div className="flex text-golden">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 sm:h-5 sm:w-5 ${i < Math.floor(SITE.rating) ? 'fill-golden' : 'fill-golden/30'}`}
                  aria-hidden
                />
              ))}
            </div>
            <span>
              Rated <strong className="text-white">{SITE.rating}/5</strong> on Google
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-wider text-gray-500">Follow us</span>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-300 transition hover:border-golden hover:text-golden"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-300 transition hover:border-golden hover:text-golden"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}
