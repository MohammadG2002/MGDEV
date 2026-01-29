declare module "scroll-snap" {
  interface ScrollSnapOptions {
    snapDestinationX?: string;
    snapDestinationY?: string;
    duration?: number;
    threshold?: number;
    enableKeyboard?: boolean;
    showArrows?: boolean;
    snapStop?: boolean;
    easing?: string;
  }

  interface ScrollSnapInstance {
    bind: () => void;
    unbind: () => void;
  }

  function createScrollSnap(
    element: HTMLElement,
    options?: ScrollSnapOptions,
  ): ScrollSnapInstance;

  export default createScrollSnap;
}
