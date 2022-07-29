import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { userAction } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isSaveButtonDisabled: true,
    };
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      this.handleButton();
    });
  }

  handleButton = () => {
    const { email, password } = this.state;
    const valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript
    const passwordMinLength = 6;

    if (email.match(valid) && password.length >= passwordMinLength) {
      return this.setState({
        isSaveButtonDisabled: false,
      });
    }
    return this.setState({
      isSaveButtonDisabled: true,
    });
  }

  handleLogin = () => {
    const { history, dispatchLogin } = this.props;
    const { email } = this.state;
    dispatchLogin(email);
    history.push('/carteira');
  }

  render() {
    const { isSaveButtonDisabled, email, password } = this.state;

    return (
      <div>
        <form>
          <input
            data-testid="email-input"
            type="email"
            onChange={ this.onInputChange }
            placeholder="E-mail"
            value={ email }
            name="email"
          />
          <div>
            <input
              data-testid="password-input"
              type="password"
              onChange={ this.onInputChange }
              placeholder="Password"
              value={ password }
              name="password"
            />
          </div>
          <div>
            <button
              type="button"
              disabled={ isSaveButtonDisabled }
              onClick={ this.handleLogin }
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (value) => dispatch(userAction(value)),
});

Login.propTypes = {
  history: propTypes.shape({
    push: propTypes.func,
  }).isRequired,
  dispatchLogin: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
