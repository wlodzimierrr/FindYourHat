const prompt = require('prompt-sync')();

class Field {
    constructor(height, width, holePercentage) {
        this.field = this.generateField(height, width, holePercentage);
        this.playerPosition = { x: 0, y: 0 };
    }

    generateField(height, width, holePercentage) {
        const field = Array.from({ length: height }, () =>
            Array.from({ length: width }, () => {
                const isHole = Math.random() < holePercentage / 100;
                return isHole ? 'O' : '░';
            })
        );
        const hatX = Math.floor(Math.random() * width);
        const hatY = Math.floor(Math.random() * height);
        field[hatY][hatX] = '^';
        return field;
    }

    print() {
        return this.field.map(row => row.join('')).join('\n');
    }

    move(direction) {
        const { x, y } = this.playerPosition;
        switch (direction.toLowerCase()) {
            case 'w':
                this.playerPosition = { x: x, y: y - 1 };
                break;
            case 's':
                this.playerPosition = { x: x, y: y + 1 };
                break;
            case 'a':
                this.playerPosition = { x: x - 1, y: y };
                break;
            case 'd':
                this.playerPosition = { x: x + 1, y: y };
                break;
            default:
                break;
        }
    }

    checkGameStatus() {
        const { x, y } = this.playerPosition;
        const currentPos = this.field[y] && this.field[y][x];
        if (!currentPos) {
            console.log('You lose - Out of boundary');
            return false;
        }
        switch (currentPos) {
            case 'O':
                console.log('You lose - You fell in a hole!');
                return false;
            case '^':
                console.log('You win - You found the hat!');
                return false;
            case '░':
                this.field[y][x] = '*';
                console.log('Keep looking for the hat...');
                return true;
            case '*':
                console.log('You are stepping on *');
                return true;
            default:
                break;
        }
    }
}

function playGame() {
    const myField = new Field(10, 10, 30);
    while (true) {
        console.log(myField.print());
        const moveDirection = prompt('Which direction do you want to move? (w for Up, s for down, a for left and d for right): ');
        myField.move(moveDirection);
        if (!myField.checkGameStatus()) break;
    }
    console.log('Game Over!');
}

playGame();
