// string --- object

let first_name="satya"
console.log(first_name)
console.log(typeof first_name)

let q1=first_name.length
console.log(q1)

// Method
// action   // return type

// program 1
let last_name="koka"
let s1 =last_name.toUpperCase()
console.log(s1)

let middle_name = "Vijayalakshmi"
let s2 = middle_name.toLowerCase()
console.log(s2)

// program 2
let s3 = "hello".toUpperCase().toLowerCase().length
//let s3 = "hello".toUpperCase().toLowerCase().length.toUpperCase() // not correct
console.log(s3)

// program 3
let fruit = "apple"
let s4 = fruit.startsWith("app")
let s5= fruit.startsWith("a")
let s6= fruit.startsWith("A")
let s7= fruit.endsWith("e")
let s8= fruit.endsWith("le")
let s9= fruit.endsWith("lle")
console.log(s4)
console.log(s5)
console.log(s6)
console.log(s7)
console.log(s8)
console.log(s9)

// program 4
let vegetable = "brinjal"
//  0     1     2    3    4    5     6
//  b     r     i    n    j    a     l

let s10 = vegetable.includes('i')
let s11 = vegetable.includes('in')
let s12 = vegetable.includes('inJ')
console.log(s10)
console.log(s11)
console.log(s12)

let s13 = vegetable.indexOf('b')
let s14 = vegetable.indexOf('e')
console.log(s13)  // 0
console.log(s14) // -1

// program 5
let a11 = ' hello'
console.log(a11)

console.log(a11.length)
let s15 = a11.trimStart()
console.log(s15.length)

a11 = ' hello '
let s16= a11.trimEnd()
console.log(s16.length)

let s17 = a11.trim()
console.log(s17.length)

// program 6
info = "i am learning javascript"
s18 = info.replace("javascript","python")
console.log(s18)