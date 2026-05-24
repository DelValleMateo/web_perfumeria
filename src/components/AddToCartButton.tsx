"use client";

import { useCart } from "@/context/CartContext";
import { Heart } from "lucide-react";

interface AddToCartButtonProps {
  product: {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
  };
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCart();

  return (
    <div className="flex items-center gap-4 mt-10">
      <button 
        onClick={() => addItem(product)}
        className="flex-1 bg-primary hover:bg-primary-dark text-neutral-950 font-manrope font-bold uppercase tracking-widest text-xs py-4 transition-colors text-center rounded-full"
      >
        Añadir a la bolsa
      </button>
      <button className="p-4 border border-white/20 hover:border-primary text-white hover:text-primary transition-colors rounded-full">
        <Heart size={20} strokeWidth={1.5} />
      </button>
    </div>
  );
}
