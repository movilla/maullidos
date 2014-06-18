$(document).ready(function(){

  $.ionSound({
    sounds: [
    	"1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9"
        ],
    path: "sounds/",
    multiPlay: true,
    volume: "1.0"
  });

  $("#b01a").on("click", function(){
    $.ionSound.play("1");
  });
  $("#b01b").on("click", function(){
    $.ionSound.stop("1");
  });

  $("#b02a").on("click", function(){
    $.ionSound.play("2");
  });
  $("#b02b").on("click", function(){
    $.ionSound.stop("2");
  });

  $("#b03a").on("click", function(){
    $.ionSound.play("3");
  });
  $("#b03b").on("click", function(){
    $.ionSound.stop("3");
  });

  $("#b04a").on("click", function(){
    $.ionSound.play("4");
  });
  $("#b04b").on("click", function(){
    $.ionSound.stop("4");
  });

  $("#b05a").on("click", function(){
    $.ionSound.play("5");
  });
  $("#b05b").on("click", function(){
    $.ionSound.stop("5");
  });

  $("#b06a").on("click", function(){
    $.ionSound.play("6");
  });
  $("#b06b").on("click", function(){
    $.ionSound.stop("6");
  });

  $("#b07a").on("click", function(){
    $.ionSound.play("7");
  });
  $("#b07b").on("click", function(){
    $.ionSound.stop("7");
  });

  $("#b08a").on("click", function(){
    $.ionSound.play("8");
  });
  $("#b08b").on("click", function(){
    $.ionSound.stop("8");
  });

  $("#b09a").on("click", function(){
    $.ionSound.play("9");
  });
  $("#b09b").on("click", function(){
    $.ionSound.stop("9");
  });
});
