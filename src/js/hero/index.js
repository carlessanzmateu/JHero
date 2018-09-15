export class Hero {
  context
  width = 15
  height = 40;
  color = "#FF0000";
  xLocation;
  yLocation;
  xMovementSpeed = 7;
  jumpSpeed = 3;
  fallSpeed = 5;

  constructor(context) {
    this.context = context;
  }

  draw() {
    this.context.beginPath();
    this.context.rect(
      this.getXLocation(),
      this.getYLocation(),
      this.getHeroWidth(),
      this.getHeroHeight(),
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

  getJumpSpeed() {
    return this.jumpSpeed;
  }

  setJumpSpeed(heroJumpSpeed) {
    this.jumpSpeed = heroJumpSpeed;
  }

  getFallSpeed() {
    return this.fallSpeed;
  }

  setFallSpeed(heroFallSpeed) {
    this.fallSpeed = heroFallSpeed;
  }
}
