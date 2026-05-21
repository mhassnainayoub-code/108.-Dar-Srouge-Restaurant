import { ArrowRight } from 'lucide-react'
import { ImageWithFallback } from './ImageWithFallback'
import { ScrollReveal } from './ScrollReveal'
import { SITE, whatsappUrl } from '../constants/site'
import bento1 from '../assets/bento-dish-1.jpg'
import bento2 from '../assets/bento-dish-2.jpg'
import bento3 from '../assets/bento-dish-3.jpg'
import interior from '../assets/interior-dining.jpg'

const categories = [
  {
    title: 'Starters & Mezze',
    description: 'Light bites and shared plates to begin your evening.',
    image: bento1,
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    title: 'Signature Dishes',
    description: 'Chef-crafted mains inspired by Moroccan tradition.',
    image: bento2,
    span: 'md:col-span-2',
  },
  {
    title: 'Fresh Salads',
    description: 'Crisp, seasonal greens with house dressings.',
    image: bento3,
    span: 'md:col-span-1',
  },
  {
    title: 'Desserts',
    description: 'Sweet finishes — pastries, fruit, and classics.',
    image: interior,
    span: 'md:col-span-1',
  },
  {
    title: 'Beverages',
    description: 'Teas, fresh juices, and refreshing pairings.',
    image: bento1,
    span: 'md:col-span-2',
  },
]

export function MenuBento() {
  return (
    <section id="menu" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-golden">
              Menu Highlights
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              Curated for every craving
            </h2>
            <p className="mt-4 text-gray-400">
              Explore our categories — from shared starters to signature mains and
              desserts. <span className="text-golden">{SITE.priceRange}</span>
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[200px] lg:auto-rows-[220px]">
          {categories.map((cat, i) => (
            <ScrollReveal
              key={cat.title}
              className={`group relative overflow-hidden rounded-2xl border border-white/5 ${cat.span}`}
              delay={i * 0.08}
            >
              <ImageWithFallback
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                  {cat.title}
                </h3>
                <p className="mt-1 text-sm text-gray-300">{cat.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-10 text-center" delay={0.2}>
          <a
            href={whatsappUrl(SITE.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex min-h-[48px] items-center gap-2 rounded-full border border-golden/50 bg-golden/10 px-6 py-3 text-sm font-semibold text-golden transition hover:bg-golden hover:text-midnight"
          >
            View full menu on WhatsApp
            <ArrowRight className="h-4 w-4" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
