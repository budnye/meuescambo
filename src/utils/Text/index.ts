export const warpText = (text: string, maxWidth: number) => {
  return text.slice(0, maxWidth) + `...`;
};
