import React, { FC } from 'react';

type PropsType = {
  numberCell: number;
  changeSelectedCell: (cellNumber: number) => void;
  isSelectedCell: boolean;
};

export const Cell: FC<PropsType> = ({
  numberCell,
  changeSelectedCell,
  isSelectedCell,
}) => {
  const isSelected = isSelectedCell ? 'selected' : '';

  return (
    <button
      type="button"
      className={`${isSelected} cell`}
      onClick={() => changeSelectedCell(numberCell)}
    >
      {numberCell}
    </button>
  );
};
