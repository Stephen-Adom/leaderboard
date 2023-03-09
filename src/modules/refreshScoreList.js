import LeaderboardService from './services/leaderboard.service.js';
import { saveScores } from './addScore.js';
import successAlert from './alert.js';

const leaderboardservice = new LeaderboardService();

const refreshScoreList = () => {
  if (localStorage.getItem('gameId')) {
    leaderboardservice
      .fetchAllScores(localStorage.getItem('gameId'))
      .then((response) => {
        saveScores(response);
        successAlert('Leaderboard score refreshed');
      });
  }
};

export default refreshScoreList;
