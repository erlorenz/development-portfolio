import { LitElement, customElement, html, property, css } from 'lit-element';
import '../SideMenu/SideMenu.ts';
import '../TopBar/TopBar.ts';

@customElement('details-layout')
class DetailsLayout extends LitElement {
  @property()
  private _isOpen = false;

  static get styles() {
    return css`
      :host {
        display: block;
        overflow-x: hidden;
        width: 100vw;
        position: relative;
        min-height: 100vh;
        z-index: 0;
      }

      main {
        position: absolute;
        top: 0;
        min-height: 100vh;
        background-color: red;
        width: 100%;
        z-index: 2;
      }

      .sliding-canvas {
        width: 100%;
        min-height: 100vh;
        position: relative;
        transition: transform 0.3s ease;
      }

      .slide {
        transform: translateX(220px);
      }

      @keyframes slide {
        0% {
          transform: translateX(0);
        }
        90% {
          transform: translateX(240px);
        }
        100% {
          transform: translateX(220px);
        }
      }

      @media (min-width: 450px) {
        main {
          position: absolute;
          right: 0;
          top: 0;
          background-color: yellow;
          width: calc(100% - 80px);
        }
      }
    `;
  }

  render() {
    return html`
      <!-- Topbar on mobile always visible -->
      <top-bar @toggleSideMenu="${this.toggleOpen}"></top-bar>
      <!-- Canvas slides based on _isOpen state -->
      <div class="sliding-canvas ${this._isOpen ? 'slide' : ''}">
        <!-- Custom event from side menu -->
        <side-menu @toggleSideMenu="${this.toggleOpen}"></side-menu>
        <main>
          <slot></slot>
        </main>
      </div>
    `;
  }

  toggleOpen() {
    this._isOpen = !this._isOpen;
  }
}

export default DetailsLayout;
