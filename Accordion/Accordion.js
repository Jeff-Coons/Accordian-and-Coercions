$("div").on("click", function(){
  $(this).toggleClass("section")
  .siblings().removeClass("section");
});
