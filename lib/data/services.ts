export type Service = {
  number: string;
  title: string;
  description: string;
  items: string[];
};

export const services: Service[] = [
  {
    number: "N° 01",
    title: "Interior Architecture",
    description:
      "Spatial planning, joinery, finishes and lighting — engineered down to the millimetre and signed off by our drafting studio.",
    items: ["Concept & schematic design", "Construction documentation", "Site supervision"],
  },
  {
    number: "N° 02",
    title: "Furniture & Object",
    description:
      "A growing catalogue of bespoke and limited-run pieces. Designed in-house, made by hand with our partner workshops.",
    items: ["Bespoke commissions", "Edition pieces", "Material development"],
  },
  {
    number: "N° 03",
    title: "Art Direction",
    description:
      "For brands building physical spaces — retail concepts, identity systems, photography and the editorial layer that ties it all together.",
    items: ["Brand environments", "Exhibition & set design", "Editorial & print"],
  },
  {
    number: "N° 04",
    title: "Strategic Advisory",
    description:
      "For developers and operators — long-form consulting on portfolio, programming and how a space will earn its keep over decades.",
    items: ["Feasibility & programming", "Portfolio design language", "Operator & vendor selection"],
  },
];
