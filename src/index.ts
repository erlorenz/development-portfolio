// Styles
import './assets/styles/index.scss';

// Web Components (polyfill loaded render blocking)
import './components/DetailsLayout/DetailsLayout';
import './components/StickyNav/StickyNav';
import './components/ThemeChanger/ThemeChanger';

// Scripts
import isAtTop from './assets/scripts/isAtTop';
import typewriter from './assets/scripts/typewriter';
import lazyImages from './assets/scripts/lazyImages';
import fadeImages from './assets/scripts/fadeImages';
import carousel from './assets/scripts/carousel';
import techImageHover from './assets/scripts/techImageHover';
import scrollSpy from './assets/scripts/scrollSpy';

//  Polyfills
import smoothscroll from 'smoothscroll-polyfill';

// Run scripts non-blocking
addEventListener('DOMContentLoaded', () => {
  smoothscroll.polyfill();
  typewriter();
  isAtTop();
  lazyImages();
  fadeImages();
  carousel();
  techImageHover();
  scrollSpy();
});
