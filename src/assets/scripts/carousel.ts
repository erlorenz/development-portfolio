function carousel() {
  const carousel = document.querySelector('.carousel') as HTMLDivElement;
  const leftArrow = document.querySelector('.arrow--left') as HTMLButtonElement;
  const rightArrow = document.querySelector(
    '.arrow--right',
  ) as HTMLButtonElement;

  // Figure out scroll amount with 3 sections
  const scrollAmount = Math.floor(carousel.scrollWidth / 3);

  // Activate the circles
  function activateCircle(sectionNumber: number) {
    const circle = document.querySelector(
      '#circle' + sectionNumber,
    ) as HTMLButtonElement;
    const section = document.querySelector(
      '#section' + sectionNumber,
    ) as HTMLElement;

    const config = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add active class
          circle.className = 'circle active';
          console.log('Entering');
        }

        if (!entry.isIntersecting) {
          circle.className = 'circle';
          console.log('Leaving');
        }
      });
    }, config);

    observer.observe(section);
  }

  activateCircle(1);
  activateCircle(2);
  activateCircle(3);

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
