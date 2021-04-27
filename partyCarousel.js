$(function () {
    console.log("here")
    function getSlideParameter(key) {
        console.log("key ", key);

        uri ="file:///Users/frieda/Downloads/gslovestory.github.io/weddingTeam.html?slide=2"

        key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&"); // escape RegEx meta chars
        var match = location.search.match(new RegExp("[?&]" + key + "=([^&]+)(&|$)"));
        console.log("match ", match);

        console.log("decodeURIComponent ", decodeURIComponent(uri));

        var slide = match && decodeURIComponent(match[1].replace(/\+/g, " "));
        if (Math.floor(slide) == slide && $.isNumeric(slide))
            return parseInt(slide);
        else
            return 0;//if 'slide' parameter is not present or doesn't have correct values load 0th slide
    }
    $('#carouselExampleIndicators').carousel(getSlideParameter('slide'));
});