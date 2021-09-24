class snake {
    constructor(game){
        this.game = game;
        this.x = GAME_WIDTH / 2;
        this.y = GAME_HEIGHT / 2 ;

        this.angle = 0;
        this.tailPos = [];

        this.eyes = new eye(this);

        this.creatTail();
        this.listenMouseEvent();
    }

    //(js canvas mouse position)
    listenMouseEvent(){
        this.game.canvas.addEventListener('mousemove', (event) => {
            let rect = this.game.canvas.getBoundingClientRect();
            this.processMouseMove( {
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            });
        });
    }

    //Mouse move
    processMouseMove(mousePos){
        this.angle = Math.atan2(
            mousePos.x - (SCREEN_WIDTH / 2),
            mousePos.y - (SCREEN_HEIGHT / 2)
        );
    }

    creatTail() {
        for(let i=0;i<200;i++){
            this.tailPos.push({
                x: this.x - (i * SNAKE_SPEED),
                y: this.y
            });
        }

    }

    update() {
        //update vị trí
        let newTailPos = {
            x: this.x += Math.sin(this.angle) * SNAKE_SPEED,
            y: this.y += Math.cos(this.angle) * SNAKE_SPEED
        }
        
        this.tailPos.unshift(newTailPos);
        this.tailPos.pop();

        this.x = newTailPos.x;
        this.y = newTailPos.y;
    }

    draw() {

        //shadow snake
        for(let i = this.tailPos.length - 1; i>1; i--){   
             this.game.screen.drawCircle(
                {
                x: this.tailPos[i].x, 
                y: this.tailPos[i].y
                },
                'shadow' // line 26 at screen.js
            );
        }

        // body snake
        for(let i = this.tailPos.length - 1; i>1; i--){
            if(i % 6 == 0){    
                this.game.screen.drawCircle(
                    {
                    x: this.tailPos[i].x, 
                    y: this.tailPos[i].y
                    },
                    'snake'// line 20 at screen.js
                );
            }
        }
        
        //eye snake
        this.game.screen.drawCircle({
            x: this.x, 
            y: this.y
        },
        'snake'// line 20 at screen.js
        );

        //eye draw
        this.eyes.draw();
    }
}