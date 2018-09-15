export class Wall {
  context;
  width;
  height;
  color = "#000000";
  xLocation;
  yLocation;

  constructor(context, width, height, x, y) {
    this.context = context;
    this.width = width;
    this.height = height;
    this.xLocation = x;
    this.yLocation = y;
  }

  draw() {
    this.context.beginPath();
    this.context.rect(
      this.getXLocation(),
      this.getYLocation(),
      this.width,
      this.height,
    );
    this.context.fillStyle = this.color;
    this.context.fill();
    this.context.closePath();
  }

  getXLocation() {
    return this.xLocation;
  }

  getYLocation() {
    return this.yLocation;
  }
}