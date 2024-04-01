// object literal
// let satya = {
//     firstName:"satya",
//     lastName:"koka",
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// console.log(satya.firstName)
// console.log(satya.lastName)
// satya.displayName()

let koshika = {

    firstName:"koshika",
    lastName:"koka",
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}
console.log(koshika.firstName)
console.log(koshika.lastName)
koshika.displayName()

// function constructor
function Person(fn,ln){
    this.firstName = fn
    this.lastName = ln
    this.displayName = function(){
        console.log(this.firstName + this.lastName)

    }
}
let jathink = new Person("jathin","koka")
console.log(jathink)
jathink.displayName()

// program 3
function Vehicle(cl,ty){
    this.color = cl
    this.type = ty
    this.displayColor = function(){
        console.log(this.color)
    }
}
let audi = new Vehicle("blue","sedane")
let bmw = new Vehicle("red","suv")
console.log(audi)
bmw.displayColor()

// Es6
class PersonC{
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
let shiva =new PersonC("shiva","koka")
console.log(shiva)
shiva.displayName()

// program 4
class VehicleB{
    constructor(cl,ty){
        this.color = cl
        this.type = ty
    }
    displayColor(){
        console.log(this.color)
    }
}
let honda = new VehicleB("black","crv")
console.log(honda)
honda.displayColor()

// Object.create()
let audiC = Object.create({})
console.log(audiC)
audiC.color = "yellow"
audiC.type = "CRV"
audiC.displayColor = function(){
    console.log(this.color)
}
console.log(audiC)












