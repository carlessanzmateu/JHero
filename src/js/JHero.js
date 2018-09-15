import { Hero } from './hero/index';

const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
const fps = 60;
const hero = new Hero(context);

var rightPressed = false;
var leftPressed = false;

const initHeroXLocation = 40;
let x = initHeroXLocation;

function keyDownHandler(e) {
  if(e.keyCode == 39) {
      rightPressed = true;
  }
  else if(e.keyCode == 37) {
      leftPressed = true;
  }
}

function keyUpHandler(e) {
  if(e.keyCode == 39) {
      rightPressed = false;
  }
  else if(e.keyCode == 37) {
      leftPressed = false;
  }
}

function mapBorderCollider() {
  if (x >= canvas.width - hero.getHeroWidth()) {
    x = canvas.width - hero.getHeroWidth();
  }

  if (x < 0) {
    x = 0;
  }
}

function initHeroLocation() {
  const heroHeight = hero.getHeroHeight();
  const initHeroYLocation = canvas.height - heroHeight;

  hero.setXLocation(initHeroXLocation);
  hero.setYLocation(initHeroYLocation);
}

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  
  hero.draw();

  if(rightPressed && !(x + hero.getHeroWidth() >= canvas.width)) {
    x += hero.getXHeroMovementSpeed();
  }
  else if(leftPressed && !(x <= 0)) {
    x -= hero.getXHeroMovementSpeed();
  }

  hero.setXLocation(x);

  setTimeout(() => {
    requestAnimationFrame(render)
  }, 1000/fps);
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
initHeroLocation();
render();
