import { Hero } from './hero/index';

const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");

const fps = 60;

const hero = new Hero(context, 0, 0);

function initHeroLocation() {
  const heroHeight = hero.getHeroHeight();
  const heroYLocation = canvas.height - heroHeight;

  hero.setXLocation(40);
  hero.setYLocation(heroYLocation);
}

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  hero.draw();

  setTimeout(function(){
    requestAnimationFrame(render)
  }, 1000/fps);
}

initHeroLocation();
render();
