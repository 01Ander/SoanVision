import '../src/sass/_style.sass';
import { getPhotos } from '../src/js/_getData.js';
import { configureLogo } from './js/_logo.js';
import { configureSearchIcon, configureUploadIcon, configureGithubIcon, configureNotionIcon } from './js/_icons';

function initApp() {
  configureLogo();
  configureSearchIcon();
  configureUploadIcon();
  configureGithubIcon();
  configureNotionIcon();
  // getPhotos();
  // console.log('ready');
}

document.addEventListener('DOMContentLoaded', initApp);

