// program 1
let names = ["chinmay","sarika","shivani","poorva"]
let n1 = names[0]
let n2 = names[1]
let n3 = names[2]
let n4 = names[3]
console.log(n1)
console.log(n2)
console.log(n3)
console.log(n4)

// program 2
let name = ["chinmay","sarika","shivani","poorva"]
let [s1,s2,s3,s4] = name
console.log(s1)
console.log(s2)
console.log(s3)
console.log(s4)

// program 3
let fruits =["apple","mango","orange"]

let [f1,,f2] = fruits
console.log(f1)
console.log(f2)

// program 4
let states = [
    ["nagpur","wardha"],
    ["jaipur","udaipur"],
    ["bhopal","indore"]
]

let [[c11,c22],[c33,c44],[c55,c66]] = states
console.log(c11)
console.log(c44)
console.log(c55)

// program 5
let info = {
    firstName:"satya",
    lastName:"koka"
}
let {firstName,lastName} = info
console.log(firstName)
console.log(lastName)

// program 6
let vehicle = {
    type:"sedane",
    model:"suv"
}
let {type:ty,model:md} = vehicle
console.log(ty)
console.log(md)

// program 7
let info2 ={
    fullName:"satya koka",
    parent:{
        mother:"baghyalakshmi",
        father:"venkataratnam"
    }
}
let{fullName:fn,parent:{mother:mr,father:fr}} = info2
console.log(fn)
console.log(fr)
console.log(mr)

// program 8
let students = [
    {
        firstName:"satya",
        lastName:"koka"
    },
    {
        firstName:"madhu",
        lastName:"duggirala"
    }
]
let [{firstName:f11,lastName:l11},{firstName:f22,lastName:l22}] = students
console.log(f11)
console.log(l11)
console.log(f22)
console.log(l22)

// program 9
let info3 ={
    fullName:"satya koka",
    address:"erie",
    skills:["java","javascript"]
}

let {fullName:fn1,address:ad,skills:[s11,s22]} = info3
console.log(fn1)
console.log(ad)
console.log(s11)
console.log(s22)








