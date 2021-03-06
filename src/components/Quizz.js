import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import questions from '../mock_data/questions';

class Quizz extends Component {
  render() {
    const { counter, shuffle } = this.props;
    // const { counter, shuffle, gameData } = this.props;
    // const aux = gameData;
    return (
      <div>
        {
      (counter < 5) ? (
        <div>
          <p data-testid="question-category">
            <strong>Category: </strong>
            {questions.results[shuffle[counter]].category}
            {/* {aux.gameData[shuffle[counter]].category} */}
          </p>
          <p data-testid="question-text">
            <strong>{`Question 0${counter + 1}: `}</strong>
            {questions.results[shuffle[counter]].question}
            {/* {aux.gameData[shuffle[counter]].question} */}
          </p>
        </div>
      )
        : (
          <span />
        )
}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.requestReducer.counter,
  shuffle: state.questionsReducer.shuffle,
  // gameData: state.questionsReducer,
});

export default connect(mapStateToProps)(Quizz);

Quizz.propTypes = {
  counter: PropTypes.number.isRequired,
  shuffle: PropTypes.arrayOf(PropTypes.number).isRequired,
  // gameData: PropTypes.objectOf(PropTypes.object).isRequired,
};
