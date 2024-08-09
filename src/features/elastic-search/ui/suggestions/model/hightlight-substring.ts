export const highlightSustrting = (
  content: string,
  subString: string,
  hihtlightClassName: string,
) => {
  return content.replace(
    new RegExp(subString, "gi"),
    `<span class=${hihtlightClassName}>$&</span>`,
  );
};
