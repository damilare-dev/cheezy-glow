import { motion, useScroll, useTransform } from "framer-motion";

export function Nav() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 120], ["rgba(0,0,0,0)", "rgba(20,16,12,0.7)"]);
  const blur = useTransform(scrollY, [0, 120], [0, 20]);

  const links = [
    { href: "#lotto", label: "Lotto" },
    { href: "#products", label: "Shop" },
    { href: "#atmosphere", label: "Store" },
    { href: "#reviews", label: "Reviews" },
    { href: "#visit", label: "Visit" },
  ];

  return (
    <motion.header
      style={{ backgroundColor: bg, backdropFilter: blur.get() ? `blur(${blur.get()}px)` : "none" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-transparent transition-colors"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="group flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-gold text-primary-foreground font-display font-bold shadow-glow">
            C
          </span>
          <span className="font-display text-base font-semibold tracking-tight">
            Cheezy <span className="text-muted-foreground">Variety</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="tel:+15195551234"
          className="glass-gold rounded-full px-4 py-2 text-xs font-medium tracking-wide text-foreground transition-transform hover:scale-[1.03]"
        >
          Call Store
        </a>
      </div>
    </motion.header>
  );
}
