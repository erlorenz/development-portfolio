import { LitElement, customElement, html, property, css } from 'lit-element';

@customElement('animated-mouse')
class AnimatedMouse extends LitElement {
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
          <div class="line"></div>
        </div>
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
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100px;
        height: 90px;
        transition: transform 0.8s ease;
        z-index: 5000;
        cursor: pointer;
      }

      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 50px;
        transition: opacity 2s ease;
        opacity: 0;
      }

      .fade-in {
        opacity: 1;
      }

      .body {
        height: 100%;
        width: 30%;
        border: 4px solid white;
        border-radius: 20px;
        position: relative;
      }

      .line {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 2px;
        height: 18px;
        width: 4px;
        border-radius: 4px;
        background-color: white;
      }

      :host(.activate) {
        animation-name: activate;
        animation-duration: 0.2s;
        animation-fill-mode: backwards;
      }

      @keyframes activate {
        from {
          transform: rotate(0);
        }
        to {
          transform: rotate(360deg);
        }
      }

      @media (max-width: 450px) {
        :host {
          height: 70px;
          width: 70px;
        }

        .body {
          background-color: var(--secondary-theme-color);
          width: 45%;
        }

        :host(.activate) {
          animation-name: pulse;
        }

        @keyframes pulse {
          50% {
            transform: scale(1.3);
          }
          100% {
            transform: scale(1);
          }
        }
      }
    `;
  }
}

export default AnimatedMouse;
