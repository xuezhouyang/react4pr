import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';

const products = [
  {
    name: 'CrateRoam',
    tag: 'Cross-platform music',
    description:
      'A multi-end NAS music player that travels with you. Stream from home storage to phone, tablet, desktop, or car without giving up ownership.',
    descriptionCn: 'NAS 跨平台多端音乐播放器，让你的私人曲库随时随地可用，支持多终端无缝串流。',
    highlights: ['Hybrid offline sync', 'Spatial-inspired UI', 'No streaming tax'],
    link: '#contact'
  },
  {
    name: '麦当守恒 · Macalorie',
    tag: 'Health, realistic edition',
    description:
      'Lose fat without abandoning fast food. Macalorie plans, tracks, and balances meals so busy people can stay on track anywhere.',
    descriptionCn: '吃快餐也能减脂的应用：智能计算热量与营养结构，结合真实饮食场景给出下一步建议。',
    highlights: ['Menu-aware recommendations', 'Habit pulses and micro-wins', 'Actionable nutrition swaps'],
    link: '#contact'
  },
  {
    name: 'PostaFide',
    tag: 'Secure SMS to email',
    description:
      'A privacy-first SMS → Email bridge for power users. Multi-SIM aware routing, on-device redaction, self-hostable backups, and lifetime licensing.',
    descriptionCn: '安全、私密、可自定义的 SMS → Email 转发工具，支持多 SIM 卡区分，买断授权，无中间人信息泄露。',
    highlights: ['Granular routing rules', 'PGP-friendly encryption', 'No middlemen data exposure'],
    link: '#contact'
  }
];

export function Products() {
  return (
    <section id="products" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="everyday leverage"
          title={<span className="text-white">Consumer tools built for busy, imperfect lives.</span>}
          description={
            <span>
              Not every problem needs a platform. Our consumer apps give individuals the same clarity and control we bring to
              teams—without the bloat.
            </span>
          }
          align="center"
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-xl transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/10 via-brand.primary/10 to-brand.glow/10 opacity-0 transition group-hover:opacity-100" />
              <span className="text-sm uppercase tracking-[0.4em] text-brand.glow/80">{product.tag}</span>
              <h3 className="mt-6 text-2xl font-semibold text-white">{product.name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70">{product.description}</p>
              <p className="mt-2 text-xs leading-relaxed text-white/50">{product.descriptionCn}</p>
              <ul className="mt-8 space-y-3 text-sm text-white/60">
                {product.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand.glow/80" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <a
                  href={product.link}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition group-hover:border-white/70 group-hover:text-white"
                >
                  Request early access
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
