import React, { Component } from 'react';
// import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { } from '../redux/actions';

class Table extends Component {
  render() {
    return (
      <>
        <header>
          <table>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de Pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </table>
        </header>
        <div>Table</div>
      </>
    );
  }
}

export default connect()(Table);
