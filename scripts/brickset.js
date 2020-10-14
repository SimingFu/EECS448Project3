class Brickset
{
    constructor(rows, cols, spaced)
    {
        this.rows = rows;
        this.cols = cols;
        this.brick_length = canvas.width / 15;
        this.brick_height = canvas.height / 25;
        this.spacing = 0;
        if (spaced) this.spacing = this.brick_length / 4;
        this.bricks = []

        let starting_x_pos = (canvas.width + this.brick_length - (cols * (this.brick_length + this.spacing))) / 2
        let starting_y_pos = canvas.height / 5;
        for (let i = 0; i < rows; i++)
        {
            for (let j = 0; j < cols; j++)
            {
                let brick = {x: starting_x_pos + (j * (this.brick_length + this.spacing)), 
                             y: starting_y_pos + (i * (this.brick_height + this.spacing))};
                this.bricks.push(brick);
            }
        }
    }
    update()
    {
        for (let i = 0; i < this.bricks.length; i++)
        {
            let brick = this.bricks[i];
            console.log(brick.x, brick.y);
            ctx.beginPath();
            ctx.rect(brick.x, brick.y, this.brick_length, this.brick_height);
            ctx.fillStyle = "#000000";
            ctx.fill();
            ctx.closePath();
        }
    }
}