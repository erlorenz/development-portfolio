function getImageElements(section: string) {
  return document.querySelectorAll(`#${section} img`) as NodeListOf<
    HTMLImageElement
  >;
}

function getTitleElement(section: string) {
  return document.querySelector(`#${section} h1`) as HTMLHeadingElement;
}

function hoverEffect(
  images: NodeListOf<HTMLImageElement>,
  title: HTMLHeadingElement,
) {
  images.forEach(image => {
    image.addEventListener('mouseover', () => {
      title.textContent = image.getAttribute('alt');
    });

    image.addEventListener('mouseout', () => {
      title.textContent = title.getAttribute('name');
    });
  });
}

const sections = ['section1', 'section2', 'section3'];

function techImageHover() {
  for (const section of sections) {
    hoverEffect(getImageElements(section), getTitleElement(section));
  }
}

export default techImageHover;
