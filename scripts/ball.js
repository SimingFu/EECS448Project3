class Ball
{
    constructor()
    {
        this.x = canvas.width / 2; // initial position is middle of the screen
        this.y = canvas.height / 2;
        this.vel = {x: 0, y: 5} // initial velocities
        this.radius = canvas.height / 30; // radius of ball dependent on screen size
    }
    update()
    {
        let y_pos = this.y + this.vel.y; 
        if (y_pos + this.radius > canvas.height || y_pos - this.radius < 0) this.vel.y *= -1; //change y direction if it is going off screen
        
        this.x += this.vel.x; //increment x position based on velocity
        this.y += this.vel.y; //increment y position based on velocity
        this.draw(); // every time update is called, redraw the ball in its new position
    }
    draw()
    {
        ctx.beginPath(); // begin drawing new shape
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2); // create an arc at (this.x, this.y) going from 0 degrees to 2pi degrees (full circle)
        ctx.fillStyle = "#00000"; // set the fill color to black
        ctx.fill(); // fill in the circle
        ctx.closePath(); // end drawing
    }
}