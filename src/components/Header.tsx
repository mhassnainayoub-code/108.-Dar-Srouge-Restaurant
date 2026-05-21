import { useEffect, useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { SITE, whatsappUrl } from '../constants/site'

const navLinks = [
  { href: '#menu', label: 'Menu' },
  { href: '#delivery', label: 'Delivery' },
  { href: '#reservation', label: 'Reserve' },
  { href: '#location', label: 'Location' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-white/5 bg-midnight/95 shadow-lg shadow-black/30 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#" className="group flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-golden/40 bg-golden/10 font-display text-lg font-semibold text-golden transition group-hover:border-golden">
              DS
            </span>
            <span className="hidden font-display text-lg font-semibold tracking-wide text-white sm:block">
              Dar Srouge
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 transition hover:text-golden"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={whatsappUrl(SITE.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow hidden items-center gap-2 rounded-full bg-golden px-4 py-2.5 text-sm font-semibold text-midnight transition hover:bg-golden-dim sm:inline-flex"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              WhatsApp
            </a>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-midnight/98 backdrop-blur-xl md:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              className="flex h-full flex-col items-center justify-center gap-8 px-6"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-display text-3xl text-white transition hover:text-golden"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={whatsappUrl(SITE.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow mt-4 flex items-center gap-2 rounded-full bg-golden px-8 py-4 text-base font-semibold text-midnight"
                onClick={() => setMenuOpen(false)}
              >
                <MessageCircle className="h-5 w-5" />
                Order via WhatsApp
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
