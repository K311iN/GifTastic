
$(document).ready(function () {

    //Need an Array of musical instruments.
    var music = [
        "guitar", "drums", "bass", "trumpet", "violin", "cello", "clarinet", "saxaphone", "piano", "flute", "banjo", "viola", "bongos", "xylophone", "piccolo", "accordion", "frenchhorn", "bassoon", "didgeridoo", "harmonica"
    ];
    //Loop through each item of the array.
    for (var i = 0; i < music.length; i++) {
       
        // Input area is only visible when refreshing window and last for half a sec. then disappears.
        // Create buttons for each array item. Really wanted this to be placed in <div id="musical>". Not sure how without missing it up/ append maybe?
        document.write("<div>");
        document.write("<input type='button' value='" + music[i] + "'/>");
        document.write("</div>");
    
    };
    // Each instrument must have it own button when pressed the giphy API (.on("click")) brings 10 images of the buttons value 

    //Event listener for all button elements??
    $("button").on("click", function () {
        // onclick=("geValue();")?
        

        var URLquery = "https://api.giphy.com/v1/gifs/random?q=";
        var person = "&api_key=mFhbb5ZsfGwrA6r1y5Y20Hmi65cz0enZ&limit=10";

        $.ajax({
            url: URLquery + person,
            method: "GET"
        })
            .then(function (response) {
                console.log(response);
            });

    });



});



