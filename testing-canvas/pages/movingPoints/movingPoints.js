const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];
let hasLines = false;

// mouse
let mouse = {
  x: null,
  y: null,
  radius: 100,
};

window.addEventListener("mousemove", (event) => {
  mouse.x = event.x + canvas.clientLeft / 2;
  mouse.y = event.y + canvas.clientTop / 2;
});

function drawImage() {
  let imageWidth = png.width;
  let imageHeight = png.height;
  const data = ctx.getImageData(0, 0, imageWidth, imageHeight);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let pastParticle = 0;
  let lastLine = 0;
  let lastColumn = -1;

  class Particle {
    constructor(x, y, color, size) {
      this.x = x + canvas.width / 2 - png.width * 2;
      this.y = y + canvas.height / 2 - png.height * 2;
      this.color = color;
      this.size = 2;
      this.baseX = this.x;
      this.baseY = this.y;
      this.density = Math.random() * 10 + 2;
    }
    drawLineWithPast(currentParticle) {
      if (currentParticle === 0) {
        pastParticle = currentParticle;
        return;
      }
      if (this.baseY !== lastLine) {
        lastLine = this.baseY;
      } else if (this.baseX !== lastColumn + 8) {
        lastColumn = this.baseX;
      } else {
        ctx.beginPath(); // Start a new path
        ctx.moveTo(
          particleArray[pastParticle].x,
          particleArray[pastParticle].y
        ); // Move the pen to (30, 50)
        ctx.lineTo(this.x, this.y); // Draw a line to (150, 100)
        ctx.strokeStyle = this.color;
        ctx.stroke();
        ctx.closePath();
        lastColumn = this.baseX;
      }
      pastParticle = currentParticle;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }
    update(i) {
      ctx.fillStyle = this.color;

      // collission detection
      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      let forceDirectionX = dx / distance;
      let forceDirectionY = dy / distance;

      // max distance, past that the force will be 0
      const maxDistance = 100;
      let force = (maxDistance - distance) / maxDistance;
      if (force < 0) force = 0;

      let directionX = forceDirectionX * force * this.density * 2;
      let directionY = forceDirectionY * force * this.density * 2;

      if (distance < mouse.radius + this.size) {
        this.x -= directionX;
        this.y -= directionY;
      } else {
        if (this.x !== this.baseX) {
          let dx = this.x - this.baseX;
          this.x -= dx / 20;
        }
        if (this.y !== this.baseY) {
          let dy = this.y - this.baseY;
          this.y -= dy / 20;
        }
      }
      hasLines && this.drawLineWithPast(i);
      this.draw();
    }
  }
  function init() {
    particleArray = [];

    for (let y = 0; y < data.height; y += 2) {
      for (let x = y % 4 == 2 ? 0 : 1; x < data.width; x += 2) {
        if (data.data[y * 4 * data.width + x * 4 + 3] > 128) {
          let positionX = x;
          let positionY = y;
          // data.data =  [234,252,35 ,1  ,...]
          //              [RRR,GGG,BBB,AAA,...,RRR,GGG,BBB,AAA]
          let color =
            "rgb(" +
            data.data[y * 4 * data.width + x * 4] +
            "," +
            data.data[y * 4 * data.width + x * 4 + 1] +
            "," +
            data.data[y * 4 * data.width + x * 4 + 2] +
            ")";

          particleArray.push(new Particle(positionX * 4, positionY * 4, color));
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

      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update(i);
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
    hasLines = document.getElementById("Lines").checked;
    restart();
  });

  document.getElementById("Cancel").addEventListener("click", () => {
    document.getElementById("Lines").checked = hasLines;
  });
}

const png = new Image();

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
  fetchAsBlob("/../testing-canvas/images/spiderman2.png")
    .then(convertBlobToBase64)
    .then((base64) => {
      png.src = base64;
      ctx.drawImage(png, 0, 0);
      drawImage();
    });
});
