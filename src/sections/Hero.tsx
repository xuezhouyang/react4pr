import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useParallax } from '../hooks/useParallax';
import { Badge } from '../components/Badge';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { offset } = useParallax({ ref, offset: [-80, 60] });

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32 pb-24 text-white"
    >
      <motion.div
        style={{ y: offset }}
        className="absolute inset-0 -z-10 bg-gradient-aurora opacity-40 blur-3xl"
      />
      <div className="absolute inset-0 -z-20 bg-grid-slate bg-[size:32px_32px] opacity-20" />
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <Badge>data, distilled.</Badge>
        <motion.h1
          className="mt-8 text-4xl font-semibold tracking-tight text-balance md:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Flumenis turns real-world signals into decisions you can trust.
        </motion.h1>
        <motion.p
          className="mt-8 max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
        >
          We build lightning-light automation and analytics for teams that live in the messiness of the real world. See
          what’s happening, understand why, and respond before the window closes.
        </motion.p>
        <motion.p
          className="mt-5 max-w-3xl text-base leading-relaxed text-white/60"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
        >
          Flumenis 是一家独立软件公司，专注做一件事：把真实世界里产生的数据，变成可以立即使用的清晰判断。我们正在
          构建轻量的自动化与分析工具，让个人和小型团队在忙碌、碎片化的日常里也能快速看清现状、理解趋势，并做出可信的下一步。
        </motion.p>
        <motion.div
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
        >
          <a
            href="mailto:contact@flumenis.com"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand.primary hover:text-white"
          >
            Contact us
          </a>
          <a
            href="#solutions"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60"
          >
            Explore our tools
          </a>
        </motion.div>
      </div>
    </section>
  );
}
