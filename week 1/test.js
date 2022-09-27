console.log("hello world")

console.log(2)
console.log(2+2)
console.log(2*5)
console.log(10-3)
console.log(10/3)
console.log(10%3)
console.log(9%2)
console.log(10%2)

console.log(true||true)
console.log(true||false)
console.log(false||true)
console.log(false||false)
console.log(true&&true)
console.log(true&&false)
console.log(false&&true)
console.log(false&&false)
console.log(!true)
console.log(!!true)
console.log(!false)

console.log(10>10)
console.log(10<20)
console.log(25>=5)
console.log(25>=25)
console.log(12===11)
console.log(12!==11)
console.log(12!==11)
console.log(12=="12")

let str ="hello"
console.log("hello"[1])
console.log("hello".length)
console.log("hello".indexOf('h'))
console.log("hello".indexOf('l'))
console.log("hello".indexOf('x'))
console.log("hello".indexOf('hell'))

//concatenation

console.log("race".concat("car"))
console.log("hello".concat("world"))

console.log(4+"hi")

console.log(4*"hi")

console.log(4*'10')   //should not do it!!!

//other 
console.log("hello".toUpperCase());
console.log("HELLO".toLowerCase());
console.log("hello".slice());
console.log("hello".slice(1));
console.log("hello".slice(1,3));

//var is old ES5
//let and const is new ES6

let name = "Jonathan";
console.log(name)

console.log(name==="Jonathan")
name="Kevin"
console.log(name)


//Naming 
//let name = "Victor";
//let name = 25;  X
//let number = "amazing" X
//don't use reserved keywords
// let null
// let NaN 
// let 2 star 

let firstName = "Jonathan"
let lastName = "Diaz"

console.log(firstName)

//conditionals
//mutaually exclusive 

if(20===20){
    console.log("they are equal")
} else {
    console.log("not equal")
}

let num = 20.5;
    if(num===20){
        console.log("equal 20")
    } else if (num>20) {
        console.log("greater")
    } else {
        console.log("less than")
    }

//Falsey Null 0  ""
//Undefined NaN -0  false

if (0) {
    console.log(false);
} else {
    console.log(true)
}
