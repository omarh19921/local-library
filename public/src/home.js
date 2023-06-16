function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let total = 0;
  books.forEach((book) => {
    if (!book.borrows[0].returned) {
      total++;
    }
  });

  return total;
}

function getMostCommonGenres(books=[]) {
  const result = [];
  const genresLookup = {};
  books.forEach((booksObject)=>{
    const {genre} = booksObject;
    if(genresLookup[genre] === undefined){
      genresLookup[genre] = 1;
    }else{
      genresLookup[genre] += 1;
    }
  })
  for(let genreKey in genresLookup){
    let obj = {name: genreKey, count: genresLookup[genreKey]}
    result.push(obj);
  }
  result.sort((a,b)=>{
    return b.count - a.count;
  })
  
  return result.slice(0,5);
  
}

function getMostPopularBooks(books) {
  

};


function getMostPopularAuthors(books, authors) {
  const getBooksByAuthorId = (books, authorId) => {
    return books.filter((book) => book.authorId === authorId);
  };
  const result = authors.map((author) => {
    const fullName = `${author.name.first} ${author.name.last}`;
    const booksByAuthor = getBooksByAuthorId(books, author.id);
    const totalBorrows = booksByAuthor.reduce((accum, book) => accum + book.borrows.length, 0);
    const newAuthorInfo = {
      name: fullName,
      count: totalBorrows,
    };

    return newAuthorInfo;
  });

  result.sort((authorA, authorB) => authorB.count - authorA.count);

  result.splice(5);

  return result;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
