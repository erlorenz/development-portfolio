import { LitElement, html, customElement, css, property } from 'lit-element';

@customElement('theme-changer')
class ThemeChanger extends LitElement {
  @property()
  private tooltipColor = '';

  @property()
  public vertical = false;

  render() {
    return html`
      <div class="swatch">
        <div
          class="circle circle--red"
          @click="${() => this.changeTheme('red')}"
          @mouseover="${() => this.showTooltip('red')}"
          @mouseout="${() => this.hideTooltip()}"
        ></div>
      </div>
      <div class="swatch">
        <div
          class="circle circle--green"
          @click="${() => this.changeTheme('green')}"
          @mouseover="${() => this.showTooltip('green')}"
          @mouseout="${() => this.hideTooltip()}"
        ></div>
      </div>
      <div class="swatch">
        <div
          class="circle circle--pink"
          @click="${() => this.changeTheme('pink')}"
          @mouseover="${() => this.showTooltip('pink')}"
          @mouseout="${() => this.hideTooltip()}"
        ></div>
      </div>
    `;
  }

  firstUpdated() {
    // Check Local storage otherwise use default theme
    const theme = localStorage.getItem('theme');
    if (theme) {
      this.changeTheme(theme);
    } else {
      this.changeTheme('green');
    }

    // Make theme changer show up after typing completed
    setTimeout(() => {
      if (!this.classList.contains('show')) this.classList.add('show');
    }, 5000);
  }

  changeTheme(color: string) {
    const body = document.querySelector('body') as HTMLElement;
    body.className = '';
    body.classList.add(color + '-theme');
    console.log('Changed theme to', color);
    localStorage.setItem('theme', color);
  }

  showTooltip(color: string) {
    let theme = '';
    if (color === 'red') theme = 'black/red';
    if (color === 'green') theme = 'blue/green';
    if (color === 'pink') theme = 'blue/pink';

    this.tooltipColor = theme;
    console.log(theme);
  }

  hideTooltip() {
    this.tooltipColor = '';
  }

  static get styles() {
    return css`
      :host {
        box-sizing: border-box;
        display: flex;
        position: fixed;
        justify-content: space-between;
        top: 20px;
        right: 40px;
        height: 40px;
        width: 120px;
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
        height: 40px;
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
        background-color: #ec3737;
      }

      .circle--green {
        background-color: #8bd8bd;
      }

      .circle--pink {
        background-color: #eb2188;
      }

      label {
        position: absolute;
        font-size: 1.2rem;
        height: 30px;
        width: 100%;
        color: white;
        background-color: var(--secondary-theme-color);
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: -40px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 10px;
      }

      :host([vertical]) {
        flex-direction: column;
        width: 40px;
        height: 120px;
        opacity: 1;
        top: auto;
        right: 20px;
        bottom: 40px;
        position: absolute;
      }

      @media (max-width: 450px) {
        :host {
          display: none;
          bottom: 20px;
          left: 20px;
        }
      }
    `;
  }
}

export default ThemeChanger;
