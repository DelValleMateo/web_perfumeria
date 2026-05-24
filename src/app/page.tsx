import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero_perfume.png"
              alt="Frasco de perfume de lujo"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-neutral-950/40"></div>
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-neutral-950 to-transparent"></div>
          </div>
          
          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-6 bg-neutral-950/50 pb-24 md:pb-32">
            <div className="flex flex-col items-center mb-6">
              <div className="relative w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full border-2 border-white/20 mb-8 shadow-2xl">
                <img src="/logo_perfumeria.png" alt="Perfumería Alexis Logo" className="object-cover w-full h-full" />
              </div>
              <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight tracking-wider">
                PERFUMERÍA
              </h1>
              <span className="font-manrope text-xl md:text-2xl text-neutral-300 tracking-[0.4em] uppercase mt-2">
                Alexis
              </span>
            </div>
            
            <span className="text-primary text-[10px] md:text-xs tracking-[0.3em] font-bold uppercase mb-4 font-manrope mt-6 md:mt-8">
              La Esencia de la Elegancia
            </span>
            <p className="font-manrope text-sm md:text-base text-neutral-300 max-w-xl mb-10 leading-relaxed">
              Descubre un mundo donde el aroma se convierte en arte. Elaborado con lujo intransigente para el individuo exigente.
            </p>
            <Link
            href="/catalog"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-neutral-950 font-manrope font-bold uppercase tracking-widest text-xs px-12 py-5 transition-colors rounded-full"
          >
            Explorar Colección
          </Link>
          </div>
        </section>

        {/* The Art of Olfaction Section */}
        <section className="py-24 md:py-32 bg-neutral-950 text-white">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col space-y-8 order-2 lg:order-1">
              <h2 className="font-playfair text-3xl md:text-5xl font-bold">El Arte del Olfato</h2>
              <p className="font-manrope text-sm text-neutral-400 leading-relaxed max-w-md">
                Cada frasco guarda una historia, una sinfonía cuidadosamente compuesta de notas de salida, corazón y fondo. Seleccionamos solo los ingredientes más raros de todo el mundo para garantizar que cada gota resuene con profundidad y claridad.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                {['Floral', 'Amaderado', 'Oriental', 'Fresco'].map((tag) => (
                  <span key={tag} className="px-6 py-2 rounded-full border border-primary/40 text-primary font-manrope text-xs tracking-widest uppercase hover:bg-primary/10 transition-colors cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative aspect-[4/5] w-full max-w-md mx-auto">
              <Image
                src="/art_of_olfaction.png"
                alt="Perfume en estante de cristal"
                fill
                className="object-cover shadow-2xl shadow-primary/5"
              />
            </div>
          </div>
        </section>

        {/* Curated Selection Section */}
        <section className="py-24 md:py-32 bg-[#121212] text-white flex flex-col items-center">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold">Selección Curada</h2>
            <p className="font-manrope text-xs tracking-widest uppercase text-neutral-400">Obras maestras diseñadas para dejar una impresión duradera.</p>
          </div>

          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative aspect-square overflow-hidden bg-neutral-900">
              <Image src="/curated_1.png" alt="Midnight Bloom" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="group relative aspect-square overflow-hidden bg-neutral-900">
              <Image src="/curated_2.png" alt="Vetiver Root" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="group relative aspect-square overflow-hidden bg-neutral-900">
              <Image src="/curated_3.png" alt="Coastal Rain" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>

          <div className="mt-16">
            <Link
              href="/catalog"
              className="inline-flex items-center text-xs uppercase tracking-[0.2em] font-semibold text-primary border border-primary px-10 py-4 hover:bg-primary hover:text-neutral-950 transition-colors rounded-full"
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
