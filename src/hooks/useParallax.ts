import { MotionValue, useTransform } from "motion/react";
import { useMobileDetection } from "./useMobileDetection";

const useParallax = (value: MotionValue<number>, distance: number) => {
  const isMobile = useMobileDetection();

  if (isMobile) {
    return value;
  }

  return useTransform(value, [0, 1], [-distance, distance]);
};

export default useParallax;
