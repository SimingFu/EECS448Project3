let canvas = document.querySelector('canvas'); // create variable to reference the canvas html element 
canvas.width = window.innerWidth; // make the canvas' width equal to the width of the user's browser
canvas.height = window.innerHeight; // make the canvas' height equal to the height of the user's browser
let ctx = canvas.getContext('2d'); // a variable that contains the canvas' 2d methods, used for drawing shapes and adding colors

let paused = false;
let lost = false;
let simulate_ball = false;
let mouse = // create variable which will be used to update things based on the mouse's position
{
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove', // window will call this function every time the mouse moves, updating its position
    function(e) 
    {
        mouse.x = e.x;
        mouse.y = e.y;
    }
);

window.addEventListener('resize', () => // if the user shrinks/expands their browser, the canvas will update accordingly
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

window.addEventListener('keydown', e => {
    if (e.key === 'Escape') paused = !paused;
    if (e.code == 'Space') simulate_ball = true;
});
