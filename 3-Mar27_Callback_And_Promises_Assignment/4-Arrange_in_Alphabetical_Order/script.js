

const myfunc = (book, callback) => {
    let bookTitle = book.map((book) => {
        return book.title;
    })
    callback(bookTitle);
}

const printTitles = (titles) => {
    console.log(titles.sort());
}

let books = [
    { title: "math", author: "aman", year: 2022 },
    { title: "hindi", author: "tushar", year: 2020 }, 
    { title: "science", author: "deepu", year: 2018 },
    { title: "english", author: "harsh", year: 2015 },
]

myfunc(books, printTitles)