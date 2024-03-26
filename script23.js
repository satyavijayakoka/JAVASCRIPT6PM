// object literal

// let satya = {
//     firstName:"satya",
//     lastName:"koka",
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// let koshika = {
//     firstName:"koshika",
//     lastName:"koka",
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Person{
//     firstName = "satya"
//     lastName = "koka"

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// let koshikaK = new Person()
// let satyaK = new Person()
// console.log(satyaK)
// //console.log(koshikaK)
// koshikaK.firstName = "koshikaK"
// koshikaK.lastName = "kokaK"
// console.log(koshikaK)

// program 2
class PersonB{
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
let vijayaK = new PersonB("vijayaK","lakshmiK")
let jathin = new PersonB("jathin","koka")
vijayaK.displayName()
jathin.displayName()

// program 3
// set and get method

class PersonC{
    setFirstName(fn){
        this.firstName = fn
    }
    setLastName(ln){
        this.lastName = ln
    }
    getFirstName(){
        return this.firstName
    }
    getLastName(){
        return this.lastName
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let shiva = new PersonC()
console.log(shiva) // PersonC {}
shiva.setFirstName("sambashiva")
shiva.setLastName("rao")
let a = shiva.getFirstName()
let b = shiva.getLastName()
console.log(a)
console.log(b)

// program 4 

// let info = {
//     full_name:"ninad dani",
//     age:34
// }
// info.age = 67
// info.city  = "pune"

// set and get keyword

// program 5

class PersonD{

    set fn(fn){
        this.firstName = fn
    }
    get fn(){
        return this.firstName
    }
    set ln(ln){
        this.lastName = ln
    }
    get ln(){
        return this.lastName
    }
}
// setting class fields as properties
let shivaK = new PersonD()
shivaK.fn = "samba"
console.log(shivaK.fn) // samba
console.log(shivaK)  // PersonD { firstName: 'samba' }

shivaK.ln = "koka"
console.log(shivaK.ln) // koka
console.log(shivaK) // PersonD { firstName: 'samba', lastName: 'koka' }











