$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        margin: 35,
        nav: true,

        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            }
        }
    });
  });

$(window).scroll(function(){
    if($(this).scrollTop()>30)
    {
      $(".headerr").addClass("stickyy") 
      $(".arrow").show()
    }
    else
    {
        $(".headerr").removeClass("stickyy")
        $(".arrow").hide()
    }
})
$(window).scroll(function(){
    if($(this).scrollTop()>150)
    {
      $(".arrow").show()
    }
    else
    {
        $(".arrow").hide()
    }
})