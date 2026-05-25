import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AddToCartButton from "@/components/AddToCartButton";
import Image from "next/image";
import { Package, Truck } from "lucide-react";
import ProductCard from "@/components/ProductCard";

import { getFragranceById, getFragrances } from "@/lib/fragranceApi";

export async function generateStaticParams() {
  const products = await getFragrances();
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getFragranceById(id);
  const allProducts = await getFragrances();
  const relatedProducts = allProducts.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 bg-neutral-950 min-h-screen">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image */}
            <div className="relative aspect-[4/5] w-full bg-neutral-900 rounded-2xl overflow-hidden">
              <Image 
                src={product.imageUrl} 
                alt={product.title} 
                fill 
                className="object-cover" 
                priority 
              />
            </div>

            {/* Details */}
            <div className="flex flex-col space-y-6">
              <div>
                <span className="text-primary text-[10px] tracking-widest font-bold uppercase font-manrope">
                  Signature Collection
                </span>
                <h1 className="font-playfair text-4xl md:text-5xl text-neutral-100 font-bold mt-2">
                  {product.title}
                </h1>
              </div>

              <p className="font-manrope text-sm text-neutral-600 leading-relaxed max-w-lg">
                {product.description}
              </p>

              <div className="flex items-end gap-3 pt-2">
                <span className="font-manrope text-3xl text-primary font-bold tracking-wide">
                  ${product.price}
                </span>
                <span className="font-manrope text-xs text-neutral-500 mb-1">
                  / 100ml
                </span>
              </div>

              {/* Notes Grid */}
              <div className="grid grid-cols-3 gap-4 pt-6 mt-6 border-t border-neutral-100/20">
                <div>
                  <h4 className="text-[10px] text-primary uppercase tracking-widest font-bold font-manrope mb-3">Notas de Salida</h4>
                  <ul className="space-y-1">
                    {product.notes.top.map(note => (
                      <li key={note} className="text-xs text-neutral-500 font-manrope">{note}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] text-primary uppercase tracking-widest font-bold font-manrope mb-3">Notas de Corazón</h4>
                  <ul className="space-y-1">
                    {product.notes.heart.map(note => (
                      <li key={note} className="text-xs text-neutral-500 font-manrope">{note}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] text-primary uppercase tracking-widest font-bold font-manrope mb-3">Notas de Fondo</h4>
                  <ul className="space-y-1">
                    {product.notes.base.map(note => (
                      <li key={note} className="text-xs text-neutral-500 font-manrope">{note}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <AddToCartButton product={{ id: product.id, title: product.title, price: product.price, imageUrl: product.imageUrl }} />

              <div className="flex items-center gap-6 pt-6 mt-6 border-t border-neutral-100/20 text-[10px] uppercase font-manrope font-bold text-neutral-500 tracking-wider">
                <div className="flex items-center gap-2">
                  <Truck size={14} className="text-primary" />
                  <span>Envío Gratis</span>
                </div>
                <div className="flex items-center gap-2">
                  <Package size={14} className="text-primary" />
                  <span>Empaque Exclusivo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-32 border-t border-neutral-100/20 pt-24">
            <div className="flex justify-between items-end mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl text-neutral-100 font-bold">
                Explorar la Colección
              </h2>
              <a href="/catalog" className="text-[10px] uppercase font-manrope tracking-widest text-primary font-bold hover:text-neutral-100 transition-colors">
                VER TODO
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
