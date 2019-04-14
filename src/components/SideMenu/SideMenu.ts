import { LitElement, customElement, html, property, css } from 'lit-element';
import '../MenuIcon/MenuIcon.ts';
import '../StaggeredListItem/StaggeredListItem.ts';

@customElement('side-menu')
class SideMenu extends LitElement {
  @property()
  private _isOpen = false;

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0;
        left: -300px;
        height: 100%;
        background-color: var(--primary-theme-color);
        z-index: 1;
        padding-top: 80px;
        width: 300px;
      }

      button {
        display: none;
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        margin-top: 2rem;
      }

      a {
        text-decoration: none;
        color: var(--secondary-theme-color);
      }

      @media (min-width: 450px) {
        :host {
          left: -220px;
        }

        button {
          cursor: pointer;
          position: absolute;
          right: 0;
          top: 0;
          height: 80px;
          width: 80px;
          background-color: transparent;
          border: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        button:focus {
          outline: none;
        }
      }
    `;
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
        <staggered-list-item ?slide="${this._isOpen}">
          <a href="#">Press Express - Public App (React)</a>
        </staggered-list-item>
        <staggered-list-item ?slide="${this._isOpen}" .delay=${'50'}>
          <a href="#">Press Express - Public App (Vue)</a>
        </staggered-list-item>
        <staggered-list-item ?slide="${this._isOpen}" .delay=${'100'}>
          <a href="#">Press Express - Back End</a>
        </staggered-list-item>
        <staggered-list-item ?slide="${this._isOpen}" .delay=${'150'}>
          <a href="#">Webpack Typescript Boilerplate</a>
        </staggered-list-item>
        <staggered-list-item ?slide="${this._isOpen}" .delay=${'200'}>
          <a href="#">Personal Portfolio</a>
        </staggered-list-item>
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
