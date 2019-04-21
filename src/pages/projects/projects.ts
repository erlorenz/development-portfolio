import './styles/index.scss';
import '../../shared/components/ThemeChanger';

// Components

// Scripts
import lazyImages from '../../shared/scripts/lazyImages';
import staggeredList from './scripts/staggeredList';

addEventListener('DOMContentLoaded', () => {
  lazyImages();
  staggeredList('#side-menu .side-menu__item', 'show', 80);
  staggeredList('#tech .tech-list__item', 'show', 80);
});
