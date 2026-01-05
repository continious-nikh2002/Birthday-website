function openSurprise() {
  document.querySelector('.gallery').classList.remove('hidden');
  document.querySelector('.note').classList.remove('hidden');

  document.getElementById('music').play();
  startConfetti();
}

/* CONFETTI */
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pieces = [];

for (let i = 0; i < 120; i++) {
  pieces.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 1,
    d: Math.random() * 10,
    c: `hsl(${Math.random() * 360},100%,50%)`
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  pieces.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.c;
    ctx.fill();

    p.y += Math.cos(p.d) + 1;
    p.x += Math.sin(p.d);

    if (p.y > canvas.height) {
      p.y = -10;
      p.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(draw);
}

function startConfetti() {
  draw();
}
