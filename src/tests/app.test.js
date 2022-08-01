import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRedux, renderWithRouterAndRedux } from './helpers/renderWith';
import Login from '../pages/Login';
import Wallet from '../pages/Wallet';
import userEvent from '@testing-library/user-event';
// import Header from '../components/Header';
import { deleteExpenseAction } from '../redux/actions';


describe('Testa se a aplicação', () => {
  test('renderiza corretamente a página de login', () => {
    const { history } = renderWithRouterAndRedux(<Login /> );
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const button = screen.getByRole('button');
    const { pathname } = history.location;

    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('placeholder')
    expect(passwordInput).toBeDefined();
    expect(button).toHaveTextContent('Entrar');
    expect(button).toHaveAttribute('disabled');
    expect(pathname).toBe('/');

    userEvent.type(emailInput, 'juca@trybe.com');
    userEvent.type(passwordInput, '272727');
    
    // userEvent.click(button);

  })
  test('renderiza corretamente a página de carteira', () => {
    renderWithRedux(<Wallet />, { initialState: { user: {email: 'juca@trybe.com' } } });
    const totalField = screen.getByTestId('total-field');
    const currencyField = screen.getByTestId('header-currency-field');
    const table = screen.getByRole('table').querySelector('thead').querySelector('tr').querySelector('th');
    const emailField = screen.getByTestId('email-field');
    const addExpenseBtn = screen.getByRole('button');
    const valueInput = screen.getByTestId('value-input');
    const descriptionInput = screen.getByTestId('description-input');

    expect(totalField.innerHTML).toBe('0.00')
    expect(currencyField.innerHTML).toBe('BRL');
    expect(currencyField).toBeDefined();
    // expect(table).toHaveLength(1);
    expect(emailField).toHaveTextContent('juca@trybe.com');
    expect(typeof deleteExpenseAction).toBe('function');

    userEvent.type(valueInput, 10);
    userEvent.type(descriptionInput, 'lanche');
    userEvent.click(addExpenseBtn);

    expect(table.innerHTML).toBe('Descrição');

  })
  // test('renderiza corretamente o componente header', () => {
  //   renderWithRedux(<Header />, { INITIAL_STATE: { wallet: { mock } } });

    
  // })
});
