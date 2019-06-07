$(document).ready(function() {
  $("form#survey").submit(function(event) {

  var activity = $("input[name='activity']:checked").val();
  var place = $("input[name='place']:checked").val();
  var toys = $("input[name='toys']:checked").val();
  var workout = $("input[name='workout']:checked").val();  



  if (activity === "instagram" && activity === "outdoors" || activity === "cars" && activity === "yes") {
    $("#your-language").text("Ruby");
  } else if (activity === "books" && activity === "room" || activity === "hummer" && activity === "what") {
    $("#your-language").text("Rust");
  } else (activity === "games" && activity === "kitchen" || activity === "joystick" && activity === "no") {
    $("#your-language").text("Python");

  if (place === "instagram" && place === "outdoors" || place === "cars" && place === "yes") {
    $("#your-language").text("Ruby");
  } else if (place === "books" && place === "room" || place === "hummer" && place === "what") {
    $("#your-language").text("Rust");
  } else (place === "games" && place === "kitchen" || place === "joystick" && plce === "no") {
    $("#your-language").text("Python");
    
    event.preventDefault();
  });
});









// var a = parseInt($("input#sideA").val());
//     var b = parseInt($("input#sideB").val());
//     var c = parseInt($("input#sideC").val());

//     if ( a === b && a === c) {
//       //return an equilateral
//       $("#type").text("Equilateral"); 
//     }
//     else if ( a + b <= c 
//             || c + b <= a 
//             || a + c <= b) {
//       // return NOT a triangle
//       $("#type").text("NOT a triangle");
//     }
//     else if (a === b && a !== c || 
//              b === c && b !== a || 
//              c === a && c !== b) {
//       // return Isosceles
//       $("#type").text("Isosceles");
//     }
//     else {
//       // return Scalene
//       $("#type").text("Scalene");
//     }
    