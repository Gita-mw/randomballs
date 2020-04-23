randomBalls(randomBalls_canvasID);

function randomBalls(cnavasID) {
  const body = document.querySelector('body');
  const canvas = document.getElementById(cnavasID);
  const ctx = canvas.getContext('2d');

  canvas.style.backgroundColor = randomBalls_canvasColor;
  canvas.style.top = '0';
  canvas.style.left = '0';

  if (randomBalls_canvasSize) {
    const container = canvas.parentElement;
    container.style.position = 'relative'
    canvas.style.position = 'absolute';
  } else {
    body.style.minHeight = '100vh';
    canvas.style.position = 'fixed';
  }

  function init() {
    if (randomBalls_canvasSize) {
      const containerWidth = container.getBoundingClientRect().width;
      const containerHeight = container.getBoundingClientRect().height;
      canvas.width = containerWidth;
      canvas.height = containerHeight;
    } else {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    class Circle {
      constructor(x, y, r, c) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.c = c;

        this.dx = (Math.random() * randomBalls_ballsSpeed) + 1;
        this.dx *= Math.floor(Math.random() * Math.round(randomBalls_ballsSpeed / 2)) === 1 ? 1 : -1;
        this.dy = (Math.random() * randomBalls_ballsSpeed) + 1;;
        this.dy *= Math.floor(Math.random() * Math.round(randomBalls_ballsSpeed / 2)) === 1 ? 1 : -1;
      }

      draw() {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
      }

      animate() {
        this.x += this.dx;
        this.y += this.dy;

        if (this.x + this.r > canvas.width || this.x - this.r < 0) {
          this.dx = -this.dx;
          this.dy = -this.dy;
        }

        this.draw();
      }
    }

    const balls = [];

    for (let i = 0; i < randomBalls_initialBalls; i++) {
      let r = Math.floor(Math.random() * randomBalls_ballsSize) + Math.round(randomBalls_ballsSize / 2);
      let x = Math.random() * (canvas.width - r * 2) + r;
      let y = Math.random() * (canvas.height - r * 2) + r;
      let o = Number('0.' + (Math.floor(Math.random() * randomBalls_initialBallsOpacity) + 1));
      let c = `rgba(${randomBalls_initialBallsColor[0]},${randomBalls_initialBallsColor[1]},${randomBalls_initialBallsColor[2]},${o})`;
      balls.push(new Circle(x, y, r, c));
    }

    function drawExtraBall(e) {
      e.stopPropagation();

      if (balls.length < randomBalls_initialBalls + randomBalls_extraBallsMax) {
        let r = Math.floor(Math.random() * randomBalls_ballsSize) + Math.round(randomBalls_ballsSize / 2);
        balls.push(new Circle(e.clientX, e.clientY, r, randomBalls_extraBallsColor));
      }
    }

    function upDate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < balls.length; i++) {
        balls[i].animate();
      }

      requestAnimationFrame(upDate);
    }

    upDate();
    canvas.addEventListener('click', drawExtraBall, false);
  }

  window.addEventListener('load', init);
  window.addEventListener('resize', init);
}