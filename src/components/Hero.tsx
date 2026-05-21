import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MessageCircle, CalendarDays } from 'lucide-react'
import { ImageWithFallback } from './ImageWithFallback'
import { HeroParticles } from './HeroParticles'
import { SITE, whatsappUrl } from '../constants/site'
import heroImage from '../assets/hero-restaurant.jpg'

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const bg = bgRef.current
    const content = contentRef.current
    if (!section || !bg || !content) return

    const ctx = gsap.context(() => {
      gsap.to(bg, {
        scale: 1.12,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to(content, {
        y: -80,
        opacity: 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '60% top',
          scrub: true,
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <div ref={bgRef} className="absolute inset-0 z-0 will-change-transform">
        <ImageWithFallback
          src={heroImage}
          alt="Dar Srouge Restaurant dining ambiance"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/70 via-midnight/50 to-midnight" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#201e23_75%)]" />
      </div>

      <HeroParticles />

      <div
        ref={contentRef}
        className="relative z-10 mx-auto max-w-4xl px-4 pt-24 pb-32 text-center sm:px-6 lg:px-8"
      >
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-golden sm:text-sm">
          Beni-Mellal · Dine-in & Delivery
        </p>
        <h1 className="font-display text-4xl leading-[1.1] font-semibold text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {SITE.tagline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
          From authentic dine-in experiences to fast, fresh delivery. Order direct or
          book your table today.
        </p>
        <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <a
            href={whatsappUrl(SITE.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-golden px-8 py-3.5 text-base font-bold text-midnight transition hover:bg-golden-dim"
          >
            <MessageCircle className="h-5 w-5" aria-hidden />
            Order via WhatsApp
          </a>
          <a
            href="#reservation"
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border-2 border-white/25 px-8 py-3.5 text-base font-semibold text-white transition hover:border-golden hover:text-golden"
          >
            <CalendarDays className="h-5 w-5" aria-hidden />
            Request a Table
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 sm:block">
        <div className="h-10 w-6 rounded-full border-2 border-white/30 p-1">
          <div className="mx-auto h-2 w-1 animate-bounce rounded-full bg-golden" />
        </div>
      </div>
    </section>
  )
}
