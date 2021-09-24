class game {
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        
        this.canvas.width = SCREEN_WIDTH;
        this.canvas.height = SCREEN_HEIGHT;
        document.body.appendChild(this.canvas);

        this.snake = new snake(this);
        this.background = new bg(this);
        this.screen = new Screen(this);
        this.loop();
    };

    loop() {
        this.udpate();
        this.draw();

        setTimeout( () => this.loop() , 20);
    }

    udpate() {
        this.snake.update();
        this.background.update();
        this.screen.update();
    }

    clearScreen() {
        this.ctx.fillStyle = '#c1cdcd';
        this.ctx.fillRect(0,0,SCREEN_WIDTH,SCREEN_HEIGHT);
    }

    draw() {
        this.clearScreen();
        this.background.draw();
        this.snake.draw(); 
    }
}

let g = new game();