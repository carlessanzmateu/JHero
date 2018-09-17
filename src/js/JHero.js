import { Keyboard } from './keyboard/index';
import { Hero } from './hero/index';
import { Wall } from './wall/index';

const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
const fps = 60;

const keyboard = new Keyboard();
const hero = new Hero(context);
const wall = new Wall(context, 30, 100, canvas.width/2, canvas.height - 50);

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
  if (hero.getXLocation() >= canvas.width - hero.getHeroWidth()) {
    hero.setXLocation(canvas.width - hero.getHeroWidth());
  }

  if (hero.getXLocation() < 0) {
    hero.setXLocation(0);
  }

  if (hero.getYLocation() > canvas.height - hero.getHeroHeight()) {
    hero.setYLocation(canvas.height - hero.getHeroHeight());
  }

  if (hero.getYLocation() < 0) {
    hero.setYLocation(0);
  }
}

function colliderEngine() {
  let hasCollision = hero.getXLocation() > wall.getWallXLocation() &&
  hero.getXLocation() < wall.getWallXLocation() + wall.getWallWidth() &&
  hero.getYLocation() + hero.getHeroHeight() > wall.getWallYLocation();

  if (hasCollision) {
    console.log('Collision!');
  }
}

function initHeroLocation() {
  const heroHeight = hero.getHeroHeight();
  const initHeroYLocation = canvas.height - heroHeight;

  hero.setXLocation(initHeroXLocation);
  hero.setYLocation(initHeroYLocation);
}

// HOW SHOULD WORK RENDER
/*
render loop =>
1.- User Interaction
2.- Game Logic
3.- Pthysics engine
3.1.-Positional logic
3.2-Collision detection
3.3-Collision resolution
4.- Render
5.- => 1.- Repit all the process
*/
function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  
  if(keyboard.getRightPressed() && !(hero.getXLocation() + hero.getHeroWidth() >= canvas.width)) {
    hero.setXLocation(hero.getXLocation() + hero.getXHeroMovementSpeed());
  }
  else if(keyboard.getLeftPressed() && !(hero.getXLocation() <= 0)) {
    hero.setXLocation(hero.getXLocation() - hero.getXHeroMovementSpeed());
  }

  if(keyboard.getJumpPressed()) {
    hero.setYLocation(hero.getYLocation() - hero.getJumpSpeed());
  } else if(hero.getYLocation() < canvas.height - hero.getHeroHeight()) {
    hero.setYLocation(hero.getYLocation() + hero.getFallSpeed());
  }

  colliderEngine();

  hero.draw();
  wall.draw();

  setTimeout(() => {
    requestAnimationFrame(render)
  }, 1000/fps);
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
initHeroLocation();
render();
