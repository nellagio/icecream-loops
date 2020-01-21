$(document).ready(function(){
  var iceCreams = ["Mint", "Rocky Road", "Vanilla", "Half-Baked", "Chocolate"];

    iceCreams.forEach(function(iceCream){
      $(".favicecream").append("<li>" + iceCream + "</li>");
    });
  });


