
// lexical scope
function addition(){
    let a = 10
    let b = 5
    function additionB(){
        let q = 10
        let r = 5
        console.log(a+b+q+r)

        function additionC(){
            let s = 9
            let t = 3
            console.log(a+b+q+r+s+t)

        }
        additionC()
    }
    additionB()
}
addition() // it will not call

// closures
function displayName(){
    return function(){
        return "hello"
    }
}
let q1 = displayName()
console.log(q1())

// program 2
function displayName2(){
    console.log("hello")
    return "bye"
    console.log("hello good bye")
}
let q2 = displayName2()
console.log(q2)

// program 3
function additionE(){
    let x= 100
    let y = 50
    return function(){
        console.log(x+y)
    }
}
let q3 = additionE()
q3() // 150

// actual difference arrow function and function declaration / function expression

// function declaration
function additionF(x,y){
    return x+y
}
let q4 = additionF(12,4)
console.log(q4)

// function expression 
let additionG = function(x,y){
    return x+y
}
let q5 = additionG(12,4)
console.log(q5)

// arrow function
let additionH = (x,y) =>{
    return x+y
}
let q6 = additionH(12,4)
console.log(q6)














