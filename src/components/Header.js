import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      // totalField: 0,
      currencyField: 'BRL',
    };
  }

  render() {
    const { email, expenses } = this.props;
    const { currencyField } = this.state;

    let valueToBRL = 0;

    expenses.forEach((element) => {
      const { value, currency, exchangeRates } = element;
      valueToBRL += parseFloat(value)
      * parseFloat(exchangeRates[currency].ask);

      // this.setState((prevState) => ({
      //   totalField: prevState.totalField + valueToBRL.toFixed(2),
      // }));

      // console.log(valueToBRL.toFixed(2));

      // return valueToBRL.toFixed(2);
    });

    return (
      <div>
        <div>
          <h4 data-testid="total-field">
            { valueToBRL.toFixed(2) }
          </h4>
        </div>
        <div>
          <h4 data-testid="header-currency-field">
            { currencyField }
          </h4>
        </div>
        <div>
          <p data-testid="email-field">
            { email }
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  currencies: store.wallet.currencies,
  expenses: store.wallet.expenses,
});

Header.propTypes = {
  email: propTypes.string.isRequired,
  expenses: propTypes.arrayOf(propTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
