import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('staggered-list-item')
class StaggeredListItem extends LitElement {
  @property({ type: Boolean })
  slide = false;

  @property({ type: String })
  delay = '0';

  static get styles() {
    return css`
      :host {
        display: block;
        padding-left: 1.5rem;
        padding-top: 0.5rem;
        transition: transform 0.3s ease, opacity 0.3s ease;
        transform: translateX(-100px);
        opacity: 0;
        padding-right: 1.5rem;
      }

      :host([slide]) {
        transform: translateX(0);
        opacity: 1;
      }
    `;
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

export default StaggeredListItem;
