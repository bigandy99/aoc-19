const csv = require('csv-parser')
const fs = require('fs')
const readline = require('readline');


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

module.exports.loadOneCsvRowAsArray = function(filename) {
    return new Promise((resolve) => {
        fs.readFile(filename, 'utf8', function(err, contents) {
            var result = contents.split(","); 
            resolve(result);
        });
    });
}

module.exports.loadCSVLinesAsArrays = function(filename) {
    return new Promise((resolve) => {
        let lines = [];
        let rl = readline.createInterface({
            input: fs.createReadStream(filename)
        });
        rl.on('line', function(line) {
            let line_array = line.split(","); 
            lines.push(line_array);
        });
        rl.on('close', function(line) {
            resolve(lines);
        });
    });
}

