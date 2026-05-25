"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/lib/fragranceApi";
import { Search, ChevronDown } from "lucide-react";

interface CatalogClientProps {
  products: Product[];
}

type SortOption = "default" | "price-asc" | "price-desc" | "name-asc";

const CATEGORIES = [
  { key: "TODO",   label: "Todos" },
  { key: "HOMBRE", label: "Hombre" },
  { key: "MUJER",  label: "Mujer" },
  { key: "UNISEX", label: "Unisex" },
];

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "default",    label: "Recomendado" },
  { value: "price-asc",  label: "Menor precio" },
  { value: "price-desc", label: "Mayor precio" },
  { value: "name-asc",   label: "Nombre A–Z" },
];

const MAX_PRICE = 500;

export default function CatalogClient({ products }: CatalogClientProps) {
  const searchParams  = useSearchParams();
  const urlCategory   = searchParams.get("category");
  const sortRef       = useRef<HTMLDivElement>(null);

  const [search,       setSearch]       = useState("");
  const [activeFilter, setActiveFilter] = useState(() =>
    urlCategory ? urlCategory.toUpperCase() : "TODO"
  );
  const [maxPrice,     setMaxPrice]     = useState(MAX_PRICE);
  const [sortBy,       setSortBy]       = useState<SortOption>("default");
  const [sortOpen,     setSortOpen]     = useState(false);

  useEffect(() => {
    if (urlCategory) setActiveFilter(urlCategory.toUpperCase());
  }, [urlCategory]);

  // Close sort dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setSortOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const filtered = useMemo(() => {
    let list = products;

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(p =>
        p.title.toLowerCase().includes(q) ||
        (p.brand || "").toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }

    if (activeFilter !== "TODO") {
      list = list.filter(p => p.category === activeFilter);
    }

    list = list.filter(p => p.price <= maxPrice);

    switch (sortBy) {
      case "price-asc":  list = [...list].sort((a, b) => a.price - b.price); break;
      case "price-desc": list = [...list].sort((a, b) => b.price - a.price); break;
      case "name-asc":   list = [...list].sort((a, b) => a.title.localeCompare(b.title)); break;
    }

    return list;
  }, [products, search, activeFilter, maxPrice, sortBy]);

  const activeSortLabel = SORT_OPTIONS.find(o => o.value === sortBy)?.label ?? "Recomendado";

  return (
    <div className="container mx-auto px-6 md:px-12">

      {/* ── Filter Bar ── */}
      <div className="sticky top-[72px] z-30 mb-10 -mx-6 md:-mx-12 px-6 md:px-12 py-4 bg-neutral-900/80 backdrop-blur-xl border-b border-primary/10">
        <div className="bg-neutral-950 shadow-sm border border-primary/20 rounded-2xl px-6 py-4 flex flex-wrap lg:flex-nowrap items-center gap-6">

          {/* Search */}
          <div className="flex flex-col gap-1.5 flex-1 min-w-[160px]">
            <span className="font-manrope text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">Buscar</span>
            <div className="relative">
              <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
              <input
                id="catalog-search"
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Buscar fragancias..."
                className="w-full bg-transparent border-b border-primary/20 focus:border-primary pl-8 pr-3 py-1.5 text-xs font-manrope text-neutral-100 placeholder-neutral-500 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="hidden lg:block w-px h-10 bg-primary/10 shrink-0" />

          {/* Category pills */}
          <div className="flex flex-col gap-1.5">
            <span className="font-manrope text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">Categoría</span>
            <div className="flex items-center gap-1.5">
              {CATEGORIES.map(cat => (
                <button
                  key={cat.key}
                  id={`filter-${cat.key.toLowerCase()}`}
                  onClick={() => setActiveFilter(cat.key)}
                  className={`px-4 py-1.5 rounded-lg text-[11px] font-manrope font-semibold tracking-widest uppercase transition-all duration-200 ${
                    activeFilter === cat.key
                      ? "bg-primary text-white shadow-md shadow-primary/20"
                      : "bg-primary/5 text-neutral-500 hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden lg:block w-px h-10 bg-primary/10 shrink-0" />

          {/* Price range */}
          <div className="flex flex-col gap-1.5 flex-1 min-w-[160px]">
            <div className="flex items-center justify-between">
              <span className="font-manrope text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">Rango de precio</span>
              <span className="font-manrope text-[11px] text-primary font-semibold">
                $0 – ${maxPrice === MAX_PRICE ? MAX_PRICE : maxPrice}
              </span>
            </div>
            <div className="relative flex items-center h-5">
              <div className="w-full h-px bg-primary/20 rounded-full relative">
                <div
                  className="absolute left-0 top-0 h-px rounded-full bg-primary"
                  style={{ width: `${(maxPrice / MAX_PRICE) * 100}%` }}
                />
              </div>
              <input
                id="catalog-price-range"
                type="range"
                min={0}
                max={MAX_PRICE}
                step={10}
                value={maxPrice}
                onChange={e => setMaxPrice(Number(e.target.value))}
                className="absolute inset-0 w-full opacity-0 cursor-pointer h-5"
                style={{ appearance: "none" }}
              />
              {/* Thumb indicator */}
              <div
                className="absolute w-3.5 h-3.5 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--color-primary-rgb),0.6)] pointer-events-none -translate-y-px"
                style={{ left: `calc(${(maxPrice / MAX_PRICE) * 100}% - 7px)` }}
              />
            </div>
          </div>

          <div className="hidden lg:block w-px h-10 bg-primary/10 shrink-0" />

          {/* Sort */}
          <div className="flex flex-col gap-1.5" ref={sortRef}>
            <span className="font-manrope text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">Ordenar por</span>
            <div className="relative">
              <button
                id="catalog-sort-btn"
                onClick={() => setSortOpen(o => !o)}
                className="flex items-center gap-2 text-xs font-manrope text-neutral-100 whitespace-nowrap group"
              >
                <span className="font-semibold tracking-wide">{activeSortLabel}</span>
                <ChevronDown size={12} className={`text-neutral-500 transition-transform duration-200 ${sortOpen ? "rotate-180" : ""}`} />
              </button>

              {sortOpen && (
                <div className="absolute right-0 top-full mt-3 bg-neutral-950 border border-primary/20 rounded-xl shadow-2xl overflow-hidden min-w-[180px] z-50">
                  {SORT_OPTIONS.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                      className={`w-full text-left px-5 py-3 text-xs font-manrope transition-colors ${
                        sortBy === opt.value
                          ? "text-primary bg-primary/10 font-semibold"
                          : "text-neutral-600 hover:bg-primary/5 hover:text-primary"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Result count */}
        <p className="font-manrope text-[11px] text-neutral-600 mt-3 px-1">
          {filtered.length} {filtered.length === 1 ? "fragancia" : "fragancias"}
          {search && <span> para &ldquo;<span className="text-primary/80">{search}</span>&rdquo;</span>}
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {filtered.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center py-32 text-center">
          <p className="font-playfair text-4xl text-neutral-100/20 mb-4">✦</p>
          <p className="font-manrope text-neutral-500 text-sm">No se encontraron fragancias.</p>
          <button
            onClick={() => { setSearch(""); setActiveFilter("TODO"); setMaxPrice(MAX_PRICE); setSortBy("default"); }}
            className="mt-6 text-xs font-manrope text-primary/70 tracking-widest uppercase hover:text-primary transition-colors"
          >
            Limpiar filtros
          </button>
        </div>
      )}
    </div>
  );
}
