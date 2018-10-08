export const bindAll = config => {
  document.querySelector('.discard').addEventListener('click', () => {
    config.discardClick();
  });

  document.querySelector('.deck').addEventListener('click', () => {
    config.deckClick();
  });
};
