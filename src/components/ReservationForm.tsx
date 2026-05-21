import { useState, type FormEvent } from 'react'
import { CalendarDays, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import { ImageWithFallback } from './ImageWithFallback'
import { ScrollReveal } from './ScrollReveal'
import { SITE, whatsappUrl } from '../constants/site'
import interiorImage from '../assets/interior-dining.jpg'

export function ReservationForm() {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [guests, setGuests] = useState('2')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const message = [
      SITE.reservationMessage,
      '',
      `Name: ${name}`,
      `Date: ${date}`,
      `Time: ${time}`,
      `Guests: ${guests}`,
    ].join('\n')
    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer')
  }

  const inputClass =
    'w-full min-h-[48px] rounded-xl border border-white/10 bg-midnight px-4 py-3 text-white placeholder:text-gray-500 transition focus:border-golden focus:outline-none focus:ring-2 focus:ring-golden/30'

  return (
    <section id="reservation" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal className="relative hidden overflow-hidden rounded-2xl border border-white/5 lg:block">
            <ImageWithFallback
              src={interiorImage}
              alt="Dar Srouge interior dining room"
              className="h-full min-h-[480px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="font-display text-2xl text-white">
                An intimate setting for memorable evenings
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-golden">
              Reservations
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
              Request Reservation
            </h2>
            <p className="mt-4 text-gray-400">
              Secure your table in seconds. We will confirm your booking via WhatsApp.
            </p>

            <motion.form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div>
                <label htmlFor="res-name" className="mb-2 block text-sm font-medium text-gray-300">
                  Full Name
                </label>
                <input
                  id="res-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="res-date" className="mb-2 block text-sm font-medium text-gray-300">
                    Date
                  </label>
                  <input
                    id="res-date"
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={inputClass}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div>
                  <label htmlFor="res-time" className="mb-2 block text-sm font-medium text-gray-300">
                    Time
                  </label>
                  <input
                    id="res-time"
                    type="time"
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="res-guests" className="mb-2 block text-sm font-medium text-gray-300">
                  Number of Guests
                </label>
                <select
                  id="res-guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className={inputClass}
                >
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={String(n)}>
                      {n} {n === 1 ? 'guest' : 'guests'}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="btn-glow flex w-full min-h-[52px] items-center justify-center gap-2 rounded-full bg-golden py-3.5 font-bold text-midnight transition hover:bg-golden-dim"
              >
                <Send className="h-5 w-5" aria-hidden />
                Request Reservation
              </button>
              <p className="flex items-center justify-center gap-2 text-center text-xs text-gray-500">
                <CalendarDays className="h-4 w-4" />
                Confirmation sent via WhatsApp
              </p>
            </motion.form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
