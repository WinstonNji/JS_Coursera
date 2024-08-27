let count = 1;

const btn = document.getElementById("btn")
const reset = document.getElementById("reset")

btn.addEventListener('click',()=>{

    increaseCount()

    function increaseCount (){
        count ++;
        displayCount(count);
        checkCountValue(count);
    }
    
    function displayCount(count){
         let message= console.log(`Your count is: ${count}`)
         return message
    }
    
    function checkCountValue() {
        if (count === 10) {
            console.log("Your Instagram post gained 10 followers! Congratulations!");
        } else if (count === 20) {
            console.log("Your Instagram post gained 20 followers! Keep it up!");
        }
        }

})

reset.addEventListener('click',()=>{
    count = 0
    
    console.log(`back to ${count}`)
})

