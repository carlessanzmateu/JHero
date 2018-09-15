export class Hero {
  context
  width = 15
  height = 40;
  color = "#FF0000";
  xLocation;
  yLocation;
  xMovementSpeed = 2;

  constructor(context) {
    this.context = context;
  }

  draw() {
    this.context.beginPath();
    this.context.rect(
      this.getXLocation(),
      this.getYLocation(),
      this.width,
      this.height,
    );
    this.context.fillStyle = this.getHeroColor();
    this.context.fill();
    this.context.closePath();
  }

  getXLocation() {
    return this.xLocation;
  }

  setXLocation(xLocation) {
    this.xLocation = xLocation;
  }

  getYLocation() {
    return this.yLocation;
  }

  setYLocation(yLocation) {
    this.yLocation = yLocation;
  }

  getHeroColor() {
    return this.color;
  }

  setHeroColor(color) {
    this.color = color;
  }

  getHeroHeight() {
    return this.height;
  }

  setHeroHeight(heroHeight) {
    this.height = heroHeight;
  }

  getHeroWidth() {
    return this.width;
  }

  setHeroWidth(heroWidth) {
    this.width = heroWidth;
  }

  getXHeroMovementSpeed() {
    return this.xMovementSpeed;
  }

  setXHeroMovementSpeed(xHeroMovementSpeed) {
    this.xMovementSpeed = xHeroMovementSpeed;
  }
}
