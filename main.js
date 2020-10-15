var startBtn = document.getElementById('start');
var menu = document.getElementById('menu screen');
gameObjects = [] // array to iterate through during game loop
let paddle = new Paddle(); // instantiate paddle
let ball = new Ball(); // instantiate ball
gameObjects.push(paddle); // add paddle to array
gameObjects.push(ball); // add ball to array

function DetectColiisions()
{
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) ball.vel.y *= -1; //change y direction if it is going off screen
    if (ball.x + ball.radius > canvas.height || ball.x - ball.radius < 0) ball.vel.x *= -1;
    console.log(ball.y);
}

var ani = function animate() // main game loop occurs here
{
    menu.style.display = 'none';
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
startBtn.onclick = ani; // start the loop
