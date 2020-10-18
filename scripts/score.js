class Score {
  constructor(currentScore, addLife_Score) {
    this.currentScore = currentScore
    this.addLife_Score = addLife_Score
    this.scale = 0.00004
    this.position = {
      x: canvas.width - canvas.width*canvas.height*this.scale*0.25,
      y: canvas.height*canvas.width*this.scale
    }
    this.fontSize = canvas.height*canvas.width*0.00004
  }

  update(currentScore) {
    this.position = {
      x: canvas.width - canvas.width*canvas.height*this.scale*0.25,
      y: canvas.height*canvas.width*this.scale
    }
    this.fontSize = canvas.height*canvas.width*0.00004
    this.currentScore = currentScore

    if(currentScore === this.addLife_Score) {
      //add life
      this.addLife_Score *= 2
      gameObjects[OBJ_KEYS.PLAYERSTATUS].currentLives++ 
    }
  }

  draw() {
    //ctx.beginPath()
    ctx.font = this.fontSize + 'px serif'
    ctx.fillStyle = object_color
    ctx.textAlign = 'right'
    ctx.fillText(this.currentScore + '', this.position.x, this.position.y)
    //ctx.closePath()
  }
}
