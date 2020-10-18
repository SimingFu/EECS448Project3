class Score {
  constructor(currentScore, addLife_Score) {
    this.currentScore = currentScore
    this.addLife_Score = addLife_score
    this.scale = 0.1
    this.position = {
      x: canvas.width - canvas.width*this.scale,
      y: canvas.width*this.scale 
    }
    this.fontSize = canvas.height*0.1
  }

  update(currentScore) {
    this.position = {
      x: canvas.width - canvas.width*this.scale,
      y: canvas.width*this.scale 
    }
    this.fontSize = canvas.height*0.1
    this.currentScore = currentScore
  }

  draw() {
    //ctx.beginPath()
    ctx.font = this.fontSize + 'px serif'
    ctx.fillStyle = object_color
    ctx.textAlign = 'center'
    ctx.fillText(this.currentScore + '', this.position.x, this.position.y)
    //ctx.closePath()
  }
}
