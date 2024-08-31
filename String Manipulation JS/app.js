let email = "   Papi Winnie     "
let trimmed_email=email.trim()
let firstName = trimmed_email.slice(0,trimmed_email.indexOf(" "))
let lastName = trimmed_email.slice(trimmed_email.indexOf(" ")).trim()

let firstCapLetter = firstName.charAt(0).toUpperCase()
let firstExtra = firstName.slice(1).toLowerCase()
const firstFullName = firstCapLetter + firstExtra;


let secondCapLetter = lastName.charAt(0).toUpperCase()
let secondExtra = lastName.slice(1).toLowerCase()
const secondFullName = secondCapLetter + secondExtra


let fullname = firstFullName + `_` + secondFullName;

console.log(fullname)