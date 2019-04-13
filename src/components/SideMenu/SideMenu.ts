import { LitElement, customElement, html, property } from 'lit-element';
import '../MenuIcon/MenuIcon.ts';
import style from './style';

@customElement('side-menu')
class SideMenu extends LitElement {
  @property()
  private _isOpen = false;

  static get styles() {
    return style;
  }

  render() {
    return html`
      <button
        @click="${this.handleClick}"
        class="${this._isOpen ? 'menu-button--slide' : ''}"
      >
        <menu-icon slide="${this._isOpen ? 'open' : 'closed'}"></menu-icon>
      </button>
      <ul>
        <li
          class="${this._isOpen ? 'list-item--slide' : ''}"
          style="transition-delay:0ms"
        >
          <a href="#">Press Express - Public App (React)</a>
        </li>
        <li
          class="${this._isOpen ? 'list-item--slide' : ''}"
          style="transition-delay:50ms"
        >
          <a href="#">Press Express - Public App (Vue)</a>
        </li>
        <li
          class="${this._isOpen ? 'list-item--slide' : ''}"
          style="transition-delay:100ms"
        >
          <a href="#">Press Express - Back End</a>
        </li>
        <li
          class="${this._isOpen ? 'list-item--slide' : ''}"
          style="transition-delay:150ms"
        >
          <a href="#">Webpack Typescript Boilerplate</a>
        </li>
        <li
          class="${this._isOpen ? 'list-item--slide' : ''}"
          style="transition-delay:200ms"
        >
          <a href="#">Personal Portfolio</a>
        </li>
      </ul>
    `;
  }

  handleClick() {
    this._isOpen = !this._isOpen;
    let event = new CustomEvent('toggleSideMenu');
    this.dispatchEvent(event);
  }
}

export default SideMenu;
