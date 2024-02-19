// program 1
let birthYear =[1989,1990,1991,1992]
let ages =[]

// [2023 -1989,2023 -1990,2023 -1991 , 2023 -1992]
// [35,34,33,32]

for(let i=0; i<birthYear.length; i++){
    //console.log(i)
    //console.log(birthYear[i])
    //console.log(2024-birthYear[i])
    let x= 2024-birthYear[i]
    ages.push(x)
}
console.log(ages)

// program 2
//           0   1  2  3  4  5  6
let marks =[11, 44,66,77,88,33,55]
let above50=[]
//55,66,77,88
for(let i=0; i<marks.length; i++){
    //console.log(i)
    //console.log(marks[i])
    if(marks[i]>50){
        //console.log(marks[i])
        above50.push(marks[i])
    }
}
console.log(above50)

// program 3
let numbers =[11,22,33]
let total=0
for(let i=0; i<numbers.length; i++){
    //console.log(numbers[i])
    total=total+numbers[i]
}
console.log(total)

// program 4
let city=["nagpur","chennai","bangalore","kolkatta"]
for(let i=0; i<city.length; i++){
    console.log("welcome "+city[i])
}
























