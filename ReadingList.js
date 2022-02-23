

let origBookList = [
  {id: 1 , title: 'Tom Clancy: Rainbow six', read: true}, 
  {id: 2 , title: 'Tom Clancy: Enemy Contact', read: true},
  {id: 3 , title: 'Tom Clancy: Duty and Honor' , read: false},
  {id: 4 , title: 'Tom Clancy: Without Remorse' , read: false}

  
  ]
  console.log(origBookList)
  
  
  const newBookToAdd = {id: 5, title: "Tom Clancy: Power and Empire", read: false}
  
  
  const addNewBook = (newBook)=> {
  let newBookList = [...origBookList, newBook]; 
  return newBookList
  }
  console.log('original List: ', origBookList);
  console.log('new book: ' , addNewBook(newBookToAdd));
  
  
  
  const updateList = origBookList.map((book) => {
  if(book.id === 1){
    return{...book, read: !book.read}
  }
  return book 
  })
  
  console.log('original: ' , origBookList)
  console.log('updated: ', updateList)
  
  
  
  
  const deleteBook = origBookList.filter((book) =>{
    if(book.read === false) 
     return book            
                         
  })
  console.log('deleted list: ' , deleteBook)