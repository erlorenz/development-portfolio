function paintDrop() {
  const drop = document.querySelector('#paint-drop') as HTMLDivElement;
  const themeChanger = document.querySelector(
    '#theme-changer-container',
  ) as HTMLDivElement;

  drop.addEventListener('click', () => {
    themeChanger.classList.toggle('show');
  });
}
export default paintDrop;
