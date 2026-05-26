import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 py-16 font-manrope text-sm border-t border-neutral-100/40 mt-auto">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand & Copy */}
        <div className="flex flex-col space-y-6">
          <Link href="/" className="inline-flex items-center space-x-3 mb-6">
            <div className="relative w-12 h-12 overflow-hidden rounded-full border border-neutral-100/30">
              <img src="/logo_perfumeria.png" alt="Perfumería Alexis Logo" className="object-cover w-full h-full" />
            </div>
            <div className="flex flex-col text-neutral-100">
              <span className="font-playfair font-semibold text-2xl tracking-widest leading-none">PERFUMERÍA</span>
              <span className="font-manrope text-[0.6rem] tracking-[0.3em] uppercase opacity-70">Alexis</span>
            </div>
          </Link>
          <p className="text-xs leading-relaxed max-w-xs text-neutral-400">
            Elevando los sentidos a través de experiencias olfativas magistralmente elaboradas.
          </p>
          <div className="pt-8 text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} PERFUMERÍA ALEXIS. TODOS LOS DERECHOS RESERVADOS.
          </div>
        </div>

        {/* Links 1 */}
        <div className="flex flex-col space-y-4 pt-2">
          <Link href="/" className="hover:text-primary transition-colors text-xs uppercase tracking-wider font-semibold">
            Inicio
          </Link>
          <Link href="/catalog" className="hover:text-primary transition-colors text-xs uppercase tracking-wider font-semibold">
            Catálogo
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors text-xs uppercase tracking-wider font-semibold">
            Nosotros
          </Link>
        </div>

        {/* Links 2 — Contact */}
        <div className="flex flex-col space-y-4 pt-2">
          <p className="text-neutral-100 text-xs uppercase tracking-widest font-semibold mb-2">Contacto</p>
          <a href="tel:+5434464262 30" className="hover:text-primary transition-colors text-xs">
            +54 3446 42-6230
          </a>
          <p className="text-xs leading-relaxed">
            25 de Mayo 930,<br />Gualeguaychú, Entre Ríos
          </p>
          <div className="flex items-center space-x-3 pt-1">
            <a
              href="https://www.instagram.com/perfumeriaalexis"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors text-xs uppercase tracking-wider font-semibold"
            >
              Instagram
            </a>
            <span className="text-neutral-700">·</span>
            <a
              href="https://www.facebook.com/PerfumeriaAlexis"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors text-xs uppercase tracking-wider font-semibold"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col space-y-6 pt-2">
          <h4 className="text-neutral-100 text-xs uppercase tracking-widest font-semibold">Únete al Atelier</h4>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Correo Electrónico"
              className="bg-transparent border-b border-neutral-800 pb-2 text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-primary transition-colors rounded-none"
              required
            />
            <button
              type="submit"
              className="text-left text-xs uppercase tracking-widest font-semibold text-primary hover:text-neutral-100 transition-colors"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
