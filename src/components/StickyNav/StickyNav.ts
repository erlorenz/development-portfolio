import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('sticky-nav')
class StickyNav extends LitElement {
  @property()
  static get styles() {
    return css`
      :host {
        display: flex;
        justify-content: center;
        position: sticky;
        width: 100vw;
        height: 60px;
        background-color: var(--primary-theme-color);
        color: var(--secondary-theme-color);
      }
    `;
  }

  render() {
    return html`
      <ul>
        <li></li>
      </ul>
    `;
  }
}

export default StickyNav;
