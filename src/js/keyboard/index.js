export class Keyboard {
  RIGHT_KEY_CODE = 39;
  LEFT_KEY_CODE = 37;
  SPACE_BAR_KEY_CODE = 32;

  rightPressed = false;
  leftPressed = false;
  jumpPressed = false;

  keyDownHandler(event) {
    if(event.keyCode === this.RIGHT_KEY_CODE) {
      this.rightPressed = true;
    } else if(event.keyCode === this.LEFT_KEY_CODE) {
      this.leftPressed = true;
    }

    if(event.keyCode == this.SPACE_BAR_KEY_CODE) {
      this.setJumpPressed(true);
    }
  }

  keyUpHandler(event) {
    if(event.keyCode === this.RIGHT_KEY_CODE) {
      this.rightPressed = false;
    }
    else if(event.keyCode === this.LEFT_KEY_CODE) {
      this.leftPressed = false;
    }
  
    if(event.keyCode === this.SPACE_BAR_KEY_CODE) {
      this.setJumpPressed(false);
    }
  }
  
  getRightPressed() {
    return this.rightPressed;
  }

  setRightPressed(rightPressedStatus) {
    this.rightPressed = rightPressedStatus;
  }

  getLeftPressed() {
    return this.leftPressed;
  }

  setLeftPressed(leftPressedStatus) {
    this.leftPressed = leftPressedStatus;
  }

  getJumpPressed() {
    return this.jumpPressed;
  }

  setJumpPressed(jumpPressedStatus) {
    this.jumpPressed = jumpPressedStatus;
  }
}
