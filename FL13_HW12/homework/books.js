let books = []


let book1 = {
   name: 'Clean Code', 
   author: 'Martin',
   image: 
   new URL(
   'https://cdn1.ozone.ru/multimedia/wc1200/1000993505.jpg'
   )
   ,
   plot: 'Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees',
   newId: 1
}

let book2 = {
   name: 'JavaScript for kids', 
   author: 'Morgan',
   image: 
   new URL(
   'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1381962804l/18596230.jpg'
   )
   ,
   plot: 'Basic JS for kids',
   newId: 2
}

let book3 = {
   name: 'React and Redux', 
   author: 'Alex Banks',
   image: 
   new URL(
   'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1494421362l/29324861.jpg'
   )
   ,
   plot: 'If you want to learn how to build efficient user interfaces with React, this is your book.',
   newId: 3
}

books.push(book1)
books.push(book2)
books.push(book3)



function arrayChange(arr){
   let search = JSON.parse(window.localStorage.getItem('books'))
   if(search === null){
      window.localStorage.setItem('books', JSON.stringify(arr))
   }else{
      arr = JSON.parse(window.localStorage.getItem('books'))
      window.localStorage.setItem('books', JSON.stringify(arr))
   }
}





arrayChange(books)








