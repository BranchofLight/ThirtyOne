import ThirtyOneGame from './ThirtyOneGame';

let thirtyOneGame;

jest.mock('deck-of-cards', () => {
  return class Deck {
    constructor() {
      this.cards = Array(52).fill({
        setSide() {},
        mount() {},
      });
    }
    mount() {}
    shuffle() {}
  };
});

describe('the game', () => {
  describe('instantiation', () => {
    beforeEach(() => {
      const players = [
        {
          name: 'Abe',
          element: document.createElement('div'),
        },
        {
          name: 'Scott',
          element: document.createElement('div'),
        },
      ];
      const deckPileContainer = document.createElement('div');
      const discardPileContainer = document.createElement('div');

      thirtyOneGame = new ThirtyOneGame({
        players,
        deckPileContainer,
        discardPileContainer,
      });
    });

    it('creates a new deck', () => {
      expect(thirtyOneGame.deckPile.length).toBe(45); // Since 3 cards per player were dealt
    });

    it('creates a discard pile from the deck', () => {
      expect(thirtyOneGame.discardPile.length).toBe(1);
    });
  });

  describe('knock', () => {
    beforeEach(() => {
      const players = [
        {
          name: 'Abe',
          element: document.createElement('div'),
        },
      ];
      const deckPileContainer = document.createElement('div');
      const discardPileContainer = document.createElement('div');

      thirtyOneGame = new ThirtyOneGame({
        players,
        deckPileContainer,
        discardPileContainer,
      });
    });

    it('sets the knocker', () => {
      thirtyOneGame.knock();
      expect(thirtyOneGame.knocker.name).toEqual('Abe');
    });

    it('does nothing if the game is over', () => {
      thirtyOneGame.over = true;
      thirtyOneGame.knock();
      expect(thirtyOneGame.knocker).toBeFalsy();
    });
  });

  describe('nextTurn', () => {
    beforeEach(() => {
      const players = [
        {
          name: 'Abe',
          element: document.createElement('div'),
        },
        {
          name: 'Scott',
          element: document.createElement('div'),
        },
      ];
      const deckPileContainer = document.createElement('div');
      const discardPileContainer = document.createElement('div');

      thirtyOneGame = new ThirtyOneGame({
        players,
        deckPileContainer,
        discardPileContainer,
        onWin: jest.fn(),
      });
    });

    it('progresses to the next player\'s turn', () => {
      const firstPlayer = thirtyOneGame._turnManager.currentPlayer;
      thirtyOneGame.nextTurn();
      expect(thirtyOneGame._turnManager.currentPlayer).not.toBe(firstPlayer);
    });

    it('calls a win if the next player is the knocker', () => {
      const firstPlayer = thirtyOneGame._turnManager.currentPlayer;
      thirtyOneGame.knock();
      thirtyOneGame.nextTurn();
      expect(thirtyOneGame.onWin).not.toHaveBeenCalled()
      thirtyOneGame.nextTurn();
      expect(thirtyOneGame.onWin).toHaveBeenCalledWith(firstPlayer);
    });

    it('calls a win if the player has 31', () => {
      const firstPlayer = thirtyOneGame._turnManager.currentPlayer;
      firstPlayer.hand = [
        {
          rank: 10,
          suit: 0,
        },
        {
          rank: 11,
          suit: 0,
        },
        {
          rank: 1,
          suit: 0,
        }
      ];
      thirtyOneGame.nextTurn();
      expect(thirtyOneGame.onWin).toHaveBeenCalledWith(firstPlayer);
    });

    it('does nothing if the game is over', () => {
      thirtyOneGame.over = true;
      const firstPlayer = thirtyOneGame._turnManager.currentPlayer;
      thirtyOneGame.nextTurn();
      expect(thirtyOneGame._turnManager.currentPlayer).toBe(firstPlayer);
    });
  });
});
