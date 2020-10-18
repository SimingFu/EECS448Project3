class Aim {
  constructor(startPosition_x, startPosition_y) {
    this.startPosition = {
      x: startPosition_x,
      y: startPosition_y
    }

    this.length = canvas.width*canvas.height*0.00004
    this.color = '#00ddff'

    this.endPosition = {
      x: this.startPosition.x,
      y: this.startPosition.y - this.length 
    }

    this.lineWidth = canvas.width*canvas.height*0.000004
  }

  update() {
  }

  draw() {
    ctx.beginPath()
    ctx.lineWidth = this.lineWidth
    ctx.strokeStyle = this.color
    ctx.lineCap = 'round'
    ctx.moveTo(this.startPosition.x, this.startPosition.y)
    ctx.lineTo(this.endPosition.x, this.endPosition.y)
    ctx.stroke()
  }
}
