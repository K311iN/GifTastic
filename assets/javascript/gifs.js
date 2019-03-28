
$(document).ready(function () {

    //Need an Array of musical instruments.
    var music = [
        "guitar", "drums", "bass", "trumpet", "violin", "cello", "clarinet", "saxaphone", "piano", "flute", "banjo", "viola", "bongos", "xylophone", "piccolo", "accordion", "frenchhorn", "bassoon", "didgeridoo", "harmonica"
    ];
    //Loop through each item of the array.
    function createButtons(array) {

        for (var i = 0; i < array.length; i++) {
            var button = $("<button>");

            button.addClass("search-button");

            button.attr("data-type", array[i]);

            button.text(array[i]);

            $("#musical").append(button);
        };

    };
    createButtons(music);


    $(document).on("click", ".search-button", function () {

        $("#musical3").empty();

        $(".search-button").removeClass("active");

        $(this).addClass("active");

        var instrument = $(this).attr("data-type");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + instrument + "&api_key=mFhbb5ZsfGwrA6r1y5Y20Hmi65cz0enZ";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {

                console.log(response);
                for (var i = 0; i < response.data.length; i++) {

                    var searchDiv = $("<div class='searchItem'>");
                    var rating = response.data[i].rating;
                    var p = $("<p>").text("rating:" + rating);
                    var animated = response.data[i].images.fixed_height_small.url;
                    var still = response.data[i].images.fixed_height_small_still.url;

                    var image = $("<img>");
                    image.attr("src", still);
                    image.attr("data-still", still);
                    image.attr("data-animate", animated);
                    image.attr("data-state", "still");
                    image.addClass("search-image");
                    searchDiv.append(p, image);
                    $("#musical3").append(searchDiv);

                };

            });

    });


    $(document).on("click", ".search-image", function () {

        var state = $(this).attr("data-state");

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        }
        else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        };
    });


});
