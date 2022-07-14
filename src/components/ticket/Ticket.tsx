import React from 'react';

import { fillArray } from '../../utils/fillArray';

import { Cell } from './Cell';

export const Ticket = (): any => {
  const NUMBER_CELL_FIRST_FIELD = 19;

  const arrayNumbersFirstField = fillArray(NUMBER_CELL_FIRST_FIELD);

  return (
    <div className="card">
      <div className="cardHeader">
        <div className="titleCard">Билет 1</div>
        <button type="button"> + </button>
      </div>
      <div className="fieldOne">
        <div className="titleField">
          <span className="titleBold">Поле 1</span> Отметьте 8 чисел.
        </div>
        {arrayNumbersFirstField.map(number => (
          <Cell numberCell={number} key={`${number} "sss"`} />
        ))}
      </div>
      <div className="fieldSecond">
        <div className="titleField">
          <span className="titleBold">Поле 2</span> Отметьте 2 числа.
        </div>
      </div>
    </div>
  );
};
