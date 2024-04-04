// let satya ={
//     firstName:"satya",
//     lastName:"koka",
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// let jathin = {
//     firstName:"jathin",
//     lastName:"koka"
// }
// //let displayName2 = satya.displayName

// let displayName2 = function(){

//     console.log(this.firstName + this.lastName)
// }
// // displayName2() here the problem is we cannot assign this value 
// // so thats why we are using bind function
// let q = displayName2.bind(jathin)
// // let q = function(){     ///here q means the function
// //      console.log(this.firstName + this.lastName)
// // }
// q()


// program 2   bind()

// let sai = {
//     firstName:"sai",
//     lastName:"madireddy"
// }

// let shiva = {
//     firstName:"shiva",
//     lastName:"koka"
// }
// let koshika = {
//     firstName:"koshika",
//     lastName:"koka"
// }

// displayName3 = function(){
//     console.log(this.firstName + this.lastName)
// }
// displayName3.bind(sai)()
// displayName3.bind(shiva)()
// displayName3.bind(koshika)()

// program 3 call()
let sai = {
    firstName:"sai",
    lastName:"madireddy"
}

let shiva = {
    firstName:"shiva",
    lastName:"koka"
}
let koshika = {
    firstName:"koshika",
    lastName:"koka"
}

let displayName4 = function(a){
    console.log(this.firstName + this.lastName)
    console.log(a)
}
displayName4.call(sai,"hello")
displayName4.call(shiva,"hello")
displayName4.call(koshika,"hello")

// apply()
displayName4.apply(sai,["bye","hi","goodbye","takecare"])



