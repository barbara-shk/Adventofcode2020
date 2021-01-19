const fs = require('fs');

const passes = fs.readFileSync('input.txt', {encoding: 'utf-8'}).trim().split('\n');

//function running on boarding passes
const processPass = pass => {
    //separate row and cols
    const rowPart = pass.slice(0, 7); //.slice goes from index[0] to index[7] for rows
    const colPart = pass.slice(7); //.slice goes from index[8] to end for cols
    
    // for rows and cols => convert to binary (R = 1, L = 0)
    const colBinary = [...colPart].map((char) => 
        char === "R" ? "1" : (char === "L" ? "0" : "")).join("") //array containing all characters of the string turning Rs to 1
    const rowBinary = [...rowPart].map((char) =>
        char === "B" ? "1" : (char === "F" ? "0" : "")).join("") //array containing all characters of the string turning Bs to 1

    const rowDecimal = parseInt(rowBinary, 2);
    const colDecimal = parseInt(colBinary, 2);

const seatId = rowDecimal * 8 + colDecimal; //final calculation to return seat id
return seatId;

}
const seatIds = passes.map(value => processPass(value));
console.log("seatIds", seatIds);

const maxSeatIds = Math.max(...seatIds);
console.log("maxSeatIds", maxSeatIds);

// PART 2
// since the flight is full, there should be only one instance where two seats are spaced out by 2 instead of 1
// find the seatIds that are spaced out by exactly 2
const sortedIds = [...seatIds].sort((a,b) => a -b);
const myNeighbour = sortedIds.filter((id, index) => sortedIds[index + 1] - id === 2);

const mySeat = myNeighbour[0] + 1

console.log(mySeat)