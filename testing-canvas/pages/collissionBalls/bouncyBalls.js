const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ballsQuantity = 2;
// Prueba 1: Funciona
// const ballsData = [
//   { x: 100, y: window.innerHeight - 300, velocityX: 3 },
//   { x: 300, y: window.innerHeight - 300, velocityX: -1 },
// ];
// Prueba 2: SOLO primer colisión
const ballsData = [
  { x: 100, y: window.innerHeight - 301, velocityX: 1 },
  { x: 300, y: window.innerHeight - 300, velocityX: -1 },
];
// Prueba 3:
// const ballsData = [
//   { x: 600, y: 150, velocityX: 10 },
//   { x: 300, y: 370, velocityX: -10 },
// ];
let ballsArray = [];
const ballsSize = 15;
const explosionPng = new Image();
let hasExplosions = true;

function drawImage() {
  class Ball {
    constructor(x, y, color, velocityX) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.size = ballsSize;
      this.velocityX = velocityX;
      this.velocityY = 0;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }
    update() {
      ctx.fillStyle = this.color;

      // collission detection with borders
      if (this.y + this.size > window.innerHeight && this.velocityY > 0) {
        this.velocityY = -this.velocityY + 1;
      } else if (
        this.y + this.size < window.innerHeight + 2 &&
        this.y + this.size > window.innerHeight - 2
      ) {
        this.y = window.innerHeight - this.size;
      } else {
        this.velocityY += 1;
      }
      if (this.x + this.size > window.innerWidth || this.x - this.size < 0) {
        this.velocityX = -this.velocityX;
      }
      this.y += this.velocityY;
      this.x += this.velocityX;
    }
  }
  function init() {
    ballsArray = [];

    for (let i = 0; i < ballsData.length; i++) {
      let color = `hsl(${Math.round(Math.random() * 360)}, 100%, 50%)`;
      ballsArray.push(
        new Ball(ballsData[i].x, ballsData[i].y, color, ballsData[i].velocityX)
      );
    }
  }
  function explosion(x, y) {
    ctx.drawImage(
      explosionPng,
      x - explosionPng.width / 8,
      y - explosionPng.height / 8,
      explosionPng.width / 4,
      explosionPng.height / 4
    );
  }
  function checkBallsCollission() {
    for (let i = 0; i < ballsArray.length; i++) {
      for (let j = i + 1; j < ballsArray.length; j++) {
        const b1 = ballsArray[i];
        const b2 = ballsArray[j];
        // TODO: puede que esto este mal y haya que cambiar de lado b1 b2 --->
        const a = b1.x - b2.x;
        const c = b1.y - b2.y;
        // <---
        const bSq = a ** 2 + c ** 2;
        const minBSq = (ballsSize * 2) ** 2;
        if (bSq < minBSq) {
          console.log(JSON.stringify(b1), JSON.stringify(b2), {
            x: (b1.velocityX ** 2 + b2.velocityX ** 2) ** 0.5,
            y: (b1.velocityY ** 2 + b2.velocityY ** 2) ** 0.5,
            tot:
              ((b1.velocityX ** 2 + b2.velocityX ** 2) ** 0.5 +
                (b1.velocityY ** 2 + b2.velocityY ** 2) ** 0.5) **
              0.5,
          });
          const ang = Math.atan(c / a);
          const b1VXNorm = b1.velocityX * Math.cos(ang);
          const b1VYNorm = b1.velocityY * Math.sin(ang);

          const b2VXNorm = b2.velocityX * Math.cos(ang);
          const b2VYNorm = b2.velocityY * Math.sin(ang);

          const b1VXTang = b1.velocityX * Math.sin(ang);
          const b1VYTang = b1.velocityY * Math.cos(ang);

          const b2VXTang = b2.velocityX * Math.sin(ang);
          const b2VYTang = b2.velocityY * Math.cos(ang);

          const b1SumNorm = b2VXNorm + b2VYNorm;
          const b1SumTang = b1VXTang + b1VYTang;
          const b2SumNorm = b1VXNorm + b1VYNorm;
          const b2SumTang = b2VXTang + b2VYTang;

          // -1.2848950984468495 / Math.cos(0.03569911267932397) + (0.03569911267932397 ? -7.959211304267984 / Math.sin(0.03569911267932397) : 0)
          // -224.28571428571425
          const b1VxSum = b1SumNorm * Math.cos(ang) + b1SumTang * Math.sin(ang);
          const b1VySum = b1SumNorm * Math.sin(ang) + b1SumTang * Math.cos(ang);
          const b2VxSum = b2SumNorm * Math.cos(ang) + b2SumTang * Math.sin(ang);
          const b2VySum = b2SumNorm * Math.sin(ang) + b2SumTang * Math.cos(ang);
          // const b1VxSum = b1SumNorm / Math.cos(ang);
          // const b1VySum = ang ? b1SumNorm / Math.sin(ang) : 0;
          // const b2VxSum = b2SumNorm / Math.cos(ang);
          // const b2VySum = ang ? b2SumNorm / Math.sin(ang) : 0;

          b1.velocityX = b1VxSum;
          b1.velocityY = b1VySum;
          b2.velocityX = b2VxSum;
          b2.velocityY = b2VySum;
          console.log({
            a,
            c,
            bSq,
            minBSq,
            ang,
            b1VXNorm,
            b1VYNorm,
            b2VXNorm,
            b2VYNorm,
            b1VXTang,
            b1VYTang,
            b2VXTang,
            b2VYTang,
            b1SumNorm,
            b1SumTang,
            b2SumNorm,
            b2SumTang,
            b1VxSum,
            b1VySum,
            b2VxSum,
            b2VySum,
            b1VelocityX: b1.velocityX,
            b1VelocityY: b1.velocityY,
            b2VelocityX: b2.velocityX,
            b2VelocityY: b2.velocityY,
            verify: {
              x: (b1.velocityX ** 2 + b2.velocityX ** 2) ** 0.5,
              y: (b1.velocityY ** 2 + b2.velocityY ** 2) ** 0.5,
              tot:
                ((b1.velocityX ** 2 + b2.velocityX ** 2) ** 0.5 +
                  (b1.velocityY ** 2 + b2.velocityY ** 2) ** 0.5) **
                0.5,
            },
          });
          // explosion(b1.x, b1.y);
          // playSound(0.2);
          // ballsArray = ballsArray.filter(
          //   (_v, index) => index !== i && index !== j
          // );
        }
      }
    }
  }
  let animatedRunningCurrent = 0;
  function animate(animatedRunning) {
    if (animatedRunning === animatedRunningCurrent) {
      requestAnimationFrame(() => animate(animatedRunning));
      ctx.fillStyle = "rgba(0,0,0,1)";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      if (hasExplosions) checkBallsCollission();
      for (let i = 0; i < ballsArray.length; i++) {
        ballsArray[i].update();
        ballsArray[i].draw();
      }
    }
  }
  init();
  animate(animatedRunningCurrent);

  const restart = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
    animatedRunningCurrent++;
    animate(animatedRunningCurrent);
  };

  window.addEventListener("resize", restart);

  document.getElementById("Ok").addEventListener("click", () => {
    quantity = document.getElementById("Quantity").value;
    if (quantity < 1) {
      document.getElementById("Quantity").value = 1;
      quantity = 1;
    }
    ballsQuantity = quantity;
    hasExplosions = document.getElementById("Explosions").checked;
    restart();
  });

  document.getElementById("Cancel").addEventListener("click", () => {
    document.getElementById("Quantity").value = ballsQuantity;
    document.getElementById("Explosions").checked = hasExplosions;
  });
}

var sound = new Audio("/../testing-canvas/audio/explosion.wav");
sound.preload = "auto";
sound.load();

function playSound(volume) {
  var click = sound.cloneNode();
  click.volume = volume;
  click.play();
}

const fetchAsBlob = (url) => fetch(url).then((response) => response.blob());

const convertBlobToBase64 = (blob) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });

window.addEventListener("load", (event) => {
  console.log("page has loaded");
  fetchAsBlob(`/../testing-canvas/images/explosion.png`)
    .then(convertBlobToBase64)
    .then((base64) => {
      explosionPng.src = base64;
      document.getElementById("Quantity").value = ballsQuantity;
      drawImage();
    });
});
