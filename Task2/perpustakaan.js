let books = [
    {
        title : 'JavaScript',
        status : 1
    },
    {
        title : 'HTML',
        status : 1,
    },
    {
        title : 'PHP',
        status : 0,
    },
    {
        title : 'CSS',
        status : 1
    },
    {
        title : 'SASS',
        status : 0
    }
]

function searchBook(val){
    console.log(val)
    if(val != undefined){
        books.map(book => {
            if(book.title == val){
                (book.status == 1) ? book.status = 'tersedia' : book.status = 'tidak tersedia'
                console.log(book.status)
            }
        })
    }else{
        console.table(books.map(books => books))
    }
}

function readyBooks(){
    books.map(book => {
        (book.status == 1) ? console.log(book.title) : ''
    })
}

//========== Call Function ==========
// searchBook('HTML')
// searchBook()
readyBooks()