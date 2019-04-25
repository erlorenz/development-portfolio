import './styles/index.scss';

// Scripts
import lazyImages from '../../shared/scripts/lazyImages';
import superCoolMenu from './scripts/superCoolMenu';
import useAModernBrowser from '../../shared/scripts/useAModernBrowser';

// Polyfills
import 'intersection-observer';
import prefetchLinks from '../../shared/scripts/prefetchLinks';

addEventListener('DOMContentLoaded', async () => {
  // Get mad if web components dont work
  useAModernBrowser();

  lazyImages();
  superCoolMenu();
  prefetchLinks();

  // Load web components
  await Promise.all([
    import('./components/AnimatedMouse'),
    import('../../shared/components/ThemeChanger'),
  ]);
});
