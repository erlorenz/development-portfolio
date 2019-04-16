function lazyImages() {
  const images = document.querySelectorAll('.lazy-image');

  // Load image 100px before coming into view
  const config = {
    rootMargin: '100px',
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Replace src with data-src
        const target = entry.target as HTMLImageElement;
        target.src = target.dataset.src as string;

        // Remove observer
        observer.unobserve(target);
      }
    });
  }, config);

  images.forEach(img => {
    observer.observe(img);
  });
}

export default lazyImages;
