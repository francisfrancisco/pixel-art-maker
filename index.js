console.log("lets go knicks")
//array of div elements with a class pixel and 400 elements called pixels
document.addEventListener('DOMContentLoaded', function () {
let drawingMode = "erasing"
let pixel = "<div class='pixel'></div>";
let box = [];
let pixelCanvas = document.getElementById("pixel-canvas");
let pressed = false;

for (var i = 0; i < 2880; i += 1) {
  box.push(pixel);
};

pixelCanvas.innerHTML = box.join("");

//for the drawing
pixelCanvas.addEventListener("mouseover", function (event) {
  if (pressed) {
    event.target.classList.add("filled-black")
  }
});

pixelCanvas.addEventListener("mousedown", function (event) {
  pressed = true;
})


document.addEventListener("mouseup", function (event) {
  pressed = false;
})
})
