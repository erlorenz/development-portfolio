function fadeImages() {
  // Fade images up and in
  const images = document.querySelectorAll('.fade-image--horizontal');
  console.log(images);

  const config = {
    threshold: 1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Replace src with data-src
        const target = entry.target as HTMLImageElement;
        target.classList.add('fade-in');

        // Remove observer
        observer.unobserve(target);
      }
    });
  }, config);

  images.forEach(img => {
    observer.observe(img);
  });
}

export default fadeImages;
