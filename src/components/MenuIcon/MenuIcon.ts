import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('menu-icon')
class MenuIcon extends LitElement {
  @property()
  private slide = 'closed';

  static get styles() {
    return css`
      .stick {
        height: 2px;
        width: 35px;
        background-color: white;
        margin-bottom: 5px;
        transition: transform 0.2s ease;
      }

      .stick:last-child {
        margin-bottom: 0;
      }

      .stick2 {
        width: 28px;
      }

      .stick4 {
        width: 22px;
      }
    `;
  }

  render() {
    return html`
      <div class="stick stick1 ${this.slide === 'open' ? 'open' : ''}"></div>
      <div class="stick stick2 ${this.slide === 'open' ? 'open' : ''}"></div>
      <div class="stick stick3 ${this.slide === 'open' ? 'open' : ''}"></div>
      <div class="stick stick4 ${this.slide === 'open' ? 'open' : ''}"></div>
    `;
  }
}
