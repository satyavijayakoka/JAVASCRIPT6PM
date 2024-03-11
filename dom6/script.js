let headOne = document.querySelector('h1')
let buttonOne = document.querySelector('button')
let inputText = document.querySelector('input')

// program 1
// headOne.addEventListener('click',function(){
//     headOne.style.color = "blue"
// })

// program 2
// buttonOne.addEventListener('click',function(){
//     headOne.style.color = "purple"
// })

// program 3
buttonOne.addEventListener('click',function(){
    let colorText = inputText.value
    headOne.style.color = colorText
    inputText.value = ""
})