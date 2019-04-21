const stickyNav = document.querySelector('sticky-nav') as HTMLElement;
const hero = document.querySelector('#hero') as HTMLElement;
const themeChanger = document.querySelector('theme-changer') as HTMLElement;

function isAtTop() {
  const config = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        stickyNav.classList.add('atTop');
        themeChanger.classList.add('show');
      } else {
        stickyNav.classList.remove('atTop');
      }
    });
  }, config);

  observer.observe(hero);
}

export default isAtTop;
