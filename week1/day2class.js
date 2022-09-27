// ==== comparison 
// = assign or reassign 

let num = 20;
if (num =30){
    console.log("in the if");

} else {


    console.log("in the else");
}

//functions - a procedure of code that will run when called. 
//Don't
//Repeat
//Yourself 

function foo(){
    return 'bar';
}
console.log(foo(1));
console.log(foo);

function foo2(p1,p2){
    return p1 + " " + p2; 
}
console.log(foo2('Jon', 'Diaz'));

let foo3 = function() {
    return 'bar';
}

let foo4 = ( ) => {
    return 'bar';
}

function average (num1, num2) {
    let sum = num1 + num2;
    let avg = sum/2;
    return avg;
}

function average2 (num1, num2) {
    let sum = sumNums(num1, num2)
    let avg = sum/2
    return avg;
}

function sumNums (num1, num2) {
    return num1 + num2;
}

console.log(average(12,1))
console.log(average2(12,34))