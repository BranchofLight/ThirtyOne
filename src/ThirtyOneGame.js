import Deck from 'deck-of-cards';
import TurnManager from './TurnManager';
import { count } from './CardCounter';

const HAND_SIZE = 3;

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
    this._turnManager.currentPlayer.element.parentNode.classList.add('active');

    this.dealCards();
  }

  dealCards() {
    // Put 3 cards in each players' hand
    for (let i = 0; i < this._players.length; ++i) {
      // this._players[i].hand = this.deckPile.slice(0, 3);
      this._players[i].hand = [];
      for (let c = 0; c < HAND_SIZE; c++) {
        this.addToHand(this._players[i], this.deckPile.splice(0, 1)[0]);
      }
    }
  }

  pickFromDeck() {
    // last card
    this.addToHand(this._turnManager.currentPlayer, this.deckPile.pop());
  }

  pickFromDiscard() {
    // first card
    this.addToHand(
      this._turnManager.currentPlayer,
      this.discardPile.splice(0, 1)[0]
    );
  }

  addToHand(player, card) {
    player.hand.push(card);
    card.setSide('front');

    const index = player.hand.length - 1;
    card.mount(player.element.children[index]);
    console.log(card);
  }

  discardCard(cardPos) {
    const player = this._turnManager.currentPlayer;
    const discardCard = player.hand.splice(cardPos, 1)[0];
    discardCard.mount(document.querySelector('.discard'));
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
