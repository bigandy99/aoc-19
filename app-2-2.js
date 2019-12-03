// Day 2 - Part 2

const common = require('./aoc-common.js');
const Computer = require('./Computer.js');

function doStuff(program_array){

    let gravity_search = 19690720;
    let myCPU = new Computer();

    for(var a=0; b=100,a<b; a++){
        for(var c=0; d=100,c<d; c++){
            myCPU.program = program_array;
            myCPU.edit(1,a);
            myCPU.edit(2,c);
            myCPU.run();
            if (myCPU.program[0] == gravity_search){
                console.log("Noun: " + a);
                console.log("Verb: " + c);
            }
        }
    }

}

common.loadOneCsvRowAsArray('puzzle-inputs/intcodes.txt')
    .then(
        x => doStuff(x)
    )
    .catch(
        x => console.log(x)
    );
