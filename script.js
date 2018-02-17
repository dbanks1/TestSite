window.addEventListener('load', function () {
    fetchMovies();
})

function fetchMovies () {
    var url = 'https://api.themoviedb.org/3/movie/';
    var movieID = '284054';
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('demo').innerHTML = http.responseText;
        }
    };
    http.open('GET', url + movieID, true);
    http.send();
}