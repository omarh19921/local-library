

function findAccountById(accounts=[], id="") {
let result = accounts.find((element)=>{
  if(element.id === id){
    return element.id
  }
})
return result
}

function sortAccountsByLastName(accounts) {
  let result = accounts.sort((a,b)=>{
    if (a.name.last < b.name.last){
      return -1
    } else {
      return 1
    }
    
  })
  //console.log(result);
  return result 
};

function getTotalNumberOfBorrows({id}, books=[]) {
  console.log(id);
  let count = 0;
  books.forEach(({borrows})=>{
    borrows.forEach((borrowsObject)=>{
      if(borrowsObject.id === id){
        count++;
      }

    })
  })
  console.log(count);
  return count;
};

const getAuthorById = (authors, id) => {
  return authors.find((author) => author.id === id);
};

function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id;

  let result = [];

  result = books.filter((book) => {
    return book.borrows.some((borrow) => borrow.id === accountId && !borrow.returned);
  });

  result = result.map((book) => {
    const author = getAuthorById(authors, book.authorId);
    const newBook = {
      ...book,
      author,
    };

    return newBook;
  });

  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
