import { Hero } from './hero/index';

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var fps = 60;

const hero = new Hero(ctx, 20, 40);

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hero.draw();
  setTimeout(function(){
    requestAnimationFrame(render)
  }, 1000/fps);
}

render();
