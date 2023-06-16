

function findAuthorById(authors ={}, id) {
  let result = authors.find((element)=>{
     if(element.id === id){
      return element
     }
  })
  return result
}

function findBookById(books, id) {
  let result = books.find((element)=>{
    if(element.id === id){
      return element
    }
  })
  return result
}

function partitionBooksByBorrowedStatus(books=[]) {
  const checkedOut = [];
  const notCheckedOut = [];
  books.forEach((booksObj)=>{
    const {borrows} = booksObj;
    let isNotCheckedOut = true;
    borrows.forEach((borrowsObj)=>{
      if(borrowsObj.returned === false){
        isNotCheckedOut = false;
        checkedOut.push(booksObj)
        return;
      }
    })
    if(isNotCheckedOut === true){
      notCheckedOut.push(booksObj)
      return;
    }
  })
  return [checkedOut, notCheckedOut];
}

function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function getBorrowersForBook(book, accounts=[]) {
 
  const transactions = book.borrows;

  const result = transactions.map((transaction) => {
    const accountInfo = findAccountById(accounts, transaction.id);
    const newTransaction = {
      ...transaction,
      ...accountInfo,
    };
    return newTransaction;
  });

  result.splice(10);

  return result;
  };





module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
