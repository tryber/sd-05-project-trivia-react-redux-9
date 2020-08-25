import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Feedback extends React.Component {
  componentDidMount() {
    const { name, score, picture } = this.props;
    const currentPlayer = {
      name,
      score,
      picture,
    };
    const getRank = JSON.parse(localStorage.getItem('ranking'));
    if (getRank) {
      localStorage.setItem('ranking', JSON.stringify(
        [...getRank, currentPlayer],
      ));
    } else {
      localStorage.setItem('ranking', JSON.stringify(
        [currentPlayer],
      ));
    }
  }

  render() {
    const { score, assertions } = this.props;
    return (
      <div>
        <Header />
        <div>
          {assertions < 3 ? (<p data-testid="feedback-text">Podia ser melhor...</p>
          ) : (<p data-testid="feedback-text">Mandou bem!</p>)}
        </div>
        <div>
          <p>Placar Final:</p>
          <span data-testid="feedback-total-score">{score}</span>
          <p>Número de Acertos:</p>
          <span data-testid="feedback-total-question">{assertions}</span>
          <Link to="/">
            <button type="button" data-testid="btn-play-again">Jogar Novamente</button>
          </Link>
          <Link to="/ranking">
            <button type="button" data-testid="btn-ranking">Ver Ranking</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  score: state.loginReducer.score,
  assertions: state.loginReducer.assertions,
  name: state.loginReducer.name,
  picture: state.loginReducer.gravatarEmail,
});

export default connect(mapStateToProps)(Feedback);

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};
