//import hike module
import Hikes from "./hikes.js";

//grabs the array and load it in the page
const letMyHikes = new Hikes("hikes");
window.addEventListener("load", () => {
    letMyHikes.showHikeList();
});

