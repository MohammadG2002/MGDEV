import { MotionValue, useMotionValue, useSpring } from "framer-motion";
import { useMobileDetection } from "./useMobileDetection";

export const useScrollSpring = ({
  localProgress,
}: {
  localProgress?: MotionValue<number>;
} = {}) => {
  const isMobile = useMobileDetection();
  const progress = localProgress ?? useMotionValue(0);

  // Always call all hooks, but use static values on mobile
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

  // Return static values on mobile, animated values on desktop
  return {
    localProgress: progress,
    verySlowProgress: isMobile ? progress : verySlowProgress,
    slowProgress: isMobile ? progress : slowProgress,
    mediumProgress: isMobile ? progress : mediumProgress,
    smoothProgress: isMobile ? progress : smoothProgress,
    fastProgress: isMobile ? progress : fastProgress,
    veryFastProgress: isMobile ? progress : veryFastProgress,
  };
};
