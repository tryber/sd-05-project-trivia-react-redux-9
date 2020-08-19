import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setStatus, thunkRequest } from '../actions';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
    };
    this.checkLogin = this.checkLogin.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.getName = this.getName.bind(this);
  }

  getEmail() {
    const { email } = this.state;
    return (
      <label htmlFor="email-input">
        Email:
        <input
          data-testid="input-gravatar-email"
          value={email}
          placeholder="Digite seu e-mail"
          onChange={(e) => this.setState({ email: e.target.value })}
        />
      </label>
    );
  }

  getName() {
    const { name } = this.state;
    return (
      <label htmlFor="name-input">
        Name:
        <input
          data-testid="input-player-name"
          value={name}
          placeholder="Digite seu nome"
          onChange={(e) => this.setState({ name: e.target.value })}
        />
      </label>
    );
  }

  // função que verifica se os campos email e nome foram preenchidos
  // pra então habilitar o botão "jogar"
  checkLogin() {
    const { email, name } = this.state;
    if (!email || !name) return true;
    return false;
  }

  // função que é chamada ao clicar o botão "jogar"
  clickPlayButton(email, name) {
    const { data, setLogin } = this.props;
    setLogin(email, name);
    thunkRequest();
    console.log(data);
  }

  render() {
    const { name, email } = this.state;
    // const { setLogin } = this.props;
    return (
      <div>
        <form>
          {this.getEmail()}
          <br />
          {this.getName()}
          <br />
          <Link to="/game">
            <button
              data-testid="btn-play"
              disabled={this.checkLogin()}
              onClick={() => this.clickPlayButton(email, name)}
              type="button"
            >
              Jogar
            </button>
          </Link>
          <Link to="/settings">
            <button data-testid="btn-settings" type="button"> Configurações </button>
          </Link>
          <Link to="/ranking">
            Ranking
          </Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.requestReducer.data,
  // getMail: state.loginReducer.email,
  // getName: state.loginReducer.name,
});

const mapDispatchToProps = (dispatch) => ({
  setLogin: (email, name) => dispatch(setStatus(email, name)),
  thunkRequest: () => dispatch(thunkRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

HomePage.propTypes = {
  setLogin: PropTypes.func.isRequired,
  // thunkRequest: PropTypes.func.isRequired,
  data: PropTypes.string.isRequired,
  // getMail: PropTypes.func.isRequired,
  // getName: PropTypes.func.isRequired,
};
