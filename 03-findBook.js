//  Imagine you are looking for a book in a library
//  with a Dewey Decimal index. How would you go
//  about it? Can you express this process as a
//  search algorithm? Implement your algorithm to
//  find a book whose Dewey and book title are
//  provided.

function findBook(books, dewey, title, start, end) {
  start = start === undefined ? 0 : start;
  end = end === undefined ? books.length : end;
  if (start > end) {
    return -1;
  }
  const index = Math.floor((start + end) / 2);
  const book = books[index];
  if (book.dewey == dewey) {
    if (book.title == title) {
      return index;
    }
    for (let i = index + 1; i.dewey == dewey; i++) {
      if (books[index].title == title) {
        return index;
      }
    }
    for (let i = index - 1; i.dewey == dewey; i++) {
      if (books[index].title == title) {
        return index;
      }
    }
    return -1;
  } else if (book.dewey < dewey) {
    return findBook(books, dewey, title, index + 1, end);
  } else if (book.dewey > dewey) {
    return findBook(books, dewey, title, start, index - 1);
  }
}

const books = [
  {
    dewey: "200.344",
    title: "The Bible",
  },
  {
    dewey: "200.366",
    title: "The Koran",
  },
  {
    dewey: "800.333",
    title: "The Color of Money",
  },
  {
    dewey: "800.344",
    title: "War and Peace",
  },
];

//console.log(findBook(books, "200.366", "The Koran"));
console.log(findBook(books, "800.344", "War and Peace"));
