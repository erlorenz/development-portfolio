import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('theme-changer')
class ThemeChanger extends LitElement {
  static get styles() {
    return css`
      :host {
        box-sizing: border-box;
        display: flex;
        position: fixed;
        justify-content: space-between;
        top: 20px;
        right: 20px;
        height: 40px;
        width: 80px;
        background-color: transparent;
        z-index: 5000;
        opacity: 0;
        transition: opacity 0.5s ease;
      }

      :host(.show) {
        opacity: 1;
      }

      .swatch {
        box-sizing: inherit;
        width: 100%;
        height: 100%;
        padding: 5px;
      }

      .circle {
        box-sizing: inherit;
        width: 100%;
        height: 100%;
        border: 3px solid lightgray;
        border-radius: 50%;
        cursor: pointer;
        transition: transform 0.3s ease;
      }

      .circle:hover {
        transform: scale(1.3);
      }

      .circle--red {
        background-color: #ec4d37;
      }

      .circle--green {
        background-color: #ccf381;
      }

      @media (max-width: 450px) {
        :host {
          display: none;
        }
      }
    `;
  }

  render() {
    return html`
      <div class="swatch">
        <div
          class="circle circle--red"
          @click="${() => this.changeTheme('red')}"
        ></div>
      </div>
      <div class="swatch">
        <div
          class="circle circle--green"
          @click="${() => this.changeTheme('green')}"
        ></div>
      </div>
    `;
  }

  changeTheme(color: string) {
    const body = document.querySelector('body') as HTMLElement;
    body.className = '';
    body.classList.add(color + '-theme');
    console.log('Changed theme to', color);
    localStorage.setItem('theme', color);
  }

  firstUpdated() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      this.changeTheme(theme);
    }

    setTimeout(() => {
      if (!this.classList.contains('show')) this.classList.add('show');
    }, 5000);
  }
}

export default ThemeChanger;