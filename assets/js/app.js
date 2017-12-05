//GifTastic

var topics = ["Trees", "Fish", "Hair Bands", "Trains", "Armadillos"];


 function displayTopics() {      //dc6zaTOxFJmzC

        var topic = $(this).attr("data-name");
         var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

          $("#gifs-appear-here").empty();

          var results = response.data;

          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var topicImageStill = $("<img>");
            topicImageStill.attr("src", results[i].images.fixed_height_still.url).attr("data-state", "still");

            //topicImageStill.attr({src: results[i].images.fixed_height_still.url, data-state: "still"});

            //( { title:"Test", alt:"Test2" } );
            
            var topicImageAnimate = $("<img>");
            topicImageAnimate.attr("src", results[i].images.fixed_height.url).attr("data-state", "animate");

             //topicImageAnimate.attr({src: results[i].images.fixed_height.url, data-state: "animate"});

            gifDiv.prepend(p);
            gifDiv.prepend(topicImageStill);

            $("#gifs-appear-here").prepend(gifDiv);
          }
        });

        $("#gifs-appear-here").on("click", function() {
      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
      var state = $(this).attr("data-state");
     
      if (state === "still") {
        $(this).attr("src", $(this).attr("src", "results[i].images.fixed_height.url"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("src", "results[i].images.fixed_height_still.url"));
        $(this).attr("data-state", "still");
      }
    });

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
        var topic = $("#topicInput").val().trim();
        topics.push(topic);
        $("#topicInput").val('');  // clears the text input box after click - ready for next input

        renderButtons();

      });

      // Adding click event listeners to all elements with a class of "topic"
      $(document).on("click", ".topic", displayTopics);
      
      // Calling the renderButtons function to display the intial buttons
      renderButtons();













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



// $("#movies-view").prepend(
//           `<h1>${response.Title}</h1>
//            <div>${response.Rated}</div>
//            <div>${response.Plot}</div>
//            <img src=${response.Poster}/>
//           `
//           );