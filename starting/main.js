const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


class Field {
    constructor(height, width, holePercentage) {
        this.field = field;
        this.playerPosition = { x: 0, y: 0 };
    }

    

    // print the field to the terminal
    print() {
        return this.field.map(row => row.join('')).join('\n');
    }

    // generate field, two dimenisonal array with random holes and hidden hat
    static generateField(height, width, holePercentage) {
        const field = Array.from({ length: height }, () =>
            Array.from({ length: width }, () => {
                const isHole = Math.random() < holePercentage / 100;
                return isHole ? 'O' : '░';
            })
        );
        const hatX = Math.floor(Math.random() * width);
        const hatY = Math.floor(Math.random() * height);
        field[hatY][hatX] = '^';
        return new Field(field);
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
    


}


