// program 1
let first_name = "chandrapur"
console.log(first_name)

//  0    1    2   3   4    5    6    7    8    9
//  c    h    a   n   d    r    a    p    u    r
// -10  -9   -8  -7  -6   -5   -4   -3   -2   -1

console.log(first_name.slice(2))
console.log(first_name.slice(2,8))
console.log(first_name.slice(-8))
console.log(first_name.slice(1,-1))
console.log(first_name.slice(-7,8))
console.log(first_name.slice(-1,-3)) // retuns blank string means blank

// program 2
// concat()
let last_name = "deshpande"
let fullName = last_name.concat(" ").concat("chinmay")
console.log(fullName)

// program 3
let full_name = "satya koka 96664777714"
let info = full_name.split(" ")
console.log(info)   //  [ 'satya', 'koka', '96664777714' ]
console.log(full_name.split('a'))  // [ 's', 'ty', ' kok', ' 96664777714' ]

// program 4
// indexOf()
let city = "nagpur"
console.log(city.indexOf('g'))

// lastIndexOf()
let city2 = "vijayawada"
console.log(city2.lastIndexOf('a'))

// replace()
let info2 = "I am learning javascript"
let e1 = info2.replace("javascript","python")
console.log(e1)

// repeat()
let e2 = info2.repeat(2)
console.log(e2)

// program 5
let city3 = "wardHa"
//   0    1    2    3     4     5
//   w    a    r    d     H     a
console.log(city3.charAt(2))  // r
console.log(city3.charCodeAt(1))  // 97, which is ASCII value
console.log(city3.charCodeAt(4))   // 72

// substring()
let info3 = "i am learning js"
console.log(info3.substring(2,8)) //am lea
console.log(info3.substring(1,18))  // am learning js







