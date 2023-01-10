// Exercise 1 : Divisible by three

let numbers = [123, 8409, 100053, 333333333, 7]
// 1. Loop through the array above and determine whether or not each number is divisible by three
numbers.forEach(n => {
    // 2. Each time you loop console.log true or false.
    console.log(n, ':', (n % 3) === 0 ? 'true' : 'false')
})


// Exercise 2 : Attendance

let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
}
// 1. Prompt the student for their name.
let studentName = prompt("Please enter your name:")
// 2. If the name is in the object, console.log the name of the student and the country they come from.
if(Object.keys(guestList).includes(studentName)) {
    console.log(`Hi! I'm ${studentName}, and I'm from ${guestList[studentName]}.`)
} else {
    // If the name is not in the object, console.log: "Hi! I'm a guest."
    console.log("Hi! I'm a guest.")
}


// Exercise 3 : Playing with numbers

let age = [20,5,12,43,98,55]
// 1. Console.log the sum of all the numbers in the age array.
let sum = 0
for (const a of age) {
    sum += a    
}
console.log(`Sum: ${sum}`)
// 2. Console.log the highest age in the array.
let highestAge = age[0]
for (let i = 1; i < age.length; i++) {
    if(age[i] > highestAge) highestAge = age[i]    
}
console.log(`Highest age: ${highestAge}`);