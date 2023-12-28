$(function(){


  
  $('.hamburger').on('click', function() {
   
    hamburger();
  });
 
  $('#navi a').on('click', function() {
  
    hamburger();
  });


 
  $('a[href^="#"]').click(function(){
  
    let href= $(this).attr("href");
   
    let target = $(href == "#" || href == "" ? 'html' : href);
   
    let position = target.offset().top;
    
    
    $("html, body").animate({scrollTop:position}, 600, "swing");
    return false;
  });

  
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
     
      $(this).stop().addClass("show");
    }
  });

 
  $(window).scroll(function() {
    
    let scroll = $(window).scrollTop();


    if (scroll > 520) {
     
      $('.logo').fadeIn(500);
      $('.hamburger').fadeIn(500);
  
    } else {
   
      $('.logo').fadeOut(500);
      $('.hamburger').fadeOut(500);
    }

   
    let gallery_position = $('#gallery').offset().top - $(window).height();
 
    let access_position = $('#access').offset().top - $(window).height();

  
    if (window.innerWidth > 900) {
      
      if(scroll > gallery_position){
       
        if(scroll < access_position){
          $('#side-btn').css({
            'transform': 'rotate(-90deg) translateY(0)'
          });
      
        } else {
          $('#side-btn').css({
            'transform': 'rotate(-90deg) translateY(60px)'
          });
        }
    
      } else {
        $('#side-btn').css({
          'transform': 'rotate(-90deg) translateY(60px)'
        });
      }
    }

   
    let contact_position = $('#contact').offset().top - $(window).height();

 
    if(scroll > access_position){
      
      if(scroll < contact_position){
        $('.bg').fadeIn(500);
      } else {
        $('.bg').fadeOut(500);
      }
    
    } else {
      
      $('.bg').fadeOut(500);
    }
  });

 
  $(window).on('load resize', function() {
    
    let scroll = $(window).scrollTop();

   
   
  });
});


function hamburger() {
 
  $('.hamburger').toggleClass('active');

  if ($('.hamburger').hasClass('active')) {
   
    $('#navi').addClass('active');
  } else {
    
    $('#navi').removeClass('active');
  }
}

