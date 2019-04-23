import './styles/index.scss';

// Scripts
import lazyImages from '../../shared/scripts/lazyImages';
import superCoolMenu from './scripts/superCoolMenu';
import useAModernBrowser from '../../shared/scripts/useAModernBrowser';

addEventListener('DOMContentLoaded', async () => {
  // Get mad if web components dont work
  useAModernBrowser();

  lazyImages();
  superCoolMenu();

  // Load web components
  await Promise.all([
    import('./components/AnimatedMouse'),
    import('../../shared/components/ThemeChanger'),
  ]);
});
