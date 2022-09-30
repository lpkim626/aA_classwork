//Array
// - composite data type
// - contains multiple elements 
// - elements indexed starting at 0  


//let arr = [ 'c', 'a', 't' ];

let str = 'cat';

str[0] = 'x'
console.log(str)

// string are immutable. You cannot change it. 
// array can be mutable. You can change it. 
//arr[0] = 'x';

let arr = ['hi', 10, 9, true, undefined, null, [1,2]];
console.log(arr);
console.log(arr[6]);
console.log(arr[6][1]);

let fruits = ['apple', 'orange', 'pear'];
console.log(fruits.length); //3
console.log(fruits.indexOf('pear')); //2
console.log(fruits.includes('watermelon')); //false

fruits.push('watermelon');
console.log(fruits);
fruits.pop();
console.log(fruits);

fruits.unshift('grape'); // places in the front
console.log(fruits);

fruits.shift(); // removes from the front
console.log(fruits);

//non-mutating 

let numbers = [ 1, 2, 3 ];
console.log(fruits.concat(numbers));
console.log(fruits);
console.log(numbers.slice());
console.log(numbers.slice(1));
console.log(numbers.slice(0, 2));  

let string = 'hi my name is Xandar';
console.log(string.split(' '));
console.log(string);
console.log(numbers.join("___"));

for (let i = 0; i < numbers.length; i ++) {
    let ele = numbers [i];
    console.log(ele);
}

for (let i = numbers.length -1; i>=0; i--) {
    let ele = numbers[i]
}

console.log