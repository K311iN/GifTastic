

//Need an Array of musical instruments
var music = [
    "guitar", "drums", "bass", "trumpet", "violin", "cello", "clarinet", "saxaphone", "piano", "flute", "banjo", "viola", "bongos", "xylophone", "piccolo", "accordion", "frenchhorn", "bassoon", "didgeridop", "harmonica"
];
//Loop through each item of the array

for (var i = 0; i < music.length; i++) {

   // Each instrument must have it own button when pressed the giphy API (.on("click")) brings 10 images of the buttons value 

//Event listener for all button elements??
$("button").on("click", function() {






})





var URLquery = "https://api.giphy.com/v1/gifs/random?q="
var person ="&api_key=mFhbb5ZsfGwrA6r1y5Y20Hmi65cz0enZ&limit=10"

$.ajax({
    url: URLquery + person,
    method: "GET"


})
.then(function(response) {

    console.log(response);

});






};


