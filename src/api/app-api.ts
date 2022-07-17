import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const appAPI = {
  addFieldsData(data: DataType) {
    return instance.post('tickets', data);
  },
};

// types
export type SelectedNumberType = {
  firstField: number[];
  secondField: number[];
};

export type DataType = {
  selectedNumber: SelectedNumberType;
  isTicketWon: boolean;
};
