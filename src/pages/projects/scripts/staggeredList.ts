function staggeredList(selector: string, className: string, speed: number) {
  const listItems = document.querySelectorAll(selector) as NodeListOf<
    HTMLElement
  >;

  listItems.forEach((item, index) => {
    setTimeout(() => item.classList.add(className), speed * index);
  });

  console.log('finsihed');
}

export default staggeredList;
