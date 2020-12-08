

const getData = (url) => fetch(url)
.then((responce ) => responce.json())
.then(json => {
    if (json.Search) return json.Search;
    throw Error('Сервер дал не правильный ответ');
});



inputSearch.addEventListener('keyup', (e) => {
    delay(() => {
        const searchString = e.target.value;
         
        if (searchString && searchString.length > 4) if (!triggerMode) clearMoviesMarkup();
            getData(`https://www.omdbapi.com/?s=${searchString}&apikey=18b8609f`)
            .then((movies) => movies.forEach((movie) => addMovieToList(movie)))
            .catch((err) => console.log(err));
        
    }, 1000);
});