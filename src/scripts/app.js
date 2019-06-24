/*
 * @title App
 * @description Application entry point
 */

// Polyfills
import 'Utils/_closest.polyfill.js';
import 'Utils/_matches.polyfill.js';

// Components
import carousel from 'Components/carousel/carousel';
import navbar from 'Components/navbar/navbar';
import searchOverlay from 'Components/search-overlay/search-overlay';

// JS Components
import collapse from 'JScomponents/collapse.js';
import smoothScroll from 'JScomponents/smooth-scroll';
import toggleElement from 'JScomponents/toggle-element';

document.addEventListener('DOMContentLoaded', function() {

  // Components
  carousel();
  navbar();
  searchOverlay();

  // JS Components
  collapse();
  smoothScroll();
  toggleElement();

})
