//GifTastic

var topics = ["Trees", "Fish", "Dark Tower", "Trains", "Armadillos"];

 function displayTopics() {      //dc6zaTOxFJmzC

        var topic = $(this).attr("data-name");
         var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

          $("#gifs-appear-here").empty();

          var results = response.data;
          
          response.data.map(result=>$('#gifs-appear-here').append(
            `<div class="item">
                <img src="${result.images.fixed_height_still.url}" 
                data-still="${result.images.fixed_height_still.url}" 
                data-animate="${result.images.fixed_height.url}" data-state="still" class="gif"/>
                <p>Rating: ${result.rating}</p>
              </div>`
              ));

        $(".gif").on("click", function() {
      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
      var state = $(this).attr("data-state");
     
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });

 }); //end ajax get
      } // end function displayTopics


function renderButtons() {

        $("#buttonsToScreen").empty();
        for (var i = 0; i < topics.length; i++) {
          var a = $("<button>");
          a.addClass("topic").attr("data-name", topics[i]).text(topics[i]);
          $("#buttonsToScreen").append(a);
        }
      }

      $("#addTopic").on("click", function(event) {
        event.preventDefault();

        //return if input is empty and user clicks submit
         if ($("#topicInput").val() == "") {
          return;
         }

        var topic = $("#topicInput").val().trim();
        topics.push(topic);
        $("#topicInput").val('');  // clears the text input box after click - ready for next input
        renderButtons();
      });

      // Adding click event listeners to all elements with a class of "topic"
      $(document).on("click", ".topic", displayTopics);
      
      // Calling the renderButtons function to display the intial buttons
      renderButtons();

// response.data.map(result=>$('#gifs-appear-here').append(`
//               <div class="item">
//                 <img src="${result.images.fixed_height.url}"/>
//                 <p>Rating: ${result.rating}</p>
//               </div>
//             `)
//           });

// $("#movies-view").prepend(
//             '<h1>' + response.Title + '</h1>'
//            + '<div>' + response.Rated + '</div>'
//            + '<div>' + response.Plot + '</div>'
//            + "<img src=\"" + response.Poster + "\"/>"          
//          );

// $("#movies-view").prepend(
//           `<h1>${response.Title}</h1>
//            <div>${response.Rated}</div>
//            <div>${response.Plot}</div>
//            <img src=${response.Poster}/>
//           `
//           );