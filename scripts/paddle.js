class Paddle // the thing the player controls
{
    constructor()
    {
        this.width = PADDLE_WIDTH; // width of paddle
        this.height = PADDLE_HEIGHT; // height of paddle
        this.x = canvas.width / 2;  // initial x position
        this.y = canvas.height - this.height; // initial y position
    }
    update()
    {
        if (mouse.x != undefined) 
        {
            this.x = Math.min(Math.max(mouse.x - (this.width / 2), 0), canvas.width - this.width); // move paddle based on mouse position if it is defined (it is undefined until it moves)
        }
    }
    draw()
    {
        ctx.fillRect(this.x, this.y, this.width, this.height); //fill in a rectangle at (this.x, this.y) with dimensions this.width x this.height
    }
    resetPaddle(){
      this.x = canvas.width / 2;  // initial x position
      this.y = canvas.height - this.height; // initial y position

    }
}
