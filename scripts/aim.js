class Aim {
  constructor(startPos_x, startPos_y) {
    this.startPos = {
      x: startPos_x,
      y: startPos_y
    }

    this.length = canvas.width*canvas.height*0.00004
    this.color = '#00ddff'

    this.endPos = {
      x: this.startPos.x,
      y: this.startPos.y - this.length 
    }

    this.lineWidth = canvas.width*canvas.height*0.000004
  }

  update(startPos_x, startPos_y) {
    //this.color = updateColor() //TODO
    this.updateLine(startPos_x, startPos_y)
    this.updateHead()
  }

  draw() {
    this.drawLine()
    this.drawHead()
  }

  updateLine(startPos_x, startPos_y) {
    this.startPos = {
      x: startPos_x,
      y: startPos_y
    }

    this.length = canvas.width*canvas.height*0.00004

    this.endPos = {
      x: this.startPos.x,
      y: this.startPos.y - this.length 
    }

    this.lineWidth = canvas.width*canvas.height*0.000004
  }

  updateHead() {
       
  }

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
}
