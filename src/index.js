import Deck from 'deck-of-cards';
import { bindAll } from './EventBindings';

let topCard = null;
const table = document.querySelector('.zone-deck');
const deck = Deck();
deck.mount(table);
deck.shuffle();
setTimeout(() => {
  const card = deck.cards[0];
  card.mount(table);

  card.setSide('front');
  topCard = card;
}, 500);

bindAll(topCard, {
  click: card => {
    // check whose turn
    const turnZone = document.querySelector('zone-1');
  }
});
