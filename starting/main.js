const prompt = require('prompt-sync')();

class Field {
    constructor(height, width, holePercentage) {
        this.field = this.generateField(height, width, holePercentage);
        this.playerPosition = { x: 0, y: 0 };
    }

    

    // print the field to the terminal
    print() {
        return this.field.map(row => row.join('')).join('\n');
    }

    // generate field, two dimenisonal array with random holes and hidden hat
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



}


