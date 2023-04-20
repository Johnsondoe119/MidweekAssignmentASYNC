//Removing Spaces From String
let jay = "      Hello World!        "
let results = jay.trim()
let results2 = jay.trimStart()
let results3 = jay.trimEnd()

console.log(results)
console.log(results2)
console.log(results3)

// Return a Boolean if a Number is Divisible by 10
let num = 200;
if(num % 10 === 0){
    console.log("true")
}else{
    console.log("false")
}
 

//Return the number of vowels in a string

let name1 = "Chelsea Football Club"
function getCount(name1){
    let pup = name1.match(/[aeiou]/gi);
    return pup === null ? 0: pup.length
}
console.log(getCount(name1))
