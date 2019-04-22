function staggeredList(
  selector: string,
  className: string,
  speed: number,
  reverse: boolean = false,
) {
  const listItems = document.querySelectorAll(selector) as NodeListOf<
    HTMLElement
  >;
  console.log('List items', listItems);

  listItems.forEach((item, index) => {
    if (reverse) {
      setTimeout(() => item.classList.remove(className), speed * index);
    } else {
      setTimeout(() => item.classList.add(className), speed * index);
    }
  });
}

export default staggeredList;
