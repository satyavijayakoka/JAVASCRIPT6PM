// // program 1
// let roles = new Map()
// let roles2 = new Map([
//     [1,"admin"],
//     [2,"manager"],
//     [3,"customer"]
// ])
// console.log(roles2)

// // program 2
// let q1 = roles2.size
// console.log(q1)

// roles2.set(4,"support")
// console.log(roles2)

// let q2 = roles2.get(2)
// console.log(q2)

// let q3 = roles2.has(4)
// console.log(q3)

// // roles2.clear()
// // console.log(roles2)

// roles2.delete(1)
// console.log(roles2)

// roles2.forEach(function(v,k){
//     console.log(v,k)
// })

// for(let key of roles2.keys()){
//     console.log(key)
// }

// for (let val of roles2.values()){
//     console.log(val)
// }

// for(let [k,v] of roles2.entries()){
//     console.log(k,v)
// }

// roles2.set(2,"newValue")
// console.log(roles2)

//  program 3 Set

// define set without elements
let names = new Set()
console.log(names) // Set(0) {}

// define with elements
let names2 = new Set(["satya","jathin","koshika","shiva"])
console.log(names2)

names2.add("neelima")
console.log(names2)

let q1 = names2.has("jathin")
console.log(q1)

names2.delete("satya")
console.log(names2)

names2.forEach(function(el){
    console.log(el)
})

// program  4
// let students = new Set([
//     {firstName:"sarika",lastName:"pansare"},
//     {firstName:"poorva",lastName:"vyas"}
// ]) 

// for(let key of students.keys()){
//     console.log(key)
// }

// for(let key of students.values()){
//     console.log(key)
// }

// for(let [k,v] of students.entries()){
//     console.log(k,v)
// }








