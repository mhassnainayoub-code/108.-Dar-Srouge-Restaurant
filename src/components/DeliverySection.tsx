import { MessageCircle, ClipboardList, Truck } from 'lucide-react'
import { ImageWithFallback } from './ImageWithFallback'
import { ScrollReveal } from './ScrollReveal'
import { SITE, whatsappUrl } from '../constants/site'
import deliveryImage from '../assets/delivery-packaging.jpg'

const steps = [
  {
    icon: MessageCircle,
    title: 'Message us on WhatsApp',
    description: 'Tap Order Now and send your order — we reply quickly with availability.',
  },
  {
    icon: ClipboardList,
    title: 'Confirm your order',
    description: 'Choose your dishes, share your address, and confirm delivery or pickup.',
  },
  {
    icon: Truck,
    title: 'Enjoy fresh delivery',
    description: 'Your meal is prepared fresh and delivered straight to your door.',
  },
]

export function DeliverySection() {
  return (
    <section id="delivery" className="bg-midnight-light/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-2xl border border-white/5">
              <ImageWithFallback
                src={deliveryImage}
                alt="Dar Srouge delivery packaging"
                className="aspect-[4/3] w-full object-cover lg:aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-midnight/80 via-transparent to-transparent" />
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-golden">
                Delivery & Takeaway
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
                Order in three simple steps
              </h2>
              <p className="mt-4 text-gray-400">
                Skip the middleman — order direct from Dar Srouge for the freshest
                experience and fastest response.
              </p>
            </ScrollReveal>

            <ol className="mt-10 space-y-6">
              {steps.map((step, i) => (
                <ScrollReveal key={step.title} delay={i * 0.1}>
                  <li className="flex gap-4 rounded-xl border border-white/5 bg-midnight/60 p-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-golden/15 text-golden">
                      <step.icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-golden">
                        Step {i + 1}
                      </span>
                      <h3 className="mt-1 font-semibold text-white">{step.title}</h3>
                      <p className="mt-1 text-sm text-gray-400">{step.description}</p>
                    </div>
                  </li>
                </ScrollReveal>
              ))}
            </ol>

            <ScrollReveal delay={0.3}>
              <a
                href={whatsappUrl(SITE.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow mt-8 inline-flex min-h-[52px] items-center gap-2 rounded-full bg-golden px-8 py-3.5 font-bold text-midnight transition hover:bg-golden-dim"
              >
                <MessageCircle className="h-5 w-5" />
                Start your order
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
