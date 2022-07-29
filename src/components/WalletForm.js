import React, { Component } from 'react';
import SelectComponent from './SelectComponent';

export default class WalletForm extends Component {
  render() {
    return (
      <div>
        Despesas
        <form>
          <label htmlFor="value-input">
            Valor:
            <input
              data-testid="value-input"
              type="number"
              // onChange={ this.onInputChange }
              // value={  }
              name="value-input"
              id="value-input"
            />
          </label>
          <label htmlFor="description-input">
            Descrição:
            <input
              data-testid="description-input"
              type="text"
              // onChange={ this.onInputChange }
              // value={  }
              name="description-input"
              id="description-input"
            />
          </label>
          <SelectComponent />
          <label htmlFor="method-input">
            Método de Pagamento:
            <select
              data-testid="method-input"
              type="text"
              // onChange={ this.onInputChange }
              name="method-input"
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
              type="text"
              onChange={ this.onInputChange }
              name="tag-input"
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
            onClick={ () => {} }
          >
            Adicionar despesa
          </button>
        </form>

      </div>
    );
  }
}
