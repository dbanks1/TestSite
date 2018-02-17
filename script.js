window.addEventListener('load', function () {
    fetchMovies();
})

function fetchMovies () {
    var url = 'https://api.themoviedb.org/3/movie/popular';
    var apiKey = '?api_key=8d0895ad52684bc5aaf2a952c644aeb5';
    var movieURL = url + apiKey;
    var movieArray = []
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('demo').innerHTML = http.responseText;
        }
    };
    http.open('GET', movieURL, true);
    http.send();
}