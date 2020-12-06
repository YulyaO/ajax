let movieList = null;
let inputSearch = null;
let triggerMode = false;

const createStyle = () => {
  const headStyle = document.createElement('style');
  
  headStyle.innerHTML = `
  * { 
    box-sizing: border-box;
}
 body {
     margin: 0;
     font-family: Arial, serif;
 }
 .container {
    padding: 20px;
    max-width: 1280px;
    margin: 0 auto;
}
  .movies {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-gap: 20px;
  }
.movie {
    display: flex;
    align-content: center;
    justify-content: center;
}
.movie__img {
    width: 100%;
    object-fit: cover;
}

.search {
    margin-bottom: 30px;
}
.search__label-input {
    margin-bottom: 7px;
    display: block;
    color: purple;
}
.search__input {
    padding: 10px 15px;
    width: 400px;
    display: block;
    border: 2px solid pink;
    border-radius: 4px;
    margin-bottom: 10px;

 
}
input::-webkit-input-placeholder {
    color: purple;
}


.search__label-checkbox {
    font-size: 12px;
    color: purple;
    display: block;
    margin-top: -17px;
    margin-left: 25px;
}`;
document.querySelector('head').appendChild(headStyle);
};

const triggerModeHeandler = () => triggerMode = !triggerMode;

const createHeader = (container) => {
    const header = document.createElement('h1');
    header.innerText = 'Приложение для поиска'
     container.append(header);
};

 const setAttribute = (el, attrs) => {
     for (let key in attrs) el.setAttribute(key, attrs[key]);

 };

const createSearchBox = (container) => {
    const searchBox = document.createElement('div');
    const input = document.createElement('input');
    const labelForInput = document.createElement('label');
    const checkbox = document.createElement('input');
    const labelForCheckBox = document.createElement('label');

    searchBox.setAttribute('class', 'search');
    setAttribute(input, {
        class: 'search__input',
        id: 'search',
        placeholder: 'Начните вводить текс',
        type: 'text'
    });


    setAttribute(labelForInput, {
        class: 'search__label-input',
        for: 'search'
    });

    labelForInput.innerText = 'Поиск фильмов';


    setAttribute(checkbox, {
        class: 'search__checkbox',
        id: 'checkbox',
        type: 'checkbox'
    });

    checkbox.addEventListener('click', triggerModeHeandler);

    setAttribute(labelForCheckBox, {
        class: 'search__label-checkbox',
        for: 'checkbox'
    });
    labelForCheckBox.innerText = 'Добавлять фильмы к списку';

    searchBox.append(labelForInput, input, checkbox, labelForCheckBox);
    container.append(searchBox);

};
const createMarkup = () => {

   const container = document.createElement('div');
   container.classList.add('container'); 

   createHeader(container);
   createSearchBox(container);

    const movies = document.createElement('div');
    movies.classList.add('movies');


    container.appendChild(movies);


   document.querySelector('body').prepend(container); 
    movieList = document.querySelector('.movies'); 

    inputSearch = document.querySelector('#search');
 };

 const addMovieToList = (movie) => {
      const item = document.createElement('div');
      const img = document.createElement('img');

      img.src = movie.Poster;
      img.classList.add('movie__img');

      item.classList.add('movie');
      item.appendChild(img);
      movieList.appendChild(item);

 };
 const clearMoviesMarkup = () => movieList && (movieList.innerHTML = '');
 const delay = (() => {
   let timer = 0;

   return(callback, ms) => {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
   };
 })();

createStyle();
createMarkup();