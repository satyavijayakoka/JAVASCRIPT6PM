// program 1
//              0        1         2
let names = ["satya","koshika","jathin"]
let a = names[0]
let b = names[1]
let c = names[2]
console.log(a)
console.log(b)
console.log(c)

let [a1,b1,c1] = names
console.log(a1)
console.log(b1)
console.log(c1)

// program 2
let fruits = ["apple","mango","banana"]
let [q1,,q2] = fruits
console.log(q1)
console.log(q2)

// program 3
//                     0                    1                    2
//                0         1          0         1        0          1
let cities = [["nagpur","wardha"],["bhopal","indore"],["lucknow","varanasi"]]
let [[c11,c22],[c33,c44],[c55,c66]] = cities
console.log(c22)
console.log(c66)

// program 4
let info = {
    firstName:"satya",
    lastName:"koka"
}
let {firstName,lastName} = info
console.log(firstName)
console.log(lastName)

let vehicle = {
    color:"blue",
    type:"Honda CRV"
}
let {color:cl,type:typ} = vehicle
console.log(cl)
console.log(typ)

// program 5
let info2 = {
    fullName:"satya koka",
    parent:{
        mother:"bhagyalakshmi koka",
        father:"venkataratnam koka"
    }
}
let {fullName,parent:{mother,father}} = info2
console.log(fullName)
console.log(mother)
console.log(father)

// program 6
let students =[
    {
        fn:"koshika",
        ln:"koka"
    },
    {
        fn:"jathin",
        ln:"koka"

    }
]

let [{fn:f1,ln:l1},{fn:f2,ln:l2}] = students
console.log(f1)
console.log(l1)
console.log(f2)
console.log(l2)

// program 7

let info3 = {
    firstName:"satya",
    lastName:"koka",
    skills:["python","javascript","java"]
}
let {firstName:f11,lastName:l11,skills:[sub1,sub2,sub3]} = info3
console.log(f11)
console.log(l11)
console.log(sub1)
console.log(sub2)
console.log(sub3)