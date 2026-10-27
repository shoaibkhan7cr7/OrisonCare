"use client";

import { CardStack, CardStackItem } from "@/components/ui/card-stack";

const items: CardStackItem[] = [
  {
    id: 1,
    title: "Car Painting & Restoration",
    description: "Professional automotive painting and premium finish restoration",
    imageSrc: "images/service-painting-finish.jpg",
    href: "#services",
  },
  {
    id: 2,
    title: "Car Denting & Body Repair",
    description: "Precision dent repair, panel realignment and structural restoration",
    imageSrc: "images/service-denting-work.jpg",
    href: "#services",
  },
  {
    id: 3,
    title: "Underbody Anti-Rust Coating",
    description: "Long-lasting protection against moisture, gravel, road salts and corrosion",
    imageSrc: "images/work-paint-before.jpg",
    href: "#services",
  },
  {
    id: 4,
    title: "Headlight Buffing & Clarity",
    description: "Multi-stage restoration removing oxidation, haze and yellowing",
    imageSrc: "images/service-headlight-after.jpg",
    href: "#services",
  },
  {
    id: 5,
    title: "Professional Car Washing",
    description: "Exterior foam wash, vehicle decontamination and high-pressure rinse",
    imageSrc: "images/hyundai-i20-work-2.jpg",
    href: "#services",
  },
  {
    id: 6,
    title: "Deep Interior Cleaning",
    description: "Deep steam cleaning for seats, dashboard, carpets and interior surfaces",
    imageSrc: "images/WhatsApp Image 2026-10-10 at 4.48.36 PM (2).jpeg",
    href: "#services",
  },
  {
    id: 7,
    title: "Ceramic & Paint Detailing",
    description: "Complete swirl removal, high-gloss polish and ceramic shield protection",
    imageSrc: "images/maruti800-restored-front.jpg",
    href: "#services",
  },
  {
    id: 8,
    title: "Custom Wheel & Rim Painting",
    description: "Powder-finish and satin or gloss wheel painting for custom aesthetics",
    imageSrc: "images/maruti800-restored-side.jpg",
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
