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
printRange(3,10);
