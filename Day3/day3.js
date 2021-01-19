const fs = require('fs');
const field = fs.readFileSync('input.txt', {encoding: 'utf-8'}).split('\n').filter(x=> x).map(x=>parseInt(x));


const rows = $('pre').innerText.split('\n').filter(row => row.match(/[\#\.]/g))

var count = 0
var y = 0
var x = 0
const lastRowIndex = rows[0].length - 1

// Console will return number of trees
while (y < rows.length - 1) {
    // As we approach end of string, make sure we return to
    // beginning of next string at correct index
    if ((lastRowIndex - x) < 3) {
        x = x - lastRowIndex - 1
    }
    x = x + 3
    y = y + 1
    if (rows[y][x] === "#") {
        count = count + 1
    }
}