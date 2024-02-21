// program 1
let numbers=[1,2,3,4,5,6,7,8,9,10]
let q1 =numbers.map(function(el,index,arr){
    return el*2
})
console.log(q1)

// program 2
let marks=[33, 44, 55, 33,66, 77, 88]
let q2=marks.filter(function(el,index,arr){
    return el>70
})
console.log(q2)

// program 3
let nums=[11,22,33]
let q3=nums.reduce(function(acc,el,index,arr){
    return el+acc
},0)
console.log(q3)

// program 4  forEach  will not return anything
let cities=["pune","mumbai","bangalore","chennai","kolkatta"]
let q4=cities.forEach(function(el,index,arr){
    console.log("welcome "+el)
})
console.log(q4) // undefined

// program 5
//         0  1  2  3  4  5  6  7
let numA=[66,77,88,44,55,66,77,88]
let q5=numA.filter(function(el,index,arr){
    return el>70
})
console.log(q5)

//program 6 
// find- which gives the first number > 70 in the array-- at index 1
let q6=numA.find(function(el,index,arr){
    return el>70
})
console.log(q6)

// findIndex
let q7= numA.findIndex(function(el,index,arr){
    return el>70
})
console.log(q7) // is at index 1

// program 7 every
let numC=[66,77,33,44,55,66,77,88]
let q8=numC.every(function(el,index,arr){
    return el>10
})
console.log(q8) // true

let q10=numC.some(function(el,index,arr){
    return el>100
})
console.log(q10) //false

// program 8  slice
//          0     1   2     3    4
let state=["MH","MP","RJ","UP","AP"]
//          -5   -4   -3   -2   -1

//state.slice(startIndex,endIndex(not included))
console.log(state.slice(1))      // [ 'MP', 'RJ', 'UP', 'AP' ]
console.log(state.slice(-4))     // [ 'MP', 'RJ', 'UP', 'AP' ]
console.log(state.slice(1,-1))   // [ 'MP', 'RJ', 'UP' ]
console.log(state.slice(1,4))    // [ 'MP', 'RJ', 'UP' ]
console.log(state.slice(-5,4))   // [ 'MH', 'MP', 'RJ', 'UP' ]
console.log(state.slice(4,1))    // []