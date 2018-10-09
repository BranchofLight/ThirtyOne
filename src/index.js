import Deck from 'deck-of-cards';
import { bindAll } from './EventBindings';
import ThirtyOneGame from './ThirtyOneGame';

let topCard = null;
const table = document.querySelector('.zone-deck');

const Game = new ThirtyOneGame({
  players: [
    { name: 'Scott', element: document.querySelector('.zone-1 .hand') },
    { name: 'Abe', element: document.querySelector('.zone-2 .hand') }
  ],
  deckPileContainer: table,
  discardPileContainer: document.querySelector('.discard')
});

bindAll({
  deckClick: () => Game.pickFromDeck(),
  discardClick: () => Game.pickFromDiscard()
});
