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

    // generate field, two dimenisonal array 
    generateField(height, width, holePercentage) {
        
    }


