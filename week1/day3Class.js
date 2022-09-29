// for loop and while loop


//please console.log numbers

for (let i = 0; i < 10; i+=1) {
    console.log(i);
}
    
for (let i = 0; i < 10; i++) {
    console.log(i);

}
console.log('After the loop');

// write a function printRange (start, end) that prints the range between start and end 

function printRange(start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i)
    }
}
// printRange(3,10);
// printRange(3,12);
// printRange(1,33);

//while loop

function printRange1 (start, end) {
    let i = start;
    while (i <= end) {
        console.log(i);
        i++;
    }
}
printRange1(7,21)


    let i = 20;
    while(false) {
        console.log(i);
    }

function skipFive(num) {
    for(let i = 1; i <=num; i++) {
        if(i===5) {
            continue  // goes back to let 
        }
        console.log(i);
    }
}
skipFive(20); 

function breakAtFive(num) {
    for(let i = 1; i <= num; i++) {
        if (i === 5) {
            break;
        }
        console.log(i);
    }
}
breakAtFive(20);

//write a function isPrime(num) that takes in a number and returns true if the number is prime,  and false otherwise
//1) Any number less than 2 is not prime 
//2) A prime number is only divisble by itself and the number 1. 

function isPrime(num) {
    if(num < 2) return false;
    for(let n = 2; n < num; n++) {
        if(num % n === 0) {
            return false;
        }
    }
return true;
}
console.log('if this is prime')
console.log(isPrime(35))