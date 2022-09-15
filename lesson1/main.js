
const btn = document.getElementById("button");
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'rebeccapurple', 'violet'];

//
btn.addEventListener("click", function () {
    change()
})

//function to change background using the collors in the array.
function change() {
    document.body.style.background = rainbow[Math.floor(Math.random() * rainbow.length)];
};




