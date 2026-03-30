const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 600;

let bird = { x: 50, y: 150, velocity: 0, gravity: 0.6, lift: -10 };
let pipes = [];
let frame = 0;

document.addEventListener("keydown", () => {
  bird.velocity = bird.lift;
});

function drawBird() {
  ctx.fillStyle = "yellow";
  ctx.fillRect(bird.x, bird.y, 20, 20);
}

function updateBird() {
  bird.velocity += bird.gravity;
  bird.y += bird.velocity;
}

function drawPipes() {
  pipes.forEach(p => {
    ctx.fillStyle = "green";
    ctx.fillRect(p.x, 0, 40, p.top);
    ctx.fillRect(p.x, p.bottom, 40, canvas.height);
  });
}

function updatePipes() {
  if (frame % 90 === 0) {
    let top = Math.random() * 300;
    let gap = 120;
    pipes.push({ x: canvas.width, top: top, bottom: top + gap });
  }
  pipes.forEach(p => p.x -= 2);
}

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBird();
  updateBird();
  drawPipes();
  updatePipes();
  frame++;
  requestAnimationFrame(loop);
}

loop();