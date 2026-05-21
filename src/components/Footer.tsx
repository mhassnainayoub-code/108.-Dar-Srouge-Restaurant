import { SITE } from '../constants/site'

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 pb-28 md:pb-10">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="font-display text-xl text-golden">Dar Srouge Restaurant</p>
        <p className="mt-2 text-sm text-gray-500">
          © {new Date().getFullYear()} {SITE.name}. Beni-Mellal, Morocco.
        </p>
      </div>
    </footer>
  )
}
