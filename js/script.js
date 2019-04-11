// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
var api_url =  "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC";
$("#search-button").click(function(){
    
    var searchTerm = ["sharks", "dogs", "cats", "snakes", "seals", "bats", "eels", "Michael Jackson", "bears", "fish"];
    
    var searchIndex = Math.floor(Math.random() * searchTerm.length);
     
    $.ajax({
        url: "https://random-word-api.herokuapp.com/word?key=UPG9HRCK&number=1",
        
        method: "GET",
        
        success: function(randomWord) {
            
            var newUrl = "https://api.giphy.com/v1/stickers/search?q=" +randomWord[0]+ "&rating=pg&api_key=dc6zaTOxFJmzC";
                $.ajax({
                         url: newUrl,
                         
                         method: "GET",
                         
                         success: function(response) {
                            
                            $("body").append('<h1>' + randomWord[0] + '</h1>');
                            
                            var index = Math.floor(Math.random() * response.data.length);
            
                            $("body").prepend('<img src="' + response.data[index].images.original.url + '"/>');
                        }
                });
          }
    });
});

