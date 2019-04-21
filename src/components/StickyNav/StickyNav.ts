import { LitElement, html, customElement, css } from 'lit-element';

@customElement('sticky-nav')
class StickyNav extends LitElement {
  static get styles() {
    return css`
      :host {
        position: relative;
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


      .link {
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
      }


      .link--tech::after, .link--projects::after, .link--contact::after {
        content: "";
        display: block;
      }

      :host(.spying--tech.atTop) .link--tech::after {
        content: "",
        display: block;
        height: 6px;
        width: 100%;
        background-color: var(--secondary-theme-color);
        position: absolute;
        bottom: 0;
      }

      :host(.spying--projects.atTop) .link--projects::after {
        content: "",
        display: block;
        height: 6px;
        width: 100%;
        background-color: var(--secondary-theme-color);
        position: absolute;
        bottom: 0;
      }

      :host(.spying--contact.atTop) .link--contact::after {
        content: "",
        display: block;
        height: 6px;
        width: 100%;
        background-color: var(--secondary-theme-color);
        position: absolute;
        bottom: 0;
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
        transform: translateY(-15px) scale(1.2);
        transition: transform 0.5s ease;
        height: 100%;
        font-size: 16px;
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
        display: flex;
        height: 100%;
        align-items: center;
      }

      a:hover {
        color: white;
      }

      :host(.atTop) ul {
        transform: scale(1) translateY(0);
      }

      :host(.atTop) span {
        opacity: 0;
        transform: translateY(-15px);
      }

      path,
      rect {
        fill: currentColor;
      }

      svg {
        display: none;
      }

      @media (min-width: 450px) {
        :host {
          height: 80px;
        }

        ul {
          font-size: 30px;
          height: 100%;
        }

        a.logo {
          display: block;
          position: absolute;
          left: 40px;
          opacity: 0;
          transition: opacity 0.5s ease;
          transition-delay: .5s;
          height: 100%;
          display: flex;
          align-items: center;
        }

        svg {
          width: 170px;
          height: auto;
          display: block;
        }

        :host(.atTop) a.logo {
          opacity: 1;
        }
      }
    `;
  }

  render() {
    return html`
      <a href="#" class="logo">
        <svg
          width="124"
          height="35"
          viewBox="0 0 124 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.8 26V9.416H19.544L19.088 11.24H11.864V16.712H18.68V18.464H11.864V24.176H20V26H9.8ZM22.5718 15.056H23.8678L24.4678 16.976H24.5638C25.4438 15.84 26.6518 15.152 28.1878 14.912L28.4038 16.808C27.6518 16.856 26.9238 17.048 26.2198 17.384C25.5158 17.72 24.9798 18.168 24.6118 18.728V26H22.5718V15.056ZM32.2781 12.488C32.0221 12.744 31.7101 12.872 31.3421 12.872C30.9741 12.872 30.6621 12.744 30.4061 12.488C30.1501 12.216 30.0221 11.896 30.0221 11.528C30.0221 11.16 30.1501 10.848 30.4061 10.592C30.6781 10.32 30.9901 10.184 31.3421 10.184C31.6941 10.184 31.9981 10.32 32.2541 10.592C32.5261 10.848 32.6621 11.16 32.6621 11.528C32.6621 11.896 32.5341 12.216 32.2781 12.488ZM30.3341 15.056H32.3741V26H30.3341V15.056ZM37.8969 26H35.9289V8.768H37.8969V18.944L42.1689 15.056H44.8809L40.0569 19.208L45.3849 26H42.7929L38.5689 20.48L37.8969 21.056V26ZM53.5813 26V9.416H55.6453V24.176H62.6773V26H53.5813ZM69.0129 16.328C68.4049 16.328 67.8769 16.464 67.4289 16.736C66.9969 17.008 66.6769 17.36 66.4689 17.792C66.0849 18.608 65.8929 19.48 65.8929 20.408C65.8929 23.288 66.8929 24.728 68.8929 24.728C69.5009 24.728 70.0209 24.592 70.4529 24.32C70.8849 24.048 71.2129 23.696 71.4369 23.264C71.8209 22.464 72.0129 21.592 72.0129 20.648C72.0129 17.768 71.0129 16.328 69.0129 16.328ZM69.0129 14.768C70.7889 14.768 72.0849 15.32 72.9009 16.424C73.7169 17.528 74.1249 18.968 74.1249 20.744C74.1249 22.024 73.7889 23.208 73.1169 24.296C72.7489 24.888 72.1969 25.368 71.4609 25.736C70.7249 26.104 69.8449 26.288 68.8209 26.288C67.0609 26.288 65.7809 25.76 64.9809 24.704C64.1809 23.648 63.7809 22.232 63.7809 20.456C63.7809 19.416 63.9409 18.536 64.2609 17.816C64.5969 17.096 64.9489 16.544 65.3169 16.16C65.6849 15.76 66.1889 15.432 66.8289 15.176C67.4689 14.904 68.1969 14.768 69.0129 14.768ZM76.8296 15.056H78.1256L78.7256 16.976H78.8216C79.7016 15.84 80.9096 15.152 82.4456 14.912L82.6616 16.808C81.9096 16.856 81.1816 17.048 80.4776 17.384C79.7736 17.72 79.2376 18.168 78.8696 18.728V26H76.8296V15.056ZM88.7919 24.608C89.9439 24.608 91.0959 24.264 92.2479 23.576L92.9439 25.016C91.5999 25.864 90.1599 26.288 88.6239 26.288C87.1039 26.288 85.8959 25.808 84.9999 24.848C84.1039 23.872 83.6559 22.472 83.6559 20.648C83.6559 18.824 84.1199 17.392 85.0479 16.352C85.9759 15.296 87.2079 14.768 88.7439 14.768C90.1359 14.768 91.2319 15.2 92.0319 16.064C92.3679 16.416 92.6479 16.928 92.8719 17.6C93.1119 18.272 93.2319 19.064 93.2319 19.976L92.4879 20.816H85.6959C85.7439 23.344 86.7759 24.608 88.7919 24.608ZM91.2159 19.304C91.2159 18.408 90.9839 17.688 90.5199 17.144C90.0559 16.6 89.4399 16.328 88.6719 16.328C87.9199 16.328 87.2799 16.6 86.7519 17.144C86.2239 17.672 85.9039 18.392 85.7919 19.304H91.2159ZM105.152 17.72V26H103.112V17.816C103.112 17.4 102.944 17.08 102.608 16.856C102.288 16.632 101.856 16.52 101.312 16.52C100.176 16.52 98.9996 16.928 97.7836 17.744V26H95.7436V15.056H97.0396L97.6396 16.304C98.8716 15.28 100.208 14.768 101.648 14.768C102.72 14.768 103.568 15.04 104.192 15.584C104.832 16.128 105.152 16.84 105.152 17.72ZM116.317 24.368V26H107.893L107.437 25.328L113.749 16.688H108.397L108.205 15.056H116.053L116.485 15.824L110.341 24.368H116.317Z"
            fill="#EC4D37"
          />
          <rect y="3" width="3" height="29" fill="#EC4D37" />
          <rect
            y="3"
            width="3"
            height="10"
            transform="rotate(-90 0 3)"
            fill="#EC4D37"
          />
          <rect
            y="35"
            width="3"
            height="10"
            transform="rotate(-90 0 35)"
            fill="#EC4D37"
          />
          <rect
            x="114"
            y="35"
            width="3"
            height="10"
            transform="rotate(-90 114 35)"
            fill="#EC4D37"
          />
          <rect
            x="114"
            y="3"
            width="3"
            height="10"
            transform="rotate(-90 114 3)"
            fill="#EC4D37"
          />
          <rect x="121" y="3" width="3" height="29" fill="#EC4D37" />
        </svg>
      </a>

      <ul>
        <li class="link link--tech">
          <a class="tech" href="#tech">tech</a>
        </li>
        <span>|</span>
        <li class="link link--projects">
          <a class="projects" href="#projects">projects</a>
        </li>
        <!-- <span>|</span> -->
        <!-- <li class="link">
          <a href="#about">about</a>
        </li> -->
        <span>|</span>
        <li class="link link--contact">
          <a class="contact" href="#contact">contact</a>
        </li>
      </ul>
    `;
  }
}

export default StickyNav;
