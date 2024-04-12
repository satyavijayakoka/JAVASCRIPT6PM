//  function getInfo(){
//     setTimeout(function(){
//         console.log("user created")
//     },3000)
//     setTimeout(function(){
//         console.log("get id")
//     },2000)
//     setTimeout(function(){
//         console.log("get info")
//     },1000)
//  }
//  getInfo()

// // call back hell
// function getInfo() {
//     setTimeout(function () {
//         console.log("user created")
//         setTimeout(function () {
//             console.log("get id")
//             setTimeout(function () {
//                 console.log("get info")
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }
// getInfo()

// promises
function userCreated(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("user created")
        },3000)

    })
}

function getId(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("get id")
        },2000)

    })
}

function userInfo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("user info")
        },1000)

    })
}
// userCreated()
// .then(function(str){
//     console.log(str)
//     return getId()
// })
// .then(function(str){
//     console.log(str)
//     return userInfo()
// })
// .then(function(str){
//     console.log(str)
// })

// async await

// async function userInfoB(){
//     let a = await userCreated()
//     console.log(a)
//     let b = await getId()
//     console.log(b)
//     let c = await userInfo()
//     console.log(c)
// }
// userInfoB()

// async code ---- sync code
// user create ------ get id ------- user info

// call     ---- 2
// callB    -----2
// callC    -----2

// promise ------ promise combinations ----- 4 methods
// promise.race()
// Promise.any()
// promise.allSettled()
// promise.all()

// program 1
// Promise.all([
//     Promise.resolve("hello"),
//     Promise.resolve("hello 2"),
//     Promise.resolve("hello 3")
// ])
// .then(function(arr){
//     console.log(arr)   // [ 'hello', 'hello 2', 'hello 3' ]
// })

// Promise.all([
//     Promise.resolve("hello"),
//     Promise.resolve("hello 2"),
//     Promise.reject("hello 3")
// ])
// .then(function(arr){
//     console.log(arr)   
// })
// .catch(function(){
//     console.log("all are not resolved")
// })   // all are not resolved

// program 2

// Promise.allSettled([
//     Promise.resolve("hello"),
//     Promise.resolve("hello 2"),
//     Promise.reject("hello 3")
// ])
// .then(function(arr){
//     console.log(arr)   
// })
//  output :[
// { status: 'fulfilled', value: 'hello' },
// { status: 'fulfilled', value: 'hello 2' },
// { status: 'rejected', reason: 'hello 3' }
// ]


// program 3
// promise.race()

function proOne(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("hello")
        },3000)
    })
}

function proTwo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            reject("bye")
        },2000)
    })
}
Promise.race([
    proOne(),
    proTwo()
])
.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})
    

// Promise.any()


Promise.any([
    Promise.reject("bye"),
    Promise.reject("bye2"),
    Promise.reject("bye3"),
])









