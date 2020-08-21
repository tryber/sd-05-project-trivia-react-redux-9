import React, { Component } from 'react';
import questions from '../mock_data/questions';
// import categories from '../mock_data/categories';

class Quizz extends Component {
  render() {
    return (
      <div>
        QUIZZ
        <p data-testid="question-category">
          Category:
          {questions.results[0].category}
        </p>
        <p data-testid="question-text">
          Question:
          {questions.results[0].question}
        </p>

      </div>
    );
  }
}

export default Quizz;
