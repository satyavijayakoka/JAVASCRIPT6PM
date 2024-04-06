// call bind apply
// object literal
// let satya = {
//     firstName:"satya",
//     lastName:"koka",
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
//satya.displayName()

// let koshika = {
//     firstName:"koshika",
//     lastName:"koka"
// }
// //let displayName2 = satya.displayName
//  displayName2 = function(){
//     console.log(this.firstName + this.lastName)

// }
//  displayName2.bind(koshika)()

// program 2
let saiA = {
    firstName:"saiA",
    lastName:"madireddyA"
}
let saiB = {
    firstName:"saiB",
    lastName:"madireddyB"
}
let saiC = {
    firstName:"saiC",
    lastName:"madireddyC"
}
displayName = function(){
    console.log(this.firstName + this.lastName)
}
let q1 = displayName.bind(saiA)
let q2 =displayName.bind(saiB)
let q3 =displayName.bind(saiC)
q1()
q2()
q3()

let = displayName3 = function(greet){
    console.log(this.firstName+this.lastName)
    console.log(greet)
}
displayName3.call(saiA,"hello")
displayName3.call(saiA,"hi")
displayName3.call(saiA,"bye")

displayName3.call(saiA,["hello2"])
displayName3.call(saiA,["hi2"])
displayName3.call(saiA,["bye2"])

// function declaration
function displayColor(cl){
    return cl + "G"
}
let r = displayColor("green")
console.log(r)

// arrow function
let displayColor2 = (cl)=>{
    return cl +"G"
}
let r2 = displayColor2("green")
console.log(r2)

// expression function
let displayColor3 = function(cl){
    return cl +"B"
}
let r3 = displayColor3("blue")
console.log(r3)




















