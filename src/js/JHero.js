import { Keyboard } from './keyboard/index';
import { Hero } from './hero/index';
import { Wall } from './wall/index';

const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
const fps = 60;

const keyboard = new Keyboard();
const hero = new Hero(context);
const wall = new Wall(context, 30, 50, canvas.width/2, canvas.height - 50);

const initHeroXLocation = 40;
let x = initHeroXLocation;
let y = canvas.height - hero.getHeroHeight();

function keyDownHandler(event) {
  keyboard.keyDownHandler(event);
}

function keyUpHandler(event) {
  keyboard.keyUpHandler(event)
}

function mapBorderCollider() {
  if (x >= canvas.width - hero.getHeroWidth()) {
    x = canvas.width - hero.getHeroWidth();
  }

  if (x < 0) {
    x = 0;
  }

  if (y > canvas.height - hero.getHeroHeight()) {
    y = canvas.height - hero.getHeroHeight();
  }

  if (y < 0) {
    y = 0;
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
  wall.draw();
  
  if(keyboard.getRightPressed() && !(x + hero.getHeroWidth() >= canvas.width)) {
    x += hero.getXHeroMovementSpeed();
  }
  else if(keyboard.getLeftPressed() && !(x <= 0)) {
    x -= hero.getXHeroMovementSpeed();
  }

  if(keyboard.getJumpPressed()) {
    y -= hero.getJumpSpeed();
  } else if(y < canvas.height - hero.getHeroHeight()) {
    y += hero.getFallSpeed();
  }

  mapBorderCollider();
  hero.setXLocation(x);
  hero.setYLocation(y);

  setTimeout(() => {
    requestAnimationFrame(render)
  }, 1000/fps);
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
initHeroLocation();
render();
