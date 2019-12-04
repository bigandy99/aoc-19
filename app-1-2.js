// Day 1 - Part 2

var common = require('./aoc-common.js');


function calculateFuelNeeded(rocket_modules){

    var total_fuel = 0;
    
    for(let rocket_module of rocket_modules) {

        var total_mass = 0;
        var extra_mass = 0;

        total_mass = extra_mass = calculateFuelFromMass(rocket_module.mass);

        while (extra_mass > 2){
            extra_mass = common.calculateFuelFromMass(extra_mass);
            if(extra_mass > 0){
                total_mass += extra_mass;
            }
        }

        total_fuel += total_mass;
        
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
