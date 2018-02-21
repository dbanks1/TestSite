window.addEventListener('load', function () {
    fetchMovies();
})

function fetchPopularMovies () {
    var url = 'https://api.themoviedb.org/3/movie/popular';
    var apiKey = '?api_key=8d0895ad52684bc5aaf2a952c644aeb5';
    var movieURL = url + apiKey;
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var popMovies = JSON.parse(http.responseText);
            if (popMovies != null) {
                document.getElementById('demo').innerHTML = popMovies;
            }
            
        }
    };
    http.open('GET', movieURL, true);
    http.send();
}