import { useEffect, useRef, type RefObject } from "react";

const useScrollSnap = (heroRef: RefObject<HTMLDivElement | null>) => {
  const currentSectionRef = useRef(0);

  useEffect(() => {
    const element = heroRef.current;
    if (!element) return;

    const handleScroll = () => {
      // Just track the current section for logging / UI
      const newSection = Math.round(element.scrollTop / window.innerHeight);
      if (newSection !== currentSectionRef.current) {
        currentSectionRef.current = newSection;
      }
    };

    element.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, [heroRef]);

  return { currentSectionRef };
};

export default useScrollSnap;
