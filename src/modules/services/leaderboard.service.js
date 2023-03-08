class LeaderboardService {
  fetchuri;
  gameId;

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
    try {
      const response = await fetch(`${this.fetchuri}/games/${id}/scores`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response;
    } catch (error) {
      return error;
    }
  };

  saveScore = async (id, score) => {
    try {
      return await fetch(`${this.fetchuri}/games/${id}/scores/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(score),
      });
    } catch (error) {
      return error;
    }
  };

  saveGameID = (id) => {
    this.gameId = id;
  };

  getGameID = () => {
    return this.gameId ? this.gameId : null;
  };
}

export default LeaderboardService;
