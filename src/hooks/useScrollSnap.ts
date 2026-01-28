import { useEffect } from "react";

const useScrollSnap = (heroRef: React.RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    const element = heroRef.current;
    if (!element) return;

    let currentSection = Math.round(element.scrollTop / window.innerHeight);
    let isSnapping = false;

    const snapToSection = (index: number, smooth = true) => {
      isSnapping = true;

      element.scrollTo({
        top: index * window.innerHeight,
        behavior: smooth ? "smooth" : "auto",
      });

      setTimeout(() => {
        isSnapping = false;
      }, 300);
    };

    const handleScroll = () => {
      if (isSnapping) return;

      const newSection = Math.round(element.scrollTop / window.innerHeight);

      if (newSection !== currentSection) {
        currentSection = newSection;
        console.log(`New section reached: ${currentSection + 1}`);
        snapToSection(currentSection);
      }
    };

    const handleResize = () => {
      // viewport changed → re-align WITHOUT changing section
      snapToSection(currentSection, false);
    };

    element.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      element.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
};

export default useScrollSnap;
