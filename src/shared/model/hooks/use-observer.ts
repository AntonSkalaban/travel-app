import { useEffect } from "react";

export const useObserver = (
  loader: HTMLDivElement | null,
  isActive: boolean,
  trigger: () => void,
) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];

      if (target.isIntersecting && isActive) {
        trigger();
      }
    });

    if (loader) observer.observe(loader);

    return () => {
      if (loader) observer.unobserve(loader);
    };
  }, [isActive, loader, trigger]);
};
