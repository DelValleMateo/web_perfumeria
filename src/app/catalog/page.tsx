import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CatalogClient from "./CatalogClient";

export const metadata = {
  title: "Catálogo | Perfumería Alexis",
  description: "Descubre nuestra colección de fragancias exclusivas.",
};

export default function CatalogPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 bg-neutral-950 min-h-screen">
        <CatalogClient />
      </main>
      <Footer />
    </>
  );
}
