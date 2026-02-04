import { useEffect } from "react";
import type { MotionValue } from "framer-motion";

export const useSlideProgress = (
  scrollProgress: MotionValue<number>,
  slideIndex: number,
  localProgress: MotionValue<number>,
) => {
  useEffect(() => {
    const unsubscribe = scrollProgress.on("change", (currentSlide) => {
      if (currentSlide === slideIndex) {
        localProgress.set(1);
      } else {
        localProgress.set(0);
      }
    });

    return () => unsubscribe();
  }, [scrollProgress, slideIndex, localProgress]);
};
