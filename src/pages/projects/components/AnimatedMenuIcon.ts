import { LitElement, customElement, html, property, css } from 'lit-element';

@customElement('animated-menu-icon')
class AnimatedMenuIcon extends LitElement {
  @property()
  show = false;

  @property()
  private _startAnimating = false;

  firstUpdated() {
    setTimeout(() => (this.show = true), 500);
    setTimeout(() => (this._startAnimating = true), 5000);
  }

  render() {
    return html`
      <div
        class="container 
        ${this.show ? 'fade-in' : ''} 
        ${this._startAnimating ? 'animate' : ''}"
      >
        <div class="body">
          <div class="outline"></div>
        </div>
        <div class="line"></div>
      </div>
    `;
  }

  static get styles() {
    return css`
      * {
        box-sizing: border-box;
      }

      :host {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 20px;
        right: 0px;
        width: 80px;
        height: 50px;
        transition: transform 0.8s ease;
      }

      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        transition: opacity 2s ease;
        opacity: 0;
      }

      .fade-in {
        opacity: 1;
      }

      .body {
        height: 100%;
        width: 40%;
        border: 4px solid lightgray;
        border-radius: 20px;
        animation-name: pulse;
        animation-duration: 10s;
        animation-iteration-count: infinite;
      }

      .line {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 8px;
        height: 18px;
        width: 4px;
        border-radius: 4px;
        background-color: lightgray;
      }

      :host(.spin) {
        transform: rotate(-360deg);
      }

      @keyframes pulse {
        96% {
          transform: scale(1);
          opacity: 1;
        }
        97% {
          transform: scale(0.8);
          opacity: 1;
        }
        98% {
          transform: scale(1);
          opacity: 1;
        }
        99% {
          transform: scale(0.9);
          opacity: 1;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
    `;
  }
}

export default AnimatedMenuIcon;
