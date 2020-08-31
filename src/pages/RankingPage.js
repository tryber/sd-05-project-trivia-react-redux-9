import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../layouts/Card';
import Reset from '../components/Reset';
import '../App.css';

const ranking = JSON.parse(localStorage.getItem('ranking')) || [];
const rankingSorted = ranking.sort((a, b) => b.score - a.score);

class RankingPage extends Component {
  render() {
    const { hash } = this.props;
    return (
      <div>
        <Card>
          <Reset />
          <h1 data-testid="ranking-title">Ranking</h1>
          <div className="wrapper">
            {rankingSorted.map((user, index) => (
              <div>
                <img src={`https://www.gravatar.com/avatar/${hash}`} alt={user.name} />
                <p>
                  Player:
                  <span data-testid={`player-name-${index}`}>{user.name}</span>
                </p>
                <p>
                  Score:
                  <span data-testid={`player-score-${index}`}>{user.score}</span>
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  hash: state.requestReducer.hash,
});

export default connect(mapStateToProps)(RankingPage);

RankingPage.propTypes = {
  hash: PropTypes.string.isRequired,
};
