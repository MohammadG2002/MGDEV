import { useEffect, type RefObject } from "react";

const useHorizontalScroll = (ref: RefObject<HTMLElement | null>) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;

      const maxScrollLeft = element.scrollWidth - element.clientWidth;

      const goingUp = e.deltaY < 0;
      const goingDown = e.deltaY > 0;

      // threshold is REQUIRED with snap
      const EDGE = 80;

      const canScrollLeft = element.scrollLeft > EDGE;
      const canScrollRight = element.scrollLeft < maxScrollLeft - EDGE;

      // 🚪 Let vertical scroll happen
      if ((goingUp && !canScrollLeft) || (goingDown && !canScrollRight)) {
        return;
      }

      // ⛔ Hijack wheel → horizontal scroll
      e.preventDefault();
      element.scrollLeft += e.deltaY;
    };

    element.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      element.removeEventListener("wheel", handleWheel);
    };
  }, [ref]);
};

export default useHorizontalScroll;
