
const btn = document.getElementById('btn')

btn.addEventListener('click', ()=>{
    let item1 = Number(document.getElementById('Amount1').value);
    let item2 = Number(document.getElementById('Amount2').value);
    let item3 = Number(document.getElementById('Amount2').value);

    console.log(item1)
    console.log(item2)
    console.log(item3)

    function sumOfItems(){
        let total = item1 + item2 + item3
         document.getElementById("result").innerHTML = `Your total is ${total}`
        return total
    }

    sumOfItems()
})