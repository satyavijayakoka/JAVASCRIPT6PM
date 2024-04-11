// Asynch ==> Synch
// program 1
// function additionA(){
//     console.log("A")
// }
// function additionB(){
//     console.log("B")
// }
// additionA()
// additionB()

// program 2
// function additionD(){
//     setTimeout(function(){
//         console.log("D")
//     },2000)
// }
// function additionC(){
//     console.log("C")
// }
// additionC()
// additionD()

// program 3
// function getInfo(){
//     setTimeout(function(){
//         console.log("user created")
//     },3000)
//     setTimeout(function(){
//         console.log("get id")
//     },2000)
//     setTimeout(function(){
//         console.log("get user info")
//     },1000)
// }
// getInfo()

// program 4
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
// getInfo() // problem here is // tighly coupled , reusable , readable 

// promises --> pending, resolve, reject
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
// program 1
// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

// program 2
// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })

// program 3
// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will always run")
// })

// program 4
// pro
// .then(function(str){
//     console.log("hello")
//     return "hello2"
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will always run")
// })

// -------------------------------------------
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
            resolve("get Id")
        },2000)
    })
}
function getInfo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("get info")
        },1000)
    })
}
// promise consume

// userCreated()
// .then(function(str){
//     console.log(str)
//     return getId()
// })
// .then(function(str){
//     console.log(str)
//     return getInfo()
// })
// .then(function(str){
//     console.log(str)
// })

async function getUserInfo(){
   let a = await userCreated()
   console.log(a)
   let b = await getId()
   console.log(b)
   let c = await getInfo()
   console.log(c)
}
getUserInfo()














