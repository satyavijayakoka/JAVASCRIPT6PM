// Promise.all()
// Promise.race()
// Promise.allSettled()
// Promise.any()

//.then()
// async await

// promise.all()
// Promise.all([
//     Promise.resolve("hello"),
//     Promise.resolve("hi"),
//     Promise.resolve("how are you"),
//     Promise.reject("bye")
// ])
// .then(function(a){
//     console.log(a)
// })
// .catch(function(str){
//     console.log("rejected")
//     console.log(str)
// })

// promise.allSettled()
// Promise.allSettled([
//     Promise.resolve("hello"),
//     Promise.resolve("hi"),
//     Promise.resolve("bye"),
//     Promise.reject("bye bye")
// ])
// .then(function(a){
//     console.log(a)
// })

// Promise.race()

// function proOne(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             reject("hello")
//         },1000)
//     })
// }

// function proTwo(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             reject("bye")
//         },2000)
//     })
// }
// Promise.race([
//     proOne(),
//     proTwo()
// ])
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })

// Promise.any()

// Promise.any([
//     Promise.reject("bye"),
//     Promise.reject("bye"),
//     Promise.resolve("hello"),
//     Promise.resolve("hello hello")
// ])
// .then(function(str){
//     console.log(str)
// })


function additionA(){
    console.log("A")

}
function additionB(){
    console.log("B")
}
additionA()
additionB()




















