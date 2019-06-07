$(document).ready(function() {
  $("form#survey").submit(function(event) {
  
  var activity = $("input[name='activity']:checked").val();
  var place = $("input[name='place']:checked").val();
  var toys = $("input[name='toys']:checked").val();
  var workout = $("input[name='workout']:checked").val();
  var love = $("input[name='love']:checked").val();  

  if (activity === "instagram" && place === "outdoors") {
    $("#your-language").text("Ruby");
  } else if (activity === "instagram" && place === "room") {
    $("#your-language").text("Rust");
  } else if (activity === "instagram" && place === "kitchen") {
    $("#your-language").text("Python");
  }

  if (activity === "books" && toys === "cars") {
    $("#your-language").text("Ruby");
  } else if (activity === "books" && toys === "hummer") {
    $("#your-language").text("Rust");
  } else if (activity === "books" && place === "joystick") {
    $("#your-language").text("Python");
  }

  if (activity === "games" && workout === "no") {
    $("#your-language").text("Ruby");
  } else if (activity === "games" && workout === "what") {
    $("#your-language").text("Rust");
  } else if (activity === "games" && workout === "yes") {
    $("#your-language").text("Python");
  }

  if (love === "yes") {
    $("#coding-love").show();
    $("#coding-hate").hide();
  } else if (love === "no") {
    $("#coding-hate").show();
    $("#coding-love").hide();
  }
  
  $("#recommendation").show();
  $('.loader').hide();

  event.preventDefault();
  
  });
});