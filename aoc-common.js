const csv = require('csv-parser')
const fs = require('fs')


module.exports.loadInputData = function(filename) {
    return new Promise((resolve) => {
        const results = [];
        fs.createReadStream(filename)
        .pipe(csv({ headers: ['mass'] }))
        .on('data', (data) => results.push(data))
        .on('end', () => {
            resolve(results);
        });
    });
}


module.exports.calculateFuelFromMass = function(mass){

    fuel = (mass/3);
    fuel = Math.floor(fuel);
    fuel = fuel -2;
    return fuel;
}


module.exports.loadOneCsvRowAsArray = function(filename) {
    return new Promise((resolve) => {
        fs.readFile(filename, 'utf8', function(err, contents) {
            var result = contents.split(","); 
            resolve(result);
        });
    });
}