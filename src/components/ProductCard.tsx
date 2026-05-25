"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

export default function ProductCard({ id, title, description, price, imageUrl, category }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({ id, title, price, imageUrl });
  };

  return (
    <div className="group bg-neutral-950 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 ring-1 ring-primary/10 hover:ring-primary/40">
      {/* Image Container */}
      <Link href={`/product/${id}`} className="relative aspect-[4/5] w-full overflow-hidden block rounded-t-2xl">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          <span className="text-[10px] uppercase font-manrope tracking-widest text-white font-bold">{category}</span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 md:p-5 flex flex-col flex-1">
        <div className="text-center mb-4">
          <Link href={`/product/${id}`}>
            <h3 className="font-playfair text-lg md:text-xl text-neutral-100 font-bold mb-1 hover:text-primary transition-colors line-clamp-1">
              {title}
            </h3>
          </Link>
          <p className="font-manrope text-[10px] md:text-xs text-neutral-500 line-clamp-2">
            {description}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-primary/10 pt-3">
          <span className="font-manrope text-lg text-primary font-bold tracking-wide">
            ${price}
          </span>
          <button 
            onClick={handleAddToCart}
            className="text-[9px] md:text-[10px] uppercase font-manrope tracking-widest text-primary font-bold bg-primary/10 hover:bg-primary hover:text-white px-3 py-1.5 rounded-full transition-all flex items-center group/btn"
          >
            AGREGAR <span className="ml-1 transition-transform group-hover/btn:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
