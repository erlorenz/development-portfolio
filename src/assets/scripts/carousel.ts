function carousel() {
  const carousel = document.querySelector('.carousel') as HTMLDivElement;
  const leftArrow = document.querySelector('.arrow--left') as HTMLButtonElement;
  const rightArrow = document.querySelector(
    '.arrow--right',
  ) as HTMLButtonElement;

  // Figure out scroll amount with 3 sections
  const scrollAmount = Math.floor(carousel.scrollWidth / 3);

  // Left arrow scrolling
  leftArrow.addEventListener('click', () => {
    const currentPosition = carousel.scrollLeft;

    carousel.scrollTo({
      behavior: 'smooth' || 'auto',
      left: currentPosition - scrollAmount,
    });
  });

  // Right arrow scrolling
  rightArrow.addEventListener('click', () => {
    const currentPosition = carousel.scrollLeft;

    carousel.scrollTo({
      behavior: 'smooth' || 'auto',
      left: currentPosition + scrollAmount,
    });
  });
}

export default carousel;
