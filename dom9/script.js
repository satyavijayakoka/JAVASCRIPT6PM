let buttonOne = document.querySelector('#one')
let inputText = document.querySelector('input')
let ulList = document.querySelector('ul')

buttonOne.addEventListener('click',function(){
    let text = inputText.value //Papaya
   let newLi = document.createElement('li') //<li></li>
   newLi.textContent = text  // <li>Papaya</li>

   createButton("Remove","remove",newLi)
   createButton("Up","up",newLi)
   createButton("Down","down",newLi)

   ulList.appendChild(newLi)
   inputText.value = ""
})


// i have to add these buttons, for that i am defining common function
{/* <button class = "remove">Remove</button>
<button class = "up">Up</button>
<button class = "down">Down</button> */} 


function createButton(textContent,className,li){
    let newButton = document.createElement('button')
    newButton.textContent = textContent
    newButton.classList.add(className)
    li.appendChild(newButton)
}

// finstead of writing number of times we defined common function above
// function CreateButtons(li){
//     let r = document.createElement('button') // <button></button>
//     r.textContent = "Remove" // <button>Remove</button>
//     r.classList.add('remove') // <button class = "remove">Remove</button>
//     li.appendChild(r)

//     let u = document.createElement('button')  // <button></button>
//     u.textContent = "Up"  // <button>Up</button>
//     u.classList.add('up') // <button class = "up">Up</button>
//     li.appendChild(u)

//     let d = document.createElement('button')  // <button></button>
//     d.textContent ='Down' // <button>Down</button>
//     d.classList.add('down') // <button class = "down">Down</button>
//     li.appendChild(d)
// }
