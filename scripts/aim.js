class Aim {
  /**
   * Aim class is what moves at the bottom of the screen before launching the ball. It creates and initializes the launch line.
   * @Pre create the launch line
   * @Post initializes launch line
   * @constructor
   */
  constructor(startPos_x, startPos_y) {
    this.startPos = {
      x: startPos_x,
      y: startPos_y
    }

    this.length = canvas.width*canvas.height*0.00004
    this.color = '#ff0000'//'#00ddff'

    this.endPos = {
      x: this.startPos.x,
      y: this.startPos.y - this.length
    }

    this.lineWidth = canvas.width*canvas.height*0.000004

    this.launchVector = {
      x: 0,
      y: 0
    }

    this.step = 0
    this.angularConst = 0.05
    this.minAngle = Math.PI/12
    this.maxAngle = 11*Math.PI/12
    this.radians = this.minAngle
    this.clockwise = false

    this.arrowHeadLeft = {
      x: 0,
      y: 0,
      length: this.length*0.25
    }

    this.arrowHeadRight = {
      x: 0,
      y: 0,
      length: this.length*0.25
    }
  }

  /**
   * Updates the launch line in different angle
   * @param {int} startPos_x - Starting position in x
   * @param {int} startPos_y - Starting position in y
   * @Pre assumes launch line is initialized
   * @Post updates launch line in different angle
   */
  update(startPos_x, startPos_y) {
    //this.color = updateColor() //TODO
    this.updateLine(startPos_x, startPos_y)
    this.updateLaunchVector()
    //this.updateHead() //TODO
  }

  /**
   * Draws the line on the ball
   * @Pre assumes launch line is initialized
   * @Post draw launch line on the ball
   */
  draw() {
    this.drawLine()
    //this.drawHead()//TODO
  }

  /**
   * Updates the launch vector
   * @Pre assumes launch line is initialized
   * @Post updates launch vector
  */
  updateLaunchVector() {
    this.updateAngle()
    this.launchVector.x = this.length*Math.cos(this.radians)
    this.launchVector.y = this.length*Math.sin(this.radians)

    this.endPos.x = this.startPos.x + this.launchVector.x
    this.endPos.y = this.startPos.y - this.launchVector.y
  }

  /**
   * Updates the angle the ball will launch at
   * @Pre assumes launch line is initialized
   * @Post updates angle for launching
   */
  updateAngle() {
    if(this.radians > this.maxAngle) {
      this.clockwise = true
    } else if (this.radians < this.minAngle){
      this.clockwise = false
    }

    if(this.clockwise) {
      this.step--
    } else {
      this.step++
    }

    this.radians = this.step*this.angularConst + this.minAngle
  }

  /**
   * Resets the launch line
   * @param {int} startPos_x - starting position x
   * @param {int} startPos_y - starting position y
   * @Pre assumes launch line is initialized
   * @Post reset launch line
   */
  updateLine(startPos_x, startPos_y) {
    this.startPos = {
      x: startPos_x,
      y: startPos_y
    }

    this.length = canvas.width*canvas.height*0.00004

    this.lineWidth = canvas.width*canvas.height*0.000004
  }

  /*TODO
  updateHead() {
    this.arrowHeadLeft.x = this.endPos.x +

  }
  */


  /**
   * Draws the aim line on the screen
   * @Pre assumes launch line is initialized
   * @Post draw launch line on the ball
   */
  drawLine() {
    ctx.beginPath()
    ctx.lineWidth = this.lineWidth
    ctx.strokeStyle = this.color
    ctx.lineCap = 'round'
    ctx.moveTo(this.startPos.x, this.startPos.y)
    ctx.lineTo(this.endPos.x, this.endPos.y)
    ctx.stroke()
    ctx.closePath()
  }

/*
  drawHead() {
    let scale = 0.25
    let leftLine = {
      x: this.endPos.x - this.length*scale,
      y: this.endPos.y + this.length*scale
    }

    let rightLine = {
      x: this.endPos.x + this.length*scale,
      y: this.endPos.y + this.length*scale
    }

    ctx.beginPath()
    ctx.lineWidth = this.lineWidth
    ctx.strokeStyle = this.color
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.moveTo(this.endPos.x, this.endPos.y)
    ctx.lineTo(leftLine.x, leftLine.y)
    ctx.moveTo(this.endPos.x, this.endPos.y)
    ctx.lineTo(rightLine.x, rightLine.y)
    ctx.stroke()
    ctx.closePath()
  }
*/
}
