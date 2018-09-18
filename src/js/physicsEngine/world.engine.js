export default class WorldEngine {
  canvas;

  constructor(canvas) {
    this.canvas = canvas;
  }

  topCollision(yCoordinate) {
    return yCoordinate < 0;
  }

  topCollisionRecalculation() {
    return 0;
  }

  bottomCollision(yCoordinate) {
    return yCoordinate > this.canvas.height;
  }

  bottomCollisionRecalculation(actorHeight) {
    return this.canvas.height - actorHeight;
  }

  leftCollision(xCoordinate) {
    return xCoordinate < 0;
  }

  leftCollisionRecalculation() {
    return 0;
  }

  rightCollision(xCoordinate) {
    return xCoordinate > this.canvas.width;
  }

  rightCollisionRecalculation(actorHeight) {
    return this.canvas.width - actorHeight;
  }
}