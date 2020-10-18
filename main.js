var setting = document.getElementById('setting screen');
setting.style.display = 'none';
var win = document.getElementById('win screen');
win.style.display = 'none';
var lose = document.getElementById('lose screen');
lose.style.display = 'none';

var startBtn = document.getElementById('start');
var menu = document.getElementById('menu screen');
var optionBtn = document.getElementById('option');
var invertcolorBtn = document.getElementById('invert_colors');
var backBtn = document.getElementById('back');
var nextBtn = document.getElementById('nextlevel');
var backmainBtn_w = document.getElementById('backmain_w');
var tryBtn = document.getElementById('tryagain');
var backmainBtn_l = document.getElementById('backmain_l');

let gameObjects = [] // array to iterate through during game loop
let paddle = new Paddle(); // instantiate paddle
let ball = new Ball(); // instantiate ball
let page_color = "#FFFFFF";
let object_color = "#000000";

const BRICK_ROWS = 5;
const BRICK_COLS = 10;
let brickset = new Brickset(BRICK_ROWS, BRICK_COLS, true); //instantiate brickset with number of rows and columns of bricks
let targetScore = Math.floor(brickset.bricks.length/4)
let playerStatus = new PlayerStatus(targetScore)

gameObjects.push(paddle); // add paddle to array
gameObjects.push(ball); // add ball to array
gameObjects.push(brickset);
gameObjects.push(playerStatus);

const OBJ_KEYS = {
	PADDLE: 0,
	BALL: 1,
	BRICKSET: 2,
	PLAYERSTATUS: 3
}

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
    if (!paused & !lost & gameObjects[2].bricks.length > 0)
    {
        menu.style.display = 'none';
        setting.style.display = 'none';
        win.style.display = 'none';
        lose.style.display = 'none';

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
    else if (paused & !lost)
    {
        startBtn.innerHTML = "Resume";
        startBtn.onclick = resume;
        menu.style.display = 'block';
    }
    else if (lost)
    {
        lose.style.display = 'block';
		}
    else
    {
        win.style.display = 'block';
    }
}

invertcolorBtn.onclick = inv;
startBtn.onclick = ani; // start the loop

var reset = function gameRestart(){

	ctx.clearRect(0, 0 , window.innerWidth, window.innerHeight); // clears the previous frame
	gameObjects[2].resetBrick();
	gameObjects[1].resetBall();
	gameObjects[0].resetPaddle();
	for (let i = 0; i < gameObjects.length; i++) // iterate through game objects
	{
		gameObjects[i].update(); // call update on each object

		gameObjects[i].draw();
	}
	lose.style.display = 'none';

}

var opt = function Opt(){
  menu.style.display = 'none';
  setting.style.display = 'block';
}
optionBtn.onclick = opt;

var bak = function Bak(){
  menu.style.display = 'block';
  setting.style.display = 'none';
}
backBtn.onclick = bak;

var nextl = function Nextl(){ // just for testing
  window.location.reload();
}
nextBtn.onclick = reset;

tryBtn.onclick = reset;

var bmain_l = function Bmain_l(){ //need to update when add level part
  window.location.reload();
}
backmainBtn_l.onclick = bmain_l;


var bmain_w = function Bmain_w(){ //need to update when add level part
  window.location.reload();
}
backmainBtn_w.onclick = bmain_w;
