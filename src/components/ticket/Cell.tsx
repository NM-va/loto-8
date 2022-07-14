import React, { FC, useState } from 'react';

type PropsType = {
  numberCell: number;
};

export const Cell: FC<PropsType> = ({ numberCell }) => {
  const [activeElements, setActiveElements] = useState<number[]>([]);
  const MAX_COUNT_ACTIVE_FIRST_FIELD = 8;

  const setActive = (numberCell: number): any => {
    if (activeElements.length === MAX_COUNT_ACTIVE_FIRST_FIELD) {
      return;
    }
    setActiveElements([...activeElements, numberCell]);
  };

  const isActive = activeElements.find(number => number) === numberCell ? 'active' : '';

  return (
    <button type="button" className={isActive} onClick={() => setActive(numberCell)}>
      {numberCell}
    </button>
  );
};
