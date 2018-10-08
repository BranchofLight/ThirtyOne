import ThirtyOneGame from './ThirtyOneGame';

let thirtyOneGame;

describe('the game', () => {
  describe('instantiation', () => {
    beforeEach(() => {
      const players = [
        {
          name: 'Abe',
        },
        {
          name: 'Scott',
        },
      ];
      const deckPileContainer = null; //document.createElement('<div>');
      const discardPileContainer = null; //document.createElement('<div>');

      thirtyOneGame = new ThirtyOneGame({
        players,
        deckPileContainer,
        discardPileContainer,
      });
    });

    it('creates a new deck', () => {
      // expect(thirtyOneGame.deckPile.length).toBe(51);
    });

    // it('creates a discard pile from the deck', () => {
    //   expect(thirtyOneGame.discardPile.length).toBe(1);
    // });
  });
});
