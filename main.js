var startBtn = document.getElementById('start');
var menu = document.getElementById('menu screen');

gameObjects = [] // array to iterate through during game loop
let paddle = new Paddle(); // instantiate paddle
let ball = new Ball(); // instantiate ball

const BRICK_ROWS = 8;
const BRICK_COLS = 7;
let brickset = new Brickset(BRICK_ROWS, BRICK_COLS, true); //instantiate brickset with number of rows and columns of bricks

gameObjects.push(paddle); // add paddle to array
gameObjects.push(ball); // add ball to array
gameObjects.push(brickset);

DetectCollisions = function()
{
    console.log(ball.radius, canvas.height);
    if (ball.y_pos + ball.radius > canvas.height || ball.y_pos - ball.radius < 0) 
    {
        ball.vel.y *= -1;
        console.log(ball.y, ball.vel.y);
    }
    let b_length = brickset.brick_length;
    let b_height = brickset.brick_height;
    for (let i = 0; i < brickset.bricks.length; i++)
    {
        let brick = brickset.bricks[i];
        if(ball.x > brick.x && ball.xx < brick.x + b_length && ball.y > brick.y && ball.y < brick.y + b_height) 
        {
            ball.vel.y *= -1;
        }
    }
}

var ani = function animate() // main game loop occurs here
{
    menu.style.display = 'none';
    requestAnimationFrame(animate); // waits until this animate is done and then calls it again
    if (!paused)
    {
        ctx.clearRect(0, 0 , window.innerWidth, window.innerHeight); // clears the previous frame
        gameObjects[1].detect_collisions(gameObjects[0], gameObjects[2]);
        for (let i = 0; i < gameObjects.length; i++) // iterate through game objects
        {
            gameObjects[i].update(); // call update on each object
            //gameObjects[]
            //DetectCollisions();
        }
    }
}


startBtn.onclick = ani; // start the loop
