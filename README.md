# Post-card
generate a text document where user inputs key words to complete the postcard


```relevant code examples```

<form>
  <div class="form-group">
    <label form="destination">Your destination</label>
    <input id="destination" class="form-control" type="text">
  </div>
  <div class="form-group">
    <label form="weather">what's the weather like in one word?</label>
    <input id="weather" class="form-control" type="text">
  </div>
  
  $(document).ready(function() {
$('#blanks form').submit(function(event) {
  var destination = $("input#destination").val();
  var weather = $("input#weather").val();
  var emotion = $("input#emotion").val();
  var drinks = $("input#drinks").val();

  $(".destination").text(destination);
  $(".weather").text(weather);
  $(".emotion").text(emotion);
  $(".drinks").text(drinks);

  $("#story").show();


    event.preventDefault();
  });
});
