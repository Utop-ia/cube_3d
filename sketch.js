function setup() {
  createCanvas(windowWidth, windowHeight, "webgl");
}

function draw() {
  background(220);
  orbitControl();
  const s = 100;
  //cubi che si moltiplicano in modo casuale
  for (let i = 0; i < 100; i++) {
    let x = random(-1000, 1000);
    let y = random(-1000, 1000);
    let z = random(-1000, 1000);

    let color = random(["green", "blue", "red", "yellow", "purple", "orange"]);
    let size = random(50, 500);
    push();
    translate(x, y, z);
    strokeWeight(5);
    stroke(color);
    noFill();
    box(size);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
