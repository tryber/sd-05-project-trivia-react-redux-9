import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Feedback extends React.Component {
  componentDidMount() {
    const { name, score, picture } = this.props;
    
  };

  render() {
    const { score, assertions } = this.props;
    return (
      <div>
        <Header />
        <div>
          {assertions < 3 ? (
            <p data-testid="feedback-text">Podia ser melhor...</p>
          ) : (
            <p data-testid="feedback-text">Mandou bem!</p>
          )}
        </div>
        <div>
          <p>
            Placar Final:
            <span data-testid="feedback-total-score">{score}</span>
            </p>
          <p>
            Número de Acertos:
            <span data-testid="feedback-total-question">{assertions}</span>
          </p>
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
  picture: state.user.gravatarEmail,
});

export default connect(mapStateToProps)(Feedback);

Feedback.propTypes = {
  score: PropTypes.string.isRequired,
  assertions: PropTypes.string.isRequired,
};
