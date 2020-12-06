

const getData = (url) => fetch(url)
.then((responce ) => responce.json())
.then(json => {
    if (json.Search) return json.Search;
    throw Error('Сервер дал не правильный ответ');
});

// let ironman = getData(`http://www.omdbapi.com/?s=Iron%20man&apikey=18b8609f`)




// Promise.all([ironman, batman, superman])
// .then(result => result.forEach(movies => movies.forEach(movie => addMovieToList(movie))));

inputSearch.addEventListener('keyup', (e) => {
    delay(() => {
        const searchString = e.target.value;
         
        if (searchString && searchString.length > 4) if (!triggerMode) clearMoviesMarkup();
            getData(`http://www.omdbapi.com/?s=${searchString}&apikey=18b8609f`)
            .then((movies) => movies.forEach((movie) => addMovieToList(movie)))
            .catch((err) => console.log(err));
        
    }, 1000);
});