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

  draw() {
    ctx.beginPath()
    ctx.lineWidth = this.lineWidth
    ctx.strokeStyle = this.color
    ctx.lineCap = 'round'
    ctx.moveTo(this.startPos.x, this.startPos.y)
    ctx.lineTo(this.endPos.x, this.endPos.y)
    ctx.stroke()
  }
}
