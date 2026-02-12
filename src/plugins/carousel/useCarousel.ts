import { useEffect, useRef, useState } from "react";
import { useMotionValue } from "framer-motion";
import type { ItemScrollConfig, CarouselReturn } from "./types";

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  section?.scrollIntoView({ behavior: "smooth" });
};

export const useCarousel = (
  itemCount: number,
  config?: ItemScrollConfig,
): CarouselReturn => {
  const containerRef = useRef<HTMLElement>(null!);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isScrollingRef = useRef(false);
  const currentSlideIndex = useMotionValue(0);

  const direction = config?.direction || "vertical";
  const lastItem = itemCount - 1;

  const updateIndex = (index: number) => {
    setCurrentIndex(index);
    currentSlideIndex.set(index);
  };

  const scrollToItem = (index: number) => {
    if (index < 0 || index >= itemCount) return;

    isScrollingRef.current = true;

    if (direction === "horizontal") {
      const container = containerRef.current;
      if (container) {
        container.scrollTo({
          left: index * container.clientWidth,
          behavior: "smooth",
        });
      }
    } else {
      const sections = document.querySelectorAll(".snap-section");
      sections[index]?.scrollIntoView({ behavior: "smooth" });
    }

    updateIndex(index);
    setTimeout(() => (isScrollingRef.current = false), 800);
  };

  useEffect(() => {
    if (direction === "horizontal") {
      const container = containerRef.current;
      if (!container) return;

      // Get the parent section element (the one with data-horizontal="true")
      const section = container.closest(
        '[data-horizontal="true"]',
      ) as HTMLElement;
      const wheelTarget = section || container;

      const handleWheel = (e: WheelEvent) => {
        // Always prevent default scrolling in horizontal mode
        e.preventDefault();

        if (isScrollingRef.current) return;

        if (e.deltaY > 0) {
          if (currentIndex < lastItem) {
            scrollToItem(currentIndex + 1);
          } else if (config?.onLastItemScroll) {
            scrollToSection(config.onLastItemScroll);
          }
        } else if (e.deltaY < 0) {
          if (currentIndex > 0) {
            scrollToItem(currentIndex - 1);
          } else if (config?.onFirstItemScroll) {
            scrollToSection(config.onFirstItemScroll);
          }
        }
      };

      const handleScroll = () => {
        if (isScrollingRef.current) return;

        const newIndex = Math.round(
          container.scrollLeft / container.clientWidth,
        );
        if (
          newIndex !== currentIndex &&
          newIndex >= 0 &&
          newIndex < itemCount
        ) {
          updateIndex(newIndex);
        }
      };

      wheelTarget.addEventListener("wheel", handleWheel, { passive: false });
      container.addEventListener("scroll", handleScroll);

      return () => {
        wheelTarget.removeEventListener("wheel", handleWheel);
        container.removeEventListener("scroll", handleScroll);
      };
    } else {
      let lastHorizontalSection: Element | null = null;

      const isInHorizontalSection = () => {
        const horizontalSection = document.querySelector(
          '[data-horizontal="true"]',
        );
        if (!horizontalSection) return false;

        const rect = horizontalSection.getBoundingClientRect();
        const viewportMid = window.innerHeight / 2;
        return rect.top <= viewportMid && rect.bottom >= viewportMid;
      };

      const handleWheel = (e: WheelEvent) => {
        const horizontalSection = document.querySelector(
          '[data-horizontal="true"]',
        );

        // Check if we're entering the horizontal section
        if (horizontalSection && !lastHorizontalSection) {
          const rect = horizontalSection.getBoundingClientRect();
          const entering = rect.top < window.innerHeight && rect.bottom > 0;

          if (entering) {
            lastHorizontalSection = horizontalSection;

            if (e.deltaY > 0) {
              const container = horizontalSection as HTMLElement;
              container.scrollTo({ left: 0, behavior: "auto" });
            } else {
              const container = horizontalSection as HTMLElement;
              const slideWidth = container.clientWidth;
              container.scrollTo({
                left: (itemCount - 1) * slideWidth,
                behavior: "auto",
              });
            }
          }
        } else if (!horizontalSection || !isInHorizontalSection()) {
          lastHorizontalSection = null;
        }

        if (isInHorizontalSection()) {
          e.preventDefault();
          return;
        }

        // Always prevent default scrolling in vertical mode
        e.preventDefault();

        if (isScrollingRef.current) return;

        if (e.deltaY > 0) {
          if (currentIndex < lastItem) {
            scrollToItem(currentIndex + 1);
          } else if (config?.onLastItemScroll) {
            scrollToSection(config.onLastItemScroll);
          }
        } else if (e.deltaY < 0) {
          if (currentIndex > 0) {
            scrollToItem(currentIndex - 1);
          } else if (config?.onFirstItemScroll) {
            scrollToSection(config.onFirstItemScroll);
          }
        }
      };

      const handleScroll = () => {
        if (isScrollingRef.current) return;

        const sections = document.querySelectorAll(".snap-section");
        const scrollMid = window.scrollY + window.innerHeight / 2;

        sections.forEach((section, index) => {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY;
          const sectionBottom = sectionTop + rect.height;

          if (scrollMid >= sectionTop && scrollMid < sectionBottom) {
            if (index !== currentIndex && index >= 0 && index < itemCount) {
              updateIndex(index);
            }
          }
        });
      };

      window.addEventListener("wheel", handleWheel, { passive: false });
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("wheel", handleWheel);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [currentIndex, config, itemCount, direction, lastItem]);

  return {
    containerRef,
    currentIndex,
    scrollToNext: () => scrollToItem(currentIndex + 1),
    scrollToIndex: scrollToItem,
    scrollToLast: () => scrollToItem(lastItem),
    scrollProgress: currentSlideIndex,
  };
};
