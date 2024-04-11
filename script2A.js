//Ajax => asynch javascript

// synch ==> line by line execution
// program 1
// function add1(){
//     console.log("i am add 1")
// }
// function add2(){
//     console.log("i am add 2")
// }
// add2()  // i am add 2
// add1()  // i am add 1

// synch ==> asynch
// setTimeOut

// function add3(){
//     setTimeout(function(){
//         console.log("i am add 3")
//     },3000)
// }
// function add4(){
//     setTimeout(function(){
//         console.log("i am add 4")
//     },2000)
// }
// function add5(){
//     setTimeout(function(){
//         console.log("i am add 5")
//     },1000)
// }
// add3()
// add4()
// add5()
// first i am add 5 executed, i am add 4 executed last i am add 3 is executed after 3 secs

// program 3
// User create => getID => show Info
// function getUserInfo(){
//     setTimeout(function(){
//         console.log("user created")
//     },4000)
//     setTimeout(function(){
//         console.log("get ID")
//     },3000)
//     setTimeout(function(){
//         console.log("show user")
//     },2000)
// }
// getUserInfo()  // when we call this function the execution happened as below
// show user
//get ID
//user created

// program 4
// synch => asynch => synch
// call back hell =>

// function getUserInfo(){
//     setTimeout(function(){
//         console.log("user created")

//         setTimeout(function(){
//             console.log("get ID")
//             setTimeout(function(){
//                 console.log("show user")
//             },1000)
//         },2000)

//     },3000)
// }
// getUserInfo() // the execution starts at line no. 60


// program 5
// promises ==> ES6

let pro = new Promise(function(resolve,reject){
       let a = 10
       let b = 10
       if (a == b){
        resolve("hello")
       }
       else{
        reject('bye')
       }
})
// consume ==> .then()
pro.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})









