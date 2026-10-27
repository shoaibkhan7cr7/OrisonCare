"use client";

import { CardStack, CardStackItem } from "@/components/ui/card-stack";

const items: CardStackItem[] = [
  {
    id: 1,
    title: "Car Painting & Restoration",
    description: "Professional automotive painting and premium finish restoration",
    imageSrc: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    href: "#services",
  },
  {
    id: 2,
    title: "Car Denting & Body Repair",
    description: "Precision dent repair, panel realignment and structural restoration",
    imageSrc: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=1200&q=80",
    href: "#services",
  },
  {
    id: 3,
    title: "Underbody Anti-Rust Coating",
    description: "Long-lasting protection against moisture, gravel, road salts and corrosion",
    imageSrc: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80",
    href: "#services",
  },
  {
    id: 4,
    title: "Headlight Buffing & Clarity",
    description: "Multi-stage restoration removing oxidation, haze and yellowing",
    imageSrc: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80",
    href: "#services",
  },
  {
    id: 5,
    title: "Deep Interior Cleaning",
    description: "Deep steam cleaning for upholstery, carpets, roof lining and dashboard",
    imageSrc: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1200&q=80",
    href: "#services",
  },
  {
    id: 6,
    title: "Ceramic & Paint Detailing",
    description: "Complete swirl removal, high-gloss polish and ceramic shield protection",
    imageSrc: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=80",
    href: "#services",
  },
  {
    id: 7,
    title: "Custom Wheel & Rim Painting",
    description: "Powder-finish and satin or gloss wheel painting for custom aesthetics",
    imageSrc: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
    href: "#services",
  },
];

export default function CardStackDemoPage() {
  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-5xl p-8">
        <CardStack
          items={items}
          initialIndex={0}
          autoAdvance
          intervalMs={2800}
          pauseOnHover
          showDots
        />
      </div>
    </div>
  );
}
