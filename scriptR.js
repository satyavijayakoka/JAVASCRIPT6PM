// loops
// for loop
for(let i=1; i<=4;i++){
    console.log(i)
}
for(let i=6; i>=1; i--){
    console.log(i)
}

for(let i=2; i<=20; i=i+2){
    if(i==12){
        break
    }
    console.log(i)
}

for(let i=70; i>=7; i=i-7){
    console.log(i)
    if(i==42){
        break
    }
}

for(let i=1; i<=5; i++){
    if(i==4){
        continue
    }
    console.log(i)
}

for(let i=30; i>=3; i=i-3){
    if(i==12){
        continue
    }
    console.log(i)
}

