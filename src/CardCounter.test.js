import { count } from './CardCounter';

const ACE = 1;
const TWO = 2;
const THREE = 3;
const FOUR = 4;
const FIVE = 5;
const SIX = 6;
const SEVEN = 7;
const EIGHT = 8;
const NINE = 9;
const TEN = 10;
const JACK = 11;
const QUEEN = 12;
const KING = 13;

const SPADES = 0;
const HEARTS = 1;
const CLUBS = 2;
const DIAMONDS = 3;

describe('the card counter', () => {
  describe('an incorrect argument', () => {
    it('is worth zero', () => {
      expect(count('bad argument')).toBe(0);
    });
  });

  describe('an empty hand', () => {
    it('is worth zero', () => {
      expect(count([])).toBe(0);
    });
  });

  describe('a hand with more than 3 cards', () => {
    it('is worth zero', () => {
      const hand = [
        {
          rank: QUEEN,
          suit: HEARTS,
        },
        {
          rank: SEVEN,
          suit: HEARTS,
        },
        {
          rank: FOUR,
          suit: HEARTS,
        },
        {
          rank: TWO,
          suit: SPADES,
        },
      ];

      expect(count(hand)).toBe(0);
    });
  });


  describe('a hand with less than 3 cards', () => {
    it('is worth zero', () => {
      const hand = [
        {
          rank: QUEEN,
          suit: HEARTS,
        },
      ];

      expect(count(hand)).toBe(0);
    });
  });

  describe('a hand with same-suited numerical cards', () => {
    it('is worth the sum of the ranks', () => {
      const hand = [
        {
          rank: TWO,
          suit: HEARTS,
        },
        {
          rank: THREE,
          suit: HEARTS,
        },
        {
          rank: FOUR,
          suit: HEARTS,
        },
      ];

      expect(count(hand)).toBe(9);
    });
  });

  describe('a hand with mixed suits, but one higher than the other', () => {
    it('counts the score of the highest suit', () => {
      const hand = [
        {
          rank: FOUR,
          suit: CLUBS,
        },
        {
          rank: THREE,
          suit: HEARTS,
        },
        {
          rank: FOUR,
          suit: HEARTS,
        },
      ];

      expect(count(hand)).toBe(7);
    });
  });

  describe('face cards', () => {
    it('are all worth ten', () => {
      const hand = [
        {
          rank: KING,
          suit: CLUBS,
        },
        {
          rank: QUEEN,
          suit: HEARTS,
        },
        {
          rank: JACK,
          suit: HEARTS,
        },
      ];

      expect(count(hand)).toBe(20);
    });
  });

  describe('aces', () => {
    it('are all worth 11', () => {
      const hand = [
        {
          rank: ACE,
          suit: CLUBS,
        },
        {
          rank: ACE,
          suit: HEARTS,
        },
        {
          rank: JACK,
          suit: HEARTS,
        },
      ];

      expect(count(hand)).toBe(21);
    });
  });

  describe('three cards of same rank', () => {
    it('are worth 30.5', () => {
      const hand = [
        {
          rank: FOUR,
          suit: CLUBS,
        },
        {
          rank: FOUR,
          suit: HEARTS,
        },
        {
          rank: FOUR,
          suit: CLUBS,
        },
      ];

      expect(count(hand)).toBe(30.5);
    });
  });
});
