import Deck from 'deck-of-cards';

const table = document.querySelector('.zone-deck');
const deck = Deck();
deck.mount(table);
deck.shuffle();
setTimeout(() => {
  const card = deck.cards[0];
  card.mount(table);

  card.setSide('front');
}, 500);
