var canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d"),
  x = 0,
  size = 50,
  dir = 1,
  boxColor = "#ffffff",
  last = performance.now();
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function draw(timestamp) {
  bounce();
  color();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.fillStyle = boxColor;
  ctx.rect(x, canvas.height / 2 - size / 2, size, size);
  ctx.fill();

  x += (dir * (timestamp - last)) / 10;
  last = timestamp;
  requestAnimationFrame(draw);
}

function bounce() {
  if (x + size > canvas.width) {
    dir *= -1;
    size = 100;
    x = canvas.width - size;
  } else if (x < 0) {
    dir *= -1;
    size = 50;
    x = 0;
  }
}

function color() {
  if (Math.round(x) % 20 <= 1) {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    boxColor = "rgb(" + r + ", " + g + ", " + b + ")";
  }
}

requestAnimationFrame(draw);
