"use client";

import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CartDrawer() {
  const { isCartOpen, closeCart, items, updateQuantity, removeItem, totalPrice } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity"
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-neutral-950 shadow-2xl z-[70] flex flex-col border-l border-white/10 animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-100/30">
          <h2 className="font-playfair text-2xl text-neutral-100 font-bold flex items-center gap-3">
            <ShoppingBag size={24} className="text-primary" />
            Tu Bolsa
          </h2>
          <button 
            onClick={closeCart}
            className="text-neutral-400 hover:text-neutral-100 transition-colors p-2"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-neutral-500 space-y-4">
              <ShoppingBag size={48} className="opacity-20" />
              <p className="font-manrope text-sm text-center">Tu bolsa está vacía.</p>
              <button 
                onClick={closeCart}
                className="text-primary font-manrope text-xs font-bold tracking-widest uppercase hover:text-white transition-colors"
              >
                Seguir Explorando →
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 bg-neutral-900 p-4 rounded-xl border border-neutral-100/20">
                <div className="relative w-20 h-24 bg-neutral-800 rounded-lg overflow-hidden shrink-0">
                  <Image src={item.imageUrl} alt={item.title} fill className="object-cover" />
                </div>
                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <Link href={`/product/${item.id}`} onClick={closeCart}>
                        <h3 className="font-playfair text-lg text-neutral-100 font-bold hover:text-primary transition-colors">{item.title}</h3>
                      </Link>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-neutral-500 hover:text-primary transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <p className="font-manrope text-sm text-primary font-semibold mt-1 tracking-wide">${item.price}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3 bg-neutral-950 px-2 py-1 rounded-lg border border-neutral-100/20">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="text-neutral-400 hover:text-neutral-100 transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="font-manrope text-xs text-neutral-100 w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-neutral-400 hover:text-neutral-100 transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <span className="font-manrope text-lg text-neutral-100 font-semibold tracking-wide">
                      ${item.price * item.quantity}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-neutral-100/30 bg-neutral-950">
            <div className="flex justify-between items-center mb-6">
              <span className="font-manrope text-sm text-neutral-400 uppercase tracking-widest">Subtotal</span>
              <span className="font-manrope text-2xl text-neutral-100 font-bold tracking-wide">${totalPrice}</span>
            </div>
            <button className="w-full bg-primary hover:bg-primary-dark text-white font-manrope font-bold uppercase tracking-widest text-xs py-4 transition-colors rounded-full">
              Pagar Pedido
            </button>
          </div>
        )}
      </div>
    </>
  );
}
