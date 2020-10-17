class PlayerStatus {
  constructor() {

    this.statusObjects = []

    this.currentLives = 3
    this.playerLives = new Lives(this.currentLives)
    this.score = 0
    this.statusObjects = [this.playerLives]
  }

  update() {
    this.playerLives.update(this.currentLives)
  }

  draw() {
    this.statusObjects.forEach(obj => obj.draw())
  }
}
