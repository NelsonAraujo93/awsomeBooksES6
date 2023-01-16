// Imports
import { BookList } from "./modules/bookList.js";
import { Book } from "./modules/book.js";
import { renderListSection } from "./modules/listSection.js";
import { renderAddSection } from "./modules/addSection.js";
import { renderContactSection } from "./modules/contactSection.js";
// declare variables
const mainContainer = document.getElementById('main');
const navItems = document.getElementsByClassName('navitem');
const date = document.getElementById('date');
date.innerHTML = new Date().toLocaleString('en-US', {
  month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true, second: 'numeric',
});

const booksList = new BookList([]);
booksList.fromLs();

for (let i = 0; i < navItems.length; i += 1) {
  navItems[i].addEventListener('click', () => {
    navigation(i);
  })
}

const navigation = (value) => {
  switch (value) {
    case 0:
      navItems[0].classList.add('active');
      navItems[1].classList.remove('active');
      navItems[2].classList.remove('active');
      renderListSection(mainContainer, booksList);
      break;
    case 1:
      navItems[1].classList.add('active');
      navItems[0].classList.remove('active');
      navItems[2].classList.remove('active');
      renderAddSection(mainContainer, Book, booksList);
      break;
    case 2:
      navItems[2].classList.add('active');
      navItems[1].classList.remove('active');
      navItems[0].classList.remove('active');
      renderContactSection(mainContainer);
      break;
    default:
      break;
  }
};

navigation(0);