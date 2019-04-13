import { css } from 'lit-element';

const style = css`
  :host {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 500px;
    background-color: var(--primary-theme-color);
    z-index: 1;
    padding-top: 80px;
  }

  button {
    cursor: pointer;
    position: absolute;
    left: 0;
    top: 0;
    height: 80px;
    width: 80px;
    background-color: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform 0.4s ease;
  }

  .menu-button--slide {
    transform: translateX(220px);
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-top: 2rem;
  }

  li {
    padding-left: 1.5rem;
    padding-top: 0.5rem;
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform: translateX(-100px);
    opacity: 0;
  }

  .list-item--slide {
    transform: translateX(0);
    opacity: 1;
  }

  a {
    text-decoration: none;
    color: var(--secondary-theme-color);
  }
`;

export default style;
