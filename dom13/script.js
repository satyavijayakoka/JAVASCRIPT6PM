// js ---- 

//<h1 id = "one" class = "two"  name = "nm">Heading<h1>

//we can retrive the element 
//we can create the element
//we can update the element 
//we can delete the element

// user action
//element attribute update
//element attribute retrive
//element attribute add
//element attribute delete

{/* <h1 id = "one">HeadOne</h1>
<h2 class = "two">HeadTwo</h2>
<ul>
    <li class = "fruits" name = "nm">Apple</li>
    <li class = "fruits" name = "nm">Mango</li>
    <li class = "fruits" name = "nm">Banana</li>
    <li class = "fruits" name = "nm">Grapes</li>
    <li class = "fruits" name = "nm">Chikoo</li>
</ul> */}

// program 1
let tagName = document.querySelector('h1')
let idName = document.querySelector('#one')
let idName2 = document.getElementById('one')
console.log(idName)
console.log(idName2)

// program 2
let liList = document.querySelectorAll('li')
console.log(liList) // returns nodelist
let liList2 = document.getElementsByTagName('li')
console.log(liList2) // returns html collection

// program 3
let className = document.querySelectorAll('.fruits')
console.log(className)  // returns nodelist
let className2 = document.getElementsByClassName('fruits')
console.log(className2)   // returns html collection

// program 4
let byAttribute = document.querySelectorAll('li[name="nm"]')
console.log(byAttribute)  // returns nodelist
let byAttribute2 = document.getElementsByName('nm')
console.log(byAttribute2)  // returns nodelist

