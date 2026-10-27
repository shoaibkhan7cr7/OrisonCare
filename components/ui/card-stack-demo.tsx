"use client";

import { CardStack, CardStackItem } from "@/components/ui/card-stack";

const items: CardStackItem[] = [
  {
    id: 1,
    title: "Car Painting & Restoration",
    description: "Professional automotive painting and premium finish restoration",
    imageSrc: "images/service-painting-finish.jpg",
    href: "#services",
    tag: "Painting",
  },
  {
    id: 2,
    title: "Car Denting & Body Repair",
    description: "Precision dent repair, panel realignment and structural restoration",
    imageSrc: "images/service-denting-work.jpg",
    href: "#services",
    tag: "Denting",
  },
  {
    id: 3,
    title: "Underbody Anti-Rust Coating",
    description: "Protect the vehicle underbody and chassis from moisture, dirt and corrosion",
    imageSrc: "images/maruti800-shell-restoration.jpg",
    href: "#services",
    tag: "Protection",
  },
  {
    id: 4,
    title: "Headlight Buffing & Clarity",
    description: "Multi-stage restoration removing oxidation, haze and yellowing",
    imageSrc: "images/service-headlight-after.jpg",
    href: "#services",
    tag: "Headlights",
  },
  {
    id: 5,
    title: "Professional Car Washing",
    description: "Exterior foam wash, vehicle decontamination and high-pressure rinse",
    imageSrc: "images/hyundai-i20-work-2.jpg",
    href: "#services",
    tag: "Washing",
  },
  {
    id: 6,
    title: "Deep Interior Cleaning",
    description: "Deep steam cleaning for seats, dashboard, carpets and interior surfaces",
    imageSrc: "images/WhatsApp Image 2026-10-10 at 4.48.36 PM (2).jpeg",
    href: "#services",
    tag: "Interior",
  },
  {
    id: 7,
    title: "Engine Bay & Car Detailing",
    description: "Complete interior, engine bay and exterior detailing for a showroom mirror finish",
    imageSrc: "images/bmw-engine-after.jpg",
    href: "#services",
    tag: "Detailing",
  },
  {
    id: 8,
    title: "Custom Wheel & Rim Painting",
    description: "Powder-finish and satin or gloss wheel painting for custom aesthetics",
    imageSrc: "images/maruti800-fully-restored.jpg",
    href: "#services",
    tag: "Custom Wheels",
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
