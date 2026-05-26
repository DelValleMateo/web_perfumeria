import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Clock, Heart, Star, Award } from "lucide-react";

function IconInstagram({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Nosotros | Perfumería Alexis — Un Clásico de Gualeguaychú",
  description:
    "Conocé la historia de Perfumería Alexis, un clásico de Gualeguaychú. Años de trayectoria, trato cálido y las mejores fragancias al mejor precio.",
};

const stats = [
  { value: "30+", label: "Años de Trayectoria" },
  { value: "1000+", label: "Fragancias Disponibles" },
  { value: "∞", label: "Clientes Felices" },
  { value: "1", label: "Destino de Confianza" },
];

const values = [
  {
    icon: Star,
    title: "Calidad Garantizada",
    description:
      "Seleccionamos cuidadosamente cada fragancia, desde las primeras marcas internacionales hasta las mejores alternativas, asegurando siempre la más alta calidad.",
  },
  {
    icon: Heart,
    title: "Trato Personalizado",
    description:
      "Cada cliente merece atención única. Nuestro equipo te guía para encontrar la fragancia que mejor exprese tu personalidad y estilo.",
  },
  {
    icon: Award,
    title: "Arraigo Local",
    description:
      "Somos parte de la historia de Gualeguaychú. Un negocio de siempre, con décadas de confianza y presencia en la comunidad.",
  },
];

const schedule = [
  { day: "Lunes a Viernes", hours: "08:30 – 12:30 · 16:30 – 20:30" },
  { day: "Sábados", hours: "09:00 – 13:00 · 17:00 – 21:00" },
  { day: "Domingos", hours: "Cerrado" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar isDarkHeader={true} />
      <main className="flex-1">

        {/* ── Hero ── */}
        <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #1C1010 0%, #3D2828 40%, #9B2335 100%)",
            }}
          />
          {/* decorative orbs */}
          <div
            className="absolute top-[-80px] right-[-80px] w-[420px] h-[420px] rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, #9B2335 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-[-120px] left-[-60px] w-[340px] h-[340px] rounded-full opacity-15"
            style={{
              background:
                "radial-gradient(circle, #C4486A 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
            <p className="font-manrope text-[10px] tracking-[0.45em] uppercase text-primary-light mb-5">
              Nuestra Historia
            </p>
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Un Clásico de <span className="italic">Gualeguaychú</span>
            </h1>
            <p className="font-manrope text-base md:text-lg text-white/70 leading-relaxed max-w-xl mx-auto">
              Años de trayectoria, trato cálido y la fragancia perfecta para cada persona.
            </p>
          </div>
        </section>

        {/* ── Stats bar ── */}
        <section className="bg-neutral-950 border-b border-neutral-800">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-800">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="py-10 px-6 text-center group"
                >
                  <div className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="font-manrope text-[10px] tracking-widest uppercase text-neutral-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Historia ── */}
        <section className="py-28 md:py-36 bg-neutral-950 text-neutral-100">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

              {/* Text */}
              <div className="space-y-8">
                <div>
                  <p className="font-manrope text-[10px] tracking-[0.45em] uppercase text-primary mb-4">
                    Quiénes Somos
                  </p>
                  <h2 className="font-playfair text-4xl md:text-5xl font-bold leading-tight">
                    Perfumería Alexis,<br />
                    <span className="text-primary">en el corazón</span> de la ciudad
                  </h2>
                </div>

                <div className="space-y-5 font-manrope text-base leading-relaxed text-neutral-300">
                  <p>
                    Ubicada en el corazón de Gualeguaychú, Perfumería Alexis no es solo un
                    local — es un clásico. Durante años nos hemos consolidado como uno de
                    los comercios de mayor trayectoria en la zona, acompañando a nuestros
                    clientes con un trato cálido, cercano y personalizado.
                  </p>
                  <p>
                    Creemos que hay una fragancia y un estilo para cada persona. Por eso nos
                    destacamos por ofrecer un catálogo amplio, versátil y accesible: en
                    nuestras estanterías conviven las primeras marcas internacionales con
                    excelentes alternativas, asegurando que todos encuentren exactamente lo
                    que buscan al mejor precio.
                  </p>
                  <p>
                    Estamos orgullosos de ser un punto de encuentro para nuestra comunidad.
                    Con años de historia, somos ese &ldquo;negocio de siempre&rdquo; al que
                    sabés que podés volver: un lugar de confianza donde siempre encontrás lo
                    que buscás, con la calidez de siempre.
                  </p>
                </div>

                {/* Divider accent */}
                <div className="flex items-center space-x-4 pt-4">
                  <div className="h-px flex-1 bg-neutral-800" />
                  <span className="font-playfair italic text-primary text-sm">Desde siempre, para siempre</span>
                  <div className="h-px flex-1 bg-neutral-800" />
                </div>
              </div>


              {/* Foto del local — reemplazar src="/local_placeholder.png" con la foto real */}
              <div className="relative">
                <div
                  className="rounded-3xl overflow-hidden"
                  style={{
                    boxShadow: "0 40px 80px rgba(155,35,53,0.2)",
                    aspectRatio: "4/3",
                    position: "relative",
                  }}
                >
                  <Image
                    src="/local_placeholder.png"
                    alt="Interior de Perfumería Alexis — 25 de Mayo 930, Gualeguaychú"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* overlay sutil */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(28,16,16,0.7) 0%, transparent 50%)",
                    }}
                  />
                  {/* caption */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="font-playfair italic text-white/90 text-lg">
                      &ldquo;El negocio de siempre&rdquo;
                    </p>
                    <p className="font-manrope text-[10px] tracking-widest uppercase mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      25 de Mayo 930 · Gualeguaychú
                    </p>
                  </div>
                </div>

                {/* decorative rings */}
                <div
                  className="absolute -top-6 -right-6 w-28 h-28 rounded-full border-2 border-primary/20 opacity-60"
                  style={{ zIndex: -1 }}
                />
                <div
                  className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full border border-primary/10 opacity-40"
                  style={{ zIndex: -1 }}
                />
              </div>

            </div>
          </div>
        </section>

        {/* ── Lo que nos define ── */}
        <section className="py-28 md:py-36 bg-neutral-900 text-neutral-100">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-20 space-y-4">
              <p className="font-manrope text-[10px] tracking-[0.45em] uppercase text-primary">
                Lo Que Nos Define
              </p>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold">
                Nuestros Valores
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((val) => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.title}
                    className="group relative rounded-2xl p-10 border border-white/10 hover:border-primary/50 transition-all duration-500"
                    style={{
                      background:
                        "linear-gradient(145deg, rgba(61,40,40,0.85) 0%, rgba(28,16,16,0.95) 100%)",
                    }}
                  >
                    {/* glow on hover */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: "radial-gradient(circle at top left, rgba(155,35,53,0.12) 0%, transparent 60%)",
                      }}
                    />

                    <div className="relative z-10 space-y-6">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon size={24} className="text-primary" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-playfair text-2xl font-bold" style={{ color: '#ffffff' }}>{val.title}</h3>
                      <p className="font-manrope text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                        {val.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Contacto + Mapa ── */}
        <section className="py-28 md:py-36 bg-neutral-950 text-neutral-100">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-20 space-y-4">
              <p className="font-manrope text-[10px] tracking-[0.45em] uppercase text-primary">
                Visitanos
              </p>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold">
                Dónde Encontrarnos
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-stretch">

              {/* Contact Card — 2 cols */}
              <div
                className="lg:col-span-2 rounded-3xl p-10 space-y-10 border border-neutral-800"
                style={{
                  background: "linear-gradient(145deg, #3D2828 0%, #1C1010 100%)",
                }}
              >
                {/* Address */}
                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin size={20} className="text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-manrope text-[10px] tracking-widest uppercase mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                      Dirección
                    </p>
                    <p className="font-playfair text-lg font-semibold" style={{ color: '#ffffff' }}>
                      25 de Mayo 930
                    </p>
                    <p className="font-manrope text-sm mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>
                      E3269 Gualeguaychú, Entre Ríos
                    </p>
                  </div>
                </div>

                <div className="h-px" style={{ background: 'rgba(255,255,255,0.1)' }} />

                {/* Phone */}
                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone size={20} className="text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-manrope text-[10px] tracking-widest uppercase mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                      Teléfono
                    </p>
                    <a
                      href="tel:+5434464262 30"
                      className="font-playfair text-lg font-semibold hover:text-primary transition-colors"
                      style={{ color: '#ffffff' }}
                    >
                      +54 3446 42-6230
                    </a>
                  </div>
                </div>

                <div className="h-px" style={{ background: 'rgba(255,255,255,0.1)' }} />

                {/* Hours */}
                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock size={20} className="text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <p className="font-manrope text-[10px] tracking-widest uppercase mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
                      Horarios de Atención
                    </p>
                    <div className="space-y-3">
                      {schedule.map((s) => (
                        <div key={s.day} className="flex justify-between items-baseline gap-4">
                          <span className="font-manrope text-sm whitespace-nowrap" style={{ color: 'rgba(255,255,255,0.85)' }}>
                            {s.day}
                          </span>
                          <span
                            className="font-manrope text-xs text-right font-semibold"
                            style={{ color: s.hours === 'Cerrado' ? 'rgba(255,255,255,0.3)' : '#9B2335' }}
                          >
                            {s.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="h-px" style={{ background: 'rgba(255,255,255,0.1)' }} />

                {/* Social */}
                <div>
                  <p className="font-manrope text-[10px] tracking-widest uppercase mb-5" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    Redes Sociales
                  </p>
                  <div className="flex items-center space-x-4">
                    <a
                      href="https://www.instagram.com/perfumeriaalexis"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center space-x-3 px-5 py-3 rounded-xl hover:bg-primary/10 transition-all duration-300"
                      style={{ border: '1px solid rgba(255,255,255,0.15)' }}
                    >
                      <span className="text-primary"><IconInstagram size={18} /></span>
                      <span className="font-manrope text-xs tracking-wider group-hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.75)' }}>
                        @perfumeriaalexis
                      </span>
                    </a>
                    <a
                      href="https://www.facebook.com/PerfumeriaAlexis"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-11 h-11 rounded-xl hover:bg-primary/10 transition-all duration-300 flex items-center justify-center text-primary"
                      style={{ border: '1px solid rgba(255,255,255,0.15)' }}
                    >
                      <IconFacebook size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Map — 3 cols */}
              <div className="lg:col-span-3 rounded-3xl overflow-hidden border border-neutral-800 min-h-[500px] relative">
                <iframe
                  title="Ubicación Perfumería Alexis — 25 de Mayo 930, Gualeguaychú"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3337.2!2d-58.5249!3d-33.0056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5d8b9e6d4a0c3%3A0x8b4a2c6b3e7f1a2d!2s25%20de%20Mayo%20930%2C%20E3269%20Gualeguaych%C3%BA%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses!2sar!4v1716730000000!5m2!1ses!2sar"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    minHeight: "500px",
                    filter: "grayscale(30%) contrast(1.1) brightness(0.85)",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {/* address overlay badge */}
                <div
                  className="absolute bottom-5 left-5 right-5 md:right-auto flex items-center space-x-3 px-5 py-4 rounded-2xl"
                  style={{
                    background: "rgba(28,16,16,0.92)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(155,35,53,0.3)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                  }}
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-manrope text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      Estamos en
                    </p>
                    <p className="font-playfair text-sm font-semibold" style={{ color: '#ffffff' }}>
                      25 de Mayo 930, Gualeguaychú
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
