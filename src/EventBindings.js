export const bindAll = config => {
  document.querySelector('.discard').addEventListener('click', e => {
    config.click(topCard);
  });

  document.querySelector('.deck').addEventListener('click', e => {
    config.click(topCard);
  });
};
