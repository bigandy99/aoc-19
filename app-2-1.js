// Day 2 - Part 1

var common = require('./aoc-common.js');


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
                console.log('Program complete!');
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

function doStuff(program_array){

    let myCPU = new Computer();
    myCPU.program = program_array;

    //set to "1202 alarm state"
    myCPU.edit(1,12);
    myCPU.edit(2,2);

    myCPU.run();
    console.log(myCPU.program);

}

common.loadOneCsvRowAsArray('puzzle-inputs/intcodes.txt')
    .then(
        x => doStuff(x)
    )
    .catch(
        x => console.log(x)
    );
