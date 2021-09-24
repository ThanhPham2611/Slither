const EYE_DISTANCE = 15;
const EYE_ANGLE = 0.8;

class eye {
    constructor(snake){
        this.snake = snake;
    }

    update() {

    }

    draw() {
        let eye1 = {
            x: this.snake.x + Math.sin(this.snake.angle - EYE_ANGLE) * EYE_DISTANCE,
            y: this.snake.y + Math.cos(this.snake.angle - EYE_ANGLE) * EYE_DISTANCE
        }
        //eye->snake->game->screen 
        this.snake.game.screen.drawCircle(eye1, 'eye');

        let eye2 = {
            x: this.snake.x + Math.sin(this.snake.angle + EYE_ANGLE) * EYE_DISTANCE,
            y: this.snake.y + Math.cos(this.snake.angle + EYE_ANGLE) * EYE_DISTANCE
            }
        //eye->snake->game->screen 
        this.snake.game.screen.drawCircle(eye2, 'eye');
    }
}