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

addEventListener('DOMContentLoaded', () => {
  isAtTop();
  lazyImages();
  fadeImages();
});
