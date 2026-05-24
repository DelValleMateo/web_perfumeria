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
    <div className="group bg-[#151515] overflow-hidden flex flex-col transition-transform hover:-translate-y-1">
      {/* Image Container */}
      <Link href={`/product/${id}`} className="relative aspect-[4/5] w-full overflow-hidden block">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 border border-white/10">
          <span className="text-[10px] uppercase font-manrope tracking-widest text-white font-bold">{category}</span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="text-center mb-6">
          <Link href={`/product/${id}`}>
            <h3 className="font-playfair text-xl md:text-2xl text-white font-bold mb-2 hover:text-primary transition-colors">
              {title}
            </h3>
          </Link>
          <p className="font-manrope text-xs text-neutral-400">
            {description}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
          <span className="font-playfair italic text-lg text-neutral-200">
            ${price}
          </span>
          <button 
            onClick={handleAddToCart}
            className="text-[10px] uppercase font-manrope tracking-widest text-primary font-bold hover:text-white transition-colors flex items-center group/btn"
          >
            AGREGAR <span className="ml-2 transition-transform group-hover/btn:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
