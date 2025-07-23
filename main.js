//Ex 1.

const moveRight = function () {
  const ball = document.getElementById("ball");
  let left = parseInt(ball.style.left) || 0;
  left += 15;
  ball.style.left = left + "px";
};
const moveLeft = function () {
  const ball = document.getElementById("ball");
  let left = parseInt(ball.style.left) || 0;
  left -= 15;
  ball.style.left = left + "px";
};
const moveDown = function () {
  const ball = document.getElementById("ball");
  let top = parseInt(ball.style.top) || 0;
  top += 15;
  ball.style.top = top + "px";
};
const moveUp = function () {
  let top = parseInt(ball.style.top) || 0;
  top -= 15;
  ball.style.top = top + "px";
};
const playingField = document.getElementById("playing-field");

const down = document.getElementById("down");

document.getElementById("ball").style.backgroundColor = "yellow";

const header = document.createElement("h1");
header.innerHTML = "The Best Game Ever";
header.style.color = "#c0392b";
header.style.fontFamily = "Helvetica";
document.body.appendChild(header);

const subHeader = document.createElement("h2");
subHeader.innerHTML = "Game By: Tamar";
document.body.appendChild(subHeader);
subHeader.setAttribute("class", "my-subHeader");
