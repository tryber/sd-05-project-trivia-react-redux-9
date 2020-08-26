import React from 'react';
import Header from '../components/Header';
import Quizz from '../components/Quizz';
import Answers from '../components/Answers';
import Reset from '../components/Reset';
import Card from '../layouts/Card';
import RankingBtn from '../components/RankingBtn';

const GamePage = () => (
  <Card>
    <Header />
    <Quizz />
    <Answers />
    <RankingBtn />
    <Reset />
  </Card>
);

export default GamePage;
