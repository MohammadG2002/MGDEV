import { MotionValue, useTransform } from "framer-motion";

export const useFadeAnimation = (progress: MotionValue<number>) => {
  const fadeHeader = useTransform(
    progress,
    [0, 0.1, 0.5, 0.9, 1],
    [0, 0, 1, 0, 0],
  );

  const fadeContent = useTransform(
    progress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 0, 1, 0, 0],
  );

  const fadeLinks = useTransform(
    progress,
    [0, 0.4, 0.5, 0.6, 1],
    [0, 0, 1, 0, 0],
  );

  return {
    fadeHeader,
    fadeContent,
    fadeLinks,
  };
};
