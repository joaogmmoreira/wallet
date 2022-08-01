// Coloque aqui suas actions
// import { LOGIN } from './actionTypes';

import getCurrencies from '../../services/fetchCurrencies';

export const userAction = (value) => ({
  type: 'LOGIN',
  value,
});

export const requestCurrencies = () => ({
  type: 'REQUEST_CURRENCIES',
});

export const receiveCurrenciesSuccess = (currencies) => ({
  type: 'RECEIVE_CURRENCIES_SUCCESS',
  currencies,
});

export const receiveCurrenciesFailure = (error) => ({
  type: 'RECEIVE_CURRENCIES_FAILURE',
  error,
});

export function fetchCurrencies() {
  return async (dispatch) => {
    dispatch(requestCurrencies());
    try {
      const response = await getCurrencies();
      dispatch(receiveCurrenciesSuccess(response));
    } catch (error) {
      dispatch(receiveCurrenciesFailure(error));
    }
  };
}

export const savingState = (expenses) => ({
  type: 'SAVE_EXPENSES_TO_STATE_APP',
  expenses,
});

export const deleteExpenseAction = (id) => ({
  type: 'DELETE_EXPENSE',
  id,
});
