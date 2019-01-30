class Line {

  constructor(hue, parent, i) {
    this.opacity = 1
    this.hue = hue

    this.parent = parent
    this.i = i

    this.pos = createVector(random(BLOCK_WIDTH * this.parent, BLOCK_WIDTH * (this.parent + 1)), 0)
    this.color = `hsla(${this.hue}, 100%, 50%, ${this.opacity})`
    this.velocity = random(1, 3)
    this._opVel = random(0.002, 0.004)
  }

  draw() {
    strokeWeight(2);
    stroke(this.color);
    line(this.pos.x, this.pos.y - LINE_LENGTH, this.pos.x, this.pos.y);

    stroke(`hsla(${this.hue}, 100%, 100%, ${this.opacity})`);
    point(this.pos.x, this.pos.y);
  }

  move() {
    if (this.opacity <= this._opVel * 1.05) {
      this.opacity = 1;
      this.pos.y = 0;
      return;
    }

    this.opacity -= this._opVel;
    this.color = `hsla(${this.hue}, 100%, 50%, ${this.opacity})`
    this.pos.y += this.velocity
  }

  updateHue(h) {
    if (this.parent < BLOCKS_AMOUNT - 1) {
      let c = lerpColor(
        color(`hsl(${h}, 100%, 50%)`),
        color(`hsl(${blocks[this.parent + 1].hue}, 100%, 50%)`),
        this.i / LINES_AMOUNT);

      return this.hue = floor(hue(c));
    }

    this.hue = h;
  }

}