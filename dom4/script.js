let headOne = document.querySelector('h1')
console.log(headOne)
let buttonOne = document.querySelector('button')
console.log(buttonOne)

buttonOne.addEventListener('click',function(){
    headOne.style.color = "brown"
})