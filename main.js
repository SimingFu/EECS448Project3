var startBtn = document.getElementById('start');
var menu = document.getElementById('menu screen');

gameObjects = [] // array to iterate through during game loop
let paddle = new Paddle(); // instantiate paddle
let ball = new Ball(); // instantiate ball

const BRICK_ROWS = 5;
const BRICK_COLS = 8;
let brickset = new Brickset(BRICK_ROWS, BRICK_COLS, true); //instantiate brickset with number of rows and columns of bricks

gameObjects.push(paddle); // add paddle to array
gameObjects.push(ball); // add ball to array
gameObjects.push(brickset);

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
