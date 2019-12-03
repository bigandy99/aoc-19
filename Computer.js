class Computer {
    constructor() {
        this._pointer = 0;
        this._program = [];
        this._running = false;
    }

    set program (data) {
        this._pointer = 0;
        this._program = data.map(Number);
    }

    get program() {
        return this._program;
    }

    edit(pos,val) {
        this._program[pos] = val;
    }

    run() {
        this._running = true;
        while(this._running){
            this.step();
        }
    }

    step() {
        switch (this._program[this._pointer]) {
            case 1:
                this.add();
                break;
            case 2:
                this.multiply();
                break;
            case 99:
                this._running = false;
                break;
            default:
                console.log('Invalid intcode detected - stopping program.');
                this._running = false;
                break;
        }
    }

    add() {
        let result = this._program[this._program[this._pointer+1]] + this._program[this._program[this._pointer+2]];
        this._program[this._program[this._pointer+3]] = result;
        this._pointer += 4;
    }

    multiply() {
        let result = this._program[this._program[this._pointer+1]] * this._program[this._program[this._pointer+2]];
        this._program[this._program[this._pointer+3]] = result;
        this._pointer += 4;
    }

}

module.exports = Computer