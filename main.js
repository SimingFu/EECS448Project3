var startBtn = document.getElementById('start');
var invertcolorBtn = document.getElementById('invert_colors');
var menu = document.getElementById('menu screen');

gameObjects = [] // array to iterate through during game loop
let paddle = new Paddle(); // instantiate paddle
let ball = new Ball(); // instantiate ball
let page_color = "#FFFFFF";
let object_color = "#000000";

const BRICK_ROWS = 5;
const BRICK_COLS = 10;
let brickset = new Brickset(BRICK_ROWS, BRICK_COLS, true); //instantiate brickset with number of rows and columns of bricks

gameObjects.push(paddle); // add paddle to array
gameObjects.push(ball); // add ball to array
gameObjects.push(brickset);

var resume = function Resume()
{
    paused = false;
}

var inv = function InvertColors()
{
    let temp = page_color;
    page_color = object_color;
    object_color = temp;

    ctx.fillStyle = page_color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = object_color;
}

var ani = function animate() // main game loop occurs here
{
    
    requestAnimationFrame(animate); // waits until this animate is done and then calls it again
    if (!paused & gameObjects[2].bricks.length > 0)
    {
        menu.style.display = 'none';
        ctx.clearRect(0, 0 , window.innerWidth, window.innerHeight); // clears the previous frame
        ctx.fillStyle = page_color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = object_color;
        for (let i = 0; i < gameObjects.length; i++) // iterate through game objects
        {
            gameObjects[i].update(); // call update on each object
            gameObjects[i].draw();
        }
        gameObjects[1].detect_collisions(gameObjects[0], gameObjects[2]);
    }
    else if (paused)
    {
        startBtn.innerHTML = "Resume";
        startBtn.onclick = resume;
        menu.style.display = 'block'; 
    }
}

invertcolorBtn.onclick = inv;
startBtn.onclick = ani; // start the loop
