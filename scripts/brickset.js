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

        let row_length = (cols * this.brick_length) + ((cols - 1) * this.spacing);
        let starting_x_pos = (canvas.width - row_length) / 2;
        let starting_y_pos = canvas.height / 8;
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
    update() {}
    draw()
    {
        for (let i = 0; i < this.bricks.length; i++)
        {
            let brick = this.bricks[i];
            ctx.beginPath();
            ctx.fillRect(brick.x, brick.y, this.brick_length, this.brick_height);
            ctx.closePath();
        }
    }
}
