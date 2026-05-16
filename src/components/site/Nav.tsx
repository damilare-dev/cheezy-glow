import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { Link } from "@tanstack/react-router";

export function Nav() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 120], ["rgba(0,0,0,0)", "rgba(20,16,12,0.8)"]);
  const blur = useTransform(scrollY, [0, 120], [0, 20]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
    { href: "/visit", label: "Visit" },
  ];

  return (
    <motion.header
      style={{ backgroundColor: bg, backdropFilter: blur.get() ? `blur(${blur.get()}px)` : "none" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-transparent transition-colors"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <a href="#top" className="group flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-gold text-primary-foreground font-display font-bold shadow-glow sm:h-8 sm:w-8">
            C
          </span>
          <span className="font-display text-sm font-semibold tracking-tight sm:text-base">
            Cheezy <span className="text-muted-foreground">Variety</span>
          </span>
        </a>
        
        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="text-xs text-muted-foreground transition-colors hover:text-foreground uppercase tracking-wide sm:text-sm sm:tracking-normal"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden glass-gold rounded-full p-2 text-foreground transition-transform hover:scale-[1.05]"
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>

        <a
          href="tel:+15195551234"
          className="glass-gold hidden rounded-full px-3 py-2 text-xs font-medium tracking-wide text-foreground transition-transform hover:scale-[1.03] sm:px-4 md:inline-block"
        >
          Call Store
        </a>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur"
        >
          <nav className="flex flex-col gap-3 px-4 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+15195551234"
              className="mt-2 inline-block glass-gold rounded-full px-4 py-2 text-xs font-medium text-foreground transition-transform hover:scale-[1.03]"
            >
              Call Store
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
