const printBooks = (booksList, container) => {
  booksList.bookList.map((item) => {
    const addBook = document.createElement('div');
    addBook.className = 'addbook';
    const bookContent = document.createElement('div');
    bookContent.className = 'book-content';
    bookContent.innerHTML = `<p class="title">"${item.title}" by ${item.author}</p>`;
    const btnRmv = document.createElement('button');
    btnRmv.className = 'remove';
    btnRmv.id = 'rmv-btn';
    btnRmv.innerHTML = 'Remove';
    bookContent.append(btnRmv);
    addBook.append(bookContent);
    const underline = document.createElement('div');
    underline.className = 'underline';
    addBook.append(underline);
    btnRmv.addEventListener('click', (e) => {
      e.preventDefault();
      booksList.remove(item);
      booksList.toLS();
      window.location.reload();
    });
    return container.append(addBook);
  });
};

const renderListSection = (mainContainer, booksList) => {
  mainContainer.innerHTML = '';
  const bookSection = document.createElement('section');
  bookSection.id = 'list';
  bookSection.className = 'section';
  const bookListContainer = document.createElement('div');
  bookListContainer.className = 'showbooks';
  const bookListHeader = document.createElement('div');
  bookListHeader.className = 'heading';
  bookListHeader.innerHTML = '<h1>All awesome books</h1>';
  const bookListHtml = document.createElement('div');
  bookListHtml.id = 'books-list';
  bookListContainer.append(bookListHeader);
  bookListContainer.append(bookListHtml);
  bookSection.append(bookListContainer);
  mainContainer.append(bookSection);
  printBooks(booksList, bookListHtml);
};

export default renderListSection;