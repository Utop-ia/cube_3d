let cubi = [];
let copie = 30;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  //creo il mio dataset
  for (let i = 0; i < 100; i++) {
    let cubo = {
      x: random(-1000, 1000),
      y: random(-1000, 1000),
      z: random(-1000, 1000),
      color: random(["green", "blue", "red", "yellow", "purple", "orange"]),
      size: random(50, 500),
    };
    cubi.push(cubo);
  }
}

function draw() {
  background(220);
  orbitControl();
  // visualizzo il mio dataset
  for (let cubo of cubi) {
    push();
    translate(cubo.x, cubo.y, cubo.z);
    strokeWeight(5);
    stroke(cubo.color);
    noFill();
    box(cubo.size);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
