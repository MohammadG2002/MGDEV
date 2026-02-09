import { useLayoutEffect } from "react";
import type { MotionValue } from "framer-motion";

export const useSlideProgress = (
  scrollProgress: MotionValue<number>,
  slideIndex: number,
  localProgress: MotionValue<number>,
) => {
  useLayoutEffect(() => {
    // 🔹 Set correct initial state BEFORE first paint
    const current = scrollProgress.get();
    localProgress.set(current === slideIndex ? 1 : 0);

    // 🔹 Subscribe to future changes
    const unsubscribe = scrollProgress.on("change", (currentSlide) => {
      localProgress.set(currentSlide === slideIndex ? 1 : 0);
    });

    return () => unsubscribe();
  }, [scrollProgress, slideIndex, localProgress]);
};
