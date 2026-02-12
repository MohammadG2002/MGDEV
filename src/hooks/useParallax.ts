import { MotionValue, useTransform } from "motion/react";
import { useMobileDetection } from "./useMobileDetection";

const useParallax = (value: MotionValue<number>, distance: number) => {
  const isMobile = useMobileDetection();

  return useTransform(value, [0, 1], isMobile ? [0, 0] : [-distance, distance]);
};

export default useParallax;
