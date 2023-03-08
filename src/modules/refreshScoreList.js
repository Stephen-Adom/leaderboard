import LeaderboardService from './services/leaderboard.service.js';
import { saveScores } from './addScore.js';

const leaderboardservice = new LeaderboardService();

const refreshScoreList = () => {
  if (localStorage.getItem('gameId')) {
    leaderboardservice
      .fetchAllScores(localStorage.getItem('gameId'))
      .then((response) => {
        saveScores(response);
      });
  }
};

export default refreshScoreList;
