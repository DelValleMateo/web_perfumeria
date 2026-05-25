"use client";

import { Search, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

interface NavbarProps {
  isDarkHeader?: boolean;
}

export default function Navbar({ isDarkHeader = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const { openCart, totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-neutral-950/95 backdrop-blur-md py-4 border-b border-neutral-100/30" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between relative">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <div className={`relative w-10 h-10 overflow-hidden rounded-full border transition-colors ${
            scrolled || !isDarkHeader ? 'border-neutral-100/20' : 'border-white/30'
          }`}>
            <img src="/logo_perfumeria.png" alt="Perfumería Alexis Logo" className="object-cover w-full h-full" />
          </div>
          <div className={`flex flex-col transition-colors ${
            scrolled || !isDarkHeader ? 'text-neutral-100' : 'text-white'
          }`}>
            <span className="font-playfair font-semibold text-lg tracking-widest leading-none">PERFUMERÍA</span>
            <span className="font-manrope text-[0.5rem] tracking-[0.3em] uppercase opacity-70">Alexis</span>
          </div>
        </Link>

        {/* Middle: Links */}
        <div className="hidden md:flex space-x-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {[
            { name: "INICIO", path: "/" },
            { name: "CATÁLOGO", path: "/catalog" },
            { name: "NOSOTROS", path: "/about" }
          ].map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`font-manrope text-xs font-semibold tracking-widest transition-colors uppercase ${
                scrolled || !isDarkHeader
                  ? "text-neutral-500 hover:text-primary" 
                  : "text-white/80 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right: Icons */}
        <div className={`flex items-center space-x-6 transition-colors ${
          scrolled || !isDarkHeader ? 'text-neutral-100' : 'text-white'
        }`}>
          <button className="hover:text-primary transition-colors">
            <Search size={18} strokeWidth={1.5} />
          </button>
          <button className="hover:text-primary transition-colors relative" onClick={openCart}>
            <ShoppingBag size={18} strokeWidth={1.5} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button className="hover:text-primary transition-colors">
            <User size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </nav>
  );
}
