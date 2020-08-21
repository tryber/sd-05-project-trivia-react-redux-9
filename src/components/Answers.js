import React, { Component } from 'react';
import questions from '../mock_data/questions';

class Answers extends Component {
  render() {
    return (
      <div>
        <button data-testid="correct-answer">
          {questions.results[0].correct_answer}
        </button>
        {questions.results[0].incorrect_answers.map((wrong, index) => (
          <button data-testid={`wrong-answer-${index}`} key={index}>
            {wrong}
          </button>
        ))}
      </div>
    );
  }
}

export default Answers;
