function fadeImages() {
  const images = document.querySelectorAll('.fade-image');
  console.log(images);

  // Load image 100px before coming into view
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