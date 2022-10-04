catBuilder("whiskers", "black", "yarn")

function catBuilder(name, color, toys) {
    let cat = { 
        name : name, 
        color : color, 
        toys : toys,
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
    if(num <2) return false
    for (let i = 2; i <num; i++) {
        if(num % i ===0) {
            return false
        }
    }
    return true
}

function laligateSum(num) {
    let sum = 0;
    for(let i =2; i <= num; i ++){
        if(isPrime(i)) {
            sum +-i;
        }
    }
    return sum
}

console.log(isPrime(11))
console.log(laligateSum(7))