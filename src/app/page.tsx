import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedCarousel from "@/components/FeaturedCarousel";

export default function Home() {
  return (
    <>
      <Navbar isDarkHeader={true} />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/fondohome7.png"
              alt="Frasco de perfume de lujo"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Dark overlay for text readability on busy dark hero */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-6 pb-24 md:pb-32">
            <div className="flex flex-col items-center mb-6">
              <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight tracking-wider shadow-black/50 drop-shadow-lg">
                PERFUMERÍA
              </h1>
              <span className="font-manrope text-xl md:text-2xl text-white tracking-[0.4em] uppercase mt-2">
                Alexis
              </span>
            </div>

            <span
              className="font-manrope text-[11px] md:text-sm tracking-[0.35em] font-bold uppercase mb-4 mt-6 md:mt-8 text-white px-5 py-1.5 rounded-full"
              style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(6px)", textShadow: "0 2px 8px rgba(0,0,0,0.9)" }}
            >
              La Esencia de la Elegancia
            </span>
            <p
              className="font-manrope text-base md:text-lg text-white max-w-xl mb-10 leading-relaxed"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.95), 0 1px 4px rgba(0,0,0,0.8)" }}
            >
              Descubre un mundo donde el aroma se convierte en arte. Elaborado con lujo intransigente para el individuo exigente.
            </p>
            <Link
              href="/catalog"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-manrope font-bold uppercase tracking-widest text-xs px-12 py-5 transition-colors rounded-full"
            >
              Explorar Colección
            </Link>
          </div>
        </section>

        {/* Categorías Section */}
        <section className="py-24 md:py-32 bg-neutral-950 text-neutral-100">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-16 space-y-4">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold">Nuestras Categorías</h2>
              <p className="font-manrope text-xs tracking-widest uppercase text-neutral-400">Encuentra tu fragancia ideal</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Hombre */}
              <Link href="/catalog?category=hombre" className="group relative aspect-[3/4] overflow-hidden bg-neutral-900 block rounded-2xl ring-1 ring-neutral-100/20 hover:ring-primary/60 transition-all duration-500">
                <Image
                  src="/hombre.jpeg"
                  alt="Perfumes para Hombre"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center">
                  <h3 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-3">Hombre</h3>
                  <span className="font-manrope text-xs tracking-[0.2em] uppercase text-primary opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Descubrir
                  </span>
                </div>
              </Link>

              {/* Mujer */}
              <Link href="/catalog?category=mujer" className="group relative aspect-[3/4] overflow-hidden bg-neutral-900 block rounded-2xl ring-1 ring-neutral-100/20 hover:ring-primary/60 transition-all duration-500">
                <Image
                  src="/mujer.jpeg"
                  alt="Perfumes para Mujer"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center">
                  <h3 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-3">Mujer</h3>
                  <span className="font-manrope text-xs tracking-[0.2em] uppercase text-primary opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Descubrir
                  </span>
                </div>
              </Link>

              {/* Unisex */}
              <Link href="/catalog?category=unisex" className="group relative aspect-[3/4] overflow-hidden bg-neutral-900 block rounded-2xl ring-1 ring-neutral-100/20 hover:ring-primary/60 transition-all duration-500">
                <Image
                  src="/unisex.jpeg"
                  alt="Perfumes Unisex"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center">
                  <h3 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-3">Unisex</h3>
                  <span className="font-manrope text-xs tracking-[0.2em] uppercase text-primary opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Descubrir
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Curated Selection Section */}
        <section className="py-24 md:py-32 bg-neutral-900 text-neutral-100 flex flex-col items-center">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold">Destacados</h2>
            <p className="font-manrope text-xs tracking-widest uppercase text-neutral-500">Obras maestras diseñadas para dejar una impresión duradera.</p>
          </div>

          <div className="w-full">
            <FeaturedCarousel />
          </div>

          <div className="mt-16">
            <Link
              href="/catalog"
              className="inline-flex items-center text-xs uppercase tracking-[0.2em] font-semibold text-primary border border-primary px-10 py-4 hover:bg-primary hover:text-white transition-colors rounded-full"
            >
              Ver Catálogo Completo <span className="ml-2">→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
