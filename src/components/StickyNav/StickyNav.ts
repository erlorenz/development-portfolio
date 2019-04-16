import { LitElement, html, customElement, css, property } from 'lit-element';

@customElement('sticky-nav')
class StickyNav extends LitElement {
  static get styles() {
    return css`
      :host {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        position: sticky;
        width: 100%;
        height: 60px;
        background-color: var(--primary-theme-color);
        color: var(--secondary-theme-color);
        top: 0;
        align-items: center;
        z-index: 10;
      }

      ul {
        box-sizing: inherit;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        list-style: none;
        margin: 0;
        padding: 0%;
        transform: translateY(-15px);
        transition: transform 0.5s ease;
        height: 60px;
        font-size: 20px;
      }

      span {
        color: var(--secondary-theme-color);
        margin: 0 0.5rem;
        transition: opacity 0.5s ease, transform 0.5s ease;
      }

      a {
        color: var(--secondary-theme-color);
        text-decoration: none;
        position: relative;
      }

      a:hover {
        color: white;
      }

      :host(.atTop) ul {
        transform: scale(0.8) translateY(0);
      }

      :host(.atTop) span {
        opacity: 0;
        transform: translateY(-15px);
      }

      @media (min-width: 450px) {
        :host {
          height: 80px;
        }

        ul {
          font-size: 40px;
          height: 100%;
        }
      }
    `;
  }

  render() {
    return html`
      <ul>
        <li class="link">
          <a href="#tech">tech</a>
        </li>
        <span>|</span>
        <li class="link">
          <a href="#"> work</a>
        </li>
        <span>|</span>
        <li class="link">
          <a href="#"> about</a>
        </li>
        <span>|</span>
        <li class="link">
          <a href="#"> contact</a>
        </li>
      </ul>
    `;
  }
}

export default StickyNav;
