import './styles.css';
import {
  homeLayout,
  displayAllScores,
  LeaderboardService,
  Score,
} from './modules';

const mainContainer = document.querySelector('main');
const leaderboardservice = new LeaderboardService();
const score = new Score();

const initialiseGame = () => {
  return new Promise((resolve, reject) => {
    if (localStorage.getItem('gameId')) {
      leaderboardservice.saveGameID(localStorage.getItem('gameId'));
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
            leaderboardservice.saveGameID(result.split(' ')[3]);
            resolve(leaderboardservice.getGameID());
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
      if (response.status === 200) {
        saveScores(response);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const saveScores = (response) => {
  response.json().then((scores) => {
    localStorage.setItem('scores', JSON.stringify(scores.result));
    score.loadScores();
  });
};

window.addEventListener('DOMContentLoaded', () => {
  mainContainer.innerHTML = homeLayout();
  setTimeout(() => {
    const scoreboard = document.querySelector('.scoreboard');
    const htmlScores = displayAllScores();
    scoreboard.innerHTML = htmlScores;
    fetchAllScores();
    displayAllScores();
  }, 50);
});
