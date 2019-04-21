import { LitElement, customElement, html, property, css } from 'lit-element';
import './AnimatedMenuIcon';
import '../../../shared/components/ThemeChanger';

@customElement('project-layout')
class ProjectLayout extends LitElement {
  @property()
  private _menuOpen = false;

  render() {
    return html`
      <div class="sliding-canvas ${this._menuOpen ? 'slide' : ''}">
        <div class="side-menu">
          <theme-changer vertical></theme-changer>
          <animated-menu-icon
            class="${this._menuOpen ? 'spin' : ''}"
          ></animated-menu-icon>
        </div>
        <main
          @mouseout="${() => (this._menuOpen = true)}"
          @mouseover="${() => (this._menuOpen = false)}"
        >
          <div class="overlay ${this._menuOpen ? 'show' : 'hide'}"></div>
          <slot name="picture"></slot>
          <slot name="overview"></slot>
          <slot name="tech"></slot>
          <slot name="challenges"></slot>
        </main>
      </div>
    `;
  }

  static get styles() {
    return css`
      * {
        box-sizing: border-box;
      }

      :host {
        display: block;
        overflow-x: hidden;
        width: 100%;
        min-height: 100vh;
        z-index: 0;
        background-color: var(--primary-theme-color);
        position: relative;
      }

      .sliding-canvas {
        position: absolute;
        left: -320px;
        width: calc(100% + 320px);
        min-height: 100vh;
        transition: transform 0.3s ease;
        display: grid;
        grid-template-columns: 400px 1fr;
      }

      .overlay {
        opacity: 0;
        transition: opacity 1s ease;
      }

      .overlay.show {
        opacity: 1;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        left: 0;
        background-color: #000000a3;
        z-index: 10;
      }

      main {
        display: grid;
        min-height: 100vh;
        width: 100%;
        background-color: var(--secondary-theme-color);
        position: relative;
        grid-template-areas:
          'picture overview'
          'tech tech'
          'challenges challenges';
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 50% 25% 1fr;
      }

      .slide {
        transform: translateX(320px);
      }

      .side-menu {
        cursor: pointer;
        position: relative;
      }
    `;
  }
}

export default ProjectLayout;
