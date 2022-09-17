
//sellecting items
const btn = document.getElementById("button");
const randomColor = ["#8758FF", "#181818", "red", "orange", "yellow", "green", "blue", "#CD104D"];

btn.addEventListener("click", function () {
    change()
})

//function to change background using the collors in the array.
function change() {
    document.body.style.background = randomColor[Math.floor(Math.random() * randomColor.length)];
};




