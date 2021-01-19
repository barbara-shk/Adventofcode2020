/* 
        const fs = require('fs');
        function isValid(line) {
            let [_, low, high, c, password] = /(\d+)-(\d+) (.): (.+)/.exec(line);
            low = parseInt(low);
            high = parseInt(high);
            password = [...password];
            const actual = password.reduce((p, x) => x === c ? p + 1 : p, 0);
            return low <= actual && actual <= high ? 1 : 0;
        }
        
        const lines = fs.readFileSync("./input.txt").toString().split("\n");
        console.log(lines.reduce((p, x) => p + isValid(x), 0)); */

        const fs = require("fs");

function isValid(line) {
	let [_, pos1, pos2, c, password] = /(\d+)-(\d+) (.): (.+)/.exec(line);
	pos1 = parseInt(pos1) - 1;
	pos2 = parseInt(pos2) - 1;
	password = [...password];
	return (password[pos1] != password[pos2] && (password[pos1] == c || password[pos2] == c)) ? 1 : 0;
}

const lines = fs.readFileSync("./input.txt").toString().split("\n");
console.log(lines.reduce((p, x) => p + isValid(x), 0));