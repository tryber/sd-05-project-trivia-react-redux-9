import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import questions from '../mock_data/questions';

class Quizz extends Component {
  render() {
    const { counter, shuffle } = this.props;
    // console.log(shuffle[counter]);
    return (
      <div>
        {
      (counter < 5) ? (
        <div>
          <p data-testid="question-category">
            Category:
            {questions.results[shuffle[counter]].category}
          </p>
          <p data-testid="question-text">
            {`Question 0${counter + 1}: `}
            {questions.results[shuffle[counter]].question}
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
});

export default connect(mapStateToProps)(Quizz);

Quizz.propTypes = {
  counter: PropTypes.number.isRequired,
  shuffle: PropTypes.arrayOf(PropTypes.number).isRequired,
};
