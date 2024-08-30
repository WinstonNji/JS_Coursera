const btn = document.getElementById('btn')
const reset_btn = document.getElementById('reset-btn')
let books = []
let display = '';

reset_btn.addEventListener('click',()=> {
    alert(`This Action will reset all books`)
    books = []
    display = ''
    document.getElementById('bookDisplaySection').innerText = display
})

let book;
btn.addEventListener('click',()=> {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = document.getElementById("pagesNumber").value;
    

    if(bookName !== '' && authorName !== '' && bookDescription !== '' && pagesNumber !== ''){
        let book = 
            {
                id:1,
                Book_Name: bookName,
                Author_Name: authorName,
                Book_Description: bookDescription,
                Number_of_Pages: pagesNumber
            }
        
            books.push(book)
            displayBooks(books)
            avoidingRepetition(books)
            
    }else{
        alert(`Fill in all the information`)
    }

    if(isNaN(pagesNumber)){
        alert(`Enter the correct Number of pages`)}
})


function displayBooks(books){
    books.forEach((book,index) => {
        display += `${index + 1}. Book Name: ${book.Book_Name}|| Author: ${book.Author_Name}||  Description: ${book.Book_Description}|| Number of Pages: ${book.Number_of_Pages}\n`
    });

    document.getElementById('bookDisplaySection').innerText = display
}

function avoidingRepetition(books){
    books.forEach(book => {
        if(book.id === books.id){
            books.unshift
        }
    })
}

