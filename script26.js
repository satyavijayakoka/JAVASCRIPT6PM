// inheritance
// program 1

// class Student{
//     firstName = "satya"
//     lastName = "koka"

//     displayName(){
//         console.log(this.firstName+this.lastName)
//     }
// }
// class Teacher extends Student{
//     salary = 1000

//     displaySalary(){
//         console.log(this.salary)
//     }
// }
// satya = new Teacher()
// console.log(satya.firstName)
// console.log(satya.firstName)
// satya.displayName()
// satya.displaySalary()

// program 2

class Student{
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
class Teacher extends Student{
    salary = 10000

    displaySalary(){
        console.log(this.salary)
    }
}
let stu = new Teacher("satya","koka")
console.log(stu.firstName)
console.log(stu.lastName)
console.log(stu.salary)
stu.displayName()
stu.displaySalary()

// program 3 single inheritance
class StudentB{
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
class TeacherB extends StudentB{
    constructor(fn,ln,sal){
        super(fn,ln)
        this.salary = sal
    }
    displaySalary(){
        console.log(this.salary)
    }
}
let tech = new TeacherB("satya","koka",20000)
console.log(tech.firstName)
console.log(tech.lastName)
console.log(tech.salary)
tech.displayName()
tech.displaySalary()

// program 4 multi level inheritance

class StudentC{
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }

}
class TeacherC extends StudentC{
    constructor(fn,ln,sl){
        super(fn,ln)
        this.salary = sl
    }
    displaySalary(){
        console.log(this.salary)
    }
}
class Professor extends TeacherC{
    constructor(fn,ln,sl,sp){
        super(fn,ln,sl)
        this.specialization = sp
    }
    displaySpec(){
        console.log(this.specialization)
    }
}
let pro = new Professor("chinmay","deshpande",10000000,"computer languages")
console.log(pro.firstName)
console.log(pro.lastName)
console.log(pro.salary)
console.log(pro.specialization)
pro.displayName()
pro.displaySalary()
pro.displaySpec()

