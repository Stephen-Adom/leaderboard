import './styles.css';
import {
  homeLayout,
  renderScoresInDOM,
  LeaderboardService,
  addScore,
  saveScores,
  refreshScoreList,
} from './modules';

const mainContainer = document.querySelector('main');
const leaderboardservice = new LeaderboardService();

const initialiseGame = () => {
  return new Promise((resolve, reject) => {
    if (localStorage.getItem('gameId')) {
      resolve(localStorage.getItem('gameId'));
    } else {
      leaderboardservice
        .createGame({
          name: 'Alaska Game',
        })
        .then((response) => {
          if (response && response.result) {
            const { result } = response;
            localStorage.setItem('gameId', result.split(' ')[3]);
            resolve(localStorage.getItem('gameId'));
          } else {
            reject('error has occured');
          }
        });
    }
  });
};

const fetchAllScores = () => {
  initialiseGame()
    .then((gameid) => {
      return leaderboardservice.fetchAllScores(gameid);
    })
    .then((response) => {
      if (response) {
        saveScores(response);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

window.addEventListener('DOMContentLoaded', () => {
  mainContainer.innerHTML = homeLayout();
  setTimeout(() => {
    const scoreboard = document.querySelector('.scoreboard');
    const form = document.querySelector('form');
    const refreshBtn = document.querySelector('.refresh-btn');

    renderScoresInDOM(scoreboard);

    fetchAllScores();

    form.addEventListener('submit', addScore);

    refreshBtn.addEventListener('click', refreshScoreList);
  }, 50);
});

export default leaderboardservice;
