import fetch from 'node-fetch';

class LeaderboardService {
  fetchuri;

  constructor() {
    this.fetchuri =
      'http://us-central1-js-capstone-backend.cloudfunctions.net/api';
  }

  createGame = async (appInfo) => {
    const response = await fetch(`${this.fetchuri}/games`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(appInfo),
    });

    return response.json();
  };

  fetchAllScores = async (id) => {
    const response = await fetch(`${this.fetchuri}/games/${id}/scores/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.json();
  };

  fetchAllScores = async (id, score) => {
    const response = await fetch(`${this.fetchuri}/games/${id}/scores/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(score),
    });

    return response.json();
  };
}

export default LeaderboardService;
