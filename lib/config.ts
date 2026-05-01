/**
 * Studio configuration — edit these values to rebrand the site.
 * Everything that's "client-specific" lives here so non-developers
 * can update content without touching components.
 */
export const studio = {
  name: "InDesign",
  initials: "ID",
  tagline: "Inquire about a design",
  established: 2014,
  cities: ["Bengaluru", "Lisbon"],

  // contact
  email:    "hello@ateliernord.studio",
  phone:    "+91 99 9999 9999",
  whatsapp: "919999999999", // country code + number, no + or spaces

  address: {
    line1:   "14 / A, Lavelle Road",
    city:    "Bengaluru 560001",
    country: "India",
  },

  hours: "Mon — Fri, 10:00 — 18:30 IST · Visits by appointment",

  social: [
    { label: "Instagram", href: "#" },
    { label: "Are.na",    href: "#" },
    { label: "LinkedIn",  href: "#" },
    { label: "Pinterest", href: "#" },
  ],

  nav: [
    { label: "Work",     href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Studio",   href: "#studio" },
    { label: "Journal",  href: "#journal" },
    { label: "Contact",  href: "#contact" },
  ],
};

export const waLink = (text?: string) => {
  const base = `https://wa.me/${studio.whatsapp}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
};
