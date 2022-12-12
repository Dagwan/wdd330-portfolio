import { getElement } from './utils.js';
//settings of variables and selections
const toggleNav = getElement('.toggle-nav');
const sidebarOverlay = getElement('.sidebar-overlay');
const closeBtn = getElement('.sidebar-close');
//toggle side bar for mobile and tablet
toggleNav.addEventListener('click', () => {
  sidebarOverlay.classList.add('show');
});
closeBtn.addEventListener('click', () => {
  sidebarOverlay.classList.remove('show');
});
