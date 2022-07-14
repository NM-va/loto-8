import React, { useState } from 'react';

import { ImMagicWand } from 'react-icons/im';

import { fillArray } from '../../utils/fillArray';

import { Cell } from './Cell';

export const Ticket = (): any => {
  const [selectedElementsFirstFiled, setSelectedElementsFirstFiled] = useState<number[]>(
    [],
  );
  const [selectedElementsSecondFiled, setSelectedElementsSecondFiled] = useState<
    number[]
  >([]);

  const MAX_COUNT_SELECTED_FIRST_FIELD = 8;
  const MAX_COUNT_SELECTED_SECOND_FIELD = 2;
  const NUMBER_CELL_FIRST_FIELD = 19;
  const NUMBER_CELL_SECOND_FIELD = 2;

  const toggleSelectedCellFirstField = (numberCell: number): void => {
    const isSelected = selectedElementsFirstFiled.includes(numberCell);

    if (
      selectedElementsFirstFiled.length === MAX_COUNT_SELECTED_FIRST_FIELD &&
      !isSelected
    ) {
      return;
    }

    if (isSelected) {
      const arrSelectedElements = selectedElementsFirstFiled.filter(
        selectedNumber => selectedNumber !== numberCell,
      );

      setSelectedElementsFirstFiled(arrSelectedElements);
    } else {
      setSelectedElementsFirstFiled([...selectedElementsFirstFiled, numberCell]);
    }
  };

  const toggleSelectedCellSecondField = (numberCell: number): void => {
    const isSelected = selectedElementsSecondFiled.includes(numberCell);

    if (
      selectedElementsSecondFiled.length === MAX_COUNT_SELECTED_SECOND_FIELD &&
      !isSelected
    ) {
      return;
    }

    if (isSelected) {
      const arrSelectedElements = selectedElementsSecondFiled.filter(
        selectedNumber => selectedNumber !== numberCell,
      );

      setSelectedElementsSecondFiled(arrSelectedElements);
    } else {
      setSelectedElementsSecondFiled([...selectedElementsSecondFiled, numberCell]);
    }
  };

  const arrayNumbersFirstField = fillArray(NUMBER_CELL_FIRST_FIELD);
  const arrayNumbersSecondField = fillArray(NUMBER_CELL_SECOND_FIELD);

  return (
    <div className="card">
      <div className="cardHeader">
        <div className="titleCard">Билет 1</div>
        <button type="button" className="btnDefault">
          <ImMagicWand />
        </button>
      </div>
      <div className="fieldOne">
        <div className="titleField">
          <span className="textBold">Поле 1</span> Отметьте 8 чисел.
        </div>
        {arrayNumbersFirstField.map(number => (
          <Cell
            numberCell={number}
            key={`${number} "nad"`}
            changeSelectedCell={() => toggleSelectedCellFirstField(number)}
            isSelectedCell={selectedElementsFirstFiled.includes(number)}
          />
        ))}
      </div>
      <div className="fieldSecond">
        <div className="titleField">
          <span className="textBold">Поле 2</span> Отметьте 1 число.
        </div>
        {arrayNumbersSecondField.map(number => (
          <Cell
            numberCell={number}
            key={`${number} "nad"`}
            changeSelectedCell={() => toggleSelectedCellSecondField(number)}
            isSelectedCell={selectedElementsSecondFiled.includes(number)}
          />
        ))}
      </div>
      <div className="btnBox">
        <button type="submit" className="btnOutline">
          Показать результат
        </button>
      </div>
    </div>
  );
};
