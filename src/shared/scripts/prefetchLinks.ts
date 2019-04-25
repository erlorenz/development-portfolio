function prefetchLinks() {
  const links = document.querySelectorAll('.prefetch-link') as NodeListOf<
    HTMLAnchorElement
  >;

  // Once fully in view
  const config = {
    threshold: 1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLAnchorElement;
        const href = target.getAttribute('href') as string;

        // Create prefetch in head
        const link = document.createElement('link');
        link.setAttribute('rel', 'prefetch');
        link.setAttribute('href', href);
        document.head.appendChild(link);

        // End the observer
        observer.unobserve(target);
      }
    });
  }, config);

  links.forEach(link => {
    observer.observe(link);
  });
}

export default prefetchLinks;
