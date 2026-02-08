import { MotionValue, useMotionValue, useSpring } from "framer-motion";

export const useScrollSpring = ({
  localProgress,
}: {
  localProgress?: MotionValue<number>;
} = {}) => {
  const progress = localProgress ?? useMotionValue(0);

  const verySlowProgress = useSpring(progress, {
    stiffness: 15,
    damping: 30,
  });

  const slowProgress = useSpring(progress, {
    stiffness: 30,
    damping: 25,
  });

  const mediumProgress = useSpring(progress, {
    stiffness: 50,
    damping: 20,
  });

  const smoothProgress = useSpring(progress, {
    stiffness: 60,
    damping: 20,
  });

  const fastProgress = useSpring(progress, {
    stiffness: 80,
    damping: 15,
  });

  const veryFastProgress = useSpring(progress, {
    stiffness: 120,
    damping: 10,
  });

  return {
    localProgress: progress,
    verySlowProgress,
    slowProgress,
    mediumProgress,
    smoothProgress,
    fastProgress,
    veryFastProgress,
  };
};
