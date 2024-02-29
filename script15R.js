
let students = [
    {
        firstName: "chinmay",
        lastName: "deshpande",
        age: 12,
        skills: ["python", "javascript", "django"],
        city: "pune"
    },
    {
        firstName: "sarika",
        lastName: "pansare",
        age: 23,
        skills: ["python", "javascript", "cypress"],
        city: "mumbai"
    },
    {
        firstName: "amol",
        lastName: "rao",
        age: 25,
        skills: ["python", "html", "cypress"],
        city: "nagpur"
    },
    {
        firstName: "mayuri",
        lastName: "rao",
        age: 35,
        skills: ["testing", "html", "cypress"],
        city: "pune"
    }

]

// console.log(students[1].firstName)
// console.log(students[1].skills[2])
// students[1].skills.push("selenium")
// console.log(students)

// firstName of all students
// using for loop
for(let i=0; i<students.length; i++){
    console.log(students[i].firstName)
}
// using foreach
students.forEach(function(el){
    console.log(el.firstName)
    console.log(el['firstName'])
})

// student with pune city
// using for loop
for(let i=0; i<students.length; i++){
    if(students[i].city == "pune"){
        console.log(students[i].firstName) // mayuri
    }
}
// using foreach
students.forEach(function(el){
    if(el.city == "pune"){
        console.log(el.firstName)
    }
})
// using filter
let r1=students.filter(function(el){

    return el.city == "pune"
})
console.log(r1)
r1.forEach(function(el){
    console.log(el.firstName)
})

// another way
students.filter(function(el){

    return el.city == "pune"
}).forEach(function(el){
    console.log(el.firstName)
})

//student in pune and age above 30
students.forEach(function(el){
    if(el.city == "pune" && el.age>30){
        console.log(el.firstName)
    }
})

// add css skill to every student
// using foreach
students.forEach(function(el){
    el.skills.push("css")
})
//console.log(students)

// using map
let r2=students.map(function(el){
    el.skills.push("html5")
    return el
})
console.log(r2)

// name:numberofSkills
students.forEach(function(el){
    console.log(el.firstName+":"+el.skills.length)
})

// average age of all students
// using reduce function
let r4=students.reduce(function(acc,el){
    return acc+el.age       
},0)
console.log(r4/students.length)

// using for loop
let total=0
for(let i=0; i<students.length; i++){
    total=total+students[i].age
}
console.log(total/students.length)