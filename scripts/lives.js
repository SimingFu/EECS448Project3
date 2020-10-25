class Lives {
/*
 * @pre: canvas and context must be declared
 * @post: creates Lives object that updates and draws the player's current lives
 * @aram currentLives: integer representing the current lives of the player
 */
  constructor(currentLives) {
    this.currentLives = currentLives
    this.maxLives = 5
    this.playerLives = []
    this.position = {
      x: canvas.width*0.01,
      y: canvas.width*0.01
    }
    this.pad = canvas.width*0.025
  }

/*
 * @pre: global 'lost' variable must be declared
 * @post: 'lost' var set to true when all lives lost
 * @aram currentLives: integer representing the current lives of the player
 */
  update(currentLives) {

    this.playerLives = this.buildLives(currentLives)
    if(currentLives === 0) {
      lost = true
    }
  }

/*
 * @pre: canvas and context must be declared
 * @post: for each life the player has, the life is drawn
 */
  draw() {

    this.playerLives.forEach(life => life.draw())
  }

/*
 * @pre: canvas must be declared
 * @pre: img html tag with id='img_life' must be defined with image file representing a life
 * @post: lives array created with Life objects declared with position coordinates in upper left corner
 * @aram currentLives: integer representing the current lives of the player
 * @return lives: array of Life objects 
 */
  buildLives(currentLives) {
    let lives = []

    for(let i = 0; i < currentLives; i++)
    {
      let position_x = this.position.x+i*(this.position.x+this.pad)
      lives.push(new Life(position_x, this.position.y))
    }

    return lives
  }
}

class Life {
/*
 * @pre: canvas and context must be declared
 * @post: creates Life object with an initialized position, size, and image
 * @aram position_x: integer representing x coordinate within canvas
 * @aram position_y: integer representing y coordinate within canvas
 */
  constructor(position_x, position_y) {

    this.scale = 0.025
    this.position = {
      x: position_x,
      y: position_y
    }
    this.size = {
      width: canvas.width*this.scale,
      height: canvas.width*this.scale*0.9
    }
    this.img = document.querySelector('#img_life')

  }

/*
 * @pre: ctx must be declared
 * @pre: img html tag with id='img_life' must be defined with image file representing a life
 * @post: draws life using position coordinates and height and width values 
 */
  draw() {
    ctx.drawImage(this.img, this.position.x, this.position.y,
                  this.size.width, this.size.height)
  }
}


