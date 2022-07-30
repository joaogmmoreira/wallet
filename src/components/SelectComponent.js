import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../redux/actions';

class SelectComponent extends Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    // console.log(currencies);
    getCurrencies();
  }

  render() {
    const { currencies } = this.props;
    return (
      <label htmlFor="currency-input">
        Moeda:
        <select
          data-testid="currency-input"
          type="text"
          name="currency"
          id="currency-input"
          value={ currency }
        >
          {Object.keys(currencies).map((element) => (
            <option
              key={ element }
              value={ element }
            >
              {element}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

const mapStateToProps = (store) => ({
  currencies: store.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

SelectComponent.propTypes = {
  getCurrencies: propTypes.func.isRequired,
  currencies: propTypes.objectOf(propTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectComponent);
