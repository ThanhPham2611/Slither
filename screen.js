class Screen {
    constructor(game){
        this.game = game;
        this.top = 0;
        this.bottom = 0;
        this.left = 0;
        this.right = 0;
    };

    update() {
        this.top = this.game.snake.y - (SCREEN_HEIGHT / 2);
        this.bottom = this.game.snake.y + (SCREEN_HEIGHT / 2);
        this.left = this.game.snake.x - (SCREEN_WIDTH / 2);
        this.right = this.game.snake.y + (SCREEN_HEIGHT / 2);
    }    

    drawCircle(pos, styleName) {
        let styles = {};//object
        //style for snake
        styles['snake'] = {
            color: '#F65A5A',
            borderColor: 'red',
            width: 20
        };

        styles['shadow'] = {
            color: 'rgba(0,0,0,0.3)',
            borderColor: 'rgba(0,0,0,0.3)',
            width: 28
        };

        styles['eye'] = {
            color: 'white',
            borderColor: 'rgba(0,0,0,0.3)',
            width: 10
        };

        let styleProperties = styles[styleName];

        this.game.ctx.beginPath();
        this.game.ctx.arc(
            pos.x-this.left,
            pos.y-this.top,
            styleProperties.width,
            0,
            Math.PI * 2
        );
        this.game.ctx.fillStyle = styleProperties.color;
        this.game.ctx.fill();
        this.game.ctx.strokeStyle = styleProperties.borderColor;
        this.game.ctx.stroke();// vẽ đường viền
    }
}