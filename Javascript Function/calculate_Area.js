function calculateArea(length,width){
    let length = document.getElementById("length").value

    let width = document.getElementById("width").value

    let area = length * width;
    document.getElementById("result").innerHTML = `The area of a rectangle of ${length} and ${width} is ${area}`
    return area;   
}







