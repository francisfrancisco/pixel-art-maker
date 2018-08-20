console.log("lets go knicks")
document.addEventListener('DOMContentLoaded', function () {
let drawingMode = "erasing"
let pixel = "<div class='pixel'></div>";
// let circlePixel = "<div class='circlePixel'></div>"
let box = [];
let circles = [];
let pixelCanvas = document.getElementById("pixel-canvas");
let palette = document.getElementById("palette")
let pressed = false;

//for canvas
for (let i=0; i<2880; i++) {
  box.push(pixel);
};
//for palette
// for(let i=0; i<5; i++){
//   circles.push(circlePixel)
// }

pixelCanvas.innerHTML = box.join("");
// palette.innerHTML = circles.join("")

//for the drawing
pixelCanvas.addEventListener("click", function(e){
  e.target.classList.add("painted")
})

// palette.addEventListener("click", function(e){
//
//   window.document.classList.painted = e.target.textContent
// })

// pixelCanvas.addEventListener("mouseover", function(event) {
//   if (pressed) {
//     event.target.classList.add("painted")
//   }
// });
//
// pixelCanvas.addEventListener("mousedown", function(event) {
//   pressed = true;
// })
//
//
// document.addEventListener("mouseup", function(event) {
//   pressed = false;
// })

})
