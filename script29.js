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

// function constructor
function Person(fn,ln){
      this.firstName = fn
      this.lastName = ln
      this.displayName = function(){
        console.log(this.firstName + this.lastName)
      }  
}
let satya2 = new Person("satya2","koka2")
let koshika = new Person("koshika","koka")
console.log(satya2)
console.log(koshika)

// every object has __proto__ === Parent.protype
console.log(satya2.__proto__ === parent.protype)
console.log(koshika.__proto__ === Person.prototype)
Person.prototype.displayName = function(){
    console.log(this.firstName + this.lastName)
}
Person.prototype.city = "erie"
satya2.displayName()
koshika.displayName()
console.log(satya2 instanceof Person)
console.log(koshika instanceof Person)

console.log(satya2.hasOwnPropeerty('firstName'))
console.log(satya2.hasOwnPropeerty('lastName'))
console.log(satya2.city)
console.log(koshika.city)

// let names = ["satya","koshika"]
// console.log(names)
// console.log(names.__proto__ === Array.prototype)
// names.pop()

// Es6 class 

class Person {
    //country = "india"
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
        // this.displayName = function(){
        //     console.log(this.firstName + this.lastName)
        // }
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let hemant = new Person("hemant","deshpande")
let sarika = new Person("sarika","pansare")
console.log(hemant)
console.log(sarika)
sarika.displayName()
hemant.displayName()

// Object.create()
let info = {
    init:function(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    },
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
let sarikaE = Object.create(info)
console.log(sarikaE)
sarikaE.init("sarika","pansare")
sarikaE.displayName()






