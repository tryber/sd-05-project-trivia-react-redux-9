import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Quizz from '../components/Quizz';
import Answers from '../components/Answers';
import Reset from '../components/Reset';
import Card from '../layouts/Card';
import { requestQuestions } from '../services';
import { getQuestions } from '../actions';
import RankingBtn from '../components/RankingBtn';

class GamePage extends Component {
  componentDidMount() {
    const { setQuizz } = this.props;
    const token = localStorage.getItem('token');
    requestQuestions(token)
      .then((data) => setQuizz(data));
  }

  render() {
    return (
      <Card>
        <Header />
        <Quizz />
        <Answers />
        <RankingBtn />
        <Reset />
      </Card>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setQuizz: (data) => dispatch(getQuestions(data)),
});

export default connect(null, mapDispatchToProps)(GamePage);

GamePage.propTypes = {
  setQuizz: PropTypes.func.isRequired,
};
