class Block {

  constructor(i) {
    this.i = i

    this.hue = floor(random(0, 360))
    this.lines = [];
  }

  createLines() {
    for (let i = 0; i < LINES_AMOUNT; i++) {
      this.createLine(i);
    }
  }

  drawLines() {
    for (let i = 0; i < this.lines.length; i++) {
      this.lines[i].updateHue(this.hue);
      this.lines[i].move();
      this.lines[i].draw();
    }

    if (this.hue < 360) this.hue += 1;
    else this.hue = 0;
  }

  createLine(i) {
    this.lines.push(new Line(
      this.hue,
      this.i,
      i
    ));
  }

}