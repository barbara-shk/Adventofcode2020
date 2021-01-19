const fs = require('fs');

const lines = fs.readFileSync('input.txt', {encoding: 'utf-8'}).split('\n\n').filter(x => x);

function fourDigits(input, from, to) {
    if(!/^\d{4}$/.test(input)) {
        return false;
    }
    const int = parseInt(input);
    if(int < from) return false;
    if(int > to) return false;
    return true;
}

const eyeColors = new Set(['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']);

//Classes are a template for creating objects. They encapsulate data with code to work on that data. 
class Passport {
    // static = not part of the class instance but whole class
    static mandatory = ['byr','iyr','eyr','hgt','hcl','ecl','pid']
    
    // clean up input.txt
    constructor(input) {
        // The Map object holds key-value pairs and remembers the original insertion order of the keys.
        this.map = new Map();
        //split using regEx
        const list = input.split(/\s+/g);
        //goes through each element of the list
        list.forEach(keyvalue => {
            const [key, value] = keyvalue.split(':');
            if(key) this.map.set(key, value);
        });
    }

    isValid() {     
        //making sure that key is in the map for each element of the array "mandatory"
        return Passport.mandatory.every(key => this.map.has(key));
    }
}
// nb of valid passports
let valid = 0;

// add valid passport to valid
for (const line of lines) {
    const p = new Passport(line);
    if(p.isValid()) valid++;
}

console.log('part 1: ',valid);
