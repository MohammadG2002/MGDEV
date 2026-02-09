import { MotionValue, useTransform } from "framer-motion";

export const useFadeAnimation = (progress: MotionValue<number>) => {
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

  return {
    fadeHeader,
    fadeContent,
    fadeLinks,
    fadeHeaderX,
    fadeContentX,
    fadeLinksX,
    phoneX,
  };
};
