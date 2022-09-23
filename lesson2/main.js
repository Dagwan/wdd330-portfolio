//ARRAY
const avengers = ['Captain America', 'Iron Man', 'Scarlet Witch', 'Quicksilver', 'Hawkeye', 'Black Widow'];

avengers.indexOf("Captain America");

//console.log(avengers)

const coordinates = [[1, 3], [4, 2]];
//console.log(coordinates[0][1])

const summer = ['Jun', 'Jul', 'Aug'];
const winter = ['Dec', 'Jan', 'Feb'];
const nested = [summer, winter];
const flat = [...summer, ...winter]

//console.log(flat)

//SET
let list = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
list.add(1).add(2).add(3).add(4).add(5).add(1).add(2).add(3).add(4).add(5);
//console.log(list);

let list2 = new Set("hello world");
//console.log(list2)
let list3 = new Set().add([1]).add([2]).add([3]).add([3]).add(5);
//console.log(list3)

const mixedTypes = new Set().add("2").add(2);

//console.log(mixedTypes);

/*FOUND THIS SENTENCE SO HELPFUL AND VERY POWERFUL
Sets do not have index notation for inspecting individual entries,
so we can't find the value of the first element in a set.
So something like this jla[0] would return undefined
*/

const jla = new Set().add("Superman").add("Batman").add("Wonder Woman");
//jla.clear();
//jla.size();
const jla2 = Array.from(jla);

//console.log(jla2);

const duplicate = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9];
//const noneDuplicate = [...new Set(repeatedArray)];
//console.log(noneDuplicate)
const weak = new WeakSet();
const array = [1, 2, 3];
weak.add(array);
//console.log(WeakSet);

//MAP
const romanNumerals = new Map();
romanNumerals.set(1, "I").set(2, 'II').set(3, 'III').set(4, 'IV').set(5, 'V');
romanNumerals.has(4);
//console.log(romanNumerals);

const heroes = new Map([['Clark Kent', 'Superman', 'Bruce Wayne', 'Batman']]);
heroes.delete('Superman');
//console.log(heroes);

// Converting Maps to Arrays??????


//LOGICAL OPERATOR
const age = 12;
if (age < 18) {
    //console.log('Sorry, you are not old enough to play this game');
};

let number = 13;
if (number % 2 === 0) {
    //console.log("number is even number");
} else {
    //console.log("numer is odd number");
}

const n = 4;
//n % 2 === 0 ?
//console.log('n is an even number') :
//console.log('n is an odd number');

const rollNumber = 4;
if (rollNumber === 4) {
    //console.log("you have rolled four");
} else if (rollNumber === 5) {
    //console.log("you have rolled five");
} else if (rollNumber === 6) {
    //console.log("you have rolled six")
} else {
    //console.log("roll at least one number")
}


//LOOP
//while loop

/*let bottles = 10;
while (bottles > 0) {
    console.log(`There were ${bottles} green bottles, 
    hanging on a wall. And if one green bottle should accidentally fall, there'd be ${bottles - 1} 
    green bottles hanging on the wall`);

    bottles--;
}

let bottles = 11;
while (--bottles) {
    console.log(`There were ${bottles} green bottles, hanging on a wall. And if one green bottle should accidentally fall, 
    there'd be ${bottles - 1} green bottles hanging on the wall`)
}

let bottles = 10;
do {
    console.log(`There were ${bottles} green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be 
    ${bottles - 1} green bottles hanging on the wall`)
    bottles--;
} while (bottles > 0)

for (let bottles = 0; bottles > 0; bottles--) {
    console.log(`There were ${bottles} green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be 
    ${bottles - 1} green bottles hanging on the wall`)
}

let i = 0;
let j = 0;

for (let i = 1; j < 13; i++) {
    for (let i = 1; j < 13; j++) {
        console.log(`${j} multiplied by ${i} is ${i * j}`);
    }
}

let letters = "hello"

for (const letter of letters) {
    console.log(letter)
}

let romanNumerals1 = new Map();
romanNumerals1.set(1, 'I').set(2, 'II').set(3, 'III').set(4, 'IV').set(5, 'V');

for (const value of romanNumerals1.values()) {
    console.log(value)
}

//HOW TO ITERATE VALUE AND KEY IN MAP
let romanNumerals1 = new Map();
romanNumerals1.set(1, 'I').set(2, 'II').set(3, 'III').set(4, 'IV').set(5, 'V');
for (const [keys, values] of romanNumerals1.entries()) {
    console.log(`${keys}: ${values}`)
}*/

//FUNCTION
function mean(...values) {
    let total = 0;
    for (const value of values) {
        total += value;
    }
    return total / values.length;
}
//console.log(mean(2, 8, 13, 11, 4, 2));

const tax = (salary) => {
    const taxable = salary - 8000;
    const lawerRate = 0.25 * taxable;
    taxable = -20000;
    const higherRate = 0.4 * taxable;
    return lowerRate + higherRate;

}
//console.log(tax)

//CLLBACK FUNCTION
// function sing(song, callback) {
//     //console.log(`I'm singing along to ${song}.`);
//     callback();
// }
// sing()

//Array Iterators

const colors = ["red", "green", "blue"]

for (let i = 0; i < colors.length; i++) {
    //console.log(`color at position ${i} is ${colors[i]}`);
}

//colors.forEach((color, index) =>
//console.log(`color at position ${index} is ${color}`))//

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers.filter(x => x % 2 === 0);
console.log(numbers)