function typewriter() {
  const speed = 120;
  const element = document.querySelector('#hero .typed-text') as HTMLElement;
  let text = `Hi, I'm Erik.`;

  text.split('').forEach((char, index) => {
    setTimeout(() => {
      element.textContent = element.textContent + char;
    }, speed * index + 2000);
  });
}

export default typewriter;
