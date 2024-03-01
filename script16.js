let first_name="satya"
console.log(first_name)

let last_name='koka'
console.log(last_name)

let middle_name=`vijaya lakshmi`
console.log(middle_name)

// program 1
let fn="satya"
let ln="koka"
// My firstName is satya and my lastName is koka
console.log("My firstName is "+fn+" and my lastName is "+ln)

// program 2 string interpolation
console.log(`My firstName is ${fn} and my lastName is ${ln}`)

// program 3
// string  +  number  -----> string
// number  +  string  -----> string
// string  +  string  ------> string
// number  +  number  ------> number

let a=10
let b=15
let c="Hello"
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)

console.log(a+b+c)  // 25Hello
console.log(b+c+a)  // 15Hello10
console.log(c+a+b)  // Hello1015

// in javascript
// string -------> object --------> properties and methods

// program 4
let city="pune"
console.log(city)
console.log(city[0])
console.log(city[1])
console.log(city[2])
console.log(city[3])

// program 5
// string -------> object --------> properties and methods
// action and return type

let city2="chandrapur"
//  0   1    2    3   4    5   6    7   8    9
//  c   h    a    n   d    r   a    p   u    r
console.log(city2.length)

for(let i=0; i<city2.length; i++){
    console.log(city2[i])
}
for(let i=city2.length-1; i>=0; i--){
    console.log(city2[i])
}

// program 6
let city3="nagpur"

let i1=0
while(i1<city3.length){
    console.log(city3[i1])
    i1=i1+1
}

let i2=city3.length-1
while(i2>=0){
    console.log(city3[i2])
    i2=i2-1
}

// program 7
let city4="wardha"
//  0   1   2    3   4   5
//  w   a   r    d   h   a
// ahdraw
let revSt=""
for(let i=0; i<city4.length; i++){
    revSt=city4[i]+revSt

    // w   +   ""   ----->  w
    // a   +   w    ----->  aw
    // r   +  aw    ----->  raw
    // d   +  raw   ----->  draw
    // h   +  draw  -----> hdraw
    // a   +  hdraw -----> ahdraw
}
console.log(revSt)  // ahdraw