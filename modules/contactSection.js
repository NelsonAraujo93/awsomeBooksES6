export const renderContactSection = (mainContainer) => {
    mainContainer.innerHTML = '';
    const contactSection = document.createElement('section');
    contactSection.id = 'contact';
    contactSection.classList.add('contactsection', 'section');
    contactSection.innerHTML = `<h1>Contact information</h1>
    <p>Do you have any questions or you just want to say "hello"?</p>
    <ul>
      <li class="contactlist">Our email: mail@mail.com</li>
      <li class="contactlist">Our phonme number: 757543893</li>
      <li class="contactlist">Our address: Streetname 22, 17389 City, Country</li>
    </ul>`;
    mainContainer.append(contactSection);
  };