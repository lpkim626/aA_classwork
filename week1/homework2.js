//function isOdd

function plusFive(num) {
    return num + 5;
}
console.log(plusFive(5))

//function threeOrSeven(num) {
  //  7
//}


function hello(str) {
    console.log("Hello," + str + ".");
} 
let scream = "i am in new york city"

function yell(scream) {
    let yelled = scream.toUpperCase()+ '!!!';
    return yelled
}
console.log(yell(scream));


function whisper(quiet) {


    let whispered = '...' + quiet.toLowerCase()+ '...'
    return whispered
}
console.log(whisper("hey come over here"))
console.log(whisper("hey c"))
console.log(whisper("heyer here"))


function isString(searchString, subString) {
    //searchString => 'something'
    //subStrhing => 'thin'

    return searchString.indexOf(subString)
}


//function isEven


//function averageOfFour(num1, num2, num3, num4) {
//return (num1 + num2 + num3 + num4/4)
//
//  console.log(averageOfFour(1,2,3,4)