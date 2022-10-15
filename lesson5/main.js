function three() { unicorn(); }
function two() { three(); }
function one() { two(); }
//console.log(one());

function amIOldEnough(age) {
    //console.log(age)
    if (age < 12) {
        //console.log(`In the if with ${age}`);
        return 'No, sorry!';
    } else if (age < 18) {
        //console.log(`In the else-if with ${age}`);
        return 'Only if you are accompanied by an adult.';
    } else {
        //console.log(`In the else with ${age}`)
        return 'Yep, come on in!';
    }
}


//console.log(amIOldEnough(17))

function squareRoot(number) {
    'use strict';
    if (number<0) {
        throw new RangeError("You can't find the square roo of negative numbers");
    }
    return Math.sqrt(number)
};
//console.log(squareRoot(-1));

function imaginarySquareRoot(number) {
    'use strict';
    try{
        return String(squareRoot(number));
    }catch(error) {
        return squareRoot(-number)+'i';
    }
};
//console.log(imaginarySquareRoot(-49))

function imaginarySquareRoot(number) {
    'use strict';
    let asnwer;
    try{
        asnwer = String(squareRoot(number));
    }catch(error) {
        asnwer = squareRoot(-number)+'i';
    }finally{
        return `+ or - ${answer}`;
    }
}






