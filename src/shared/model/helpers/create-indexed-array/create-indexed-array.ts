export const createIndexedArray = (length: number) => {
  return Array.from({ length }).map((_, i) => i);
};
