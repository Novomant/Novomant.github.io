$(document).ready(function() {

  var click = 1 

  $("a.off").click(function () {
    if(click)
    {
      $(".tenant").attr({src:'img/uboa.png'});
      $(".win").attr({src:'img/win2.jpg'});
      $("header").css({'background':'gray', 'color':'white'});
      $("body").css({'background':'black'});
      $(".main").css({'background':'black'});
      $("body").css({'color':'white'});
      click = 0;
      $(".off").html("Включить свет");
    }
    else
    {
      $(".tenant").attr({src:'img/ponico.png'});
      $(".win").attr({src:'img/win.jpg'});
      $("header").css({'background':'#d68a94', 'color':'black'});
      $("body").css({'background':'#d68a94'});
      $(".main").css({'background':'#D68A94'});
      $("body").css({'color':'black'});
      click = 1;
      $(".off").html("Выключить свет");
    }
  })

  $(".off").mousedown(function() {
    $(".tenant").attr({src:'img/uboa.png'});
    $("header").css({'background':'white', 'color':'white'});
    $("body").css({'background':'white'});
    $(".main").css({'background':'white'})
  })

});