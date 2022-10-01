//global "this keyword"
//console.log(this)

//this in objective construction
function Person(age) {
    this.age = age;
}

const dagwan = new Person(26);
const danladi = new Person(27);

// console.log(dagwan);
// console.log(danladi);

const superman = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman', 'Supergirl', 'Superboy'],
    fly() {
        return 'Up, up and away!';
    }
};
'city' in superman;
//console.log(superman.hasOwnProperty('name'));

for (const key in superman) {
    if (superman.hasOwnProperty(key)) {
        // console.log(key + ":" + superman[key])
    }
}

for (const key of Object.keys(superman)) {
    //console.log(key)
}

for (const value of Object.values(superman)) {
    //console.log(value)
}

for (const [key, value] of Object.entries(superman)) {
    // console.log(`${key}: ${value}`)
}
delete superman.fly;
superman.city = "Abuja";
//console.log(superman)

const jla = {
    superman: { realName: 'Clark Kent' },
    batman: { realName: 'Bruce Wayne' },
    wonderWoman: { realName: 'Diana Prince' },
    flash: { realName: 'Barry Allen' },
    aquaman: { realName: 'Arthur Curry' },
}

//console.log(jla.superman.realName)

function greet({greeting,name,age}) {
  
    return `${greeting}! My name is ${name} and I am ${age} years old.`;
}
// console.log(greet({greeting: `Hello`, name: `Dagwan`, age: 26}));

function greet({greeting='Hello',name,age=26}) {
    return `${greeting}! My name is ${name} and I am ${age} years old.`;
}
//console.log(greet({name: `dagwan` }));

//DICE GAME

const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}
//console.log(dice.roll())

const batman = {
    "name": "Batman",
    "real name": "Bruce Wayne",
    "height": 74, 
    "weight": 210, 
    "hero": true, 
    "villain": false, 
    "allies": ["Robin","Batgirl","Superman"]
}

//console.log(JSON.parse(batman));

const wonderWoman = {
    name: 'Wonder Woman',
    'real name': 'Diana Prince',
    height: 72,
    weight: 165,
    hero: true,
    villain: false,
    allies: ['Wonder Girl','Donna Troy','Superman'],
    lasso: function(){
        //console.log('You will tell the truth!');
    }
}

//console.log(JSON.stringify(wonderWoman));


//DATE
const today = new Date();
today.toString()
//console.log(today)


const christmas = new Date('2021 12 25');
christmas.toString();
console.log(christmas);

const november = new Date('November, 2 2022');
november.toString();
console.log(november);

const october = new Date('1 October  2022');
october.toString();
console.log(october);