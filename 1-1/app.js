var common = require('./aoc-common.js');

const csv = require('csv-parser')
const fs = require('fs')

function calculateFuelNeeded(rocket_modules){

    var total_fuel = 0;
    
    for(let rocket_module of rocket_modules) {
        total_fuel += common.calculateFuelFromMass(rocket_module.mass);
    };

    console.log("Total fuel needed: " + total_fuel);
}

common.loadInputData()
    .then(
        x => calculateFuelNeeded(x)
    )
    .catch(
        x => console.log(x)
    );
