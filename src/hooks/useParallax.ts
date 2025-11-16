import { RefObject } from 'react';
import { useScroll, useTransform, MotionValue } from 'framer-motion';

type Axis = 'x' | 'y';

type ParallaxRange = [number, number];

interface UseParallaxProps {
  ref: RefObject<HTMLElement>;
  axis?: Axis;
  offset?: ParallaxRange;
  clamp?: boolean;
}

interface ParallaxResult {
  offset: MotionValue<string>;
}

const defaults: Record<Axis, ParallaxRange> = {
  x: [-50, 50],
  y: [-60, 60]
};

export function useParallax({
  ref,
  axis = 'y',
  offset = defaults[axis],
  clamp = false
}: UseParallaxProps): ParallaxResult {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const outputRange = [`${offset[0]}px`, `${offset[1]}px`];
  const translate = useTransform(scrollYProgress, [0, 1], outputRange, {
    clamp
  });

  return { offset: translate };
}
