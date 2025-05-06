let cubi = [];
let copie = 30;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  //creo il mio dataset (lista di oggetti)
  for (let i = 0; i < 100; i++) {
    let cubo = {
      x: random(-2000, 2000),
      y: random(-2000, 2000),
      z: random(-2000, 2000),
      color: random(["green", "blue", "red", "yellow", "purple", "orange"]),
      size: random(50, 500),
      strokesize: random(5, 50),
    };
    cubi.push(cubo);
  }
}

function draw() {
  background(220);
  orbitControl();

  // visualizzo il mio dataset (i miei oggetti)
  for (let cubo of cubi) {
    push();
    translate(cubo.x, cubo.y, cubo.z);
    strokeWeight(cubo.strokesize);
    stroke(cubo.color);
    noFill();
    box(cubo.size);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
