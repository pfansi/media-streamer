//variables for elements to render
var displayBookEl = document.querySelector(".displayBook");

// variables for buttons
var actionBookBtn = document.querySelector(".action");
var adventureBookBtn = document.querySelector(".adventure");
var comedyBookBtn = document.querySelector(".comedy");
var crimeBookBtn = document.querySelector(".crime");
var fantasyBookBtn = document.querySelector(".fantasy");
var historyBookBtn = document.querySelector(".history");
var horrorBookBtn = document.querySelector(".horror");
var kidsBookBtn = document.querySelector(".kids");
var musicBookBtn = document.querySelector(".music");
var mysteryBookBtn = document.querySelector(".mystery");
var nonFictionBookBtn = document.querySelector(".non-fiction");
var politicsBookBtn = document.querySelector(".politics");
var romanceBookBtn = document.querySelector(".romance");
var sportBookBtn = document.querySelector(".sport");
var thrillerBookBtn = document.querySelector(".thriller");
var warBookBtn = document.querySelector(".war");
var westernBookBtn = document.querySelector(".western");
var displayCard = document.createElement("div");

var allBookGenreButtons = document.querySelectorAll("button[class^=btn]");
var randomPage = Math.floor(Math.random() * 29);
var genreShuffledArr = function (bookIds) {
  bookIds.sort(() => Math.random() - 0.5);
};
for (var i = 0; i < allBookGenreButtons.length; i++) {
  allBookGenreButtons[i].addEventListener("click", async function () {
    var btnValue = this.value;
    var bookGenreApiURL =
      "https://www.googleapis.com/books/v1/volumes?q=category:" +
      btnValue +
      "&orderBy=newest&startIndex=" +
      randomPage +
      "&country:GB&language:en&key=AIzaSyA_lIqrTexQ5k7tVp1cuAOHbptlInieZKU";

    await fetch(bookGenreApiURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        displayBookEl.textContent = "";

        for (var i = 0; i <= 4; i++) {
          displayCard = document.createElement("div");
          var bookImage = document.createElement("img");
          var cardBody = document.createElement("div");
          var bookTitle = document.createElement("a");
          var bookDescription = document.createElement("p");
          var titleLink = document.createElement("div");
          var titleLinkEl = document.createElement("div");
          var likeEl = document.createElement("input");
          var likeEl = document.createElement("button");
          var heartEl = document.createElement("i");

          //likeEl.setAttribute("type", "checkbox");
          likeEl.setAttribute("class", "like-btn");

          heartEl.setAttribute("class", "fa fa-heart");

          displayCard.setAttribute("class", "card");
          displayCard.setAttribute("style", "width: 22rem;");
          bookImage.setAttribute("class", "image-one card-img-top");
          cardBody.setAttribute("class", "card-body");
          bookTitle.setAttribute("class", "card-title");

          bookDescription.setAttribute(
            "class",
            "desc-one card-text reduceDescription"
          );

          bookTitle.setAttribute("href", data.items[i].volumeInfo.previewLink);
          bookTitle.setAttribute("target", "_blank");
          bookImage.setAttribute(
            "src",
            data.items[i].volumeInfo.imageLinks.smallThumbnail
          );

          bookTitle.textContent = data.items[i].volumeInfo.title;
          bookDescription.textContent = data.items[i].volumeInfo.description;

          titleLink.append(titleLinkEl);

          likeEl.append(heartEl);
          cardBody.append(likeEl);
          cardBody.append(bookTitle);
          cardBody.append(titleLink);

          cardBody.append(bookDescription);
          displayCard.append(bookImage);
          displayCard.append(cardBody);

          displayBookEl.append(displayCard);

          randomPage = Math.floor(Math.random() * 29);
        }
   
        // checkboxEl.addEventListener("change", function () {
        //   if (this.checked) {
        //     displaySavedEl.append(displayCard);
        //   } else {
        //     checkboxEl.checked = false;
        //   }
        // });    

        })
        var checkboxEl = document.querySelector(".like-btn");

        checkboxEl.addEventListener("click",function(){
        var displaySavedEl = document.querySelector(".displaySaved");
        //var checkboxEl = document.querySelector("input[name=checkbox]");
        displaySavedEl.append(displayCard);

      });

  });
}
