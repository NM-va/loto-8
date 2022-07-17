import React, { FC, useState } from 'react';

import { AxiosError } from 'axios';
import { ImMagicWand } from 'react-icons/im';

import { appAPI, SelectedNumberType } from '../../api/app-api';
import {
  COUNT_MATCH_FIRST_FIELD,
  COUNT_MATCH_FIRST_FIELD_SECOND_CASE,
  COUNT_MATCH_SECOND_FIELD,
  COUNT_RETRY,
  INTERVAL_RETRY,
  MAX_COUNT_SELECTED_FIRST_FIELD,
  MAX_COUNT_SELECTED_SECOND_FIELD,
  NUMBER_CELL_FIRST_FIELD,
  NUMBER_CELL_SECOND_FIELD,
} from '../../constants/constants';
import { arrayComparison } from '../../utils/arrayComparison';
import { fillArray } from '../../utils/fillArray';
import { getArrayRandomNumbers } from '../../utils/getArrayRundomNumbers';

import { Field } from './Field';

type PropsType = {
  isTicketWon: boolean;
  setIsTicketWon: (isWon: boolean) => void;
};

export const Ticket: FC<PropsType> = ({ isTicketWon, setIsTicketWon }) => {
  const [firstField, setSelectedElementsFirstFiled] = useState<number[]>([]);
  const [secondField, setSelectedElementsSecondFiled] = useState<number[]>([]);

  const arrayNumbersFirstField = fillArray(NUMBER_CELL_FIRST_FIELD);
  const arrayNumbersSecondField = fillArray(NUMBER_CELL_SECOND_FIELD);

  let arrForFirstField: number[] = [];
  let arrForSecondField: number[] = [];
  let countQueries = 0;

  const selectedNumber: SelectedNumberType = { firstField, secondField };
  const isDisabled = !(
    firstField.length === MAX_COUNT_SELECTED_FIRST_FIELD &&
    secondField.length === MAX_COUNT_SELECTED_SECOND_FIELD
  );

  const onMakeRandomArrays = (): void => {
    arrForFirstField = getArrayRandomNumbers(
      MAX_COUNT_SELECTED_FIRST_FIELD,
      NUMBER_CELL_FIRST_FIELD,
    );

    arrForSecondField = getArrayRandomNumbers(
      MAX_COUNT_SELECTED_SECOND_FIELD,
      NUMBER_CELL_SECOND_FIELD,
    );
  };

  const sendData = async (): Promise<void> => {
    try {
      await appAPI.addFieldsData({ selectedNumber, isTicketWon });
    } catch (err) {
      const error: AxiosError = err as AxiosError;

      setTimeout(() => {
        if (countQueries < COUNT_RETRY) {
          sendData();
          countQueries += 1;
        } else {
          alert(error);
        }
      }, INTERVAL_RETRY);
    }
  };

  const calcWinner = (): void => {
    const countMatchForFirstField = arrayComparison(firstField, arrForFirstField);
    const countMatchForSecondField = arrayComparison(secondField, arrForSecondField);

    if (countMatchForFirstField > COUNT_MATCH_FIRST_FIELD) {
      setIsTicketWon(true);
    } else if (
      countMatchForFirstField > COUNT_MATCH_FIRST_FIELD_SECOND_CASE &&
      countMatchForSecondField === COUNT_MATCH_SECOND_FIELD
    ) {
      setIsTicketWon(true);
    }
  };

  const handleSubmit = (): void => {
    calcWinner();
    sendData();
    setSelectedElementsFirstFiled([]);
    setSelectedElementsSecondFiled([]);
  };

  return (
    <div className="card">
      <div className="cardHeader">
        <div className="titleCard">Билет 1</div>
        <button type="button" className="btnDefault" onClick={onMakeRandomArrays}>
          <ImMagicWand />
        </button>
      </div>
      <Field
        arrayNumbers={arrayNumbersFirstField}
        selectedElements={firstField}
        setSelectedElements={setSelectedElementsFirstFiled}
        maxCountSelected={MAX_COUNT_SELECTED_FIRST_FIELD}
      >
        <div className="titleField">
          <span className="textBold">Поле 1</span> Отметьте 8 чисел.
        </div>
      </Field>
      <Field
        arrayNumbers={arrayNumbersSecondField}
        selectedElements={secondField}
        setSelectedElements={setSelectedElementsSecondFiled}
        maxCountSelected={MAX_COUNT_SELECTED_SECOND_FIELD}
      >
        <div className="titleField">
          <span className="textBold">Поле 2</span> Отметьте 1 число.
        </div>
      </Field>
      <div className="btnBox">
        <button
          type="submit"
          disabled={isDisabled}
          className="btnOutline"
          onClick={handleSubmit}
        >
          Показать результат
        </button>
      </div>
    </div>
  );
};
