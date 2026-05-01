export type ProjectCategory =
  | "residential"
  | "hospitality"
  | "commercial"
  | "culture";

export type Project = {
  slug: string;
  title: string;
  location: string;
  year: number;
  category: ProjectCategory;
  image: string;
  // optional fields for future detail page
  summary?: string;
  gallery?: string[];
  client?: string;
};

export const categories: {
  id: ProjectCategory;
  number: string;
  title: string;
  intro: string;
}[] = [
  {
    id: "residential",
    number: "01 / Residential",
    title: "Homes that age <em>gracefully</em>.",
    intro:
      "Long-life apartments, weekend houses, family villas — designed to outlast trend cycles.",
  },
  {
    id: "hospitality",
    number: "02 / Hospitality",
    title: "Hotels &amp; rooms <em>worth returning</em> to.",
    intro:
      "Boutique hotels, restaurants and bars where the interior is the reason guests come back.",
  },
  {
    id: "commercial",
    number: "03 / Commercial",
    title: "Workplaces with a <em>second life</em>.",
    intro:
      "Studios, offices and retail — designed to be flexible, characterful, and never corporate.",
  },
  {
    id: "culture",
    number: "04 / Culture &amp; Exhibits",
    title: "Spaces for <em>quiet attention</em>.",
    intro:
      "Galleries, pavilions and exhibition design — environments built to defer to the work they hold.",
  },
];

export const projects: Project[] = [
  // Residential
  { slug: "casa-levante",     title: "Casa Levante",     location: "Lisbon",   year: 2024, category: "residential", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=75" },
  { slug: "apartment-r04",    title: "Apartment R.04",   location: "Bengaluru", year: 2023, category: "residential", image: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=900&q=75" },
  { slug: "maison-deve",      title: "Maison Dévé",      location: "Antwerp",  year: 2022, category: "residential", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=75" },

  // Hospitality
  { slug: "hotel-pomelo",     title: "Hôtel Pomelo",     location: "Marseille", year: 2024, category: "hospitality", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=75" },
  { slug: "restaurant-selene", title: "Restaurant Selene", location: "Goa",     year: 2023, category: "hospitality", image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=75" },
  { slug: "the-quiet-room",   title: "The Quiet Room",   location: "Kyoto",    year: 2022, category: "hospitality", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=75" },

  // Commercial
  { slug: "form-and-field",   title: "Form & Field HQ",  location: "Bengaluru", year: 2025, category: "commercial", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=75" },
  { slug: "atelier-linen",    title: "Atelier Linen",    location: "Mumbai",   year: 2024, category: "commercial", image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=900&q=75" },
  { slug: "showroom-nord",    title: "Showroom Nord",    location: "Copenhagen", year: 2023, category: "commercial", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=75" },

  // Culture
  { slug: "pavilion-14",      title: "Pavilion 14",      location: "Venice Biennale", year: 2024, category: "culture", image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=75" },
  { slug: "stoneworks-gallery", title: "Stoneworks Gallery", location: "Jaipur", year: 2023, category: "culture", image: "https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&w=900&q=75" },
  { slug: "archive-of-light", title: "Archive of Light", location: "Berlin",   year: 2022, category: "culture", image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=900&q=75" },
];

// helper: get projects by category, in array form (so a row's first/middle/last
// can be styled differently with a known order)
export const projectsByCategory = (cat: ProjectCategory) =>
  projects.filter((p) => p.category === cat);
