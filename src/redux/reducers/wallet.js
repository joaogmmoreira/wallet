// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada};
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'REQUEST_CURRENCIES':
    return {
      ...state,
      // loading: true,
    };
  case 'RECEIVE_CURRENCIES_SUCCESS':
    return {
      ...state,
      currencies: action.currencies,
      // loading: false,
    };

  case 'RECEIVE_CURRENCIES_FAILURE':
    return {
      ...state,
      error: action.error,
      // loading: false,
    };

  case 'SAVE_EXPENSES_TO_STATE_APP':
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
      // loading: false,
    };
  default:
    return state;
  }
};

export default wallet;
