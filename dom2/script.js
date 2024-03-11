// <h1 id = "one" class = "two" name = "nm">Hello</h1>
// tagName
let byTagName = document.querySelector('h1')
console.log(byTagName)

// id 
let byId = document.querySelector('#one')
console.log(byId)

// class
let byClass = document.querySelector('.two')
console.log(byClass)

// attribute
// tagName[attribute="value"]
let byAttribute = document.querySelector('h1[name="nm"]')
console.log(byAttribute)

byAttribute.addEventListener('click',function(){
    byAttribute.textContent = "Bye"
    byAttribute.style.color = "indigo"
    byAttribute.style.backgrounColor = "red"
})