import { motion } from 'framer-motion'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { SocialProof } from '../components/SocialProof'
import { MenuBento } from '../components/MenuBento'
import { DeliverySection } from '../components/DeliverySection'
import { ReservationForm } from '../components/ReservationForm'
import { LocationContact } from '../components/LocationContact'
import { MobileStickyBar } from '../components/MobileStickyBar'
import { Footer } from '../components/Footer'

export function LandingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pb-safe"
    >
      <Header />
      <main className="pb-24 md:pb-0">
        <Hero />
        <SocialProof />
        <MenuBento />
        <DeliverySection />
        <ReservationForm />
        <LocationContact />
      </main>
      <Footer />
      <MobileStickyBar />
    </motion.div>
  )
}
