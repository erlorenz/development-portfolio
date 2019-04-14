import { LitElement, html, customElement, css, property } from 'lit-element';
import '../MenuIcon/MenuIcon.ts';

@customElement('top-bar')
class TopBar extends LitElement {
  @property()
  private _isOpen = false;

  static get styles() {
    return css`
      :host {
        display: flex;
        height: 60px;
        width: 100vw;
        z-index: 3;
        background-color: transparent;
        justify-content: flex-start;
        position: fixed;
      }
      button {
        height: 60px;
        width: 60px;
        padding: 0;
        border: none;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
      }

      button:focus {
        outline: none;
      }

      @media (min-width: 450px) {
        :host {
          display: none;
        }
      }
    `;
  }

  render() {
    return html`
      <button @click="${this.handleClick}">
        <menu-icon></menu-icon>
      </button>
    `;
  }

  handleClick() {
    this._isOpen = !this._isOpen;
    let event = new CustomEvent('toggleSideMenu');
    this.dispatchEvent(event);
  }
}

export default TopBar;
