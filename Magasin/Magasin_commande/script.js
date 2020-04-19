$("div.stripes > div").mouseenter(function() {
    $(this).stop(true, true).css("width","40%").siblings().css("width","20%");
  }).mouseleave(function(){
    $(this).stop(true, true).css("width","25%").siblings().css("width","25%");
  });