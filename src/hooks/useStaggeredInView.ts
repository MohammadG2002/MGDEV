import { useRef, useEffect, useState } from "react";
import { useInView } from "motion/react";
import type { UseInViewOptions } from "motion/react";

interface UseStaggeredInViewOptions {
  amount?: UseInViewOptions["amount"];
  once?: UseInViewOptions["once"];
  margin?: UseInViewOptions["margin"];
  baseDelay?: number;
  staggerDelay?: number;
}

export const useStaggeredInView = (options: UseStaggeredInViewOptions = {}) => {
  const {
    amount = 0.5,
    once = false,
    margin = "0px",
    baseDelay = 0,
    staggerDelay = 0.1,
  } = options;

  const ref = useRef(null);
  const hookIsInView = useInView(ref, { amount, once, margin });
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const rect = (ref.current as HTMLElement).getBoundingClientRect();
      const initiallyInView = rect.top < window.innerHeight && rect.bottom > 0;
      if (initiallyInView) {
        setIsInView(true);
      }
    }
  }, []);

  useEffect(() => {
    if (hookIsInView) {
      setIsInView(true);
    } else if (!once) {
      setIsInView(false);
    }
  }, [hookIsInView, once]);

  const createAnimationProps = (index: number = 0) => ({
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    initial: { opacity: 0, y: 20 },
    transition: {
      delay: isInView ? baseDelay + index * staggerDelay : 0,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  });

  const createItemAnimationProps = (itemIndex: number) => ({
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    initial: { opacity: 0, y: 20 },
    transition: {
      delay: isInView ? baseDelay + (3 + itemIndex) * staggerDelay : 0,
      duration: isInView ? 0.6 : 0,
      ease: "easeOut" as const,
    },
  });

  return {
    ref,
    isInView,
    headerProps: createAnimationProps(0),
    contentProps: createAnimationProps(1),
    linksProps: createAnimationProps(2),
    linksProps2: createAnimationProps(3),
    createItemProps: createItemAnimationProps,
  };
};
