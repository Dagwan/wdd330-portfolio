//exporting functions
export function qs(selectorName) {
  return document.querySelector(selectorName);
}

export function readFromLS(key) {
  return JSON.parse(localStorage.getItem(key));
}
export function writeToLS(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// click for desktop
export function bindTouch(selector, callback) {
  const element = qs(selector);
  element.addEventListener("touchend", e => {
    e.preventDefault();
    callback();
  });
  element.addEventListener("click", callback);
}
