const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ballsQuantity = 2;
let ballsArray = [];
const ballsSize = 15;
const explosionPng = new Image();

function drawImage() {
  class Ball {
    constructor(x, y, color) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.size = ballsSize;
      this.velocityX = Math.random() * 20 - 10;
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

    for (let i = 0; i < ballsQuantity; i++) {
      let color = `hsl(${Math.round(Math.random() * 360)}, 100%, 50%)`;
      ballsArray.push(
        new Ball(
          ballsSize + Math.random() * (window.innerWidth - ballsSize * 2),
          ballsSize + Math.random() * (window.innerHeight - ballsSize * 2),
          color
        )
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
  var sound = new Audio("./audio/explosion.wav");
  sound.preload = "auto";
  sound.load();

  function playSound(volume) {
    var click = sound.cloneNode();
    click.volume = volume;
    click.play();
  }
  function checkBallsCollission() {
    for (let i = 0; i < ballsArray.length; i++) {
      for (let j = i + 1; j < ballsArray.length; j++) {
        const a = ballsArray[i].x - ballsArray[j].x;
        const c = ballsArray[i].y - ballsArray[j].y;
        const b2 = Math.pow(a, 2) + Math.pow(c, 2);
        const minB2 = Math.pow(ballsSize, 2);
        if (b2 < minB2) {
          explosion(ballsArray[i].x, ballsArray[i].y);
          playSound(0.2);
          ballsArray = ballsArray.filter(
            (_v, index) => index !== i && index !== j
          );
        }
      }
    }
  }
  let animatedRunningCurrent = 0;
  function animate(animatedRunning) {
    if (animatedRunning === animatedRunningCurrent) {
      requestAnimationFrame(() => animate(animatedRunning));
      ctx.fillStyle = "rgba(0,0,0,0.2)";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      checkBallsCollission();
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
    console.log(ballsQuantity);
    restart();
  });

  document.getElementById("Reset").addEventListener("click", () => {
    document.getElementById("Quantity").value = ballsQuantity;
  });
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
  fetchAsBlob(`./images/explosion.png`)
    .then(convertBlobToBase64)
    .then((base64) => {
      explosionPng.src = base64;
      document.getElementById("Quantity").value = ballsQuantity;
      drawImage();
    });
});
