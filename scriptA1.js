// sync

// program 1
// function additionA(){
//     console.log("A")
// }
// function additionB(){
//     console.log("B")
// }
// additionA()
// additionB()

//async
// program 2
// function addC(){
//     setTimeout(function(){
//         console.log("C")
//     },3000)
// }
// function addD(){
//     console.log("D")
// }
// addC()
// addD()

// program 3
// user create ----- get id ----- get info
// function getInfo(){
//     setTimeout(function(){
//         console.log("user created")
//     },3000)
//     setTimeout(function(){
//         console.log("get id")
//     },2000)
//     setTimeout(function(){
//         console.log("get info")
//     },1000)
    
// }
// getInfo()

// program 4
// call back hell
// async ---- call --- synchronously

// function getInfo(){
//     setTimeout(function(){
//         console.log("user created")
//         setTimeout(function(){
//             console.log("get id")
//             setTimeout(function(){
//                 console.log("get user info")
//             },1000)
//         },2000)
//     },3000)
// }
// getInfo()

// program 5
// promises --- Es6

let pro = new Promise(function(resolve,reject){
    let a = 10
    let b = 10

    if(a == b){
        resolve("hello")
    }
    else{
        reject("bye")
    }
})
pro.then(function(str){
    console.log(str)
},function(str){
    console.log(str)
})










