var resultsContainer = document.querySelector(".results-container")
var moviesContainer = document.querySelector(".movies-container")
var resultsTitleContainer = document.querySelector(".results-title-container")
var resultsHistory = document.querySelector(".results-history")

var movies = [];

var allGenreButtons = document.querySelectorAll('button[class^=btn]');

var randomPage = Math.floor(Math.random() * 10)

var genreShuffledArr = function (movieIds) {
    movieIds.sort(() => Math.random() - 0.5);
}

for (var i = 0; i < allGenreButtons.length; i++) {
    allGenreButtons[i].addEventListener('click', async function () {
        var ids = []
        var btnValue = this.value
        var btnName = this.name
        resultsTitleContainer.innerHTML = ""
        var resultsTitle = document.createElement('h2')
        resultsTitle.setAttribute('class', 'results-title')
        resultsTitle.textContent = "Showing results for " + btnName;
        resultsTitleContainer.appendChild(resultsTitle)
        var genreApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + btnValue;

        var data = await fetch(genreApiURL)
            .then(function (response) {
                if (response.ok) {
                    return response.json()
                }
            })
        for (var i = 0; i < data.results.length; i++) {
            moviesContainer.textContent = ""
            var movieId = data.results[i].id
            ids.push(movieId)
        }
        genreShuffledArr(ids);
        getMovieResultOne(ids)
        getMovieResultTwo(ids)
        getMovieResultThree(ids)
        getMovieResultFour(ids)
        getMovieResultFive(ids)
    });
}

var getMovieResultOne = function (movieIds) {
    fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" + movieIds[0] + "&output_language=en", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
            "x-rapidapi-key": "fd9a215c8fmsh1b12b778dc43cfdp16b61cjsn3480cfe25268"
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var firstCard = document.createElement('div');
            firstCard.setAttribute("style", "width: 18rem;");
            firstCard.setAttribute("class", "card");
            moviesContainer.appendChild(firstCard)
            var firstCardImage = document.createElement('img');
            firstCardImage.setAttribute("class", "card-img-top");
            firstCardImage.setAttribute("src", data.posterURLs.original);
            firstCard.appendChild(firstCardImage);
            var firstCardBody = document.createElement('div');
            firstCardBody.setAttribute('class', 'card-body');
            firstCard.appendChild(firstCardBody);
            var firstCardTitle = document.createElement('h2');
            firstCardTitle.setAttribute("class", "card-title");
            firstCardTitle.textContent = data.originalTitle;
            firstCardBody.appendChild(firstCardTitle);
            var firstCardRating = document.createElement('p')
            firstCardRating.setAttribute("class", "card-text rating")
            firstCardRating.textContent = "iMDB Rating:  "
            firstCardBody.appendChild(firstCardRating);
            var imdbRating = document.createElement('p')
            imdbRating.textContent = data.imdbRating
            firstCardBody.appendChild(imdbRating);
            if (data.imdbRating < 35) {
                imdbRating.setAttribute("class", "bad-rating")
            } else if (data.imdbRating < 60) {
                imdbRating.setAttribute("class", "ok-rating")
            } else {
                imdbRating.setAttribute("class", "good-rating")
            }
            var firstCardStreamingInfo = document.createElement('p')
            firstCardStreamingInfo.setAttribute("class", "card-text streaming")
            firstCardBody.appendChild(firstCardStreamingInfo)
            if (data.streamingInfo.netflix) {
                var streamLink = document.createElement('a')
                streamLink.setAttribute("href", data.streamingInfo.netflix.us.link)
                streamLink.setAttribute("class", "stream-link")
                streamLink.setAttribute("target", "_blank");
                streamLink.textContent = "Stream on Netflix"
                firstCardStreamingInfo.appendChild(streamLink)
            } else if (data.streamingInfo.disney) {
                var streamLink = document.createElement('a')
                streamLink.setAttribute("href", data.streamingInfo.disney.us.link)
                streamLink.setAttribute("class", "stream-link")
                streamLink.setAttribute("target", "_blank");
                streamLink.textContent = "Stream on Disney+"
                firstCardStreamingInfo.appendChild(streamLink)
            } else if (data.streamingInfo.prime) {
                var streamLink = document.createElement('a')
                streamLink.setAttribute("href", data.streamingInfo.prime.us.link)
                streamLink.setAttribute("class", "stream-link")
                streamLink.setAttribute("target", "_blank");
                streamLink.textContent = "Stream on Prime"
                firstCardStreamingInfo.appendChild(streamLink)
            } else {
                firstCardStreamingInfo.textContent = "Not on streaming services right now"
            }
            var firstCardDesc = document.createElement('p');
            firstCardDesc.setAttribute("class", "card-text desc reduce-description");
            firstCardDesc.textContent = data.overview;
            firstCardBody.appendChild(firstCardDesc);
            var firstScrollText = document.createElement('p')
            firstScrollText.setAttribute("class", "scroll-text");
            firstScrollText.textContent = "Scroll to read"
            firstCardBody.appendChild(firstScrollText)
        })
}

var getMovieResultTwo = function (movieIds) {
    fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" + movieIds[1] + "&output_language=en", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
            "x-rapidapi-key": "fd9a215c8fmsh1b12b778dc43cfdp16b61cjsn3480cfe25268"
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var secondCard = document.createElement('div');
            secondCard.setAttribute("style", "width: 18rem;");
            secondCard.setAttribute("class", "card");
            moviesContainer.appendChild(secondCard)
            var secondCardImage = document.createElement('img');
            secondCardImage.setAttribute("class", "card-img-top");
            secondCardImage.setAttribute("src", data.posterURLs.original);
            secondCard.appendChild(secondCardImage);
            var secondCardBody = document.createElement('div');
            secondCardBody.setAttribute('class', 'card-body');
            secondCard.appendChild(secondCardBody);
            var secondCardTitle = document.createElement('h2');
            secondCardTitle.setAttribute("class", "card-title");
            secondCardTitle.textContent = data.originalTitle;
            secondCardBody.appendChild(secondCardTitle);
            var secondCardRating = document.createElement('p')
            secondCardRating.setAttribute("class", "card-text rating")
            secondCardRating.textContent = "iMDB Rating:  "
            secondCardBody.appendChild(secondCardRating);
            var imdbRating = document.createElement('p')
            imdbRating.textContent = data.imdbRating
            secondCardBody.appendChild(imdbRating);
            if (data.imdbRating < 35) {
                imdbRating.setAttribute("class", "bad-rating")
            } else if (data.imdbRating < 60) {
                imdbRating.setAttribute("class", "ok-rating")
            } else {
                imdbRating.setAttribute("class", "good-rating")
            }
            var secondCardStreamingInfo = document.createElement('p')
            secondCardStreamingInfo.setAttribute("class", "card-text streaming")
            secondCardBody.appendChild(secondCardStreamingInfo)
            if (data.streamingInfo.netflix) {
                var streamLink = document.createElement('a')
                streamLink.setAttribute("href", data.streamingInfo.netflix.us.link)
                streamLink.setAttribute("class", "stream-link")
                streamLink.setAttribute("target", "_blank");
                streamLink.textContent = "Stream on Netflix"
                secondCardStreamingInfo.appendChild(streamLink)
            } else if (data.streamingInfo.disney) {
                var streamLink = document.createElement('a')
                streamLink.setAttribute("href", data.streamingInfo.disney.us.link)
                streamLink.setAttribute("class", "stream-link")
                streamLink.setAttribute("target", "_blank");
                streamLink.textContent = "Stream on Disney+"
                secondCardStreamingInfo.appendChild(streamLink)
            } else if (data.streamingInfo.prime) {
                var streamLink = document.createElement('a')
                streamLink.setAttribute("href", data.streamingInfo.prime.us.link)
                streamLink.setAttribute("class", "stream-link")
                streamLink.setAttribute("target", "_blank");
                streamLink.textContent = "Stream on Prime"
                secondCardStreamingInfo.appendChild(streamLink)
            } else {
                secondCardStreamingInfo.textContent = "Not on streaming services right now"
            }
            var secondCardDesc = document.createElement('p');
            secondCardDesc.setAttribute("class", "card-text desc reduce-description");
            secondCardDesc.textContent = data.overview;
            secondCardBody.appendChild(secondCardDesc);
            var secondScrollText = document.createElement('p')
            secondScrollText.setAttribute("class", "scroll-text");
            secondScrollText.textContent = "Scroll to read"
            secondCardBody.appendChild(secondScrollText)
        })
}

var getMovieResultThree = function (movieIds) {
    fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" + movieIds[2] + "&output_language=en", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
            "x-rapidapi-key": "fd9a215c8fmsh1b12b778dc43cfdp16b61cjsn3480cfe25268"
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var thirdCard = document.createElement('div');
            thirdCard.setAttribute("style", "width: 18rem;");
            thirdCard.setAttribute("class", "card");
            moviesContainer.appendChild(thirdCard)
            var thirdCardImage = document.createElement('img');
            thirdCardImage.setAttribute("class", "card-img-top");
            thirdCardImage.setAttribute("src", data.posterURLs.original);
            thirdCard.appendChild(thirdCardImage);
            var thirdCardBody = document.createElement('div');
            thirdCardBody.setAttribute('class', 'card-body');
            thirdCard.appendChild(thirdCardBody);
            var thirdCardTitle = document.createElement('h2');
            thirdCardTitle.setAttribute("class", "card-title");
            thirdCardTitle.textContent = data.originalTitle;
            thirdCardBody.appendChild(thirdCardTitle);
            var thirdCardRating = document.createElement('p')
            thirdCardRating.setAttribute("class", "card-text rating")
            thirdCardRating.textContent = "iMDB Rating:  "
            thirdCardBody.appendChild(thirdCardRating);
            var imdbRating = document.createElement('p')
            imdbRating.textContent = data.imdbRating
            thirdCardBody.appendChild(imdbRating);
            if (data.imdbRating < 35) {
                imdbRating.setAttribute("class", "bad-rating")
            } else if (data.imdbRating < 60) {
                imdbRating.setAttribute("class", "ok-rating")
            } else {
                imdbRating.setAttribute("class", "good-rating")
            }
            var thirdCardStreamingInfo = document.createElement('p')
            thirdCardStreamingInfo.setAttribute("class", "card-text streaming")
            thirdCardBody.appendChild(thirdCardStreamingInfo);
            if (data.streamingInfo.netflix) {
                var streamLink = document.createElement('a')
                streamLink.setAttribute("href", data.streamingInfo.netflix.us.link)
                streamLink.setAttribute("class", "stream-link")
                streamLink.setAttribute("target", "_blank");
                streamLink.textContent = "Stream on Netflix"
                thirdCardStreamingInfo.appendChild(streamLink)
            } else if (data.streamingInfo.disney) {
                var streamLink = document.createElement('a')
                streamLink.setAttribute("href", data.streamingInfo.disney.us.link)
                streamLink.setAttribute("class", "stream-link")
                streamLink.setAttribute("target", "_blank");
                streamLink.textContent = "Stream on Disney+"
                thirdCardStreamingInfo.appendChild(streamLink)
            } else if (data.streamingInfo.prime) {
                var streamLink = document.createElement('a')
                streamLink.setAttribute("href", data.streamingInfo.prime.us.link)
                streamLink.setAttribute("class", "stream-link")
                streamLink.setAttribute("target", "_blank");
                streamLink.textContent = "Stream on Prime"
                thirdCardStreamingInfo.appendChild(streamLink)
            } else {
                thirdCardStreamingInfo.textContent = "Not on streaming services right now"
            }
            var thirdCardDesc = document.createElement('p');
            thirdCardDesc.setAttribute("class", "card-text desc reduce-description");
            thirdCardDesc.textContent = data.overview;
            thirdCardBody.appendChild(thirdCardDesc);
            var thirdScrollText = document.createElement('p')
            thirdScrollText.setAttribute("class", "scroll-text");
            thirdScrollText.textContent = "Scroll to read"
            thirdCardBody.appendChild(thirdScrollText)
        })
}

var getMovieResultFour = function (movieIds) {
    fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" + movieIds[3] + "&output_language=en", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
            "x-rapidapi-key": "fd9a215c8fmsh1b12b778dc43cfdp16b61cjsn3480cfe25268"
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var forthCard = document.createElement('div');
            forthCard.setAttribute("style", "width: 18rem;");
            forthCard.setAttribute("class", "card");
            moviesContainer.appendChild(forthCard)
            var forthCardImage = document.createElement('img');
            forthCardImage.setAttribute("class", "card-img-top");
            forthCardImage.setAttribute("src", data.posterURLs.original);
            forthCard.appendChild(forthCardImage);
            var forthCardBody = document.createElement('div');
            forthCardBody.setAttribute('class', 'card-body');
            forthCard.appendChild(forthCardBody);
            var forthCardTitle = document.createElement('h2');
            forthCardTitle.setAttribute("class", "card-title");
            forthCardTitle.textContent = data.originalTitle;
            forthCardBody.appendChild(forthCardTitle);
            var forthCardRating = document.createElement('p')
            forthCardRating.setAttribute("class", "card-text rating")
            forthCardRating.textContent = "iMDB Rating:  "
            forthCardBody.appendChild(forthCardRating);
            var imdbRating = document.createElement('p')
            imdbRating.textContent = data.imdbRating
            forthCardBody.appendChild(imdbRating);
            if (data.imdbRating < 35) {
                imdbRating.setAttribute("class", "bad-rating")
            } else if (data.imdbRating < 60) {
                imdbRating.setAttribute("class", "ok-rating")
            } else {
                imdbRating.setAttribute("class", "good-rating")
            }
            var forthCardStreamingInfo = document.createElement('p')
            forthCardStreamingInfo.setAttribute("class", "card-text streaming")
            forthCardBody.appendChild(forthCardStreamingInfo);
            if (data.streamingInfo.netflix) {
                var streamLink = document.createElement('a')
                streamLink.setAttribute("href", data.streamingInfo.netflix.us.link)
                streamLink.setAttribute("class", "stream-link")
                streamLink.setAttribute("target", "_blank");
                streamLink.textContent = "Stream on Netflix"
                forthCardStreamingInfo.appendChild(streamLink)
            } else if (data.streamingInfo.disney) {
                var streamLink = document.createElement('a')
                streamLink.setAttribute("href", data.streamingInfo.disney.us.link)
                streamLink.setAttribute("class", "stream-link")
                streamLink.setAttribute("target", "_blank");
                streamLink.textContent = "Stream on Disney+"
                forthCardStreamingInfo.appendChild(streamLink)
            } else if (data.streamingInfo.prime) {
                var streamLink = document.createElement('a')
                streamLink.setAttribute("href", data.streamingInfo.prime.us.link)
                streamLink.setAttribute("class", "stream-link")
                streamLink.setAttribute("target", "_blank");
                streamLink.textContent = "Stream on Prime"
                forthCardStreamingInfo.appendChild(streamLink)
            } else {
                forthCardStreamingInfo.textContent = "Not on streaming services right now"
            }
            var forthCardDesc = document.createElement('p');
            forthCardDesc.setAttribute("class", "card-text desc reduce-description");
            forthCardDesc.textContent = data.overview;
            forthCardBody.appendChild(forthCardDesc);
            var forthScrollText = document.createElement('p')
            forthScrollText.setAttribute("class", "scroll-text");
            forthScrollText.textContent = "Scroll to read"
            forthCardBody.appendChild(forthScrollText)
        })
}

var getMovieResultFive = function (movieIds) {
    fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" + movieIds[4] + "&output_language=en", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
            "x-rapidapi-key": "fd9a215c8fmsh1b12b778dc43cfdp16b61cjsn3480cfe25268"
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var fifthCard = document.createElement('div');
            fifthCard.setAttribute("style", "width: 18rem;");
            fifthCard.setAttribute("class", "card");
            moviesContainer.appendChild(fifthCard)
            var fifthCardImage = document.createElement('img');
            fifthCardImage.setAttribute("class", "card-img-top");
            fifthCardImage.setAttribute("src", data.posterURLs.original);
            fifthCard.appendChild(fifthCardImage);
            var fifthCardBody = document.createElement('div');
            fifthCardBody.setAttribute('class', 'card-body');
            fifthCard.appendChild(fifthCardBody);
            var fifthCardTitle = document.createElement('h2');
            fifthCardTitle.setAttribute("class", "card-title");
            fifthCardTitle.textContent = data.originalTitle;
            fifthCardBody.appendChild(fifthCardTitle);
            var fifthCardRating = document.createElement('p')
            fifthCardRating.setAttribute("class", "card-text rating")
            fifthCardRating.textContent = "iMDB Rating:  "
            fifthCardBody.appendChild(fifthCardRating);
            var imdbRating = document.createElement('p')
            imdbRating.textContent = data.imdbRating
            fifthCardBody.appendChild(imdbRating);
            if (data.imdbRating < 35) {
                imdbRating.setAttribute("class", "bad-rating")
            } else if (data.imdbRating < 60) {
                imdbRating.setAttribute("class", "ok-rating")
            } else {
                imdbRating.setAttribute("class", "good-rating")
            }
            var fifthCardStreamingInfo = document.createElement('p')
            fifthCardStreamingInfo.setAttribute("class", "card-text streaming")
            fifthCardBody.appendChild(fifthCardStreamingInfo)
            if (data.streamingInfo.netflix) {
                var streamLink = document.createElement('a')
                streamLink.setAttribute("href", data.streamingInfo.netflix.us.link)
                streamLink.setAttribute("class", "stream-link")
                streamLink.setAttribute("target", "_blank");
                streamLink.textContent = "Stream on Netflix"
                fifthCardStreamingInfo.appendChild(streamLink)
            } else if (data.streamingInfo.disney) {
                var streamLink = document.createElement('a')
                streamLink.setAttribute("href", data.streamingInfo.disney.us.link)
                streamLink.setAttribute("class", "stream-link")
                streamLink.setAttribute("target", "_blank");
                streamLink.textContent = "Stream on Disney+"
                fifthCardStreamingInfo.appendChild(streamLink)
            } else if (data.streamingInfo.prime) {
                var streamLink = document.createElement('a')
                streamLink.setAttribute("href", data.streamingInfo.prime.us.link)
                streamLink.setAttribute("class", "stream-link")
                streamLink.setAttribute("target", "_blank");
                streamLink.textContent = "Stream on Prime"
                fifthCardStreamingInfo.appendChild(streamLink)
            } else {
                fifthCardStreamingInfo.textContent = "Not on streaming services right now"
            }
            var fifthCardDesc = document.createElement('p');
            fifthCardDesc.setAttribute("class", "card-text desc reduce-description");
            fifthCardDesc.textContent = data.overview;
            fifthCardBody.appendChild(fifthCardDesc);
            var fifthScrollText = document.createElement('p')
            fifthScrollText.setAttribute("class", "scroll-text");
            fifthScrollText.textContent = "Scroll to read"
            fifthCardBody.appendChild(fifthScrollText)
        })
}