import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'
import { SITE } from '../constants/site'

export function LocationContact() {
  const { lat, lng } = SITE.coordinates
  const mapEmbed = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.008}%2C${lat - 0.006}%2C${lng + 0.008}%2C${lat + 0.006}&layer=mapnik&marker=${lat}%2C${lng}`

  return (
    <section id="location" className="border-t border-white/5 bg-midnight-light/20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-12 text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-golden">
              Find Us
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
              Location & Contact
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
          <ScrollReveal className="lg:col-span-3">
            <div className="overflow-hidden rounded-2xl border border-white/5 shadow-2xl shadow-black/40">
              <iframe
                title="Dar Srouge Restaurant location map — Beni-Mellal"
                src={mapEmbed}
                className="aspect-[4/3] w-full min-h-[280px] border-0 grayscale-[30%] contrast-[1.1] invert-[90%] hue-rotate-180 sm:min-h-[360px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={SITE.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-golden transition hover:text-golden-dim"
            >
              Open in Google Maps
              <ExternalLink className="h-4 w-4" />
            </a>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-2" delay={0.15}>
            <div className="flex h-full flex-col justify-center space-y-6 rounded-2xl border border-white/5 bg-midnight/80 p-6 sm:p-8">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-golden/15 text-golden">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-white">Address</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-400">{SITE.address}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-golden/15 text-golden">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-white">Phone / WhatsApp</h3>
                  <a
                    href={`tel:${SITE.phoneRaw}`}
                    className="mt-1 block text-sm text-gray-400 transition hover:text-golden"
                  >
                    {SITE.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-golden/15 text-golden">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="mt-1 block text-sm text-gray-400 transition hover:text-golden"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
