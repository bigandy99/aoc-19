// Day 1 - Part 2

var common = require('./aoc-common.js');


function calculateFuelNeeded(rocket_modules){

    var total_fuel = 0;
    
    for(let rocket_module of rocket_modules) {

        //console.log('MODULE START:');

        var total_mass = 0;
        var extra_mass = 0;

        total_mass = extra_mass = common.calculateFuelFromMass(rocket_module.mass);

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

common.loadInputData('module-masses.txt')
    .then(
        x => calculateFuelNeeded(x)
    )
    .catch(
        x => console.log(x)
    );
