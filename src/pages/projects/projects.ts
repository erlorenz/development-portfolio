import './styles/index.scss';
import '../../shared/components/ThemeChanger';

// Components
import './components/AnimatedMouse';

// Scripts
import lazyImages from '../../shared/scripts/lazyImages';
import superCoolMenu from './scripts/superCoolMenu';

addEventListener('DOMContentLoaded', () => {
  lazyImages();
  superCoolMenu();
});
