//GifTastic

var topics = ["Trees", "Fish", "Hair Bands", "Trains", "Armadillos"];


 function displayTopics() {      //dc6zaTOxFJmzC

        var topic = $(this).attr("data-name");
         var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC&limit=10";


        // Creates AJAX call for the specific movie button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

          var results = response.data;

          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var topicImage = $("<img>");
            topicImage.attr("src", results[i].images.fixed_height_still.url);

            gifDiv.prepend(p);
            gifDiv.prepend(topicImage);

            $("#gifs-appear-here").prepend(gifDiv);
          }
        });

      }


function renderButtons() {

        // Deletes previous movies for this turn
        $("#buttonsToScreen").empty();
        for (var i = 0; i < topics.length; i++) {
          var a = $("<button>");
          a.addClass("topic").attr("data-name", topics[i]).text(topics[i]);
          $("#buttonsToScreen").append(a);
        }
      }

      $("#addTopic").on("click", function(event) {
        event.preventDefault();
        var topic = $("#topicInput").val().trim();
        topics.push(topic);
        $("#topivInput").val('');  // clears the text input box after click - ready for next input

        renderButtons();

      });

      // Adding click event listeners to all elements with a class of "movie"
      $(document).on("click", ".topic", displayTopics);
      
      // Calling the renderButtons function to display the intial buttons
      renderButtons();


$("#topicsView").on("click", function() {
      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
      var state = $(this).attr("data-state");
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });










// response.data.map(result=>$('#gifs-appear-here').prepend(`
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


// [9:33] 
// $("#movies-view").prepend(
//           `<h1>${response.Title}</h1>
//            <div>${response.Rated}</div>
//            <div>${response.Plot}</div>
//            <img src=${response.Poster}/>
//           `
//           );