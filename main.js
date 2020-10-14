gameObjects = [] // array to iterate through during game loop
let paddle = new Paddle(); // instantiate paddle
let ball = new Ball(); // instantiate ball
gameObjects.push(paddle); // add paddle to array
gameObjects.push(ball); // add ball to array

function DetectColiisions()
{
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) ball.vel.y *= -1; //change y direction if it is going off screen
    if (ball.x + ball.radius > canvas.height || ball.x - ball.radius < 0) ball.vel.x *= -1;

    
}

function animate() // main game loop occurs here
{
    requestAnimationFrame(animate); // waits until this animate is done and then calls it again
    if (!paused)
    {
        ctx.clearRect(0, 0 , window.innerWidth, window.innerHeight); // clears the previous frame
        for (let i = 0; i < gameObjects.length; i++) // iterate through game objects
        {
            gameObjects[i].update(); // call update on each object
            DetectColiisions();
        }
    }
}

animate(); // start the loop
