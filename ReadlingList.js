let origBookList = [
  {id: 1, title: 'Dune', read: false},
  {id: 2, title: 'Halo', read: true},
  {id: 3, title: 'Shadow under the pond', read: true}

];


const newTitle = {id: 3, title: 'Harry potter', read: false}


let newList = [...origBookList, newTitle]

console.log('Original List', origBookList)
console.log('New List', newList)













