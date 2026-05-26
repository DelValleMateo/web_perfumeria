"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const FEATURED = [
  {
    id: "midnight-bloom",
    title: "Midnight Bloom",
    description: "Rosas oscuras, ámbar y pachulí envueltos en terciopelo negro.",
    price: 89,
    image: "/curated_1.png",
    category: "Mujer",
    note: "Floral Oriental",
  },
  {
    id: "vetiver-root",
    title: "Vetiver Root",
    description: "Madera ahumada, cuero y raíz de vetiver sobre base de musgo.",
    price: 97,
    image: "/curated_2.png",
    category: "Hombre",
    note: "Aromático Leñoso",
  },
  {
    id: "coastal-rain",
    title: "Coastal Rain",
    description: "Notas marinas frescas, limón siciliano y cedro blanco.",
    price: 79,
    image: "/curated_3.png",
    category: "Unisex",
    note: "Acuático Fresco",
  },
];

export default function FeaturedCarousel() {
  const [active, setActive] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
  const nextRef    = useRef<() => void>(() => {});
  const { addItem } = useCart();

  const n = FEATURED.length;

  // Intersection Observer para animación de entrada
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const goTo = useCallback(
    (next: number, _dir?: "left" | "right") => {
      if (isAnimating) return;
      setIsAnimating(true);
      setTimeout(() => {
        setActive(((next % n) + n) % n);
        setIsAnimating(false);
      }, 480);
    },
    [isAnimating, n]
  );

  const prev = useCallback(() => goTo(active - 1, "right"), [active, goTo]);
  const next = useCallback(() => goTo(active + 1, "left"), [active, goTo]);

  // Keep nextRef always pointing to the latest next() without restarting the interval
  useEffect(() => { nextRef.current = next; }, [next]);

  // Auto-play: starts once, reads next via ref so it never needs to restart
  useEffect(() => {
    autoPlayRef.current = setInterval(() => nextRef.current(), 1200);
    return () => clearInterval(autoPlayRef.current);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Calcular posición de cada tarjeta respecto al activo
  const getPos = (i: number) => {
    const diff = ((i - active + n) % n + n) % n;
    if (diff === 0) return "center";
    if (diff === 1 || diff === n - 2) return diff === 1 ? "right" : "left2";
    if (diff === n - 1) return "left";
    return "hidden";
  };

  const getCardStyle = (pos: string): React.CSSProperties => {
    const base: React.CSSProperties = {
      position: "absolute",
      transition:
        "transform 0.48s cubic-bezier(0.77,0,0.175,1), opacity 0.48s ease, z-index 0s",
      willChange: "transform, opacity",
    };
    switch (pos) {
      case "center":
        return {
          ...base,
          transform: "translateX(-50%) translateX(0px) scale(1) rotateY(0deg)",
          left: "50%",
          opacity: 1,
          zIndex: 20,
        };
      case "left":
        return {
          ...base,
          transform: "translateX(-50%) translateX(-280px) scale(0.78) rotateY(22deg)",
          left: "50%",
          opacity: 0.55,
          zIndex: 10,
        };
      case "right":
        return {
          ...base,
          transform: "translateX(-50%) translateX(280px) scale(0.78) rotateY(-22deg)",
          left: "50%",
          opacity: 0.55,
          zIndex: 10,
        };
      default:
        return {
          ...base,
          transform: "translateX(-50%) translateX(0px) scale(0.5) rotateY(0deg)",
          left: "50%",
          opacity: 0,
          zIndex: 0,
          pointerEvents: "none",
        };
    }
  };

  return (
    <div
      ref={sectionRef}
      className="w-full flex flex-col items-center select-none"
      style={{ perspective: "1200px" }}
    >
      {/* Carousel Stage */}
      <div
        className="relative w-full"
        style={{ height: 520, maxWidth: 900 }}
        onMouseEnter={() => clearInterval(autoPlayRef.current)}
        onMouseLeave={() => {
          clearInterval(autoPlayRef.current);
          autoPlayRef.current = setInterval(() => next(), 1200);
        }}
      >
        {FEATURED.map((item, i) => {
          const pos = getPos(i);
          const isCenter = pos === "center";
          const cardStyle = getCardStyle(pos);
          const enterDelay = visible ? `${i * 100}ms` : "0ms";

          return (
            <div
              key={item.id}
              style={{
                ...cardStyle,
                top: "50%",
                marginTop: isCenter ? -220 : -180,
                transitionDelay: visible ? "0ms" : enterDelay,
                opacity: visible ? (cardStyle.opacity as number) : 0,
                transform: visible
                  ? (cardStyle.transform as string)
                  : `${cardStyle.transform} translateY(40px)`,
              }}
            >
              {/* Card */}
              <div
                className="relative overflow-hidden rounded-2xl cursor-pointer"
                style={{
                  width: isCenter ? 300 : 240,
                  height: isCenter ? 440 : 360,
                  transition: "width 0.48s cubic-bezier(0.77,0,0.175,1), height 0.48s cubic-bezier(0.77,0,0.175,1)",
                  boxShadow: isCenter
                    ? "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.08)"
                    : "0 12px 40px rgba(0,0,0,0.4)",
                }}
                onClick={() => {
                  if (!isCenter) {
                    if (pos === "left") goTo(i, "right");
                    if (pos === "right") goTo(i, "left");
                  }
                }}
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  style={{
                    transition: "transform 0.8s ease",
                    transform: isCenter ? "scale(1.04)" : "scale(1)",
                  }}
                />

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: isCenter
                      ? "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)"
                      : "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
                    transition: "background 0.48s ease",
                  }}
                />

                {/* Note badge */}
                <div
                  className="absolute top-4 left-4"
                  style={{
                    opacity: isCenter ? 1 : 0,
                    transform: isCenter ? "translateY(0)" : "translateY(-8px)",
                    transition: "opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s",
                  }}
                >
                  <span className="bg-black/60 backdrop-blur-md border border-white/10 text-white font-manrope text-[9px] tracking-[0.2em] uppercase px-3 py-1 rounded-full">
                    {item.note}
                  </span>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-primary/80 backdrop-blur-sm text-white font-manrope text-[9px] tracking-widest uppercase px-3 py-1 rounded-full font-bold">
                    {item.category}
                  </span>
                </div>

                {/* Card content (only on center) */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-6"
                  style={{
                    opacity: isCenter ? 1 : 0,
                    transform: isCenter ? "translateY(0)" : "translateY(16px)",
                    transition: "opacity 0.4s ease 0.15s, transform 0.4s ease 0.15s",
                  }}
                >
                  <Link href={`/product/${item.id}`}>
                    <h3 className="font-playfair text-2xl text-white font-bold mb-1 hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </Link>
                  <p className="font-manrope text-[11px] text-neutral-300 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="font-manrope text-xl font-bold text-primary">
                      ${item.price}
                    </span>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addItem({ id: item.id, title: item.title, price: item.price, imageUrl: item.image });
                      }}
                      className="group/btn relative overflow-hidden bg-primary text-white font-manrope text-[10px] tracking-widest uppercase font-bold px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition-colors duration-300"
                    >
                      <span
                        className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500 skew-x-12"
                      />
                      Agregar
                      <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                    </button>
                  </div>
                </div>

                {/* Title only (for side cards) */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-4 text-center"
                  style={{
                    opacity: isCenter ? 0 : 1,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  <p className="font-playfair text-white text-base font-bold drop-shadow-md">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        {/* Prev arrow */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-30 group"
          aria-label="Anterior"
        >
          <div className="w-11 h-11 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:scale-110">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </div>
        </button>

        {/* Next arrow */}
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-30 group"
          aria-label="Siguiente"
        >
          <div className="w-11 h-11 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:scale-110">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center gap-3 mt-10">
        {FEATURED.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > active ? "left" : "right")}
            aria-label={`Ir a ${FEATURED[i].title}`}
            className="relative overflow-hidden rounded-full transition-all duration-400"
            style={{
              width: active === i ? 32 : 8,
              height: 8,
              background: active === i ? "var(--color-primary, #b8860b)" : "rgba(255,255,255,0.2)",
              transition: "width 0.4s cubic-bezier(0.77,0,0.175,1), background 0.4s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
