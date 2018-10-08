import shuffle from 'lodash.shuffle';

export default class TurnManager {
  constructor (players) {
    this._players = players;

    this.reset();
  }

  next () {
    ++this._currentTurn;
  }

  reset () {
    this._players = shuffle(this._players);
    this._currentTurn = 0;
  }

  get currentPlayer () {
    return this._players[this._currentTurn % this._players.length]
  }
}
