class Ball
{
    constructor()
    {
        this.x = canvas.width / 2; // initial position is middle of the screen
        this.y = 25;//canvas.height / 4;
        this.vel = {x: 5, y: -5} // initial velocities
        this.radius = canvas.height / 40; // radius of ball dependent on screen size
    }
    update()
    {
        this.x += this.vel.x; //increment x position based on velocity
        this.y += this.vel.y; //increment y position based on velocity
    }
    draw()
    {
        console.log("Draw of ball");
        ctx.beginPath(); // begin drawing new shape
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2); // create an arc at (this.x, this.y) going from 0 degrees to 2pi degrees (full circle)
        ctx.fill(); // fill in the circle
        ctx.closePath(); // end drawing
    }
    detect_collisions(paddle, brickset)
    {
        let y = this.y; 
        let x = this.x; 
        if (y + this.radius >= canvas.height || y - this.radius <= 0) this.vel.y *= -1;
        if (x + this.radius >= canvas.width || x - this.radius <= 0) this.vel.x *= -1;

        let x_collide_distance = brickset.brick_length / 2 + this.radius;
        let y_collide_distance = brickset.brick_height / 2 + this.radius;

        for (let i = 0; i < brickset.bricks.length; i++)
        {
            let brick = brickset.bricks[i];
            let b_cx = brick.x + (brickset.brick_length / 2);
            let b_cy = brick.y + (brickset.brick_height / 2);

            let x_vector = Math.abs(b_cx - x);
            let y_vector = Math.abs(b_cy - y);

            if (x_vector <= x_collide_distance && y_vector <= y_collide_distance)
            {
                let prev_x = Math.abs(b_cx - (x - this.vel.x));
                let prev_y = Math.abs(b_cy - (y - this.vel.y));
                if (prev_x > x_collide_distance) this.vel.x *= -1;
                if (prev_y > y_collide_distance) this.vel.y *= -1;
                brickset.bricks.splice(i, 1);
            }
        }
        
    }
}
//Normalize the paddle width from -π to π. At zero there should be no difference in the reflection.
//sin(-π) is -1, sin(0) is 0, and sin(π) is 1.