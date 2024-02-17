// Define a array 

//             0         1        2        3       4
let names = ["minal","poorva",'shraddha',"sachin","ram"]
console.log(names[0])
console.log(names[1])

// array stores the value by index
console.log(names[2])

// length of array
console.log(names.length)

// program 1
//             0       1      2        3
let animals=["tiger","lion","bear","leopard"]
//console.log(animals[1])
console.log(animals.length)
for(let i=0; i<animals.length; i++){
    console.log(animals[i])
}
// program 2
//          0        1        2        3         4
flowers=["lilly","jasmine","rose","marygold","sunflower"]
for(let i=0; i<flowers.length; i++){
    console.log(flowers[i])
}

// print in reverse order
for(let i=flowers.length-1; i>=0; i--){
    console.log(flowers[i])
}

// program 3 with break
fruits=["apple","mango","grape","orange","kiwi"]
for(let i=0; i<fruits.length; i++){
    if(fruits[i]=="orange"){
        break
    }
    console.log(fruits[i])
}

// program 4 with continue
vehicle=["car","bike","cycle","scooter","lorry"]
for(let i=0; i<vehicle.length; i++){
    if(vehicle[i]=="cycle"){
        continue
    }
    console.log(vehicle[i])
}

// program 5
pets=["dog","cat","rabbit","birds","hen"]
for(let i=0; i<pets.length; i++){
    if(pets[i]=="rabbit"){
        break
    }
    console.log(pets[i])
}

for(let i=0; i<pets.length; i++){
    if(pets[i]=="cat"){
        continue
    }
    console.log(pets[i])
}

// program 6
stationary=["pen","pencil","scale","eraser","sharpner","paper"]
for(let i=stationary.length-1; i>=0; i--){
    if(stationary[i]=="scale"){
        break
    }
    console.log(stationary[i])
}

for(let i=stationary.length-1; i>=0; i--){
    if(stationary[i]=="eraser"){
        continue
    }
    console.log(stationary[i])
}











