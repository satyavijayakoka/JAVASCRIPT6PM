// ternary ------ one expression
//expression ? statementOne:statementTwo
//x > y ? console.log("x is greater"):console.log("y is greaetr")

// program 1
age=17
let q1=age>=18? "can drive": "can not drive"
console.log(q1)

// program 2
// switch case without break
let city="pune"
switch(city){
    case "pune":
        console.log("MH")
    case "jaipur":
        console.log("RJ")
    case "indore":
        console.log("MP")
    case "gangtok":
        console.log("Assam")
    default:
        console.log("incorect city")
}

// program 3
// switch with break
let city2="hyderabad"
switch(city2){
    case "pune":
        console.log("MH")
        break
    case "jaipur":
        console.log("RJ")
        break
    case "indore":
        console.log("MP")
        break
    case "gangtok":
        console.log("Assam")
        break
    default:
        console.log("incorect city")
}

// program 4
let city3= "wardha"
switch(city3){
    case "nagpur":
    case "wardha":
        console.log("MH")
        break
    case "jaipur":
    case "udaipur":
        console.log("RJ")
        break
    case "kanpur":
    case "varanasi":
        console.log("UP")
        break
    default:
        console.log("incorrect city")
}

// program 5
let x1=10
let x2=50
let x3=200

let isGreatest =true
switch(isGreatest){
    case x1>x2 && x1>x3:
        console.log("x1 is greater")
        break
    case x2>x3 && x2>x1:
        console.log("x2 is greater")
        break
    default:
        console.log("x3 is greater")
}

