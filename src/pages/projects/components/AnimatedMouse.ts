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
        <!-- Show fingerprint on mobile -->
        <div class="touch">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="48px"
            height="48px"
          >
            <path
              style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal"
              d="M 12 3 C 7.0414839 3 3 7.0414839 3 12 C 3 17.4 6.1425781 22.513672 6.1425781 22.513672 L 7.8574219 21.486328 C 7.8574219 21.486328 5 16.6 5 12 C 5 8.1225161 8.1225161 5 12 5 C 15.877484 5 19 8.1225161 19 12 C 19 12.56503 18.56503 13 18 13 C 17.43497 13 17 12.56503 17 12 C 17 9.2504839 14.749516 7 12 7 C 9.2504839 7 7 9.2504839 7 12 C 7 18.666667 13.552734 21.894531 13.552734 21.894531 L 14.447266 20.105469 C 14.447266 20.105469 9 17.333333 9 12 C 9 10.331516 10.331516 9 12 9 C 13.668484 9 15 10.331516 15 12 C 15 13.64497 16.35503 15 18 15 C 19.64497 15 21 13.64497 21 12 C 21 7.0414839 16.958516 3 12 3 z M 11 11 C 11 12.722222 11.552197 14.928875 13.111328 16.771484 C 14.670459 18.614093 17.261905 20 21 20 L 21 18 C 17.738095 18 15.829541 16.885907 14.638672 15.478516 C 13.447803 14.071125 13 12.277778 13 11 L 11 11 z"
              font-weight="400"
              font-family="sans-serif"
              white-space="normal"
              overflow="visible"
            />
          </svg>
        </div>

        <!-- Show mouse on desktop -->
        <div class="mouse">
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

      .mouse {
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

      .touch {
        display: none;
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

      /***** Small screens *****/
      @media (max-width: 1200px) {
        :host {
          height: 50px;
          width: 50px;
          top: 20px;
          left: 20px;
        }

        .container {
          width: 100%;
          height: 100%;
        }

        .mouse {
          display: none;
        }

        .touch {
          display: flex;
          height: 100%;
          width: 100%;
          justify-content: center;
          border-radius: 50%;
          background-color: var(--secondary-theme-color);
        }

        .touch svg {
          height: 100%;
          width: auto;
          fill: white;
          padding: 5px;
        }

        :host(.activate) {
          animation: none;
        }

        :host(.activate) .touch {
          animation-name: pulse;
          animation-duration: 0.2s;
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
