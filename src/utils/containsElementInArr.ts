export const containsElementInArr = (arrElements: number[], number: number): boolean => {
  return new Set(arrElements).has(number);
};
