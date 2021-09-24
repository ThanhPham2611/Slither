class bg {
    constructor(game){
        this.game = game;
    };

    update(){

    }

    drawLine(sPos, ePos){
        this.game.ctx.strokeStyle = '#d9d9d9';
        this.game.ctx.lineWidth = 3;
        this.game.ctx.beginPath();
        this.game.ctx.moveTo(sPos.x, sPos.y);
        this.game.ctx.lineTo(ePos.x, ePos.y);
        this.game.ctx.stroke();
    }


    draw(){ 

        //  vẽ đường thẳng
        let firstLineX = GRID_SIZE - (this.game.snake.x % GRID_SIZE);
        let currentLineX = firstLineX;
        while(currentLineX <= SCREEN_WIDTH){
            this.drawLine(
                {x: currentLineX, y: 0},
                {x: currentLineX, y: SCREEN_HEIGHT}
            );
            currentLineX += GRID_SIZE;

        }

        // vẽ đường ngang
        let firstLineY = GRID_SIZE - (this.game.snake.y % GRID_SIZE);
        let currentLineY = firstLineY;
        while(currentLineY <= SCREEN_WIDTH){
            this.drawLine(
                {x: 0, y: currentLineY},
                {x: SCREEN_WIDTH, y: currentLineY}
            );
            currentLineY += GRID_SIZE;

        }


    }
}