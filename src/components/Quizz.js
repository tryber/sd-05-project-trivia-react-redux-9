import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import questions from '../mock_data/questions';
// import categories from '../mock_data/categories';

class Quizz extends Component {
  render() {
    const { counter } = this.props;
    return (
      <div>
        {
      (counter < 5) ? (
        <div>
          <p data-testid="question-category">
            Category:
            {questions.results[counter].category}
          </p>
          <p data-testid="question-text">
            {`Question 0${counter + 1}: `}
            {questions.results[counter].question}
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
});

export default connect(mapStateToProps)(Quizz);

Quizz.propTypes = {
  counter: PropTypes.number.isRequired,
};
