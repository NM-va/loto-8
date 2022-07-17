import { containsElementInArr } from './containsElementInArr';

export const arrayComparison = (arr1: number[], arr2: number[]): number => {
  let arrNew = [];

  arrNew = arr1.filter((arr1Item: number) => containsElementInArr(arr2, arr1Item));

  return arrNew.length;
};
