// program 1
let birthYear=[1989,1990,1991,1992]
let ages=[]
for(let i=0; i<birthYear.length; i++){
   // console.log(2024-birthYear[i])
    let x= 2024-birthYear[i]
    ages.push(x)
}
console.log(ages)
// using map()
//           0    1    2    3
birthYear=[1989,1990,1991,1992]
let e2 =birthYear.map(function(el,index,arr){
   // console.log(el,index,arr)
   return  2024-el
})
console.log(e2)

// program 2
//          0  1  2  3  4  5  6  7
let marks=[34,44,55,66,77,55,88,33]
let above50=[]
for(let i=0; i<marks.length; i++){
   // console.log(i)
   // console.log(marks[i])
    if(marks[i]>50){
       // console.log(marks[i])
        above50.push(marks[i])
    }
}
console.log(above50)
// using filter()
let e3 =marks.filter(function(el,index,arr){
    return el>50
})
console.log(e3)

// program 3
let transcations=[11,22,-33,44,-77,88,97,-89,67]

let deposit= transcations.filter(function(el,index,arr){
    return el > 0
})
console.log(deposit)

let withdrawl= transcations.filter(function(el,index,arr){
    return el < 0
})
console.log(withdrawl)

// program 4
let numbers=[11,22,33]
let total =0
for(let i=0; i<numbers.length; i++){
    //console.log(i)
   // console.log(numbers[i])
    total=total+numbers[i]
}
console.log(total)
// reduce()
let e4 = numbers.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(e4)
