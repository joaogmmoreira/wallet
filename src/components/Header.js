import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      totalField: 0,
      currencyField: 'BRL',
    };
  }

  render() {
    const { email } = this.props;
    const { totalField, currencyField } = this.state;
    return (
      <div>
        <div>
          <h4 data-testid="total-field">
            { totalField }
          </h4>
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

Header.propTypes = {
  email: propTypes.string.isRequired,
};

export default connect()(Header);
