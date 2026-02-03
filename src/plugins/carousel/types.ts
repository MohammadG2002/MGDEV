import type { MotionValue } from "framer-motion";

export interface ItemScrollConfig {
  onLastItemScroll?: string;
  onFirstItemScroll?: string;
  direction?: "horizontal" | "vertical";
}

export interface CarouselReturn {
  containerRef: React.RefObject<HTMLElement>;
  currentIndex: number;
  scrollToNext: () => void;
  scrollToIndex: (index: number) => void;
  scrollToLast: () => void;
  scrollProgress: MotionValue<number>;
}
