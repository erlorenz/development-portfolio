import { LitElement, html, customElement, css } from 'lit-element';

@customElement('sticky-nav')
class StickyNav extends LitElement {
  static get styles() {
    return css`
      :host {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        position: sticky;
        width: 100vw;
        height: 60px;
        background-color: var(--primary-theme-color);
        color: var(--secondary-theme-color);
        top: 0;
      }

      ul {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        list-style: none;
        margin: 0;
        padding: 0%;
      }

      span {
        color: var(--secondary-theme-color);
        margin: 0 0.5rem;
      }

      a {
        color: var(--secondary-theme-color);
        text-decoration: none;
      }

      @media (min-width: 450px) {
        :host {
          height: 80px;
        }

        ul {
          font-size: 40px;
        }
      }
    `;
  }

  render() {
    return html`
      <ul>
        <li>
          <a href="#">tech</a>
        </li>
        <span>|</span>
        <li>
          <a href="#"> work</a>
        </li>
        <span>|</span>
        <li>
          <a href="#"> about</a>
        </li>
        <span>|</span>
        <li>
          <a href="#"> contact</a>
        </li>
      </ul>
    `;
  }
}

export default StickyNav;
