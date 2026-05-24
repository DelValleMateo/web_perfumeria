import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AddToCartButton from "@/components/AddToCartButton";
import Image from "next/image";
import { Package, Truck } from "lucide-react";
import ProductCard from "@/components/ProductCard";

// Mock database
const products = [
  {
    id: "midnight-bloom",
    title: "Midnight Bloom",
    description: "Una mezcla profundamente misteriosa y embriagadora. El rico y ahumado oud se envuelve alrededor de un corazón de rosa de terciopelo, descansando sobre una base cálida y persistente de ámbar y vainilla oscura.",
    price: 185,
    imageUrl: "/curated_1.png",
    category: "FLORAL",
    notes: {
      top: ["Bergamota", "Pimienta Negra", "Azafrán"],
      heart: ["Rosa de Terciopelo", "Jazmín", "Incienso"],
      base: ["Oud", "Vainilla Oscura", "Ámbar"]
    }
  },
  {
    id: "vetiver-root",
    title: "Vetiver Root",
    description: "Raíz de Vetiver Haitiano, Madera de Cedro, Humo.",
    price: 210,
    imageUrl: "/curated_2.png",
    category: "AMADERADO",
    notes: {
      top: ["Limón", "Hojas Verdes"],
      heart: ["Cedro", "Pimienta"],
      base: ["Vetiver", "Humo", "Almizcle"]
    }
  },
  {
    id: "coastal-rain",
    title: "Coastal Rain",
    description: "Bergamota, Sal Marina, Musgo Blanco.",
    price: 175,
    imageUrl: "/curated_3.png",
    category: "FRESCO",
    notes: {
      top: ["Bergamota", "Sal Marina"],
      heart: ["Lirio de Agua", "Ozono"],
      base: ["Musgo Blanco", "Madera Clara"]
    }
  }
];

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id) || products[0];
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 bg-neutral-950 min-h-screen">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image */}
            <div className="relative aspect-[4/5] w-full bg-[#151515] rounded-sm overflow-hidden">
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
                <h1 className="font-playfair text-4xl md:text-5xl text-white font-bold mt-2">
                  {product.title}
                </h1>
              </div>

              <p className="font-manrope text-sm text-neutral-400 leading-relaxed max-w-lg">
                {product.description}
              </p>

              <div className="flex items-end gap-3 pt-2">
                <span className="font-playfair italic text-4xl text-primary font-light">
                  ${product.price}
                </span>
                <span className="font-manrope text-xs text-neutral-500 mb-1">
                  / 100ml
                </span>
              </div>

              {/* Notes Grid */}
              <div className="grid grid-cols-3 gap-4 pt-6 mt-6 border-t border-white/5">
                <div>
                  <h4 className="text-[10px] text-primary uppercase tracking-widest font-bold font-manrope mb-3">Notas de Salida</h4>
                  <ul className="space-y-1">
                    {product.notes.top.map(note => (
                      <li key={note} className="text-xs text-neutral-300 font-manrope">{note}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] text-primary uppercase tracking-widest font-bold font-manrope mb-3">Notas de Corazón</h4>
                  <ul className="space-y-1">
                    {product.notes.heart.map(note => (
                      <li key={note} className="text-xs text-neutral-300 font-manrope">{note}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] text-primary uppercase tracking-widest font-bold font-manrope mb-3">Notas de Fondo</h4>
                  <ul className="space-y-1">
                    {product.notes.base.map(note => (
                      <li key={note} className="text-xs text-neutral-300 font-manrope">{note}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <AddToCartButton product={{ id: product.id, title: product.title, price: product.price, imageUrl: product.imageUrl }} />

              <div className="flex items-center gap-6 pt-6 mt-6 border-t border-white/5 text-[10px] uppercase font-manrope font-bold text-neutral-400 tracking-wider">
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
          <div className="mt-32 border-t border-white/5 pt-24">
            <div className="flex justify-between items-end mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl text-white font-bold">
                Explorar la Colección
              </h2>
              <a href="/catalog" className="text-[10px] uppercase font-manrope tracking-widest text-primary font-bold hover:text-white transition-colors">
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
