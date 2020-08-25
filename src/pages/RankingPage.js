import React, { Component } from 'react';
import { connect } from 'react-redux';
import Reset from '../components/Reset';
import PropTypes from 'prop-types';

const ranking = JSON.parse(localStorage.getItem('ranking'))
  .sort((a, b) => b.score - a.score);

// console.log(ranking);

class RankingPage extends Component {
  render() {
    const { hash } = this.props;
    return (
      <div>
        <Reset />
        <h1 data-testid="ranking-title">Ranking</h1>
        {ranking.map((user, index) => {
          return (
            <div>
              <img src={`https://www.gravatar.com/avatar/${hash}`} alt={user.name} />
              <p data-testid={`player-name-${index}`}>
                Player:
                {user.name}
              </p>
              <p data-testid={`player-score-${index}`}>
                Score:
                {user.score}
              </p>
            </div>
          );
        })}
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
