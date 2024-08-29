const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict -$22.99', 'Oatmeal -$21.99', 'Frittata -$15'];

let displayText = '';
breakfastMenu.forEach((item, index) => {
    displayText += `Item ${index + 1}: ${item}\n`
})

document.getElementById('Menu-items').innerText = displayText
