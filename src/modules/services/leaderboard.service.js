class LeaderboardService {
  fetchuri;

  gameId;

  constructor() {
    this.fetchuri = 'http://us-central1-js-capstone-backend.cloudfunctions.net/api';
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
    try {
      const response = await fetch(`${this.fetchuri}/games/${id}/scores`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response.json();
    } catch (error) {
      return error;
    }
  };

  saveScore = async (id, score) => {
    try {
      const response = await fetch(`${this.fetchuri}/games/${id}/scores`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(score),
      });

      return response.json();
    } catch (error) {
      return error;
    }
  };
}

export default LeaderboardService;
