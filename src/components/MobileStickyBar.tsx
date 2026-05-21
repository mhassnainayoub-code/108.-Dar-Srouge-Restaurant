import { MessageCircle, CalendarDays } from 'lucide-react'
import { SITE, whatsappUrl } from '../constants/site'

export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-midnight/95 p-3 backdrop-blur-lg md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a
          href={whatsappUrl(SITE.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-golden text-sm font-bold text-midnight"
        >
          <MessageCircle className="h-5 w-5" aria-hidden />
          Order Now
        </a>
        <a
          href="#reservation"
          className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-golden/40 bg-golden/10 text-sm font-bold text-golden"
        >
          <CalendarDays className="h-5 w-5" aria-hidden />
          Book Table
        </a>
      </div>
    </div>
  )
}
