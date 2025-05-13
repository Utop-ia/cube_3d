// in cima definisco le variabili indipendenti
const copie = 30;
const texture_path = "./immagini/obama_face.jpg";

//

let img_1;

function preload() {
  img_1 = loadImage(texture_path);
}

//

let cubi = [];

/** @type {Graphics} */
let g;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  g = createGraphics(25, 25);

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

  g.background(220);
  g.textAlign(CENTER);
  g.textSize(g.height * 1.4);
  g.text("Z", g.width / 2, g.height);

  // visualizzo il mio dataset (i miei oggetti)
  for (let cubo of cubi) {
    push();
    translate(cubo.x, cubo.y, cubo.z);
    strokeWeight(cubo.strokesize);
    noStroke();
    //stroke(cubo.color);
    //noFill();
    texture(g);
    box(cubo.size);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
