// B1

// const pi = 3.14;

// function sum(a,b){
//     return a+b
// }

// export function calculateRectArea(a,b){
//     console.log(a*b) 
// }


// export function calculateCircleArea(r){
//     console.log((r*r)*pi) 
// }

//  let info  = {
//     name: "abc",
//     country: "vietnam",
//     producer: "vin",
//     year: 2022,

// }

// export default function nameCalculator(z){
//     console.log(info.name)
// }


// B2
const people = [{
    "id": 1,
    "first_name": "Cynthy",
    "last_name": "Blunsden",
    "email": "cblunsden0@tuttocitta.it",
    "gender": "Female"
}, {
    "id": 2,
    "first_name": "Anna-diana",
    "last_name": "Whitlock",
    "email": "awhitlock1@go.com",
    "gender": "Female"
}, {
    "id": 3,
    "first_name": "Aurora",
    "last_name": "Lawrance",
    "email": "alawrance2@google.com.hk",
    "gender": "Female"
}, {
    "id": 4,
    "first_name": "Netti",
    "last_name": "McDonnell",
    "email": "nmcdonnell3@tmall.com",
    "gender": "Female"
}, {
    "id": 5,
    "first_name": "Elfie",
    "last_name": "McGinnis",
    "email": "emcginnis4@un.org",
    "gender": "Female"
}, {
    "id": 6,
    "first_name": "Eugine",
    "last_name": "Wyndham",
    "email": "ewyndham5@tinyurl.com",
    "gender": "Genderfluid"
}, {
    "id": 7,
    "first_name": "Franky",
    "last_name": "Reiner",
    "email": "freiner6@gov.uk",
    "gender": "Polygender"
}, {
    "id": 8,
    "first_name": "Amity",
    "last_name": "Luparto",
    "email": "aluparto7@eventbrite.com",
    "gender": "Female"
}, {
    "id": 9,
    "first_name": "Vivien",
    "last_name": "Tolle",
    "email": "vtolle8@mapquest.com",
    "gender": "Female"
}, {
    "id": 10,
    "first_name": "Arnoldo",
    "last_name": "Deval",
    "email": "adeval9@google.fr",
    "gender": "Male"
}]

let firstname = people.map(v => v.first_name)
console.log(firstname)

let fullname = people.map(m => "fullname: " + m.first_name +" "+ m.last_name +" "+ "gender: " + m.gender  )
console.log(fullname)
let filter1 = people.filter(x => x.id >5)
console.log(filter1)
let filter2 = people.filter(l => {return l.gender = "Male" && l.id < 5})
console.log(filter2)
let find = people.find(i => i.id = 10)
console.log(find)
