const form = document.getElementById('form');
const resetBtn = document.getElementById('reset')

form.addEventListener('submit',event => {
    event.preventDefault()

    const list = document.getElementById('List');
    let userInput= String(document.getElementById('task').value.trim())

    function definedInput(userInput){
        let user= userInput.trim().slice(0,1).toUpperCase() + userInput.slice(1).toLowerCase()

        return user
    }   

    function createItem(){
        let newItem = document.createElement("li");
        // Modify the element
        newItem.textContent = definedInput(userInput)
        ;
        // Append
        list.prepend(newItem)
    }
    

    if(userInput === ''){
        alert(`Please Enter a task before pressing Sumbit`)
        userInput = window.prompt(`Enter a new task`).trim()

        createItem()
        
    }else{
        
        createItem()
    }

    document.getElementById('task').value = ""
})

resetBtn.addEventListener('click',()=> {

    alert('List will be reset and empty')
    document.getElementById('List').textContent= ""
})

