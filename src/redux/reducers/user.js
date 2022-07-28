// Esse reducer será responsável por tratar as informações da pessoa usuária
// import { LOGIN } from '../actions/actionTypes';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'LOGIN':
    return {
      email: action.value,
    };
  default:
    return state;
  }
};

export default user;

// {
//   user: {
//     email: '', // string que armazena o email da pessoa usuária
//   }
// }
