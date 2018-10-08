import TurnManager from './TurnManager';

let turnManager;

describe('the turn manager', () => {
  describe('instantiation', () => {
    it('takes a list of players in the constructor', () => {
      const players = [
        {
          name: 'Scott'
        },
        {
          name: 'Abe'
        },
      ];

      turnManager = new TurnManager(players);
      expect(turnManager.constructor).toBe(TurnManager);
    });
  });

  describe('currentPlayer', () => {
    it('returns the player whose turn it presently is', () => {
      const players = [
        {
          name: 'Abe',
        },
      ];

      turnManager = new TurnManager(players);
      expect(turnManager.currentPlayer.name).toEqual('Abe')
    });
  });

  describe('next', () => {
    it('moves the gameplay to the next player in the list', () => {
      const players = [
        {
          name: 'Scott'
        },
        {
          name: 'Abe'
        },
      ];

      turnManager = new TurnManager(players);
      const firstPlayer = turnManager.currentPlayer;

      turnManager.next();

      expect(turnManager.currentPlayer).not.toBe(firstPlayer);
    });

    it('goes in a loop', () => {
      const players = [
        {
          name: 'Scott'
        },
        {
          name: 'Abe'
        },
      ];

      turnManager = new TurnManager(players);
      const firstPlayer = turnManager.currentPlayer;

      turnManager.next();
      turnManager.next();

      expect(turnManager.currentPlayer).toBe(firstPlayer);
    });
  });
});
