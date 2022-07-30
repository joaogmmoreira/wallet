import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies, savingState } from '../redux/actions';
// import store from '../redux/store';

class WalletForm extends Component {
  constructor() {
    super();

    const ALIMENTAÇÃO = 'Alimentação';

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: ALIMENTAÇÃO,
      exchangeRates: {},
    };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    // console.log(currencies);
    getCurrencies();
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      // console.log(this.state);
    });
  }

  fetchCurrenciesToState = async () => {
    const CURRENCIES_ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(`${CURRENCIES_ENDPOINT}`);
    const json = await response.json();
    const resolve = Promise.resolve(json);

    return resolve;
  }

  saveExpensesInfo = async () => {
    const { dispatchExpenses, expenses } = this.props;
    const exchangeRates = await this.fetchCurrenciesToState();
    // console.log(store.getState());

    const newId = expenses.length;

    this.setState((prevState) => ({
      id: newId,
      exchangeRates,
    }), () => dispatchExpenses(this.state));

    const ALIMENTAÇÃO = 'Alimentação';

    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: ALIMENTAÇÃO,
    });
  }

  render() {
    const { currencies } = this.props;

    const {
      value,
      description,
    } = this.state;

    return (
      <div>
        Despesas
        <form>
          <label htmlFor="value-input">
            Valor:
            <input
              data-testid="value-input"
              type="number"
              onChange={ this.onInputChange }
              value={ value }
              name="value"
              id="value-input"
            />
          </label>
          <label htmlFor="description-input">
            Descrição:
            <input
              data-testid="description-input"
              type="text"
              onChange={ this.onInputChange }
              value={ description }
              name="description"
              id="description-input"
            />
          </label>
          <label htmlFor="currency-input">
            Moeda:
            <select
              data-testid="currency-input"
              onChange={ this.onInputChange }
              name="currency"
              id="currency-input"
            >
              {currencies.map((element) => (
                <option
                  key={ element }
                  value={ element }
                >
                  {element}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="method-input">
            Método de Pagamento:
            <select
              data-testid="method-input"
              onChange={ this.onInputChange }
              name="method"
              id="method-input"
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag-input">
            Categoria:
            <select
              data-testid="tag-input"
              onChange={ this.onInputChange }
              name="tag"
              id="tag-input"
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button
            type="button"
            onClick={ this.saveExpensesInfo }
          >
            Adicionar despesa
          </button>
        </form>

      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  currencies: store.wallet.currencies,
  expenses: store.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
  dispatchExpenses: (expenses) => dispatch(savingState(expenses)),
});

WalletForm.propTypes = {
  getCurrencies: propTypes.func.isRequired,
  currencies: propTypes.objectOf(propTypes.object).isRequired,
  dispatchExpenses: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
