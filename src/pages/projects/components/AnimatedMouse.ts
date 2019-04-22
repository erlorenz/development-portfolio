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
        position: fixed;
        top: 20px;
        left: 0px;
        width: 100px;
        height: 50px;
        transition: transform 0.8s ease;
        z-index: 5000;
        cursor: pointer;
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
        width: 30%;
        border: 4px solid white;
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
    `;
  }
}

export default AnimatedMouse;
