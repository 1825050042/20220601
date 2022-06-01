import "./styles.css";

const canvas = document.querySelector("#draw-area");
const context = canvas.getContext("2d");

canvas.addEventListener("mousemove", (event) => {
  draw(event.layerX, event.layerY);
});
canvas.addEventListener("touchmove", (event) => {
  draw(event.layerX, event.layerY);
});

canvas.addEventListener("mousedown", () => {
  context.beginPath();
  isDrag = true;
});
canvas.addEventListener("mouseup", () => {
  context.closePath();
  isDrag = false;
});
canvas.addEventListener("touchstart", () => {
  context.beginPath();
  isDrag = true;
});
canvas.addEventListener("touchend", () => {
  context.closePath();
  isDrag = false;
});

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});

let isDrag = false;

function draw(x, y) {
  if (!isDrag) {
    return;
  }

  context.lineWidth = 2;
  context.lineTo(x - 14, y - 36);
  //context.strokeStyle = "rgb(210,10,0)";
  const grad = context.createLinearGradient(0, 0, 200, 200);
  grad.addColorStop(0.0, "red");
  grad.addColorStop(0.5, "green");
  grad.addColorStop(1.0, "blue");
  context.fillStyle = grad;
  context.strokeStyle = grad;
  context.stroke();
}
