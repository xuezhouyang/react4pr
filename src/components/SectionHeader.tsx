import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import clsx from 'clsx';
import { Badge } from './Badge';

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
}

export function SectionHeader({ eyebrow, title, description, align = 'left' }: SectionHeaderProps) {
  const alignment = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={clsx('mx-auto max-w-4xl space-y-6', alignment)}>
      <Badge className={align === 'center' ? 'mx-auto' : undefined}>{eyebrow}</Badge>
      <motion.h2
        className="text-4xl font-semibold tracking-tight text-balance md:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.div
          className="text-lg leading-relaxed text-white/70 text-balance"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.div>
      ) : null}
    </div>
  );
}
