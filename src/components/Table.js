import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { } from '../redux/actions';

class Table extends Component {
  feedExpenseTable = (spentMoney) => {
    const {
      id,
      value,
      description,
      method,
      tag,
      currency,
      exchangeRates,
    } = spentMoney;

    return (
      <tr key={ id }>
        <td>{ description }</td>
        <td>{ tag }</td>
        <td>{ method }</td>
        <td>{ parseFloat(value).toFixed(2) }</td>
        <td>{ currency }</td>
        <td>{ parseFloat(exchangeRates[currency].ask).toFixed(2) }</td>
        <td>
          { (parseFloat(value) * parseFloat(exchangeRates[currency].ask)).toFixed(2) }
        </td>
        <td>{ exchangeRates[currency].name }</td>
        <td>
          <button
            data-testid="delete-btn"
            type="button"
          >
            Editar
          </button>
        </td>
      </tr>
    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          { expenses.map((element) => this.feedExpenseTable(element)) }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (store) => ({
  expenses: store.wallet.expenses,
});

Table.propTypes = {
  expenses: propTypes.arrayOf(propTypes.object).isRequired,
};

export default connect(mapStateToProps)(Table);
