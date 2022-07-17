import React, { FC, PropsWithChildren } from 'react';

import { containsElementInArr } from '../../utils/containsElementInArr';

import { Cell } from './Cell';

type PropsType = {
  arrayNumbers: number[];
  selectedElements: number[];
  setSelectedElements: (arrNumbers: number[]) => void;
  maxCountSelected: number;
};

export const Field: FC<PropsWithChildren<PropsType>> = ({
  children,
  arrayNumbers,
  selectedElements,
  setSelectedElements,
  maxCountSelected,
}) => {
  const toggleSelectedCell = (numberCell: number, selectedElements: number[]): void => {
    const isSelected = containsElementInArr(selectedElements, numberCell);

    if (selectedElements.length === maxCountSelected && !isSelected) {
      return;
    }

    if (isSelected) {
      const arrSelectedElements = selectedElements.filter(
        selectedNumber => selectedNumber !== numberCell,
      );

      setSelectedElements(arrSelectedElements);
    } else {
      setSelectedElements([...selectedElements, numberCell]);
    }
  };

  return (
    <div className="field">
      {children}
      {arrayNumbers.map(number => (
        <Cell
          numberCell={number}
          key={`${number} "nad"`}
          changeSelectedCell={() => toggleSelectedCell(number, selectedElements)}
          isSelectedCell={containsElementInArr(selectedElements, number)}
        />
      ))}
    </div>
  );
};
