import { createFileRoute } from "@tanstack/react-router";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Particles } from "@/components/site/Particles";
import { Counter } from "@/components/site/Counter";

import heroImg from "@/assets/hero-storefront.jpg";
import lottoImg from "@/assets/lotto.jpg";
import drinksImg from "@/assets/drinks.jpg";
import snacksImg from "@/assets/snacks.jpg";
import beerImg from "@/assets/beer.jpg";
import atmo1 from "@/assets/atmosphere1.jpg";
import atmo2 from "@/assets/atmosphere2.jpg";
import atmo3 from "@/assets/atmosphere3.jpg";
import whatsapp1 from "@/assets/WhatsApp Image 2026-05-16 at 1.29.11 PM.jpeg";
import whatsapp2 from "@/assets/WhatsApp Image 2026-05-16 at 1.29.11 PM (1).jpeg";
import whatsapp3 from "@/assets/WhatsApp Image 2026-05-16 at 1.29.11 PM (2).jpeg";
import whatsapp4 from "@/assets/WhatsApp Image 2026-05-16 at 1.29.11 PM (3).jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cheezy Variety — Your Neighborhood Convenience Hub in Cambridge, ON" },
      {
        name: "description",
        content:
          "Lotto, cold drinks, snacks, beer, tobacco and everyday essentials — open late, right around the corner in Cambridge, Ontario.",
      },
      { property: "og:title", content: "Cheezy Variety — Cambridge, ON" },
      {
        property: "og:description",
        content: "Quick stops. Better experience. Your neighborhood convenience hub.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

/* ---------------- HERO ---------------- */

const heroSlides = [
  { img: whatsapp1, label: "Store" },
  { img: whatsapp2, label: "Inside" },
  { img: whatsapp3, label: "Entrance" },
  { img: whatsapp4, label: "Shop" },
];

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % heroSlides.length), 4200);
    return () => clearInterval(t);
  }, []);

  return (
    <section ref={ref} id="top" className="relative h-screen min-h-[640px] w-full overflow-hidden sm:min-h-[760px]">
      {/* Layered background */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={active}
            src={heroSlides[active].img}
            alt={heroSlides[active].label}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1.02 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.13_0.012_60)_85%)]" />
      </motion.div>

      <Particles count={50} />

      {/* Floating ambient orbs */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[120px] animate-float" />
      <div
        className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-ember/20 blur-[120px] animate-float"
        style={{ animationDelay: "-3s" }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-gold mb-6 inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-primary sm:mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Open Now · Cambridge, ON
        </motion.div>

        <h1 className="font-display text-balance text-[clamp(2rem,7vw,7.5rem)] font-semibold leading-[0.95] tracking-tight">
          <Stagger text="Your neighborhood" />
          <br />
          <span className="shimmer">convenience hub.</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-6 max-w-xl text-balance text-base text-muted-foreground sm:mt-8 sm:text-lg"
        >
          Lotto, cold drinks, snacks, beer and everyday essentials — curated for the corner,
          open when you need us.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4"
        >
          <a
            href="#gallery"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03] sm:px-7 sm:py-4"
          >
            View gallery
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#products"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03] sm:px-7 sm:py-4"
          >
            Explore the shop
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#visit"
            className="glass inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary/80"
          >
            Get directions
          </a>
        </motion.div>

        {/* Slide indicators */}
        <div className="mt-12 flex flex-wrap items-center gap-4 sm:mt-16 sm:gap-6">
          {heroSlides.map((s, i) => (
            <button
              key={s.label}
              onClick={() => setActive(i)}
              className="group flex items-center gap-2 text-xs uppercase tracking-widest transition-all hover:opacity-100 sm:gap-3"
            >
              <span className="relative block h-px w-8 overflow-hidden bg-foreground/20 sm:w-12">
                {i === active && (
                  <motion.span
                    layoutId="slide-bar"
                    className="absolute inset-0 bg-primary"
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </span>
              <span className={i === active ? "text-foreground" : "text-muted-foreground"}>
                {s.label}
              </span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 sm:bottom-8"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-foreground/30 p-1">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="h-1.5 w-1 rounded-full bg-foreground"
          />
        </div>
      </motion.div>
    </section>
  );
}

function Stagger({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <span className="inline-block">
      {words.map((w, i) => (
        <span key={i} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.9, delay: 0.4 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block"
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ---------------- MARQUEE ---------------- */

function Marquee() {
  const items = [
    "Lotto & Scratch",
    "Cold Drinks",
    "Craft Beer",
    "Snacks & Candy",
    "Tobacco",
    "Open Late",
    "Neighborhood First",
    "Cambridge, ON",
  ];
  return (
    <div className="relative border-y border-border/50 bg-secondary/20 py-6">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((it, i) => (
          <span
            key={i}
            className="mx-8 inline-flex items-center gap-8 font-display text-2xl font-light text-muted-foreground"
          >
            {it}
            <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- PHOTO GALLERY ---------------- */

const galleryPhotos = [
  { src: whatsapp1, alt: "Cheezy Variety storefront" },
  { src: whatsapp2, alt: "Store interior" },
  { src: whatsapp3, alt: "Entrance view" },
  { src: whatsapp4, alt: "Shopping area" },
];

function GallerySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  
  return (
    <section id="gallery" ref={ref} className="relative py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center sm:mb-16"
        >
          <p className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary sm:mb-4">
            <span className="h-px w-6 bg-primary sm:w-8" />
            Inside Cheezy Variety
            <span className="h-px w-6 bg-primary sm:w-8" />
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-semibold leading-[0.95] tracking-tight">
            Your neighborhood store
            <br />
            <span className="text-gradient-gold">brought to life.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
          {galleryPhotos.map((photo, i) => (
            <motion.div
              key={photo.alt}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl sm:rounded-3xl border border-border/50 shadow-elevated"
            >
              <motion.img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- LOTTO ---------------- */

function LottoSection() {
  const [draw, setDraw] = useState(() => generateDraw());

  useEffect(() => {
    const t = setInterval(() => setDraw(generateDraw()), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="lotto" className="relative overflow-hidden py-16 sm:py-24 md:py-32">
      <div
        className="absolute inset-0 opacity-60"
        style={{ background: "var(--gradient-radial-gold)" }}
      />
      <Particles count={30} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex flex-col items-start justify-between gap-6 sm:mb-16 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary sm:mb-4">
              <span className="h-px w-6 bg-primary sm:w-8" /> Today feels lucky
            </p>
            <h2 className="font-display text-[clamp(2rem,5vw,5rem)] font-semibold leading-[0.95] tracking-tight">
              The <span className="text-gradient-gold">Lotto</span> counter,
              <br />
              reimagined.
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm text-muted-foreground md:block">
            Every OLG ticket, every scratcher, every dream — printed fresh at the
            counter most days of the week.
          </p>
        </motion.div>

        {/* Live draw card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.1 }}
          className="grid gap-5 sm:gap-6 lg:grid-cols-5"
        >
          <div className="glass-gold relative col-span-1 overflow-hidden rounded-2xl p-6 shadow-elevated noise sm:rounded-3xl sm:p-8 lg:col-span-3 lg:p-12">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs uppercase tracking-widest text-primary/80">Live Draw Simulation</p>
                <p className="mt-2 font-display text-xl font-semibold sm:text-2xl">Lotto 6/49 · Tonight</p>
              </div>
              <div className="glass rounded-full px-3 py-2 text-xs sm:px-4 sm:py-2">
                Est. Jackpot{" "}
                <span className="font-semibold text-primary">
                  $<Counter to={18.4} duration={2.4} decimals={1} suffix="M" />
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 sm:mt-10 sm:gap-3">
              {draw.map((n, i) => (
                <RollingBall key={`${draw.join("-")}-${i}`} value={n} delay={i * 0.12} />
              ))}
            </div>

            <p className="mt-8 text-xs text-muted-foreground sm:mt-10">
              Numbers shown are simulated for ambiance. Always check official OLG draws.
            </p>
          </div>

          {/* Scratch tickets */}
          <div className="col-span-1 grid gap-5 sm:gap-6 lg:col-span-2">
            <motion.div
              whileHover={{ rotate: -2, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="glass-gold relative overflow-hidden rounded-2xl p-5 shadow-elevated sm:rounded-3xl sm:p-6"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />
              <p className="text-xs uppercase tracking-widest text-primary">Scratch Pack</p>
              <p className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
                <Counter to={42} duration={2} />+ titles
              </p>
              <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
                Crossword, Bingo, Set for Life, Cash for Life and seasonal specials.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ rotate: 2, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="glass relative overflow-hidden rounded-2xl p-5 shadow-elevated sm:rounded-3xl sm:p-6"
            >
              <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-ember/30 blur-3xl" />
              <p className="text-xs uppercase tracking-widest text-ember">This Year</p>
              <p className="mt-3 font-display text-2xl font-semibold text-gradient-gold sm:text-3xl">
                $<Counter to={12450} duration={2.5} />
              </p>
              <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
                Won by customers at our counter (and counting).
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function generateDraw() {
  const set = new Set<number>();
  while (set.size < 7) set.add(Math.floor(Math.random() * 49) + 1);
  return Array.from(set);
}

function RollingBall({ value, delay = 0 }: { value: number; delay?: number }) {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0, rotateX: -90 }}
      animate={{ y: 0, opacity: 1, rotateX: 0 }}
      transition={{ delay, type: "spring", stiffness: 240, damping: 18 }}
      className="relative grid h-16 w-16 place-items-center rounded-full sm:h-20 sm:w-20"
      style={{
        background:
          "radial-gradient(circle at 30% 30%, oklch(0.95 0.1 90), oklch(0.78 0.16 80) 55%, oklch(0.55 0.16 65) 100%)",
        boxShadow:
          "0 10px 30px -8px oklch(0.83 0.16 85 / 60%), inset 0 -6px 12px oklch(0 0 0 / 25%), inset 0 4px 8px oklch(1 0 0 / 35%)",
      }}
    >
      <span className="font-display text-2xl font-bold text-[oklch(0.2_0.04_60)] tabular-nums">
        {value.toString().padStart(2, "0")}
      </span>
    </motion.div>
  );
}

/* ---------------- PRODUCTS ---------------- */

const products = [
  {
    title: "Lotto & Scratch",
    desc: "OLG tickets, scratchers, and instant wins.",
    img: lottoImg,
    tag: "Counter",
  },
  {
    title: "Beer & Alcohol",
    desc: "Craft, domestic, and chilled imports.",
    img: beerImg,
    tag: "Licensed",
  },
  {
    title: "Cold Drinks",
    desc: "Sodas, energy, juice, sports, water.",
    img: drinksImg,
    tag: "Fridge Row",
  },
  {
    title: "Snacks & Candy",
    desc: "Chips, chocolate bars, gum and gummies.",
    img: snacksImg,
    tag: "Aisle 1",
  },
  {
    title: "Tobacco",
    desc: "Cigarettes, lighters and accessories.",
    img: heroImg,
    tag: "Behind Counter",
  },
  {
    title: "Everyday Essentials",
    desc: "Milk, bread, eggs and household basics.",
    img: atmo1,
    tag: "Last-Minute",
  },
];

function ProductsSection() {
  return (
    <section id="products" className="relative py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-10 flex flex-col items-start justify-between gap-6 sm:mb-12 md:mb-16 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary sm:mb-4">
              <span className="h-px w-6 bg-primary sm:w-8" /> What's inside
            </p>
            <h2 className="font-display text-[clamp(2rem,5vw,5rem)] font-semibold leading-[0.95] tracking-tight">
              Everything for the
              <br />
              <span className="text-gradient-gold">quick run-in.</span>
            </h2>
          </div>
          <p className="max-w-sm text-xs text-muted-foreground sm:text-sm">
            Hover any tile. Each category opens with a glow — exactly the way it
            feels walking through the doors.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <ProductCard key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  title,
  desc,
  img,
  tag,
  index,
}: {
  title: string;
  desc: string;
  img: string;
  tag: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-50, 50], [8, -8]), { stiffness: 200, damping: 18 });
  const ry = useSpring(useTransform(mx, [-50, 50], [-8, 8]), { stiffness: 200, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(e.clientX - r.left - r.width / 2);
    my.set(e.clientY - r.top - r.height / 2);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/50 bg-card shadow-elevated sm:rounded-3xl"
    >
      <motion.img
        src={img}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="absolute left-3 top-3 glass rounded-full px-2.5 py-1 text-[9px] uppercase tracking-widest text-muted-foreground sm:left-5 sm:top-5 sm:px-3">
        {tag}
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
        <h3 className="font-display text-lg font-semibold leading-tight sm:text-2xl">{title}</h3>
        <p className="mt-2 max-h-0 overflow-hidden text-xs text-muted-foreground opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100 sm:text-sm">
          {desc}
        </p>
        <div className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          In store
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:rounded-3xl" style={{ boxShadow: "inset 0 0 60px oklch(0.83 0.16 85 / 25%)" }} />
    </motion.div>
  );
}

/* ---------------- ATMOSPHERE ---------------- */

function AtmosphereSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section id="atmosphere" ref={ref} className="relative py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <p className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary sm:mb-4">
              <span className="h-px w-6 bg-primary sm:w-8" /> Inside the store
            </p>
            <h2 className="font-display text-[clamp(2rem,5vw,5rem)] font-semibold leading-[0.95] tracking-tight">
              A corner of Cambridge that
              <span className="text-gradient-gold"> feels like home.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm text-muted-foreground sm:mt-6">
              Warm lighting. Familiar faces. The same staff who remember your
              usual. Cheezy Variety has been the dependable stop on the block
              for years — and we're proud of it.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3 sm:mt-10 sm:gap-4">
              {[
                { v: 4.6, l: "Avg. rating", s: "★" },
                { v: 7, l: "Days a week", s: "" },
                { v: 100, l: "% neighborhood", s: "%" },
              ].map((s) => (
                <div key={s.l} className="glass rounded-lg p-3 sm:rounded-2xl sm:p-4">
                  <div className="font-display text-xl font-semibold text-gradient-gold sm:text-2xl">
                    <Counter to={s.v} decimals={s.v % 1 ? 1 : 0} suffix={s.s} />
                  </div>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground sm:text-[11px]">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
            <motion.div style={{ y: y1 }} className="col-span-2 overflow-hidden rounded-2xl sm:rounded-3xl">
              <img src={atmo1} alt="Aisle at golden hour" loading="lazy" className="h-48 w-full object-cover sm:h-72 md:h-96" />
            </motion.div>
            <motion.div style={{ y: y2 }} className="overflow-hidden rounded-2xl sm:rounded-3xl">
              <img src={atmo2} alt="Counter exchange" loading="lazy" className="h-40 w-full object-cover sm:h-56 md:h-72" />
            </motion.div>
            <motion.div style={{ y: y1 }} className="overflow-hidden rounded-2xl sm:rounded-3xl">
              <img src={atmo3} alt="Storefront at night" loading="lazy" className="h-40 w-full object-cover sm:h-56 md:h-72" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- REVIEWS ---------------- */

const reviews = [
  { name: "Sarah M.", body: "Friendly staff. They actually remember my name and my lotto picks.", rating: 5 },
  { name: "Daniel R.", body: "Always so nice — even at 11pm when I'm grabbing something random.", rating: 5 },
  { name: "Priya K.", body: "Close to home and has a little of everything. My go-to corner stop.", rating: 5 },
  { name: "Marc T.", body: "Solid lotto counter and great snack selection. Quick in, quick out.", rating: 5 },
  { name: "Aisha N.", body: "Cleanest convenience store on this side of Cambridge.", rating: 5 },
  { name: "Tom L.", body: "Beer is always cold, ticket printer is always working. Perfect.", rating: 5 },
];

function ReviewsSection() {
  return (
    <section id="reviews" className="relative overflow-hidden py-16 sm:py-24 md:py-32">
      <div
        className="absolute inset-0 opacity-50"
        style={{ background: "var(--gradient-radial-gold)" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center sm:mb-12 md:mb-16"
        >
          <p className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary sm:mb-4">
            <span className="h-px w-6 bg-primary sm:w-8" /> Loved by the block
            <span className="h-px w-6 bg-primary sm:w-8" />
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,5rem)] font-semibold leading-[0.95] tracking-tight">
            What the neighborhood
            <br />
            <span className="text-gradient-gold">is saying.</span>
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className="glass relative rounded-2xl p-5 shadow-elevated sm:rounded-3xl sm:p-7"
            >
              <div className="mb-3 flex gap-1 text-primary sm:mb-4">
                {Array.from({ length: r.rating }).map((_, k) => (
                  <span key={k}>★</span>
                ))}
              </div>
              <blockquote className="text-balance text-sm leading-relaxed text-foreground sm:text-base">
                "{r.body}"
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-2 sm:mt-6 sm:gap-3">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-gold text-xs font-semibold text-primary-foreground sm:h-9 sm:w-9">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="text-xs font-medium sm:text-sm">{r.name}</p>
                  <p className="text-[10px] text-muted-foreground sm:text-xs">Verified Google review</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- VISIT ---------------- */

function VisitSection() {
  return (
    <section id="visit" className="relative py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary sm:mb-4">
              <span className="h-px w-6 bg-primary sm:w-8" /> Find us
            </p>
            <h2 className="font-display text-[clamp(2rem,5vw,5rem)] font-semibold leading-[0.95] tracking-tight">
              Right around the
              <br />
              <span className="text-gradient-gold">corner.</span>
            </h2>

            <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
              <div className="glass rounded-lg p-4 sm:rounded-2xl sm:p-5">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Address</p>
                <p className="mt-2 font-display text-base font-semibold sm:text-lg">Cheezy Variety · Cambridge, Ontario</p>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                <div className="glass rounded-lg p-4 sm:rounded-2xl sm:p-5">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Hours</p>
                  <p className="mt-2 font-display text-base font-semibold sm:text-lg">7am — 11pm</p>
                  <p className="mt-1 text-xs text-muted-foreground">Daily</p>
                </div>
                <div className="glass rounded-lg p-4 sm:rounded-2xl sm:p-5">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Phone</p>
                  <a href="tel:+15195551234" className="mt-2 block font-display text-base font-semibold text-primary sm:text-lg">
                    (519) 555-1234
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <a
                  href="https://www.google.ca/maps/place/Cheezy+Variety/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-xs font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03] sm:px-6 sm:py-3 sm:text-sm"
                >
                  Get directions
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="tel:+15195551234"
                  className="glass inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-medium sm:px-6 sm:text-sm"
                >
                  Call store
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="relative overflow-hidden rounded-2xl border border-border/50 shadow-elevated sm:rounded-3xl"
          >
            <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-gradient-to-t from-background/60 via-transparent to-transparent sm:rounded-3xl" />
            {/* Animated pin overlay */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-full">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="absolute -inset-6 rounded-full bg-primary/30 blur-xl animate-pulse-glow" />
                <div className="relative grid h-12 w-12 place-items-center rounded-full bg-gradient-gold shadow-glow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-primary-foreground">
                    <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                  </svg>
                </div>
              </motion.div>
            </div>
            <iframe
              title="Cheezy Variety on Google Maps"
              src="https://www.google.com/maps?q=Cheezy+Variety+Cambridge+Ontario&output=embed"
              className="h-80 w-full grayscale-[0.4] invert-[0.85] hue-rotate-180 sm:h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/50">
      <div
        className="absolute inset-x-0 -top-32 h-64 opacity-50"
        style={{ background: "var(--gradient-radial-gold)" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end md:gap-10">
          <div>
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-gold text-primary-foreground font-display text-base font-bold shadow-glow sm:h-10 sm:w-10 sm:text-lg">
                C
              </span>
              <span className="font-display text-lg font-semibold sm:text-xl">Cheezy Variety</span>
            </div>
            <p className="mt-4 max-w-sm text-balance text-lg font-display leading-tight sm:mt-6 sm:text-2xl">
              <span className="shimmer">Quick stops.</span>{" "}
              <span className="text-muted-foreground">Better experience.</span>
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 sm:gap-6 md:items-end">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {["Maps", "Instagram", "Facebook"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="glass hover:glass-gold group rounded-full px-3 py-2 text-xs uppercase tracking-widest transition-all hover:-translate-y-0.5 sm:px-4"
                >
                  {s}
                </a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Cheezy Variety · Cambridge, Ontario
            </p>
          </div>
        </div>

        {/* Huge brand text */}
        <div className="mt-12 select-none overflow-hidden sm:mt-20">
          <p className="text-center font-display text-[clamp(3rem,15vw,16rem)] font-semibold leading-none tracking-tighter text-gradient-gold opacity-90">
            CHEEZY
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- ROOT ---------------- */

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <GallerySection />
        <LottoSection />
        <ProductsSection />
        <AtmosphereSection />
        <ReviewsSection />
        <VisitSection />
      </main>
      <Footer />
    </div>
  );
}

export { Hero, Marquee, GallerySection, LottoSection, ProductsSection, AtmosphereSection, ReviewsSection, VisitSection, Footer };
