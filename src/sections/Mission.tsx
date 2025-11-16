import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';

export function Mission() {
  return (
    <section id="mission" className="section-shell px-6 py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 md:flex-row md:items-start">
        <div className="md:w-2/5">
          <SectionHeader
            eyebrow="mission"
            title={
              <span className="gradient-text">
                Intelligent software that respects reality.
              </span>
            }
            description={
              <span className="space-y-4">
                <p>
                  Flumenis is an independent software studio dedicated to turning the noise of daily operations into clarity.
                  Our tools meet people where they already are—time-pressed, multitasking, working with imperfect data—and help
                  them move forward with confidence.
                </p>
                <p className="text-sm text-white/60">
                  我们相信，智能软件应该尊重真实世界：真实的人、真实的时间压力、真实的消费与行为，而不是理想化的样板用户。
                </p>
              </span>
            }
          />
        </div>
        <div className="space-y-10 text-lg leading-relaxed text-white/70 md:w-3/5">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            We focus on a single promise: transform raw, real-world activity into actionable decisions. That means prioritising
            immediacy, legibility, and trust over vanity metrics or endless configuration.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true }}
          >
            无论你是在运营大模型 Agent 体系，还是在周末推进自己的产品副业，都应该拥有理解现状、把握趋势、快速决策的能力——而不需要庞大的数据团队或高昂的系统成本。
          </motion.p>
          <motion.div
            className="grid gap-6 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12 }
              }
            }}
          >
            {["Clarity over dashboards", "Momentum over maintenance", "Advice over alerts", "Reality over hypotheticals"].map(
              (value) => (
                <motion.div
                  key={value}
                  variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                  className="glass-panel rounded-2xl p-6 text-base text-white/80"
                >
                  {value}
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
