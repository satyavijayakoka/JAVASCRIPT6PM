// slice()
//             0          1        2       3     4      5
let names=["chinmay","shirish","satish","ram","sham","sanjay"]
//            -6           -5       -4      -3     -2     -1
// names.slice(startindex, endindex(not included))
console.log(names.slice(3))
console.log(names.slice(-5))
console.log(names.slice(1,-1))
console.log(names.slice(1,5))
console.log(names.slice(-5,5))
console.log(names.slice(-1,-5)) //[]

// splice()
//             0       1        2            3        4
let cities=["pune","mumbai","bangalore","nagpur","chennai"]
//cities.pop()
//cities.shift()
//cities.splice(index,numberOfTobeDeleted)
// cities.splice(2,1)
// console.log(cities)
// cities.splice(1,2)
// console.log(cities)
cities.splice(1,2,"nagour","wardha","goa")
//cities.splice(2,1)
console.log(cities)

// fill()
//         0  1  2  3  4  5  6
let numA=[11,22,33,44,55,66,77]
let q=numA.fill('@',1,5)
console.log(q)

// flat()
//                   0                   1                    2
//              0        1          0         1         0         1
let states=[["nagpur","wardha"],["bhopal","indore"],["jaipur","udaipur"]]
console.log(states[0][1])
console.log(states[1][1])
console.log(states[2][1])
let q2=states.flat()
console.log(q2)

// sort(only alphabets)
let fruits=["apple","grapes","chikoo","banana","guava"]
fruits.sort()
console.log(fruits)

// at
let a11=[111,222,333,4444,5555,66666]
let b11=a11.indexOf(4444)
let b12=a11.at(4)
console.log(b11)
console.log(b12)

// join
let info=["satya","koka",100000]
let q3=info.join('@')
console.log(q3) //satya@koka@100000
console.log(typeof q3) // string

//reverse
let n=[22,33,44]
n.reverse()
console.log(n)

// concat
let a=[11,22,33]
b=[55,66,77]
let c= a.concat(b)
console.log(c)



