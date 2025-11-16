import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id="contact" className="section-shell px-6 pb-24">
      <motion.div
        className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-[32px] border border-white/10 bg-white/[0.03] px-10 py-16 text-center"
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <p className="text-sm uppercase tracking-[0.6em] text-brand.glow/70">Partnership & early access</p>
        <h3 className="text-3xl font-semibold text-white md:text-4xl">
          Ready to see how Flumenis can accelerate your reality?
        </h3>
        <p className="max-w-2xl text-base text-white/70">
          Tell us about your agents, your data stack, or the everyday friction you want to dissolve. We respond to every note
          from <span className="text-white">contact@flumenis.com</span>.
        </p>
        <p className="max-w-2xl text-sm text-white/60">
          想要合作或体验内测？发送邮件至 <span className="text-white">contact@flumenis.com</span>，我们会尽快与你联系。
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="mailto:contact@flumenis.com"
            className="inline-flex items-center gap-2 rounded-full bg-brand.primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand.primary/40 transition hover:bg-brand.primary/90"
          >
            Start the conversation
          </a>
          <a
            href="#solutions"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/80 transition hover:text-white"
          >
            See enterprise offering
          </a>
        </div>
      </motion.div>
      <footer className="mx-auto mt-12 flex max-w-4xl flex-col items-center gap-3 text-center text-xs text-white/50 sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} Flumenis. Independent software for the real world.</span>
        <span>Designing from Singapore · Shipping globally.</span>
      </footer>
    </section>
  );
}
