// program 1
let sai = {
    fn:"sai",
    ln:"madiraddy",
    displayName:function(){
        console.log(this.fn + this.ln)
    }
}
console.log(sai.fn)
console.log(sai.ln)
sai.displayName()

// program 2
// function Person(fn,ln){
//     this.firstName = fn
//     this.lastName = ln
//     this.displayName = function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// let a = new Person("satya","koka")
// console.log(a)
// a.displayName()

// program 3
function Person(fn,ln){
    this.firstName = fn
    this.lastName = ln
}
let satya = new Person("satya","koka")
let jathin = new Person("jathin","koka")
console.log(satya)
console.log(jathin)

// every object has one property __proto__ === Parent.protype
console.log(satya._proto__ === Person.prototype)
console.log(jathin._proto__ === Person.prototype)

Person.prototype.displayName = function(){
    console.log(this.firstName + this.lastName)
}
Person.prototype.country = "India"
satya.displayName()
jathin.displayName()

let names = ["satya","jathin","koshika"]
console.log(names)
names.pop()
console.log(names._proto__ === Array.prototype)

// Array.prototype.chinmay = function(){
//     console.log("hello chinmay !")
// }
// names.chinmay()

console.log(names instanceof Array)
console.log(satya instanceof Person)
console.log(jathin instanceof Person)

let a = satya.hasOwnProperty("firstName")
let b = satya.hasOwnProperty("lastName")
let c = satya.hasOwnProperty("country")

console.log(a)
console.log(b)
console.log(c)
