const myLibrary = [];

function Book(name,author,page,read){
  this.name = name;
  this.author = author;
  this.page = page;
  this.read = read;
}

function addBookToLibrary(book){
  myLibrary.push(book);
}

const myForm = document.querySelector("#form");

myForm.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();
  const myDict = {};

  //get key,value from form
  const formData = new FormData(event.target);
  for (const [key,value] of formData.entries()){
    myDict[key]=value;
  }

  const cards = document.querySelector(".shelf-cards");

  const cardDiv = document.createElement('div');
  const img = document.createElement('img');
  const nameDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const pageDiv = document.createElement('div');
  const readDiv = document.createElement('div');

  cardDiv.classList.add('shelf-card');
  nameDiv.classList.add('shelf-card-name');
  authorDiv.classList.add('shelf-card-author');
  pageDiv.classList.add('shelf-card-pages');
  readDiv.classList.add('shelf-card-ifread');

  img.src='book.png';
  nameDiv.textContent = `${myDict['bookName']}`;
  authorDiv.textContent = `${myDict['bookAuthor']}`;
  pageDiv.textContent = `${myDict['bookPages']}`;
  readDiv.textContent = `${myDict['ifRead']}`;

  cardDiv.appendChild(img);
  cardDiv.appendChild(nameDiv);
  cardDiv.appendChild(authorDiv);
  cardDiv.appendChild(pageDiv);
  cardDiv.appendChild(readDiv);

  cards.appendChild(cardDiv);

  const book = new Book(myDict['bookName'],myDict['bookAuthor'],myDict['bookPages'],myDict['ifRead']);
  addBookToLibrary(book);
}