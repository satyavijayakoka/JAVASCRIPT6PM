// object literal

// let satya = {
//     firstName:"satya",
//     lastName:"koka",
//     age:40,
//     rollNo:24
// }

// // program 1
// class Person{
//     firstName = "satya"
//     lastName = "koka"
//     age = 40
//     rollNo = 24

//     display_name(){
//         console.log(this.firstName + this.lastName)
//     }

// }
// let satyaK = new Person()
// let vijaya = new Person()
// console.log(satyaK.firstName)
// console.log(satyaK.lastName)
// console.log(satyaK.age)
// console.log(satyaK.rollNo)
// satyaK.display_name()

// console.log(vijaya.firstName)
// console.log(vijaya.lastName)
// console.log(vijaya.age)
// console.log(vijaya.rollNo)
// vijaya.display_name()

// vijaya.firstName = "vijaya"
// vijaya.lastName = "lakshmi"
// vijaya.age = 36
// vijaya.rollNo = 12

// console.log(vijaya.firstName)
// console.log(vijaya.lastName)
// console.log(vijaya.age)
// console.log(vijaya.rollNo)
// vijaya.display_name()

// program 2
// with constructor

class Person{
    constructor(fn,ln,age,rollNo){
        this.firstName = fn
        this.lastName = ln
        this.age = age
        this.rollNo = rollNo
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }

}
let satyav = new Person("satyavijaya","lakshmi",36,24)
let shivaK = new Person("shiva","koka",40,23)
shivaK.city = "vijayawada"
console.log(shivaK)
console.log(satyav)


// for(let key in amolA){
//     console.log(key,amolA[key])
// }

// for(let key in Object.keys(amolA)){
//     console.log(key)
// }

// for(let val in Object.values(amolA)){
//     console.log(val)
// }

// for(let [k,v] in Object.entries(amolA)){
//     console.log(k,v)
// }










