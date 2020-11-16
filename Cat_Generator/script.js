function generateCat() {
    var createImage = document.createElement('img');
    var createDiv = document.getElementById('catContainer')
    createImage.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    createDiv.appendChild(createImage);
}