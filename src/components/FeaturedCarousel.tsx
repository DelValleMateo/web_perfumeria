"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const FEATURED = [
  { id: "midnight-bloom", title: "Midnight Bloom", image: "/curated_1.png" },
  { id: "vetiver-root", title: "Vetiver Root", image: "/curated_2.png" },
  { id: "coastal-rain", title: "Coastal Rain", image: "/curated_3.png" },
  { id: "noir-absolu", title: "Noir Absolu", image: "/hombre.jpeg" },
  { id: "rose-elegance", title: "Rose Élégance", image: "/mujer.jpeg" },
  { id: "botanical-infusion", title: "Botanical Infusion", image: "/unisex.jpeg" },
];

export default function FeaturedCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    
    let interval: NodeJS.Timeout;
    
    const startScroll = () => {
      interval = setInterval(() => {
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
          // Reset to start if at the end
          el.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll one item width plus gap
          const itemWidth = el.children[0]?.clientWidth || 300;
          el.scrollBy({ left: itemWidth + 32, behavior: "smooth" }); // 32 is roughly the gap
        }
      }, 3500);
    };

    startScroll();

    const pause = () => clearInterval(interval);
    const resume = () => startScroll();

    el.addEventListener('mouseenter', pause);
    el.addEventListener('mouseleave', resume);
    el.addEventListener('touchstart', pause);
    el.addEventListener('touchend', resume);

    return () => {
      clearInterval(interval);
      el.removeEventListener('mouseenter', pause);
      el.removeEventListener('mouseleave', resume);
      el.removeEventListener('touchstart', pause);
      el.removeEventListener('touchend', resume);
    };
  }, []);

  return (
    <div className="w-full relative py-8 -mx-6 md:-mx-12 px-6 md:px-12">
      {/* Fade edges to blend with the background */}
      <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-neutral-900 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-neutral-900 to-transparent z-10 pointer-events-none"></div>

      <div 
        ref={scrollRef}
        className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 px-6 md:px-12"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {FEATURED.map((item) => (
          <Link 
            key={item.id}
            href={`/product/${item.id}`} 
            className="snap-center shrink-0 w-[280px] md:w-[320px] lg:w-[380px] group relative aspect-[4/5] overflow-hidden bg-neutral-950 block rounded-2xl ring-1 ring-neutral-100/20 hover:ring-primary/60 transition-all duration-500 shadow-2xl"
          >
            <Image 
              src={item.image} 
              alt={item.title} 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <p className="font-playfair text-2xl text-white font-bold drop-shadow-md">{item.title}</p>
              <p className="font-manrope text-xs text-primary tracking-[0.2em] uppercase mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-bold">
                Ver Detalle →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
