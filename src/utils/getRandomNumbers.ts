export const getRandomNumber = (minValue: number, maxValue: number): number => {
  const min = Math.ceil(minValue);
  const max = Math.floor(maxValue);

  return Math.floor(Math.random() * (max - min)) + min;
};
