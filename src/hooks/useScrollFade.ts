import { useEffect, useRef } from "react";

const useScrollFade = () => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const distanceFromTop = rect.top;
      const fadeStart = windowHeight * 0.8; // Start fading when 80% of the element is in view
      const fadeEnd = windowHeight * 0.2; // End fading when 20% of the element is in view
      let opacity = 1;
      if (distanceFromTop < fadeStart) {
        if (distanceFromTop > fadeEnd) {
          opacity = (distanceFromTop - fadeEnd) / (fadeStart - fadeEnd);
        } else {
          opacity = 0;
        }
        element.style.opacity = opacity.toString();
      }
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    };
  }, []);

  return ref;
};

export default useScrollFade;
