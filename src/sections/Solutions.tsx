import { useRef } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { useParallax } from '../hooks/useParallax';

const solutionPoints = [
  {
    title: 'RCA copilots for agent ecosystems',
    description:
      'Trace autonomous decisions across tools, APIs, and human handoffs. Our adaptive RCA engine makes sense of tangled agent workflows without manual tagging.'
  },
  {
    title: 'Tracing that respects privacy',
    description:
      'Deploy to our secure cloud or run privately. Fine-grained retention policies and redaction keep sensitive tokens and PII under your control.'
  },
  {
    title: 'Signal-to-action dashboards',
    description:
      'Get narrative briefings instead of raw logs. Flumenis highlights root causes, drift patterns, and high-impact fixes in natural language.'
  },
  {
    title: 'Expert partnership',
    description:
      'Need a sounding board? Our team embeds with yours to instrument agents, coach on observability, and design guardrails that scale.'
  }
];

export function Solutions() {
  const ref = useRef<HTMLDivElement>(null);
  const { offset } = useParallax({ ref, offset: [-120, 40] });

  return (
    <section id="solutions" className="section-shell overflow-hidden px-6 py-24">
      <div ref={ref} className="relative mx-auto max-w-6xl">
        <motion.div
          style={{ y: offset }}
          className="absolute -inset-x-40 -top-40 -z-10 h-[520px] rounded-full bg-gradient-to-br from-brand.primary/30 via-brand.glow/40 to-transparent blur-3xl"
        />
        <SectionHeader
          eyebrow="agents & automation"
          title={<span className="text-white">RCA + tracing that keeps up with your agents.</span>}
          description={
            <span className="space-y-4">
              <p>
                For teams orchestrating AI agents, visibility is survival. Flumenis delivers a full-stack Root Cause Analysis
                and tracing solution engineered for autonomous systems—whether you run on our managed cloud or behind your own
                firewall.
              </p>
              <p className="text-sm text-white/60">
                面向 ToB 客户，我们提供服务于大模型 Agent 领域的 RCA + Tracing 解决方案，支持云端或私有化部署，并配套专家咨询服务。
              </p>
            </span>
          }
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {solutionPoints.map((item) => (
            <motion.article
              key={item.title}
              className="glass-panel h-full rounded-3xl p-8"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-white/70">{item.description}</p>
            </motion.article>
          ))}
        </div>
        <motion.div
          className="mt-12 flex flex-wrap items-center gap-4 text-sm text-white/60"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true }}
        >
          <span className="rounded-full border border-white/20 px-4 py-2">Cloud deployment</span>
          <span className="rounded-full border border-white/20 px-4 py-2">Private / on-prem</span>
          <span className="rounded-full border border-white/20 px-4 py-2">Observability workshops</span>
          <span className="rounded-full border border-white/20 px-4 py-2">Agent QA design</span>
        </motion.div>
      </div>
    </section>
  );
}
