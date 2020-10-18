class Ball
{
    constructor()
    {
        this.radius = canvas.height / 40; // radius of ball dependent on screen size
        this.start_x = canvas.width / 2; // initial position is middle of the screen
        this.start_y = canvas.height - (canvas.height / 30) - this.radius;//canvas.height / 4;
        this.x = this.start_x;
        this.y = this.start_y;
        this.vel = {x: 4, y: -8} // initial velocities
        simulate_ball = false
    }
    update()
    {
        //lose life
        if (this.y + this.radius >= canvas.height) {
          gameObjects[OBJ_KEYS.PLAYERSTATUS].currentLives--
          this.resetBall()
        }

        if (simulate_ball)
        {
            let velocity_scale = 8 * (1 / (Math.sqrt(this.vel.x**2 + this.vel.y**2)));
            
            this.vel.x = velocity_scale * this.vel.x;
            this.vel.y = velocity_scale * this.vel.y

            this.x += this.vel.x; //increment x position based on velocity
            this.y += this.vel.y; //increment y position based on velocity
            console.log(this.vel.x, this.vel.y);
        }
        else
        {
            this.lock_to_paddle();
        }
    }
    lock_to_paddle()
    {
        this.y = this.start_y;
        this.x = mouse.x;
    }
    draw()
    {
        ctx.beginPath(); // begin drawing new shape
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2); // create an arc at (this.x, this.y) going from 0 degrees to 2pi degrees (full circle)
        ctx.fill(); // fill in the circle
        ctx.closePath(); // end drawing
    }
    detect_collisions(paddle, brickset)
    {
        let y = this.y;
        let x = this.x;

        //ceiling collision
        if (y - this.radius <= 0) this.vel.y *= -1;

        //wall collision
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
                gameObjects[OBJ_KEYS.PLAYERSTATUS].currentScore++
            }
        }

    }

    resetBall() {
      simulate_ball = false
      this.vel = {x: 4, y: -8}
    }
}
//Normalize the paddle width from -π to π. At zero there should be no difference in the reflection.
//sin(-π) is -1, sin(0) is 0, and sin(π) is 1.
