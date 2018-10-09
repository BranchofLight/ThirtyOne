export const bindAll = config => {
  document.querySelector('.discard').addEventListener('click', () => {
    config.discardPileClick();
  });

  document.querySelector('.deck').addEventListener('click', () => {
    config.deckClick();
  });

  document.querySelectorAll('.card-container').forEach(element => {
    const index = element.getAttribute('data-index');
    element.addEventListener('click', e => {
      config.discardFromHandClick(parseInt(index));
    });
  });
};
