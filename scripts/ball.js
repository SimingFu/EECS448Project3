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
        //this.detect_collisions()
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
    detect_collisions(paddle, brickset)
    {
        let y_pos = this.y + this.vel.y;
        let x_pos = this.x + this.vel.x;
        if (y_pos + this.radius > canvas.height || y_pos - this.radius < 0) this.vel.y *= -1;
        if (x_pos + this.radius > canvas.width || x_pos - this.radius < 0) this.vel.x *= -1;

        let x_collide_distance = brickset.brick_length / 2 + this.radius;
        let y_collide_distance = brickset.brick_height / 2 + this.radius;

        for (let i = 0; i < brickset.bricks.length; i++)
        {
            let brick = brickset.bricks[i];
            let b_cx = brick.x + (brickset.brick_length / 2);
            let b_cy = brick.y + (brickset.brick_height / 2);

            let x_vector = Math.abs(b_cx - x_pos);
            let y_vector = Math.abs(b_cy - y_pos);

            ctx.beginPath();
            ctx.moveTo(b_cx, b_cy);
            ctx.lineTo(x_pos, y_pos);
            ctx.stroke();

            //console.log(x_collide_distance, y_collide_distance);
            if (x_vector <= x_collide_distance && y_vector <= y_collide_distance)
            {
                console.log("collide");
                let prev_x = Math.abs(b_cx - this.x);
                let prev_y = Math.abs(b_cy - this.y);
                if (prev_x > x_collide_distance) this.vel.x *= -1;
                else this.vel.y *= -1;
                brickset.bricks.splice(i, 1);
            }
          

        }
        
    }
}
//Normalize the paddle width from -π to π. At zero there should be no difference in the reflection.
//sin(-π) is -1, sin(0) is 0, and sin(π) is 1.