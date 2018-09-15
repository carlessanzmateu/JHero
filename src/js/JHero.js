import { Hero } from './hero/index';

const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");

const initHeroXLocation = 40;
let x = initHeroXLocation;
let differenceToX = 2;

const fps = 60;

const hero = new Hero(context);

function mapBorderCollider() {
  if(x + differenceToX > canvas.width - hero.getHeroWidth() || x + differenceToX < 0) {
    differenceToX = -differenceToX;
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

  hero.setXLocation(x);
  mapBorderCollider();

  x += differenceToX;

  setTimeout(() => {
    requestAnimationFrame(render)
  }, 1000/fps);
}

initHeroLocation();
render();
