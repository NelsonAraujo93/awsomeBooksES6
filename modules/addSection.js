export const renderAddSection = (mainContainer, Book, booksList) => {
  mainContainer.innerHTML = '';
  const addSection = document.createElement('section');
  addSection.id = 'addNew';
  addSection.classList.add('addbookform', 'section');
  const form = document.createElement('form');
  form.id = 'form';
  form.innerHTML = `<div class="heading">
    <h1>Add a new book</h1>
  </div>
  <input type="text" class="booktitle" id="title" name="book_title" placeholder="Title" required>
  <input type="text" class="bookauthor" id="author" name="book_title" placeholder="Author" required>`;

  const addBtn = document.createElement('button');
  addBtn.id = 'addBtn';
  addBtn.className = 'add';
  addBtn.type = 'submit';
  addBtn.innerHTML = 'Add';
  form.append(addBtn);

  addSection.append(form);
  mainContainer.append(addSection);
  addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const inputTitle = document.querySelector('.booktitle');
    const inputAuthor = document.querySelector('.bookauthor');
    const theTitle = inputTitle.value;
    const theAuthor = inputAuthor.value;
    const newBook = new Book(theTitle, theAuthor);
    booksList.addBook(newBook);
    const addBook = document.createElement('div');
    addBook.className = 'addbook';
    const bookContent = document.createElement('div');
    bookContent.className = 'book-content';
    bookContent.innerHTML = `<p class="title">"${theTitle}" by ${theAuthor}</p>`;
    const btnRmv = document.createElement('button');
    btnRmv.className = 'remove';
    btnRmv.id = 'rmv-btn';
    btnRmv.innerHTML = 'Remove';
    bookContent.append(btnRmv);
    addBook.append(bookContent);
    const underline = document.createElement('div');
    underline.className = 'underline';
    addBook.append(underline);
    btnRmv.addEventListener('click', () => {
      booksList.remove(newBook);
      booksList.toLS();
      window.location.reload();
    });
    booksList.toLS();
    clearInput(form);
  });
};


const clearInput = (form) => {
  form[0].value = '';
  form[1].value = '';
}
  