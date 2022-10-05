//nested loop - loop in a loop

let arr = [[1, 2,][2, 3]]



function everyCombination() {
    for (let i = 0; i < 3; i++) {
        // i = 0
        console.log(`outerloop: ${i}`);
        for (let j = 0; j < 5; j++) {
            // j = 0

            // console.log(i + " " + j);
            console.log(`innerloop: ${i}`);
        }
    }
}

everyCombination()

let students = ['Kevin', 'Jesse', 'Jason', 'Simon'];

let name = 'Jael'

console.log(`Hi my name is a ${name}`)
console.log("Hi, my name is " + name)


function pairStudents(arr) {
    for (let i = 0; i < arr.length; i++) {  // i = 0 

        let student1 = arr[i]; // kevin
        for (let j = i + 1; j < arr.length; j++) { //j = 1
            let student2 = arr[j]; //Jesse

            console.log(`${student1} will be paired with ${student2}`)
        }
    }
}

pairStudents(students)