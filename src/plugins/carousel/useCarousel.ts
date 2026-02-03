import { useEffect, useRef, useState } from "react";
import { useMotionValue } from "framer-motion";
import type { ItemScrollConfig, CarouselReturn } from "./types";

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export const useCarousel = (
  itemCount: number,
  config?: ItemScrollConfig,
): CarouselReturn => {
  const containerRef = useRef<HTMLElement>(null!);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isScrollingRef = useRef(false);
  const direction = config?.direction || "vertical";

  // Just track the current index as a motion value
  const currentSlideIndex = useMotionValue(0);

  const scrollToItem = (index: number) => {
    if (containerRef.current && index >= 0 && index < itemCount) {
      isScrollingRef.current = true;
      const container = containerRef.current;
      const scrollSize =
        direction === "horizontal"
          ? container.clientWidth
          : container.clientHeight;
      const targetScroll = index * scrollSize;

      if (direction === "horizontal") {
        container.scrollTo({
          left: targetScroll,
          behavior: "smooth",
        });
      } else {
        container.scrollTo({
          top: targetScroll,
          behavior: "smooth",
        });
      }

      setCurrentIndex(index);
      currentSlideIndex.set(index);

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      const rect = container.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;

      if (!isInView) return;

      e.preventDefault();
      if (isScrollingRef.current) return;

      if (e.deltaY > 0) {
        if (currentIndex < itemCount - 1) {
          scrollToItem(currentIndex + 1);
        } else if (currentIndex === itemCount - 1 && config?.onLastItemScroll) {
          scrollToSection(config.onLastItemScroll);
        }
      } else if (e.deltaY < 0) {
        if (currentIndex > 0) {
          scrollToItem(currentIndex - 1);
        } else if (currentIndex === 0 && config?.onFirstItemScroll) {
          scrollToSection(config.onFirstItemScroll);
        }
      }
    };

    const handleScroll = (e: Event) => {
      if (!isScrollingRef.current) {
        e.preventDefault();
        const scrollSize =
          direction === "horizontal"
            ? container.clientWidth
            : container.clientHeight;
        const targetScroll = currentIndex * scrollSize;
        if (direction === "horizontal") {
          container.scrollLeft = targetScroll;
        } else {
          container.scrollTop = targetScroll;
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      container.removeEventListener("scroll", handleScroll);
    };
  }, [currentIndex, itemCount, config, direction]);

  const scrollToNext = () => scrollToItem(currentIndex + 1);
  const scrollToIndex = (index: number) => scrollToItem(index);
  const scrollToLast = () => scrollToItem(itemCount - 1);

  return {
    containerRef,
    currentIndex,
    scrollToNext,
    scrollToIndex,
    scrollToLast,
    scrollProgress: currentSlideIndex,
  };
};
