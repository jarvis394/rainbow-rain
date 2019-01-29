class Line {

  constructor(x, y, hue, velocity, parent, i) {
    this.opacity = 1
    this.hue = hue

    this.parent = parent
    this.i = i

    this.pos = createVector(x, y)
    this.color = `hsla(${this.hue}, 100%, 50%, ${this.opacity})`
    this.velocity = velocity
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

  updateHue(hue) {
    this.hue = hue
  }

}