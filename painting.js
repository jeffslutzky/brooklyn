$(function() {
  $.getJSON("painting.json", function(data){

    $(".tag-form").hide();
    $(".close-form").hide();

    var title = data.data.title;
    var artist = data.data.artists[0].name;
    var urlExtension = data.data.images["rank-1"][0]["filename"];
    var url = "http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/" + urlExtension;

    $(".title").append(title);
    $(".artist").append(artist);
    $(".image").append("<img src='" + url + "'>");
    // Below the painting I'd also append other info about the painting contained in the data.data hash (medium, dimensions, credit_line, etc.) in a smaller font.


    $(".add-tags").on("click", function(){
      $(".tag-form").show();
      // I'd like to make the tag form more visually appealing.
      $(".close-form").show();
    })

    $("#new-tag").submit(function(event){
      event.preventDefault();
      var newTag = $("#tag").val();
      $(".tag-list").append("<p><a href='/opencollection/tags/" + newTag + "' title='Items taggged " + newTag + "'>" + newTag + "</a></p>");
      $("#tag").val("");
      // I would also try to tweak the columns of tags so they line up better, and so the left-most column fills first instead of the center column.
    })

    $(".close-button").on("click", function(){
      $(".tag-form").hide();
      $(".close-form").hide();
    })

  })
})
