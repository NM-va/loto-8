export const fillArray = (countElements: number): number[] => {
  const arr: number[] = [];

  if (countElements) {
    let i = 1;

    while (i <= countElements) {
      arr.push(i);
      i += 1;
    }
  }

  return arr;
};
