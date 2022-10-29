function square(x) {
    return x * x;

}
square.description = "Squares a number that is provided as an argument"
"Squares a number that is provided as an argument";
//console.table(square.apply(null, [4]))

//story a function in cache

function square(x) {
    square.cache = square.cache || {};
    if (!square.cache[x]) {
        square.cache[x] = x * x;
    }
    return square.cache[x];
}
//calling the function with some few output
// console.table(square(3));
// console.table(square(-11));
// console.table(square(7));
// console.table(square(9));
// console.table(square(-2));
// console.table(square(10));
// console.table(square.cache)

//IMMEDIATELY INVOKED FUNCTION EXPRESIONS
(function () {
    const tem = "world";
    //console.table(`Hello ${tem}`);
})();



function sayHello(greeting = "Hello") {
    return `${greeting}, my name is ${this.name }`;


}
const clark = {
    name: "Clark"
};
const bruce = {
    name: "Bruce"
};
const dagwan = {
    name: "Dagwan"
};

// console.table(sayHello.call(clark, "How do you do?"));
// console.table(sayHello.call(bruce));
// console.table(sayHello.call(dagwan));


//temporary veriables
// let a = 1;
// let b = 3;

(() => {
    //const temp = a;
    // a = b;
    // b = temp;
})();

// console.table(a);
// console.table(b);
// console.table(temp);

//es6 destructuring 
// let [a,b] = [1,2];
// [a,b] = [b,a];

// console.table(a);
// console.table(b);
// console.table(temp);

//initiallization code

{
    const name = "Dagwan Pan'an"
    // This might be obtained from a cookie in reality
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Firday", "Saturnday"];
    const date = new Date(),
        today = days[date.getDay()];
    //console.table(`Walecome back ${name}. Today is ${today}`);

}

//using strict mode inside of:
//IMMEDIATELY INVOKED FUNCTION EXPRESIONS 

(function () {
    'use strick';
})();

//creating self-contained code blocks
(function () {
    //block a
    const name = "Block A";
    // console.table(`Hello from ${name}`);
})();

(function () {
    //block b
    const name = "Block B";
    // console.table(`Hello from ${name}`);

})();

//functions that define and rewrite themselves

function party() {
    console.table("Wow this is amazing!");

    party = function () {

        console.table("Been there, got the T-Shirt");
    }
}
// note that the party function has not been invoked
const beachParty = party;

// the party() function has now been redefined, even though it hasn't been called explicitly
// beachParty();
// party();

// party();
// party();

//Init-Time Branching
function ride() {
    if (window.unicorn) {
        ride = function () {
            // some code that uses the brand new and sparkly unicorn methods
            return "Riding on a unicorn is the best!";
        }
    } else {
        ride = function () {
            // some code that uses the older pony methods
            return "Riding on a pony is still pretty good";
        }
    }
    return ride();
}
// the function rewrites itself, then calls itself
//console.table(ride());


//Recursive Functions
//this function invokes itself until a certain condition is met.
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function collatz(n, sequence = [n]) {
    if (n === 1) {
        return `Sequence too ${sequence.length} steps. It was ${sequence}`;
    }
    if (n % 2 === 0) {
        n = n / 2;
    } else {
        n = 3 * n + 1;
    }
    return collatz(n, [...sequence, n]);
}
//console.table(collatz(18));

//function that accept a callback
function wait(message, callback, seconds) {
    setTimeout(callback, seconds * 1000);
    //console.table(message);
}

//callback function
function SelfDestruct() {
    //console.log("DOOOOM!");
}
wait("This tape will self-destruct in five seconds...", SelfDestruct, 5);
//console.log("Hmmm, should i accept this mission or not...?");

//callback hell

//a game snipet
//login(userName, function(error, user) {
// if(error) {
//     throw error;
// }else{
//     getPlayerInfo(user.id, function(error, info) {
//         if(error){
//             throw error;
//         }else{
//             loadGame(info, function(error, game){
//                 if(error) {
//                     throw error;
//                 }else {
//                     //code to run game
//                 }
//             });
//         }
//     });
// }
//});

//a promise
// const promise = new Promise((resolve, reject) => {
//     //initialization code here..
//     if (success) {
//         resolve(value);
//     }else {
//         reject(error);
//     }
// });

//a dicey example 
// const dice = {
//     sides: 6,
//     roll() {
//         return Math.floor(this.sides * Math.random()) + 1;
//     }
// }

// //a a promise function
// const promise = new Promise((resolve, reject) => {
//     const n = dice.roll();
//     setTimeout(() => {
//         (n > 1) ? resolve(n) : reject(n);
//     }, n * 1000);
// });

//codes examples
//a dice game
const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}

//console.table("Before the roll");

const roll = new Promise((resolve, reject) => {
    const n = dice.roll();
    if (n > 1) {
        setTimeout(() => {
            resolve(n)
        }, n * 200);
    } else {
        setTimeout(() => reject(n), n * 200);
    }
});

// roll.then(result => console.table(`I rolled a ${result}`))
// .catch(result => console.table(`Draf! ... I rolled a ${result}`))

// console.table("After the roll");

//chaining multiple promise
// login(userName)
//     .then(user => getPlayerInfo(user.id))
//     .then(info => loadGame(info))
//.catch( throw error)

//sync function
async function loadGame(userName) {
    try {
        const user = await login(userName);
        const info = await getPlayerInfo(user.id);
        //load the game using the return info

    } catch (error) {
        throw error;
    }
}

//Generalized Functions
function random(a, b, callback) {
     // if only 1 argument is provided, we need to swap the values of a and b
     if (b === undefined) b = a, a = 1;
        let result = Math.floor((b - a + 1) * Math.random()) + a;
        if (callback) {
            result = callback(result);
        }
        return result;
     }

//console.table(random(10, 20));

function square(n) {
    return n * n;
}

//console.table(random(1, 10, square));

//Functions That Return Functions

function greeter(greeting = "Hello") {
    return function() {
        //console.log(greeting);
    }
}

const mwaghaVulGreeter = greeter("Ter Ka'am ha!");
mwaghaVulGreeter();


function mean(array) {
    return sum(array)/array.length;
}

console.table(mean(1,2,3));