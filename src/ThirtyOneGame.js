import Deck from 'deck-of-cards';
import TurnManager from './TurnManager';
import { count } from './CardCounter';

export default class ThirtyOneGame {
  constructor({ players, deckPileContainer, discardPileContainer }) {
    this._deckPileContainer = deckPileContainer;
    this._discardPileContainer = discardPileContainer;
    this._players = players;

    this.reset();
  }

  reset() {
    this.knocker = null;

    this._deck = Deck();
    this._deck.mount(this._deckPileContainer);
    this._deck.shuffle();

    this.discardPile = [this._deck.cards.pop()];
    this.deckPile = this._deck.cards;

    this.discardPile[0].setSide('front');
    this.discardPile[0].mount(this._discardPileContainer);

    this._turnManager = new TurnManager(this._players);

    this.dealCards();
  }

  dealCards() {
    // Put 3 cards in each players' hand
    for (let i = 0; i < this._players.length; ++i) {
      this._players[i].hand = this.deckPile.slice(0, 3);
    }
  }

  pickFromDeck() {
    const card = this.deckPile.pop();
    this.addToHand(card);
    // this._turnManager.currentPlayer.hand.push(card);
    // card.unmount();
  }

  pickFromDiscard() {
    const card = this.discardPile.splice(0, 1)[0];
    this.addToHand(card);
    // this._turnManager.currentPlayer.hand.push(card);
    // card.unmount();
  }

  addToHand(card) {
    this._turnManager.currentPlayer.hand.push(card);
    card.mount(this._turnManager.currentPlayer.element);
  }

  knock() {
    this.knocker = this.turnManager.currentPlayer;
  }

  nextTurn() {
    const hand = this.turnManager.currentPlayer.hand;

    // Determine if the user won by having 31
    if (count(hand) === 31) {
      this.win();
      return;
    }

    this.turnManager.next();

    // Determine if the user won by knocking
    if (this.turnManager.currentPlayer === this.knocker) {
      this.win();
    }
  }

  win() {
    this.over = true;
    this.onWin(this.turnManager.currentPlayer);
  }
}
