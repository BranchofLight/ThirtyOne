import Deck from 'deck-of-cards';

const table = document.querySelector('.table');
const deck = Deck();
deck.mount(table);
deck.fan();
