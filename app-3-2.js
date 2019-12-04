// Day 3 - Part 2

const common = require('./aoc-common.js');
const PatchPanel = require('./PatchPanel.js');

function doStuff(lines){

    let myPP = new PatchPanel();
    for(let line of lines) {  
        myPP.addWire(line);
    }
    
    console.log( "Fewest steps to an intersection: " + myPP.findFewestStepsToAnIntersection() );

};

common.loadCSVLinesAsArrays('puzzle-inputs/fuel-wires.txt')
    .then(
        x => doStuff(x)
    )
    .catch(
        x => console.log(x)
    );
