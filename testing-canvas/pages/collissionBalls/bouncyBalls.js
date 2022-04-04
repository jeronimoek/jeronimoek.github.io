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
// Prueba 2: masomenos
// const ballsData = [
//   { x: 100, y: window.innerHeight - 325, velocityX: 10 },
//   { x: 300, y: window.innerHeight - 300, velocityX: -1 },
// ];
// Prueba 3: Funciona
// const ballsData = [
//   { x: 600, y: 150, velocityX: 10 },
//   { x: 300, y: 370, velocityX: -10 },
// ];
// Prueba 4: Funciona
// const ballsData = [
//   { x: 100, y: 200, velocityX: 0 },
//   { x: 170, y: 224, velocityX: -10 },
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
      if (this.y + this.size > window.innerHeight && this.velocityY >= 0) {
        // console.log("here2");
        this.y = window.innerHeight - this.size + 1;
        this.velocityY = -this.velocityY + 1;
      } else if (this.y - this.size < 0) {
        this.y = 0 + this.size;
        this.velocityY = -this.velocityY;
      } else if (
        !(
          this.y + this.size < window.innerHeight - 2 &&
          this.y + this.size > window.innerHeight + 2
        )
      ) {
        this.velocityY += 1;
      }
      if (this.x + this.size > window.innerWidth) {
        // console.log("here1");
        this.x = window.innerWidth - this.size;
        this.velocityX = -this.velocityX;
      } else if (this.x - this.size < 0) {
        this.velocityX = -this.velocityX;
        this.x = this.size;
      }
      this.y += this.velocityY;
      this.x += this.velocityX;
    }
  }
  function init() {
    ballsArray = [];

    // for (let i = 0; i < ballsData.length; i++) {
    for (let i = 0; i < ballsQuantity; i++) {
      let color = `hsl(${Math.round(Math.random() * 360)}, 100%, 50%)`;
      ballsArray.push(
        new Ball(
          ballsSize + Math.random() * (window.innerWidth - ballsSize * 2),
          ballsSize + Math.random() * (window.innerHeight - ballsSize * 2),
          color,
          Math.random() * 20
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
  function checkBallsCollission() {
    for (let i = 0; i < ballsArray.length; i++) {
      for (let j = i + 1; j < ballsArray.length; j++) {
        console.log(i, j);
        const b1 = ballsArray[i];
        const b2 = ballsArray[j];
        // TODO: puede que esto este mal y haya que cambiar de lado b1 b2 --->
        const a = b2.x - b1.x;
        const c = b2.y - b1.y;
        // <---
        const bSq = a ** 2 + c ** 2;
        const minBSq = (ballsSize * 2) ** 2;
        if (bSq < minBSq) {
          // console.log(JSON.stringify(b1), JSON.stringify(b2), {
          //   verify: {
          //     x: b1.velocityX + b2.velocityX,
          //     y: b1.velocityY + b2.velocityY,
          //   },
          // });

          // Calculo el pase de velocidades entre las bolas
          const b1VVal = (b1.velocityX ** 2 + b1.velocityY ** 2) ** 0.5;
          const b1VAng = Math.atan2(b1.velocityY, b1.velocityX);
          const b2VVal = (b2.velocityX ** 2 + b2.velocityY ** 2) ** 0.5;
          const b2VAng = Math.atan2(b2.velocityY, b2.velocityX);
          const normAng = Math.atan2(c, a);
          const b1VToNormAng = b1VAng - normAng;
          const b1VNormVal = b1VVal * Math.cos(b1VToNormAng);
          const b1VTangVal = b1VVal * Math.sin(b1VToNormAng);
          const b2VToNormAng = b2VAng - normAng;
          const b2VNormVal = b2VVal * Math.cos(b2VToNormAng);
          const b2VTangVal = b2VVal * Math.sin(b2VToNormAng);
          const b1VFinalVal = (b1VTangVal ** 2 + b2VNormVal ** 2) ** 0.5;
          const b1VFinalAngToX = Math.atan2(b1VTangVal, b2VNormVal) + normAng;
          const b2VFinalVal = (b2VTangVal ** 2 + b1VNormVal ** 2) ** 0.5;
          const b2VFinalAngToX = Math.atan2(b2VTangVal, b1VNormVal) + normAng;
          const b1VFinalValX = b1VFinalVal * Math.cos(b1VFinalAngToX);
          const b1VFinalValY = b1VFinalVal * Math.sin(b1VFinalAngToX);
          const b2VFinalValX = b2VFinalVal * Math.cos(b2VFinalAngToX);
          const b2VFinalValY = b2VFinalVal * Math.sin(b2VFinalAngToX);
          b1.velocityX = b1VFinalValX;
          b1.velocityY = b1VFinalValY;
          b2.velocityX = b2VFinalValX;
          b2.velocityY = b2VFinalValY;

          // Evito el bug de cuando se solapan continuamente
          // Las muevo en la direccion de la reacción hasta sus limites.
          const ammountOfSeparation = ballsSize * 2 - bSq ** 0.5;
          const separationX = ammountOfSeparation * Math.cos(normAng);
          const separationY = ammountOfSeparation * Math.sin(normAng);
          b1.x += separationX;
          b1.y += separationY;
          b2.x += separationX;
          b2.y += separationY;
          ctx.strokeStyle = "white";
          ctx.beginPath(); // Start a new path
          ctx.moveTo(b1.x, b1.y); // Move the pen to (30, 50)
          ctx.lineTo(b1.x + b1.velocityX * 5, b1.y + b1.velocityY * 5); // Draw a line to (150, 100)
          ctx.lineWidth = 15;
          ctx.stroke();
          ctx.strokeStyle = "red";
          ctx.beginPath(); // Start a new path
          ctx.moveTo(b2.x, b2.y); // Move the pen to (30, 50)
          ctx.lineTo(b2.x + b2.velocityX * 5, b2.y + b2.velocityY * 5); // Draw a line to (150, 100)
          ctx.lineWidth = 15;
          ctx.stroke();
          // setTimeout(alert, 1);

          // console.log({
          //   verify: {
          //     x: b1.velocityX + b2.velocityX,
          //     y: b1.velocityY + b2.velocityY,
          //   },
          // });
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
      ctx.fillStyle = "rgba(0,0,0,0.1)";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      for (let i = 0; i < ballsArray.length; i++) {
        ballsArray[i].update();
        ballsArray[i].draw();
      }
      if (hasExplosions) checkBallsCollission();
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
