// Day 1 - Part 1

var common = require('./aoc-common.js');


function calculateFuelNeeded(rocket_modules){

    var total_fuel = 0;
    
    for(let rocket_module of rocket_modules) {
        total_fuel += calculateFuelFromMass(rocket_module.mass);
    };

    console.log("Total fuel needed: " + total_fuel);
}

let calculateFuelFromMass = function(mass){

    fuel = (mass/3);
    fuel = Math.floor(fuel);
    fuel = fuel -2;
    return fuel;
}

common.loadInputData('puzzle-inputs/module-masses.txt')
    .then(
        x => calculateFuelNeeded(x)
    )
    .catch(
        x => console.log(x)
    );
