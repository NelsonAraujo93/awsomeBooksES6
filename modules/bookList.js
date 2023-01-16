export default class BookList {
  constructor(bookList) {
    this.bookList = bookList;
  }

  fromLs() {
    if (localStorage.books) {
      const from = JSON.parse(localStorage.books);
      this.bookList = from;
    }
  }

  toLS() {
    const stringBooks = JSON.stringify(this.bookList);
    localStorage.setItem('books', stringBooks);
  }

  addBook(book) {
    this.bookList.push(book);
  }

  remove(book) {
    const newArray = this.bookList.filter((books) => (
      books.title !== book.title || books.author !== book.author
    ));
    this.bookList = newArray;
  }
}