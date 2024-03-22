// map
let info = {
    firstName:"satya",
    lastName:"koka",
    age:40,
    rollNo:24,
    1:36
}
console.log(info) 
//{ '1': 36, firstName: 'satya', lastName: 'koka', age: 40, rollNo: 24 }

for(let key in info){
   // console.log(key)
    console.log(typeof key)
}

// program 1
let roles = new Map()
roles.set(1,"admin")
roles.set(2,"manager")
roles.set(3,"customer")
roles.set(4,"support")
roles.set(5,"teacher")

console.log(roles)
// ANSWER:
/*Map(5) {
    1 => 'admin',
    2 => 'manager',
    3 => 'customer',
    4 => 'support',
    5 => 'teacher'
  }*/

// In Javascript
console.log('10') // string o/p will be in white color
console.log(10) // number o/p will be in yellow

console.log(roles.get(1))
console.log(roles.get(2))
console.log(roles.get(3))
console.log(roles.get(4))
console.log(roles.get(5))

// program 3
let mapB = new Map([
    [1,"admin"],
    [2,"customer"],
    [3,"manager"],
    [4,"support"]
])
console.log(mapB)

// program 3
let names = ["koshika","jathin"]
let info2 = {firstName:"satya",lastName:"koka"}

let mapC = new Map([
    [names,"students"],
    [info2,"information"],
    [true,"candrive"],
    [24,"rollNo"]
])
console.log(mapC)

// clear()
// mapC.clear()
// console.log(mapC) // Map(0) {}

// size()
console.log(mapC.size) // 4

// get()
console.log(mapC.get(24)) // rollNo

// set()
mapC.set('city',"erie")
console.log(mapC)

// has() ; delete()
let q = mapC.has(24)
console.log(q) //true

mapC.delete(24)
console.log(mapC)

// forEach()
let mapD = new Map([
    ["MH","Nagpur"],
    ["UP","Kanpur"],
    ["RJ","Jaipur"]
])

mapD.forEach(function(value,key){
    console.log(value,key)
})

for(let key of mapD.keys()){
    console.log(key)
}

for(let val of mapD.values()){
    console.log(val)
}

for(let [k,v] of mapD.entries()){ //[k,v]--- ["MH","Nagpur"]
    console.log(k,v)
}





