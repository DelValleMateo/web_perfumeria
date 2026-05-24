"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: "midnight-bloom",
    title: "Midnight Bloom",
    description: "Jazmín, Tuberosa, Almizcle Oscuro",
    price: 185,
    imageUrl: "/curated_1.png",
    category: "FLORAL"
  },
  {
    id: "vetiver-root",
    title: "Vetiver Root",
    description: "Vetiver Haitiano, Madera de Cedro, Humo",
    price: 210,
    imageUrl: "/curated_2.png",
    category: "AMADERADO"
  },
  {
    id: "coastal-rain",
    title: "Coastal Rain",
    description: "Bergamota, Sal Marina, Musgo Blanco",
    price: 175,
    imageUrl: "/curated_3.png",
    category: "FRESCO"
  }
];

const filters = ["TODO", "FLORAL", "AMADERADO", "FRESCO", "ORIENTAL"];

export default function CatalogClient() {
  const [activeFilter, setActiveFilter] = useState("TODO");

  const filteredProducts = activeFilter === "TODO" 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <div className="container mx-auto px-6 md:px-12">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-6">
        <h1 className="font-playfair text-4xl md:text-6xl text-white font-bold">Nuestra Colección</h1>
        <p className="font-manrope text-neutral-400 text-sm leading-relaxed">
          Descubre nuestras fragancias meticulosamente elaboradas. Cada aroma es un viaje olfativo, combinando ingredientes botánicos raros y acordes exquisitos para evocar una profunda resonancia emocional.
        </p>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 pt-8">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full border text-xs tracking-widest uppercase font-manrope transition-colors ${
                activeFilter === filter 
                  ? "border-primary bg-primary/10 text-primary" 
                  : "border-white/10 text-neutral-400 hover:border-primary/50 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-24 text-neutral-500 font-manrope">
          No se encontraron fragancias para esta categoría.
        </div>
      )}
    </div>
  );
}
