
class Calculator{
    addition(x,y){
        console.log(x+y)
    }
    addition(x,y,z){
        console.log(x+y+z)
    }
    addition(x,y,z,a){
        console.log(x+y+z+a)
    }

    addition(x,y,z,a){
        if(x != undefined && y != undefined && z != undefined && a != undefined){
            console.log(x+y+z+a)
        }
        else if(x != undefined && y != undefined && z != undefined){
            console.log(x+y+z)
        }
        else if(x != undefined && y != undefined){
            console.log(x+y)
        }

    }
}
c = new Calculator()
c.addition(12,3)
c.addition(12,3,4)
c.addition(12,3,4,5)

console.log(undefined+3) // NaN
console.log(undefined+"add") //undefinedadd

// method over riding
// different class, same method name , same arguement(signature)

class WorldBank{
    save(){
        console.log("I am save method from worldbank")
    }
    loan(){
        console.log("I am loan method of worldbank")
    }
}

class SBI extends WorldBank{
    save(){
        console.log("I am save method from SBI")
    }
    loan(){
        console.log("I am loan method of SBI")
    }

}

class PNB extends WorldBank{
    save(){
        console.log("I am save method from PNB")
        super.save()
    }
    loan(){
        console.log("I am loan method of PNB")
        super.loan()
    }

}

let nagpur = new SBI()
nagpur.save()
nagpur.loan()

let nagpurB = new PNB()
nagpurB.save()
nagpurB.loan()