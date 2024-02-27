// object------ properties and methods
let info=["satya","koka",36,24]

let satya={
    // key: values
    // propety: values
    firstName:"satya",
    lastName:"koka",
    age:36,
    rollNo:24
}
console.log(satya)
// retrive (dot notation, bracket notation)
console.log(satya.firstName)
console.log(satya['firstName'])

// update (dot notation, bracket notation)
satya.firstName="vijaya"
satya['lastName']="duggirala"
console.log(satya)

// add
satya.language="telugu"
satya['city']="vijayawada"
console.log(satya)

// delete
delete satya.firstName
delete satya['lastName']
console.log(satya)

// program 2
// retrive, // add, // update, // delete
let vehicle={
    color:"blue",
    type:"honda"
}
console.log(vehicle.color)
console.log(vehicle['color'])

vehicle.regNo=123
vehicle['wheels']=4
console.log(vehicle)

vehicle.color="brown"
vehicle['type']="hodaCRV"
console.log(vehicle)

delete vehicle['color']
console.log(vehicle)

// program 3
let names=["satya","arina","pragathi","rita"]
for(let i=0; i<names.length; i++){
    console.log(names[i])
}

// program 4
let koshika={
    firstName:"koshika",
    lastName:"koka",
    age:8,
    rollNo:12
}
//console.log(koshika['firstName'])
for(let prop in koshika){
    console.log(prop,koshika[prop])
}
// program 5
// let koshika2={
//     firstName:"koshika",
//     lastName:"koka",
//     age:8,
//     rollNo:12
// }
// for(let x in koshika2){
//     console.log(x,koshika2[x])
// }

// program 6
let students=[
    {
        firstName:"satya",
        lastName:"koka",
        age:36
    },
    {
        firstName:"skoshika",
        lastName:"koka",
        age:8
    },
    {
        firstName:"jathin",
        lastName:"koka",
        age:5
    }
]

console.log(students[2].firstName)
console.log(students[1]['age'])
console.log(students[0].lastName)
