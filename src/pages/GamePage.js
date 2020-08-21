import React, { Component } from 'react';
import Header from '../components/Header';
import Quizz from '../components/Quizz';
import Answers from '../components/Answers';
import questions from '../mock_data/questions';

class GamePage extends Component {
  componentDidMount() {
    const trivia = questions.results;
    console.log(trivia);
  }

  render() {
    return (
      <div>
        <Header />
        <Quizz />
        <Answers />
      </div>
    );
  }
}

export default GamePage;
