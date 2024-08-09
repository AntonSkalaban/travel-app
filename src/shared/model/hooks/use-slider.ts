import { useState } from "react";

export const useSlider = (totalSlides: number) => {
  const [page, setPage] = useState(0);

  const isFirstSlide = page === 0;
  const isLastSlide = -page === totalSlides - 1;

  const toNextSlide = () => {
    setPage((prev) => prev - 1);
  };

  const toPrevSlide = () => {
    setPage((prev) => prev + 1);
  };

  return {
    page,
    toNextSlide,
    toPrevSlide,
    isFirstSlide,
    isLastSlide,
  };
};
