import { useMotionValue, useSpring } from "framer-motion";

export const useScrollSpring = () => {
  const localProgress = useMotionValue(0);

  const verySlowProgress = useSpring(localProgress, {
    stiffness: 15,
    damping: 30,
  });

  const slowProgress = useSpring(localProgress, {
    stiffness: 30,
    damping: 25,
  });

  const mediumProgress = useSpring(localProgress, {
    stiffness: 50,
    damping: 20,
  });

  const smoothProgress = useSpring(localProgress, {
    stiffness: 60,
    damping: 20,
  });

  const fastProgress = useSpring(localProgress, {
    stiffness: 80,
    damping: 15,
  });

  const veryFastProgress = useSpring(localProgress, {
    stiffness: 120,
    damping: 10,
  });

  return {
    localProgress,
    verySlowProgress,
    slowProgress,
    mediumProgress,
    smoothProgress,
    fastProgress,
    veryFastProgress,
  };
};
