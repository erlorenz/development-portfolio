// Styles
import './styles/index.scss';

// Scripts
import isAtTop from './scripts/isAtTop';
import typewriter from './scripts/typewriter';
import lazyImages from '../../shared/scripts/lazyImages';
import fadeImages from './scripts/fadeImages';
import carousel from './scripts/carousel';
import techImageHover from './scripts/techImageHover';
import scrollSpy from './scripts/scrollSpy';
import useAModernBrowser from '../../shared/scripts/useAModernBrowser';

//  Polyfills
import smoothscroll from 'smoothscroll-polyfill';
import paintDrop from './scripts/paintDrop';

// Run scripts non-blocking
addEventListener('DOMContentLoaded', async () => {
  // Get mad if web components dont work
  useAModernBrowser();

  // Smooth scroll polyfill for safari
  smoothscroll.polyfill();

  typewriter();
  isAtTop();
  lazyImages();
  fadeImages();
  carousel();
  techImageHover();
  scrollSpy();
  paintDrop();

  // Load webcomponents
  await Promise.all([
    import('./components/StickyNav'),
    import('../../shared/components/ThemeChanger'),
  ]);
});
