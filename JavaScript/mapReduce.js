// Filter() method :-

// Practice for the filter method for finding the user specific books from the multiple books

let books = [
    {name : "book1", Genere : "History", PublishDate : "1991"},
    {name : "book1", Genere : "comic", PublishDate : "1992"},
    {name : "book1", Genere : "fiction", PublishDate : "1993"},
    {name : "book1", Genere : "History", PublishDate : "1994"},
    {name : "book1", Genere : "fiction", PublishDate : "1995"},
    {name : "book1", Genere : "comic", PublishDate : "1996"},
    {name : "book1", Genere : "fiction", PublishDate : "1997"},
    {name : "book1", Genere : "comic", PublishDate : "1998"},
    {name : "book1", Genere : "History", PublishDate : "1999"},
    {name : "book1", Genere : "comic", PublishDate : "19910"},
    {name : "book1", Genere : "History", PublishDate : "19911"},
    {name : "book1", Genere : "History", PublishDate : "19912"}
];

// let userBooks = books.filter((books) => books.Genere.toLowerCase()== "comic");
// console.log(userBooks);


// console.log(books)


let array1 = [1,2,3,4,5];

let newArray = array1.filter((ele) => {return ele>8});
// console.log(newArray);

let array2 = array1.map((ele)=>ele*2).filter((ele) => ele>=6).toString()
console.log(array2);
