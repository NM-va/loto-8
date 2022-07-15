import { getRandomNumber } from './getRandomNumbers';

const START_NUMBER_CELL = 1;

export const getArrayRandomNumbers = (
  maxCountElements: number,
  rangeNumbers: number,
): number[] => {
  const arr: number[] = [];

  const fillArrayRandom = (maxCountElements: number): void => {
    while (arr.length < maxCountElements) {
      const randomNumber: number = getRandomNumber(START_NUMBER_CELL, rangeNumbers);

      if (arr.includes(randomNumber)) {
        fillArrayRandom(maxCountElements);
      } else {
        arr.push(randomNumber);
      }
    }
  };

  if (arr.length > maxCountElements) {
    return arr;
  }

  fillArrayRandom(maxCountElements);

  return arr;
};
