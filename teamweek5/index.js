import hikesController from './module/hikesController.js';
//on load grab the array and insert it into the page
const myHikesController = new hikesController('hikes');
window.addEventListener('load', () => {
  myHikesController.showHikeList();
  console.log(hikes);
});

