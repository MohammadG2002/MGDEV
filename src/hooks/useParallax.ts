import { MotionValue, useTransform } from "motion/react";
import { useMobileDetection } from "./useMobileDetection";

const useParallax = (value: MotionValue<number>, distance: number) => {
  const isMobile = useMobileDetection();

<<<<<<< HEAD
  return useTransform(value, [0, 1], isMobile ? [0, 0] : [-distance, distance]);
=======
  if (isMobile) {
    return value;
  }

  return useTransform(value, [0, 1], [-distance, distance]);
>>>>>>> 2dd8a14 (Latest)
};

export default useParallax;
