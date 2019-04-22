import staggeredList from './staggeredList';

function superCoolMenu() {
  const mouse = document.querySelector('animated-mouse') as HTMLElement;
  const canvas = document.querySelector('.sliding-canvas') as HTMLDivElement;
  const sideMenu = document.querySelector('#side-menu') as HTMLElement;
  const listItems = document.querySelectorAll('.side-menu__item') as NodeListOf<
    HTMLElement
  >;

  mouse.addEventListener('click', () => {
    // Make mouse do something cool
    mouse.classList.add('activate');
    setTimeout(() => mouse.classList.remove('activate'), 500);

    const isOpen = canvas.classList.contains('open');
    if (!isOpen) {
      // Open the canvas do the list with delay
      canvas.classList.add('open');
      // Remove hide class and start the staggered entrance
      listItems.forEach(item => item.classList.remove('hide'));
      staggeredList('.side-menu__item', 'show', 120);
      sideMenu.classList.add('open');
    } else {
      // Hide the list and close canvas
      canvas.classList.remove('open');
      sideMenu.classList.remove('open');
      listItems.forEach(item => {
        // Immediately hide list items then remove transform
        item.classList.add('hide');
        item.classList.remove('show');
      });
    }
  });
}

export default superCoolMenu;
