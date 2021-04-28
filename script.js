$(function(){

    function getParameterByName(key) {
        console.log("key ", key);

      key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&"); // escape RegEx meta chars
      var match = location.search.match(new RegExp("[?&]" + key + "=([^&]+)(&|$)"));
      console.log("match ", match);
      uri ="file:///Users/frieda/Downloads/gslovestory.github.io/test.html?slide=2"


        console.log("decodeURIComponent ", decodeURIComponent(uri));
      var slide = match && decodeURIComponent(match[1].replace(/\+/g, " "));
      if (Math.floor(slide) == slide && $.isNumeric(slide))
          return parseInt(slide);
      else
          return 0;
    }
    
    var slideNumber = getParameterByName('slide');

    $('#myCarousel').carousel(slideNumber);
});