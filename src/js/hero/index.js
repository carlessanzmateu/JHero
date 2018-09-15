// (function(){
//   var heroWidth = 15;
//   var heroHeight = 40;
//   var heroColor = "#FF0000";

//   var heroXLocation = 10;

//   function hero(ctx) {
//     ctx.beginPath();
//     ctx.rect(heroXLocation, canvas.height - heroHeight, heroWidth, heroHeight);
//     ctx.fillStyle = heroColor;
//     ctx.fill();
//     ctx.closePath();
//   }

//   window.JHERO.hero = hero;

// })()

export class Hero {
  context
  width = 15
  height = 40;
  color = "#FF0000";
  xLocation;
  yLocation;

  constructor(context, xLocation, yLocation) {
    this.context = context;
    this.xLocation = xLocation;
    this.yLocation = yLocation;
    console.log('hero is working');
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
}
