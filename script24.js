// program 1
// // object literal
// let sai = {
//     first_name:"sai",
//     lsst_name:"madireddy",
//     displayName:function(){
//         console.log(this.first_name + this.lsst_name)
//     }
// }

// let shiva = {
//     first_name:"shiva",
//     lsst_name:"koka",
//     displayName:function(){
//         console.log(this.first_name + this.lsst_name)
//     }
// }

// program 2

// class Person{
//     first_name ="satya"
//     last_name = "koka"
//     displayName(){
//         console.log(this.first_name + this.last_name)
//     }
// }

// let koshika = new Person()
// let jathin = new Person()
// jathin.first_name = "jathin K"

// console.log(koshika.first_name)
// console.log(koshika.last_name)
// koshika.displayName()
// jathin.displayName()
// console.log(jathin.first_name)
// console.log(jathin.last_name)

// program 3
// constructor
// class PersonD{
//     constructor(fn,ln){
//         this.firstName = fn
//         this.lastName = ln
//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// let koshika = new PersonD("koshika satya","koka")
// let jathin = new PersonD("satya jathin","koka")

// console.log(koshika.firstName)
// console.log(koshika.lastName)
// koshika.displayName()
// jathin.displayName()
// console.log(jathin.firstName)
// console.log(jathin.lastName)

// program 4
// class PersonE{

//     setFirstName(fn){
//         this.firstName = fn
//     }
//     setLastName(ln){
//         this.lastName = ln
//     }
//     getFirstName(){
//         return this.firstName
//     }
//     getLastName(){
//         return this.lastName
//     }
// }
// let jathin = new PersonE()
// jathin.setFirstName("satya jathin")
// jathin.setLastName("koka")
// let x =jathin.getFirstName()
// let y =jathin.getLastName()
// console.log(x)
// console.log(y)

// program 5

let info ={
    first_name:"satya",
    last_name:"koka"
}
info.first_name = "vijaya"
info.city = "erie"

// program 6
class PersonE{

    set fn(fn){
        this.first_name = fn
    }
    set ln(ln){
        this.last_name = ln
    }
    get fn(){
        return this.fn
    }
    get ln(){
        return this.ln
    }
}

let sai = new PersonE()
sai.fn = "sai"
sai.ln = "madireddy"
console.log(sai.fn)
console.log(sai.ln)









