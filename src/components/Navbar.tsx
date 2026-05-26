"use client";

import { Search, ShoppingBag, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

interface NavbarProps {
  isDarkHeader?: boolean;
}

const navLinks = [
  { name: "INICIO", path: "/" },
  { name: "CATÁLOGO", path: "/catalog" },
  { name: "NOSOTROS", path: "/about" },
];

export default function Navbar({ isDarkHeader = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openCart, totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
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
              scrolled || !isDarkHeader ? "border-neutral-100/20" : "border-white/30"
            }`}>
              <img src="/logo_perfumeria.png" alt="Perfumería Alexis Logo" className="object-cover w-full h-full" />
            </div>
            <div className={`flex flex-col transition-colors ${
              scrolled || !isDarkHeader ? "text-neutral-100" : "text-white"
            }`}>
              <span className="font-playfair font-semibold text-lg tracking-widest leading-none">PERFUMERÍA</span>
              <span className="font-manrope text-[0.5rem] tracking-[0.3em] uppercase opacity-70">Alexis</span>
            </div>
          </Link>

          {/* Middle: Links — solo desktop */}
          <div className="hidden md:flex space-x-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {navLinks.map((item) => (
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
          <div className={`flex items-center space-x-5 transition-colors ${
            scrolled || !isDarkHeader ? "text-neutral-100" : "text-white"
          }`}>
            {/* Búsqueda */}
            <button className="hover:text-primary transition-colors" aria-label="Buscar">
              <Search size={18} strokeWidth={1.5} />
            </button>

            {/* Carrito */}
            <button className="hover:text-primary transition-colors relative" onClick={openCart} aria-label="Carrito">
              <ShoppingBag size={18} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Hamburger — solo mobile */}
            <button
              className="md:hidden hover:text-primary transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menú"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile menu overlay ── */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Drawer — slide desde la derecha */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-[70] flex flex-col transition-transform duration-300 ease-in-out md:hidden`}
        style={{
          background: "linear-gradient(160deg, #2D1818 0%, #1C1010 100%)",
          transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
          boxShadow: mobileOpen ? "-8px 0 40px rgba(0,0,0,0.5)" : "none",
        }}
      >
        {/* Header del drawer */}
        <div className="flex items-center justify-between px-7 py-6 border-b border-white/10">
          <div className="flex flex-col">
            <span className="font-playfair font-semibold text-base tracking-widest text-white leading-none">PERFUMERÍA</span>
            <span className="font-manrope text-[0.5rem] tracking-[0.3em] uppercase text-white/50 mt-0.5">Alexis</span>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-white/60 hover:text-white transition-colors"
            aria-label="Cerrar menú"
          >
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col px-7 pt-10 space-y-1 flex-1">
          {navLinks.map((item, i) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setMobileOpen(false)}
              className="group flex items-center justify-between py-4 border-b border-white/8 transition-colors"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="font-manrope text-sm font-semibold tracking-[0.2em] uppercase text-white/70 group-hover:text-white transition-colors">
                {item.name}
              </span>
              <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity text-lg leading-none">→</span>
            </Link>
          ))}
        </nav>

        {/* Footer del drawer */}
        <div className="px-7 pb-10">
          <p className="font-manrope text-[10px] tracking-widest uppercase text-white/25 mb-3">Contacto</p>
          <p className="font-manrope text-xs text-white/40 leading-relaxed">
            25 de Mayo 930<br />
            Gualeguaychú, Entre Ríos<br />
            <a href="tel:+5434464262 30" className="hover:text-primary transition-colors mt-1 block">
              +54 3446 42-6230
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
