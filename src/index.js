import './styles.css';
import marioKart from './assets/mario-kart.jpg';

import {
  homeLayout,
  renderScoresInDOM,
  LeaderboardService,
  addScore,
  saveScores,
  addMobileScreenScore,
  refreshScoreList,
} from './modules';

const mainContainer = document.querySelector('main');
const leaderboardservice = new LeaderboardService();

const initialiseGame = () =>
  new Promise((resolve, reject) => {
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
            reject();
          }
        });
    }
  });

const fetchAllScores = () => {
  initialiseGame()
    .then((gameid) => leaderboardservice.fetchAllScores(gameid))
    .then((response) => {
      if (response) {
        saveScores(response);
      }
    });
};

window.addEventListener('DOMContentLoaded', () => {
  mainContainer.innerHTML = homeLayout();
  setTimeout(() => {
    const scoreboard = document.querySelector('.scoreboard');
    const form = document.querySelector('form');
    const refreshBtn = document.querySelector('.refresh-btn');
    const appIconImage = document.querySelector('.app_icon');
    const modalAddForm = document.querySelector('.modal-content form');

    appIconImage.setAttribute('src', marioKart);

    renderScoresInDOM(scoreboard);

    fetchAllScores();

    form.addEventListener('submit', addScore);

    refreshBtn.addEventListener('click', refreshScoreList);

    modalAddForm.addEventListener('submit', addMobileScreenScore);
  }, 50);
});
