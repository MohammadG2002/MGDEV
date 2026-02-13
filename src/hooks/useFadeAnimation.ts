import { MotionValue, useTransform } from "framer-motion";
import { useMobileDetection } from "./useMobileDetection";

export const useFadeAnimation = (progress: MotionValue<number>) => {
  const isMobile = useMobileDetection();

  // Disable animations on mobile - return static values
  if (isMobile) {
    const fadeMobile = useTransform(progress, [0, 0.5, 1], [0, 1, 0]);
    return {
      fadeHeader: fadeMobile,
      fadeContent: fadeMobile,
      fadeLinks: fadeMobile,
      fadeHeaderX: progress,
      fadeContentX: progress,
      fadeLinksX: progress,
      phoneX: progress,
    };
  }

  const fadeHeader = useTransform(
    progress,
    [0, 0.15, 0.5, 0.85, 1],
    [0, 0, 1, 0, 0],
  );
  const fadeContent = useTransform(
    progress,
    [0, 0.3, 0.5, 0.7, 1],
    [0, 0, 1, 0, 0],
  );
  const fadeLinks = useTransform(
    progress,
    [0, 0.4, 0.5, 0.6, 1],
    [0, 0, 1, 0, 0],
  );
  const fadeHeaderX = useTransform(progress, [0, 0.3, 1], [0, 0, 1]);
  const fadeContentX = useTransform(progress, [0, 0.6, 1], [0, 0, 1]);
  const fadeLinksX = useTransform(progress, [0, 0.8, 1], [0, 0, 1]);
  const phoneX = useTransform(progress, [0, 1], [-150, 0]);

  // Return mobile values on mobile, desktop values on desktop
  return {
    fadeHeaderX: isMobile ? progress : fadeHeaderX,
    fadeContentX: isMobile ? progress : fadeContentX,
    fadeLinksX: isMobile ? progress : fadeLinksX,
    phoneX: isMobile ? progress : phoneX,
  };
};
