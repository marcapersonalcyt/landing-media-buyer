import React, { useEffect, useRef, useState } from 'react';

// Importación directa de los logos de clientes desde la carpeta src
import terrafermaLogo from './terraferma.png';
import glmotorsLogo from './glmotors.png';
import zampieroLogo from './zampiero.png';
import mazzocconeLogo from './mazzoccone.png';
import macartexLogo from './macartex.png';
import guitarraconmaruLogo from './guitarraconmaru.png';
import blondLogo from './blond.png';
import almondoLogo from './almondo.png';
import clinicadelalmaLogo from './clinicadelalma.png';
import serebreveLogo from './serébreve.png';

// Importación de imágenes de resultados (testimonios) y foto personal
import resultado3Img from './resultado3.png';
import resultado2Img from './resultado2.png';
import yoImg from './yo.png';

const svgToDataUri = (svgString) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(svgString.trim())}`;

// Fila 1: Primeros 5 logos de clientes (con el código hexadecimal exacto del fondo de cada imagen)
const BASE_LOGOS_ROW_1 = [
  {
    id: 'terraferma',
    name: 'Terra Ferma Inmobiliaria',
    bgColor: '#000000',
    bgClass: 'bg-[#000000]',
    logoUrl: terrafermaLogo,
  },
  {
    id: 'glmotors',
    name: 'GL Motors',
    bgColor: '#FEFEFE',
    bgClass: 'bg-[#FEFEFE]',
    logoUrl: glmotorsLogo,
  },
  {
    id: 'zampiero',
    name: 'Zampiero Stone',
    bgColor: '#1D1815',
    bgClass: 'bg-[#1D1815]',
    logoUrl: zampieroLogo,
  },
  {
    id: 'mazzoccone',
    name: 'Mazzoccone Estudio Jurídico',
    bgColor: '#FFFFFF',
    bgClass: 'bg-[#FFFFFF]',
    logoUrl: mazzocconeLogo,
  },
  {
    id: 'macartex',
    name: 'Macartex',
    bgColor: '#332CAE',
    bgClass: 'bg-[#332CAE]',
    logoUrl: macartexLogo,
  },
];

// Fila 2: Siguientes 5 logos de clientes (con el código hexadecimal exacto del fondo de cada imagen)
const BASE_LOGOS_ROW_2 = [
  {
    id: 'guitarraconmaru',
    name: 'Guitarra con Maru',
    bgColor: '#22293C',
    bgClass: 'bg-[#22293C]',
    logoUrl: guitarraconmaruLogo,
  },
  {
    id: 'blond',
    name: 'Blond Professional Studio',
    bgColor: '#FEFEFE',
    bgClass: 'bg-[#FEFEFE]',
    logoUrl: blondLogo,
  },
  {
    id: 'almondo',
    name: 'Almondo',
    bgColor: '#FFFFFF',
    bgClass: 'bg-[#FFFFFF]',
    logoUrl: almondoLogo,
  },
  {
    id: 'clinicadelalma',
    name: 'Clínica del Alma - Spa Urbano',
    bgColor: '#FFFFFF',
    bgClass: 'bg-[#FFFFFF]',
    logoUrl: clinicadelalmaLogo,
  },
  {
    id: 'serebreve',
    name: 'Seré Breve - Cafetería de Especialidad',
    bgColor: '#8A192B',
    bgClass: 'bg-[#8A192B]',
    logoUrl: serebreveLogo,
  },
];

// Duplicamos cada bloque base para cubrir pantallas ultra-anchas sin espacios vacíos
const LOGOS_ROW_1 = [...BASE_LOGOS_ROW_1, ...BASE_LOGOS_ROW_1];
const LOGOS_ROW_2 = [...BASE_LOGOS_ROW_2, ...BASE_LOGOS_ROW_2];

// Componente reutilizable de animación Scroll Reveal (Fade-in + Slide-up escalonado con IntersectionObserver)
function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal-hidden ${isVisible ? 'reveal-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

export default function App() {
  useEffect(() => {
    const scriptSrc = 'https://assets.calendly.com/assets/external/widget.js';
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 selection:bg-[#00E676] selection:text-[#090D16]">
      <main>
        {/* ==========================================
            1. HERO SECTION (Diseño de 2 columnas responsive)
           ========================================== */}
        <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
          {/* Efectos de luz de fondo */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 left-1/4 -z-10 h-[460px] w-[820px] -translate-x-1/2 rounded-full bg-[#00E676]/15 blur-[130px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-20 right-0 -z-10 h-[380px] w-[380px] rounded-full bg-emerald-500/10 blur-[120px]"
          />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Grid de 1 columna apilada en móvil y 2 columnas en desktop */}
            <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-2 lg:gap-12">
              {/* COLUMNA IZQUIERDA: Textos y CTA alineados a la izquierda */}
              <div className="flex flex-col justify-center text-left">
                <Reveal delay={0}>
                  <h1 className="text-left text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.35rem] lg:leading-[1.12]">
                    Ayudamos a implementar un sistema de ventas y{' '}
                    <span className="bg-gradient-to-r from-[#00E676] via-emerald-300 to-[#00E676] bg-clip-text text-transparent">
                      escalar tu facturación
                    </span>{' '}
                    sin subir contenido todos los días
                  </h1>
                </Reveal>

                <Reveal delay={120}>
                  <p className="mt-6 max-w-xl text-left text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl">
                    Creamos las condiciones para que tu negocio atraiga más clientes, genere mejores oportunidades y aumente su facturación.
                  </p>
                </Reveal>

                <Reveal delay={240}>
                  <div className="mt-9 flex flex-col items-start justify-start gap-4 sm:flex-row sm:items-center">
                    <a
                      href="#agendar"
                      className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-[#00E676] px-8 py-4 text-base sm:text-lg font-extrabold text-[#090D16] shadow-[0_0_35px_rgba(0,230,118,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#19ff8c] hover:shadow-[0_0_50px_rgba(0,230,118,0.65)]"
                    >
                      <span>Agendar llamada</span>
                      <svg
                        className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>

                  <p className="mt-4 text-left text-xs sm:text-sm text-slate-400">
                    ⚡ Auditoría inicial de cuenta sin costo · Enfoque 100% en retorno sobre la inversión
                  </p>
                </Reveal>
              </div>

              {/* COLUMNA DERECHA: Foto en recuadro estilo 'Sobre mí' (tamaño reducido) + Estadísticas debajo */}
              <div className="flex flex-col items-center justify-center">
                {/* Recuadro de la foto con el mismo estilo visual que 'Sobre mí' y tamaño más compacto */}
                <Reveal delay={150} className="w-full">
                  <div className="relative mx-auto w-full max-w-[240px] sm:max-w-[270px]">
                    <div
                      aria-hidden="true"
                      className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#00E676]/30 via-emerald-500/10 to-transparent blur-xl"
                    />

                    <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#111827] p-3 shadow-2xl shadow-black/80">
                      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-lg">
                        <img
                          src={yoImg}
                          alt="Foto personal"
                          className="h-full w-full rounded-2xl object-cover object-center shadow-xl"
                        />
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Bloque de Estadísticas / Métricas ubicado directamente debajo de la foto */}
                <div className="mt-6 grid w-full max-w-md grid-cols-2 gap-3 sm:gap-3.5">
                  {[
                    { value: '+5M', label: 'Invertidos en Meta' },
                    { value: '+20', label: 'marcas de todo el mundo' },
                    { value: '+10M', label: 'Vistas generadas para nuestros clientes' },
                    { value: 'X10', label: 'en facturación generado' },
                  ].map((stat, idx) => (
                    <Reveal key={idx} delay={250 + idx * 90} className="h-full">
                      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#111827]/80 px-3.5 py-3.5 sm:px-4 sm:py-4 text-center backdrop-blur-sm transition-colors hover:border-[#00E676]/40">
                        <div className="w-full text-center text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                          {stat.value}
                        </div>
                        <div className="mt-1 w-full text-center text-[11px] sm:text-xs font-medium leading-snug text-slate-400">
                          {stat.label}
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            2. SECCIÓN DE LOGOS (SOCIAL PROOF)
            - Título exacto: "Marcas que confían en nosotros."
            - Infinite marquee slider de 2 filas suaves con los 10 logos reales
            - Contenedores rectangulares uniformes con bordes redondeados
            - CSS estricto: object-fit: contain, padding interno y alturas fijas
           ========================================== */}
        <section
          id="clientes"
          className="relative border-y border-white/10 bg-[#0B101B] py-16 sm:py-24 overflow-hidden"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-12">
            <Reveal delay={0}>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
                Marcas que <span className="text-[#00E676]">confían en nosotros.</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-slate-400">
                Empresas que van desde centros de belleza y estética hasta Real State que escalaron mediante nuestro método "Evoluzion"
              </p>
            </Reveal>
          </div>

          {/* Contenedor del Infinite Marquee con dos filas */}
          <Reveal delay={220}>
            <div className="marquee-wrapper relative mx-auto max-w-[100vw] space-y-5 sm:space-y-6">
              {/* Gradientes laterales para suavizar la entrada/salida */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-32 bg-gradient-to-r from-[#0B101B] to-transparent"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-32 bg-gradient-to-l from-[#0B101B] to-transparent"
              />

              {/* FILA 1: Desplazamiento continuo hacia la izquierda */}
              <div className="flex overflow-hidden">
                <div className="animate-marquee-left flex items-center gap-4 sm:gap-6 pr-4 sm:pr-6">
                  {[...LOGOS_ROW_1, ...LOGOS_ROW_1].map((brand, index) => (
                    <div
                      key={`row1-${brand.id}-${index}`}
                      className={`logo-card transition-transform duration-300 hover:scale-[1.03] ${brand.bgClass}`}
                      style={{ backgroundColor: brand.bgColor }}
                      title={brand.name}
                    >
                      <img
                        src={brand.logoUrl}
                        alt={`Logo de ${brand.name}`}
                        loading="lazy"
                        className="h-full w-full object-contain object-center"
                        style={{
                          objectFit: 'contain',
                          objectPosition: 'center',
                          maxHeight: '100%',
                          maxWidth: '100%',
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* FILA 2: Desplazamiento continuo hacia la derecha */}
              <div className="flex overflow-hidden">
                <div className="animate-marquee-right flex items-center gap-4 sm:gap-6 pr-4 sm:pr-6">
                  {[...LOGOS_ROW_2, ...LOGOS_ROW_2].map((brand, index) => (
                    <div
                      key={`row2-${brand.id}-${index}`}
                      className={`logo-card transition-transform duration-300 hover:scale-[1.03] ${brand.bgClass}`}
                      style={{ backgroundColor: brand.bgColor }}
                      title={brand.name}
                    >
                      <img
                        src={brand.logoUrl}
                        alt={`Logo de ${brand.name}`}
                        loading="lazy"
                        className="h-full w-full object-contain object-center"
                        style={{
                          objectFit: 'contain',
                          objectPosition: 'center',
                          maxHeight: '100%',
                          maxWidth: '100%',
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ==========================================
            3. SECCIÓN DE SERVICIOS (¿Cómo puedo ayudarte?)
           ========================================== */}
        <section id="metodo" className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal delay={0}>
                <span className="inline-block rounded-full bg-[#00E676]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#00E676]">
                  Nuestros Servicios
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
                  ¿Cómo puedo <span className="text-[#00E676]">ayudarte?</span>
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                  Desde soluciones rápidas y efectivas hasta acompañamiento estratégico integral, estos servicios están pensados y diseñados para que logres mejorar los resultados de tu negocio.
                </p>
              </Reveal>
            </div>

            {/* Grid de 2 tarjetas con la misma altura exacta (items-stretch + h-full flex-col) */}
            <div className="mt-14 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
              {/* Tarjeta 1 (Izquierda): Lanzamiento y Estructuración */}
              <Reveal delay={150} className="h-full">
                <div className="relative flex h-full flex-col justify-between rounded-3xl border border-[#00E676]/40 bg-gradient-to-b from-[#00E676]/10 to-[#111827] p-7 sm:p-10 shadow-[0_0_45px_rgba(0,230,118,0.08)] transition-all hover:border-[#00E676]/70">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-xl bg-[#00E676]/20 px-3.5 py-1.5 text-sm font-bold text-[#00E676]">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Lanzamiento y Estructuración
                    </div>

                    <h3 className="mt-5 text-2xl sm:text-3xl font-bold text-white">
                      Para negocios que comienzan desde cero
                    </h3>

                    <p className="mt-4 text-base text-slate-300 leading-relaxed">
                      Pensado para negocios que aún no tienen presencia sólida en redes ni hacen publicidad. Te ayudamos en absolutamente todo, armando tu ecosistema digital desde los cimientos para empezar a captar clientes con el pie derecho.
                    </p>

                    <ul className="mt-7 space-y-4 border-t border-white/10 pt-6">
                      {[
                        {
                          title: 'Construcción de tu ecosistema digital desde cero',
                          desc: 'Configuración profesional de activos publicitarios, perfiles, píxeles de seguimiento y estructura de conversión.',
                        },
                        {
                          title: 'Estrategia de lanzamiento lista para captar clientes',
                          desc: 'Definición de oferta, ángulos de comunicación y primeras campañas enfocadas en atraer demanda calificada.',
                        },
                        {
                          title: 'Guía paso a paso y configuración llave en mano',
                          desc: 'Nos encargamos de toda la parte técnica y estratégica para que comiences con bases sólidas desde el día uno.',
                        },
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3.5">
                          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#00E676] text-[#090D16] font-extrabold text-xs">
                            ✓
                          </span>
                          <div>
                            <h4 className="font-bold text-white">{item.title}</h4>
                            <p className="mt-1 text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4">
                    <a
                      href="#agendar"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#00E676]/50 bg-[#00E676]/10 px-6 py-3.5 text-sm font-bold text-[#00E676] transition-all hover:bg-[#00E676] hover:text-[#090D16]"
                    >
                      <span>Quiero comenzar desde cero</span>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* Tarjeta 2 (Derecha): Acompañamiento Integral */}
              <Reveal delay={280} className="h-full">
                <div className="relative flex h-full flex-col justify-between rounded-3xl border border-[#00E676]/40 bg-gradient-to-b from-[#00E676]/10 to-[#111827] p-7 sm:p-10 shadow-[0_0_45px_rgba(0,230,118,0.08)] transition-all hover:border-[#00E676]/70">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-xl bg-[#00E676]/20 px-3.5 py-1.5 text-sm font-bold text-[#00E676]">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Acompañamiento Integral
                    </div>

                    <h3 className="mt-5 text-2xl sm:text-3xl font-bold text-white">
                      Para negocios que buscan resultados reales
                    </h3>

                    <p className="mt-4 text-base text-slate-300 leading-relaxed">
                      Ideal si ya estás haciendo marketing o trabajaste con agencias y estás cansado de no ver retorno. Hacemos foco en un acompañamiento integral, corrigiendo la estrategia para que comiences a notar cambios en tu facturación desde el primer día.
                    </p>

                    <ul className="mt-7 space-y-4 border-t border-white/10 pt-6">
                      {[
                        {
                          title: 'Auditoría profunda y corrección de fugas de presupuesto',
                          desc: 'Detectamos qué está frenando tus campañas actuales y reestructuramos la cuenta para priorizar el retorno.',
                        },
                        {
                          title: 'Optimización continua orientada a ventas y calidad de leads',
                          desc: 'Alineamos anuncios, embudos y seguimiento para atraer prospectos listos para comprar.',
                        },
                        {
                          title: 'Escalamiento predecible con acompañamiento 1 a 1',
                          desc: 'Toma de decisiones basada en métricas reales para aumentar tu facturación de manera sostenida.',
                        },
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3.5">
                          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#00E676] text-[#090D16] font-extrabold text-xs">
                            ✓
                          </span>
                          <div>
                            <h4 className="font-bold text-white">{item.title}</h4>
                            <p className="mt-1 text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4">
                    <a
                      href="#agendar"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#00E676] px-6 py-3.5 text-sm font-extrabold text-[#090D16] shadow-[0_0_25px_rgba(0,230,118,0.3)] transition-all hover:bg-[#19ff8c]"
                    >
                      <span>Quiero escalar mis resultados</span>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ==========================================
            4. NUEVA SECCIÓN DE TESTIMONIOS
           ========================================== */}
        <section
          id="testimonios"
          className="border-t border-white/10 bg-[#090D16] py-20 sm:py-28"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal delay={0}>
                <span className="inline-block rounded-full bg-[#00E676]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#00E676]">
                  Casos de Éxito
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
                  Testimonios
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                  Marcas que comenzaron de cero con poca inversión y también marcas que escalaron en facturación, sabemos que detrás de cada negocio hay personas y valoramos mucho la comunicación y el buen trato.
                </p>
              </Reveal>
            </div>

            {/* Cuadrícula Multimedia (Videos Verticales 9:16 + Screenshots de Resultados) */}
            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Tarjeta de Video 1 (YouTube Vertical 9:16 Responsivo) */}
              <Reveal delay={100} className="h-full">
                <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-[#111827]/80 p-5 sm:p-6 shadow-xl transition-all hover:border-[#00E676]/40">
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#00E676]/15 px-3 py-1 text-xs font-bold text-[#00E676]">
                        ▶ Video Testimonio
                      </span>
                      <span className="text-xs font-medium text-slate-400">Guitarra con Maru</span>
                    </div>
                    <div className="video-vertical-responsive aspect-[9/16] w-full max-w-[350px] mx-auto overflow-hidden rounded-2xl border border-white/10 bg-[#090D16]">
                      <iframe
                        width="417"
                        height="576"
                        className="h-full w-full"
                        src="https://www.youtube.com/embed/brr1DuXczHQ"
                        title="Guitarra con Maru"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  </div>
                  <p className="mt-4 text-center text-sm font-medium text-slate-300">
                    Testimonio real: Guitarra con Maru
                  </p>
                </div>
              </Reveal>

              {/* Tarjeta de Video 2 (YouTube Vertical 9:16 Responsivo) */}
              <Reveal delay={220} className="h-full">
                <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-[#111827]/80 p-5 sm:p-6 shadow-xl transition-all hover:border-[#00E676]/40">
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#00E676]/15 px-3 py-1 text-xs font-bold text-[#00E676]">
                        ▶ Video Testimonio
                      </span>
                      <span className="text-xs font-medium text-slate-400">Victor (Caminante Rojo)</span>
                    </div>
                    <div className="video-vertical-responsive aspect-[9/16] w-full max-w-[350px] mx-auto overflow-hidden rounded-2xl border border-white/10 bg-[#090D16]">
                      <iframe
                        width="315"
                        height="576"
                        className="h-full w-full"
                        src="https://www.youtube.com/embed/HciQJSHaIj8"
                        title="Victor (Caminante Rojo en Youtube)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  </div>
                  <p className="mt-4 text-center text-sm font-medium text-slate-300">
                    Testimonio real: Victor (Caminante Rojo en YouTube)
                  </p>
                </div>
              </Reveal>

              {/* Tarjeta para Screenshot 1 (resultado3.png) */}
              <Reveal delay={140} className="h-full">
                <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-[#111827]/80 p-5 sm:p-6 shadow-xl transition-all hover:border-[#00E676]/40">
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#00E676]/15 px-3 py-1 text-xs font-bold text-[#00E676]">
                        📸 Resultados y Mensajes
                      </span>
                      <span className="text-xs font-medium text-slate-400">Captura Verificada</span>
                    </div>
                    <div className="flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#090D16] p-2">
                      <img
                        src={resultado3Img}
                        alt="Captura de resultados de cliente 1"
                        loading="lazy"
                        className="mx-auto h-auto max-h-[540px] w-full rounded-xl object-contain"
                      />
                    </div>
                  </div>
                  <p className="mt-4 text-sm font-medium text-slate-300">
                    Feedback directo y métricas de retorno obtenidas durante las primeras semanas de trabajo.
                  </p>
                </div>
              </Reveal>

              {/* Tarjeta para Screenshot 2 (resultado2.png) */}
              <Reveal delay={260} className="h-full">
                <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-[#111827]/80 p-5 sm:p-6 shadow-xl transition-all hover:border-[#00E676]/40">
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#00E676]/15 px-3 py-1 text-xs font-bold text-[#00E676]">
                        📸 Resultados y Mensajes
                      </span>
                      <span className="text-xs font-medium text-slate-400">Captura Verificada</span>
                    </div>
                    <div className="flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#090D16] p-2">
                      <img
                        src={resultado2Img}
                        alt="Captura de resultados de cliente 2"
                        loading="lazy"
                        className="mx-auto h-auto max-h-[540px] w-full rounded-xl object-contain"
                      />
                    </div>
                  </div>
                  <p className="mt-4 text-sm font-medium text-slate-300">
                    Evolución en volumen de ventas y comunicación constante con el equipo comercial.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Botón secundario hacia Behance */}
            <Reveal delay={200}>
              <div className="mt-12 flex justify-center">
                <a
                  href="https://www.behance.net/tomasgutierrezjara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#00E676]/50 bg-transparent px-6 py-3 text-sm font-semibold text-[#00E676] transition-all duration-200 hover:border-[#00E676] hover:bg-[#00E676]/10"
                >
                  <span>Más Resultados</span>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ==========================================
            4. SECCIÓN SOBRE MÍ
           ========================================== */}
        <section
          id="sobre-mi"
          className="border-t border-white/10 bg-[#0B101B] py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              {/* Contenedor Foto de Perfil */}
              <div className="lg:col-span-5">
                <Reveal delay={0}>
                  <div className="relative mx-auto max-w-sm">
                    <div
                      aria-hidden="true"
                      className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#00E676]/30 via-emerald-500/10 to-transparent blur-xl"
                    />

                    <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#111827] p-3 shadow-2xl shadow-black/80">
                      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-lg">
                        <img
                          src={yoImg}
                          alt="Especialista en Performance Marketing y Paid Media"
                          className="h-full w-full rounded-2xl object-cover object-center shadow-xl"
                        />
                      </div>

                      <div className="mt-3 flex items-center justify-between rounded-xl bg-[#090D16]/90 px-4 py-3 border border-white/10">
                        <div>
                          <p className="text-sm font-bold text-white">Performance Media Buyer</p>
                          <p className="text-xs text-slate-400">Meta Ads · Google Ads · Analytics</p>
                        </div>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#00E676]/15 px-3 py-1 text-xs font-bold text-[#00E676]">
                          <span className="h-2 w-2 rounded-full bg-[#00E676]" />
                          Verificado
                        </span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Texto Sobre Mí y Enfoque Técnico (balanceado verticalmente) */}
              <div className="flex flex-col justify-center lg:col-span-7 lg:pl-2">
                <Reveal delay={100}>
                  <div>
                    <span className="inline-block rounded-full bg-[#00E676]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#00E676]">
                      Sobre Mí & Enfoque Técnico
                    </span>
                  </div>
                </Reveal>

                <Reveal delay={180}>
                  <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:leading-tight">
                    Me dedico a impulsar el crecimiento de negocios
                  </h2>
                </Reveal>

                <div className="mt-6 space-y-5">
                  <Reveal delay={260}>
                    <p className="text-base sm:text-lg leading-relaxed text-slate-300">
                      No creo en "fórmulas mágicas" ni en métricas de vanidad como los likes o las impresiones: cada dólar invertido debe tener trazabilidad directa hacia oportunidades comerciales y facturación neta.
                    </p>
                  </Reveal>

                  <Reveal delay={340}>
                    <p className="text-base sm:text-lg leading-relaxed text-slate-400">
                      Combino publicidad digital, análisis de datos y comunicación persuasiva para crear sistemas de adquisición de clientes que generen oportunidades comerciales y acompañen el crecimiento de cada negocio.
                    </p>
                  </Reveal>
                </div>

                <Reveal delay={420}>
                  <div className="mt-9 pt-2">
                    <a
                      href="#agendar"
                      className="inline-flex items-center gap-2.5 text-base font-bold text-[#00E676] transition-all hover:gap-3.5 hover:underline"
                    >
                      <span>Hablemos sobre cómo escalar tus campañas actuales</span>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            5. FOOTER / CIERRE DE CONVERSIÓN (Widget de Calendly)
           ========================================== */}
        <section id="agendar" className="relative py-20 sm:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[#00E676]/10 blur-[130px]"
          />

          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <Reveal delay={100}>
              <div className="rounded-3xl border border-white/15 bg-[#111827]/95 p-6 sm:p-12 shadow-2xl">
                <div className="mx-auto max-w-3xl text-center">
                  <Reveal delay={180}>
                    <span className="inline-block rounded-full bg-[#00E676]/15 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#00E676]">
                      Da el siguiente paso
                    </span>
                  </Reveal>
                  <Reveal delay={260}>
                    <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl leading-snug">
                      Agenda una llamada estratégica de 90 minutos para analizar tu caso y llevarte un plan de acción con pasos claros
                    </h2>
                  </Reveal>
                </div>

                {/* Principio del widget integrado de Calendly */}
                <Reveal delay={340}>
                  <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#111827]">
                    <div
                      className="calendly-inline-widget w-full"
                      data-url="https://calendly.com/tomasgutierrezauditoria/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=111827&text_color=f8fafc&primary_color=00e676"
                      style={{ minWidth: '320px', height: '700px' }}
                    />
                  </div>
                </Reveal>
                {/* Final del widget integrado de Calendly */}
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* PIE DE PÁGINA FINAL */}
      <footer className="border-t border-white/10 bg-[#070A11] py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#00E676] text-[#090D16] font-black text-sm">
              P
            </div>
            <span className="text-sm font-extrabold tracking-tight text-white">
              PERFORMANCE<span className="text-[#00E676]">.LAB</span>
            </span>
          </div>

          <p className="text-xs text-slate-400 text-center">
            © {new Date().getFullYear()} Performance.Lab · Especialista en Paid Media & Performance Marketing. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-5 text-xs font-semibold text-slate-400">
            <a href="#clientes" className="hover:text-[#00E676] transition-colors">
              Clientes
            </a>
            <a href="#metodo" className="hover:text-[#00E676] transition-colors">
              Método
            </a>
            <a href="#sobre-mi" className="hover:text-[#00E676] transition-colors">
              Sobre Mí
            </a>
            <a href="#agendar" className="text-[#00E676] hover:underline">
              Agendar llamada
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
