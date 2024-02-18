// push
// action- add to the last of the array
// return type- new length
let names=["satya","koshika","jathin","sai"]
let q1 =names.push("ratnam")
console.log(q1)
console.log(names)

// unshift
// action - add element to the first
// return type- new length
let q2=names.unshift("bhagya lakshmi")
console.log(q2)
console.log(names)

// pop
// action - remove last element
// returntype- give the last element
let fruits=["apple","guava","orange","mango","grapes"]
let q3 =fruits.pop()
console.log(q3)
console.log(fruits)

// shift
// action- removes first element and gives remainnig array
// return type- gives the first element
let q4 =fruits.shift()
console.log(q4)
console.log(fruits)

// indexOf
let animals=["tiger","lion","bear","leopard"]
let q5 =animals.indexOf("lion")
console.log(q5) // 1
let q6 =animals.indexOf("Lion")
console.log(q6) //-1

//includes
let city=["bangalore","chennai","hyderabad","vijayawada"]
let q7 =city.includes("vijayawada")
console.log(q7) // true
let q8 =city.includes("Vijayawada")
console.log(q8) // false

// reverse
let q9 =city.reverse()
console.log(q9)
console.log(city)

// at
let country=["India","China","Srilanka","Nepal","Pakistan","Bangladesh"]
let q10 =country.at(3)
console.log(q10)

// concat
let a=[11,22,33]
let b=[44,55,66]
let q11 =a.concat(b)
console.log(q11)
console.log(a)
console.log(b)

// join
let info =["satya","koka","12345"]
let q12 =info.join("-")
let q13 =info.join("@")
console.log(q12)
console.log(q13)





































