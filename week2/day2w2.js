catBuilder("whiskers", "black", "yarn")

function catBuilder(name, color, toys) {
    let cat = {
        name: name,
        color: color,
        toys: toys,
    }
    return cat.name
}
console.log(catBuilder("whiskers", "black", "yarn"))


//  cat["name"] = name;
//  cat["color"] = color;
//  cat["toys"] = toys;

//function decomp/ objects
//breakdown = problem into several functions

// CLEAN CODE
// Manage COMPLEXITY 

//laligatSum(num) and returns the sum of all of the prime numbers less than or equal to that number. 

//laligateSum(10) -> 2+3+5+7 => 17
//laligateSum(17) -> 2+3+5+7+11+13+17 =58

function isPrime(num) {
    if (num < 2) return false
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

function laligateSum(num) {
    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            sum + -i;
        }
    }
    return sum
}

console.log(isPrime(2))
console.log(laligateSum(7))

//javascript datastructure
//mutable 
//key - value pairs
//key - ALWAYS A STRING
//value - can be anything 
//keys are unique 

//objects are unordered, arrays are ordered. 


let cat = {
    name: "whiskers",
    color: "black",
    toys: {outside:["ball", "white"],inside: ["blanket"]}
}

cat ["name"] ="Jael";
cat ["age"] = 21;

console.log(cat);
console.log(cat["color"]);
console.log(cat.name);
console.log(cat.age);
console.log(cat.toys);
console.log(cat.toys.outside[0])
console.log(cat.test)

let test = "name";
console.log(cat[test]);
console.log(cat.test);