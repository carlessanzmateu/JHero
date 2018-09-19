export default class WorldEngine {
  canvas;
  actor;

  constructor(canvas, actor) {
    this.canvas = canvas;
    this.actor = actor;
  }

  check() {
    const actorXCoordinate = this.actor.getXLocation();
    const actorWidth = this.actor.getHeroWidth();
    const actorYCoordinate = this.actor.getYLocation();
    const actorHeight = this.actor.getHeroHeight();

    const hasTopCollision = this.topCollision(actorYCoordinate);
    const hasBottomCollision = this.bottomCollision(actorYCoordinate + actorHeight);

    const hasLeftCollision = this.leftCollision(actorXCoordinate);
    const hasRightCollision = this.rightCollision(actorXCoordinate + actorWidth);

    if (hasTopCollision) {
      this.actor.setYLocation(this.topCollisionRecalculation());
    } else if (hasBottomCollision) {
      this.actor.setYLocation(this.bottomCollisionRecalculation(actorHeight));
    }
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