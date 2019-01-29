let BG_COLOR = "#0d0e0f";
let LINES_AMOUNT;
let LINE_LENGTH = 2500;
let BLOCKS_AMOUNT = 5;
let BLOCK_WIDTH;

let blocks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  BLOCK_WIDTH = windowWidth / BLOCKS_AMOUNT;
  LINES_AMOUNT = BLOCK_WIDTH / 4;

  for (let i = 0; i < BLOCKS_AMOUNT; i++) {
    blocks.push(new Block(i));
    blocks[i].createLines();
  }
}

function draw() {
  clear();

  // Draw a background
  fill(BG_COLOR);
  noStroke();
  rect(0, 0, windowWidth, windowHeight);

  blocks.forEach(block => {
    block.drawLines();
  });

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  BLOCK_WIDTH = windowWidth / BLOCKS_AMOUNT
}