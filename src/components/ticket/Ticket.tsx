import React from 'react';

import { ImMagicWand } from 'react-icons/im';

import { fillArray } from '../../utils/fillArray';

import { Cell } from './Cell';

export const Ticket = (): any => {
  const NUMBER_CELL_FIRST_FIELD = 19;
  const NUMBER_CELL_SECOND_FIELD = 2;

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
          <Cell numberCell={number} key={`${number} "nad"`} />
        ))}
      </div>
      <div className="fieldSecond">
        <div className="titleField">
          <span className="textBold">Поле 2</span> Отметьте 2 числа.
        </div>
        {arrayNumbersSecondField.map(number => (
          <Cell numberCell={number} key={`${number} "sss"`} />
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
