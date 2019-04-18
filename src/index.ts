// Styles
import './assets/styles/index.scss';

// Web Components
import './components/DetailsLayout/DetailsLayout';
import './components/StickyNav/StickyNav';
import './components/ThemeChanger/ThemeChanger';

// Scripts
import isAtTop from './assets/scripts/isAtTop';
import './assets/scripts/typewriter';
import lazyImages from './assets/scripts/lazyImages';
import fadeImages from './assets/scripts/fadeImages';
import carousel from './assets/scripts/carousel';

//  Polyfills
import smoothscroll from 'smoothscroll-polyfill';

// kick off the polyfill!

addEventListener('DOMContentLoaded', () => {
  smoothscroll.polyfill();
  isAtTop();
  lazyImages();
  fadeImages();
  carousel();
});
