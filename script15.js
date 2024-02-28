let students=[
    {
        firstName:"satya",
        lastName:"koka",
        age:36,
        skills:["python","javascript","java"],
        city:"hyderabad"
    },
    {
        firstName:"koshika",
        lastName:"koka",
        age:8,
        skills:["singing","dance","html",],
        city:"vijayawada"
    },
    {
        firstName:"sai",
        lastName:"madireddy",
        age:39,
        skills:["testing","cypress","python"],
        city:"ibrahimpatnam"
    },
    {
        firstName:"shiva",
        lastName:"koka",
        age:26,
        skills:["electronics","c","msoffice"],
        city:"kakinada"
    }
]

// firstname of all students
for(let i=0; i<students.length; i++){
    console.log(students[i].firstName)
}

// student with ibrahimpatnam city
for(let i=0; i<students.length; i++){
    if(students[i].city == "ibrahimpatnam"){
        console.log(students[i].firstName)
    }
}

// student in hyderabad and age of above 30
for(let i=0; i<students.length; i++){
    if(students[i].age>30 && students[i].city=="hyderabad"){
        console.log(students[i].firstName)
    }
}

// add css skill to every student
for(let i=0; i<students.length; i++){
    console.log(students[i].skills.push("css"))
}

// name:number of skills
for(let i=0; i<students.length; i++){
    console.log(students[i].firstName+":"+students[i].skills.length)
}

// average age of all students
let a=students.reduce(function(acc,el){
    return el.age+acc
},0)
console.log(a/students.length)