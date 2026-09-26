/**
 * Verified business information for Oxygen Fitness Club, Quetta.
 * Strictly adheres to verified data only. No fabricated statistics, prices, or claims.
 */

export const BUSINESS_INFO = {
  name: "Oxygen Fitness Club",
  shortName: "Oxygen",
  tagline: "Move. Breathe. Become.",
  category: "Gym / Fitness Club",
  rating: 4.8,
  reviewCount: 13,
  phone: "+92 316 8297978",
  phoneRaw: "+923168297978",
  phoneDisplay: "0316 8297978",
  whatsappUrl: "https://wa.me/923168297978?text=Hello%20Oxygen%20Fitness%20Club%2C%20I%20would%20like%20to%20inquire%20about%20current%20gym%20membership%20and%20timings%20in%20Quetta.",
  address: {
    building: "Gull Zareen Plaza",
    street: "Najmudin Road",
    landmark: "near Gurdat Singh Road",
    city: "Quetta",
    province: "Balochistan",
    country: "Pakistan",
    postalCode: "87300",
    full: "Gull Zareen Plaza, Najmudin Road, near Gurdat Singh Road, Quetta, Balochistan, Pakistan",
  },
  coordinates: {
    lat: 30.1798,
    lng: 66.9750,
  },
  googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Gull+Zareen+Plaza+Najmudin+Road+Quetta+Pakistan",
  googleMapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Oxygen+Fitness+Club+Gull+Zareen+Plaza+Najmudin+Road+Quetta",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=Gull%20Zareen%20Plaza,%20Najmudin%20Road,%20Quetta&t=&z=15&ie=UTF8&iwloc=&output=embed",
  disclaimer: "Conceptual imagery used for visual presentation. For current membership options, schedule, and facilities, contact Oxygen Fitness Club directly.",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
] as const;
