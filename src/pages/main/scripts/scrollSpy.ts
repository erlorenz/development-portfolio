function scrollSpy() {
  const tech = document.querySelector('section.tech') as HTMLElement;
  const projects = document.querySelector('section.projects') as HTMLElement;
  const contact = document.querySelector('section.contact') as HTMLElement;

  console.log(tech, projects, contact);

  const stickyNav = document.querySelector('sticky-nav') as HTMLElement;

  function spy(section: HTMLElement) {
    const sectionName = section.dataset.section || '';

    // Threshold for projects section needs to be different
    const config = {
      threshold: 0.7,
    };

    if (section.classList.contains('projects') && window.screen.width < 500) {
      config.threshold = 0.5;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          stickyNav.classList.add(`spying--${sectionName}`);
        } else {
          stickyNav.classList.remove(`spying--${sectionName}`);
        }
      });
    }, config);

    observer.observe(section);
  }

  [tech, projects, contact].forEach(section => {
    spy(section);
  });
}

export default scrollSpy;
