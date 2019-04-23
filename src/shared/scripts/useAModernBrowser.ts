function useAModernBrowser() {
  if (!window.customElements) {
    alert(
      'This is a portfolio site showcasing new features and APIs. Use a modern browser!',
    );

    console.log(
      '[FROM ERIK] Please use a better browser. I am intentionally using bleeding edge APIs and features.',
    );
  }
}

export default useAModernBrowser;
