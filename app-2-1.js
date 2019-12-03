// Day 2 - Part 1

var common = require('./aoc-common.js');

const Computer = require('./Computer.js');

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
