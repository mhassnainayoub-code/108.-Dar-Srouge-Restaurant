export const SITE = {
  name: 'Dar Srouge Restaurant',
  tagline: 'Taste the Best of Beni-Mellal.',
  phone: '+212 666-613366',
  phoneRaw: '212666613366',
  email: 'darsrouge@gmail.com',
  address:
    'en face du Café Rio, Avenue Omar Ibn Al Khattab, Beni-Mellal 23000, Morocco',
  coordinates: { lat: 32.3312154, lng: -6.3547121 },
  rating: 4.4,
  priceRange: 'Dishes from 5 MAD to 85 MAD',
  instagram: 'https://www.instagram.com/dar_srouge_restaurant/',
  facebook: 'https://www.facebook.com/',
  googleMaps: 'https://www.google.com/maps?q=32.3312154,-6.3547121',
  whatsappMessage:
    'Hello Dar Srouge! I would like to place an order for delivery/takeaway.',
  reservationMessage:
    'Hello Dar Srouge! I would like to request a table reservation.',
} as const

export const whatsappUrl = (message: string) =>
  `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(message)}`
