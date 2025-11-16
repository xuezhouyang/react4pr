import { motion } from 'framer-motion';

const navLinks = [
  { href: '#mission', label: 'Mission' },
  { href: '#solutions', label: 'Agent RCA' },
  { href: '#products', label: 'Consumer Apps' },
  { href: '#contact', label: 'Contact' }
];

export function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 py-6">
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="glass-panel flex w-full max-w-5xl items-center justify-between rounded-2xl px-6 py-3"
      >
        <a href="#top" className="text-sm font-semibold tracking-[0.6em] uppercase text-white/80">
          Flumenis
        </a>
        <div className="hidden items-center gap-1 text-sm font-medium text-white/70 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="mailto:contact@flumenis.com"
          className="inline-flex items-center gap-2 rounded-full border border-brand.glow/40 bg-brand.primary/20 px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:bg-brand.primary/30"
        >
          Let’s collaborate
        </a>
      </motion.nav>
    </header>
  );
}
