console.log('main.js loading');
import { setupGame } from './ui.js';
window.addEventListener('load', () => {
  try {
    setupGame();
    console.log('main.js: setupGame executed');
  } catch (err) {
    console.error('main.js error:', err);
  }
});