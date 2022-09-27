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

function foo(p1,p2){
    return p1 + " " + p2; 
}
console.log(foo('Jon', 'Diaz'));

let foo = function{
    return 'bar';
}

let foo2 = ( ) => {
    return 'bar';
}