export const scroll = (targetId: string) => {
  const section = document.querySelector(targetId);
  section?.scrollIntoView({ behavior: "smooth", block: "start" });
};
