window.addEventListener('load', function () {
    fetchPopularMovies();
})
/**
 * holds info about the most popular movies from the api
 */
var popMovieArray = [];
/**
 * simple http request to get the most popular movies
 * only uses the first page which is 20 movies
 */
function fetchPopularMovies () {
    var url = 'https://api.themoviedb.org/3/movie/popular';
    var apiKey = '?api_key=8d0895ad52684bc5aaf2a952c644aeb5';
    var movieURL = url + apiKey;
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var popMovies = JSON.parse(http.responseText);
            if (popMovies != null) {
                addToPopMovieArray(popMovies);
            }
        }
    };
    http.open('GET', movieURL, true);
    http.send();
}
/**
 * 
 * @param {Object} data - Parsed data from the api
 */
function addToPopMovieArray (data) {
    var moviesToShow = data.results;
    for (var i = 0; i < moviesToShow.length; i++) {
        var movieInfo = {
            title: moviesToShow[i].title,
            originalTitle: moviesToShow[i].original_title,
            image: moviesToShow[i].poster_path,
            rating: moviesToShow[i].vote_average,
            desc: moviesToShow[i].overview,

        }
        popMovieArray.push(movieInfo);
        displayPopMovies(popMovieArray);
    }
}

function displayPopMovies(popMovieArray) {
    var movieList = document.getElementById('movieList');
    for (var i = 0; i < popMovieArray.length; i++) {
        var newImg = document.createElement('img');
        newImg.id = 'moviePoster' + i;
        newImg.src = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + popMovieArray[i].image;
        movieList.appendChild(newImg);
    }
}