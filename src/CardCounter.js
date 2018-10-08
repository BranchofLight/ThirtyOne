export const valueOfCard = (rank) => {
  if (rank === 1) {
    return 11;
  }
  return  Math.min(rank, 10);
}

export const threeOfAKind = (cards) =>
  cards[0].rank === cards[1].rank &&
  cards[1].rank === cards[2].rank;

export const count = (cards) => {
  if (cards.constructor !== Array) {
    return 0;
  }

  if (cards.length !== 3) {
    return 0;
  }

  if (threeOfAKind(cards)) {
    return 30.5;
  }

  const values = cards.reduce((pointsBySuit, { suit, rank }) => {
    pointsBySuit[suit] += valueOfCard(rank);
    return pointsBySuit;
  }, [0, 0, 0, 0]);

  return Math.max(...values);
};
