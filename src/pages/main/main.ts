// Styles
import './styles/index.scss';

// Web Components (polyfill loaded render blocking)
import './components/StickyNav';
import '../../shared/components/ThemeChanger';

// Scripts
import isAtTop from './scripts/isAtTop';
import typewriter from './scripts/typewriter';
import lazyImages from '../../shared/scripts/lazyImages';
import fadeImages from './scripts/fadeImages';
import carousel from './scripts/carousel';
import techImageHover from './scripts/techImageHover';
import scrollSpy from './scripts/scrollSpy';

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
