class PlayerStatus {
  constructor() {

    this.statusObjects = []

    this.currentLives = 3
    this.currentScore = 369
    this.addLife_Score = 370

    this.playerLives = new Lives(this.currentLives)
    this.playerScore = new Score(this.currentScore, this.addLife_Score)

    this.statusObjects = [this.playerLives, this.playerScore]
  }

  update() {
    this.playerLives.update(this.currentLives)
    this.playerScore.update(this.currentScore, this.addLife_Score)
  }

  draw() {
    this.statusObjects.forEach(obj => obj.draw())
  }
}
