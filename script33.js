// program 1 
console.log("hello")

// program 2
var firstName = "satya"
var lastName = "koka"
// console.log(window.firstName)
// console.log(window.lastName)

// let jathin = {
//     firstName:"jathin",
//     lastName:"koka",
//     displayName:function(){
//         // this--- jathin
//         console.log(this.firstName + this.lastName) // jathin koka
//         let displayName2 = function(){
//             // this ---- window
//             console.log(this.firstName + this.lastName) // satya koka
//         }
//         displayName2()
//     }
// }
// jathin.displayName()


// let sai = {
//     firstName:"sai",
//     lastName:"madireddy",
//     displayName:function(){
//         // this--- sai
//         console.log(this.firstName+this.lastName) // saimadireddy
//         let displayName2 = ()=>{
//             // this --- sai
//             console.log(this.firstName+this.lastName)  // saimadireddy
//         }
//         displayName2()
//     }
// }
// sai.displayName()

let sai = {
    firstName:"sai",
    lastName:"madireddy",
    displayName:()=>{
        // this--- window
        console.log(this.firstName+this.lastName) // satyakoka
        let displayName2 = ()=>{
            // this --- window
            console.log(this.firstName+this.lastName)  //satyakoka
        }
        displayName2()
    }
}
sai.displayName()







