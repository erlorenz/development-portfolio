import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('menu-icon')
class MenuIcon extends LitElement {
  @property()
  open = false;

  static get styles() {
    return css`
      .stick {
        height: 3px;
        width: 30px;
        background-color: white;
        margin-bottom: 8px;
        transition: transform 0.3s ease;
      }

      .stick:last-child {
        margin-bottom: 0;
      }

      .stick2 {
        width: 28px;
      }

      .stick1.open {
        transform: translateY(11px) rotate(405deg);
      }

      .stick3.open {
        transform: translateY(-11px) rotate(315deg);
      }

      .stick2.open {
        opacity: 0;
      }
    `;
  }

  render() {
    return html`
      <div class="sticks ${this.open ? 'open' : ''}">
        <div class="stick stick1 ${this.open ? 'open' : ''}"></div>
        <div class="stick stick2 ${this.open ? 'open' : ''}"></div>
        <div class="stick stick3 ${this.open ? 'open' : ''}"></div>
      </div>
    `;
  }
}

export default MenuIcon;
