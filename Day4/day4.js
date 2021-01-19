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
    static fieldValidators = {
        byr: (input) => fourDigits(input, 1920, 2002),
        iyr: (input) => fourDigits(input, 2010, 2020),
        eyr: (input) => fourDigits(input, 2020, 2030),
        hgt: (input) => {
            const cm = /^(?<value>\d+)cm$/.exec(input);
            if(cm) {
                return parseInt(cm.groups.value) >= 150 && parseInt(cm.groups.value) <= 193
            }
            const inches = /^(?<value>\d+)in$/.exec(input);
            if(inches) {
                return parseInt(inches.groups.value) >= 59 && parseInt(inches.groups.value) <= 76
            }
            return false;
        },
        hcl: (input) => /^#[0-9a-f]{6}$/.test(input),
        ecl: (input) => eyeColors.has(input),
        pid: (input) => /^\d{9}$/.test(input),
        cid: (input) => true,
    }

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
    isFullyValid() {         
    return Passport.mandatory.every(key => this.map.has(key))
        && [...this.map.entries()].every(([key, value]) =>
            Passport.fieldValidators[key](value)
        );
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

for (const line of lines) {
    const p = new Passport(line);
    if(p.isFullyValid()) valid++;
}

console.log('part 2: ',valid);