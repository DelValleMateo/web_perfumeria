import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CatalogClient from "./CatalogClient";
import { getFragrances } from "@/lib/fragranceApi";

import Image from "next/image";

export const metadata = {
  title: "Catálogo | Perfumería Alexis",
  description: "Descubre nuestra colección de fragancias exclusivas.",
};

export default async function CatalogPage() {
  const products = await getFragrances();

  return (
    <>
      <Navbar isDarkHeader={true} />
      <main className="flex-1 bg-neutral-950 min-h-screen">
        {/* Hero Banner */}
        <section className="relative h-[40vh] md:h-[50vh] w-full flex flex-col items-center justify-center">
          <Image
            src="/nuestra_coleccion_catalogo2.png"
            fill
            className="object-cover object-center"
            alt="Nuestra Colección"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 text-center px-4 pt-16">
            <h1 className="font-playfair text-4xl md:text-6xl text-white font-bold drop-shadow-lg">Nuestra Colección</h1>
            <p className="font-manrope text-white/90 text-sm mt-4 max-w-2xl drop-shadow-md mx-auto">
              Descubre fragancias excepcionales diseñadas para dejar una impresión duradera.
            </p>
          </div>
        </section>

        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-neutral-500 font-manrope text-xs tracking-widest uppercase animate-pulse">Cargando fragancias…</div>
          </div>
        }>
          <div className="pt-12 pb-24">
            <CatalogClient products={products} />
          </div>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
