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
