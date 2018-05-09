$('.navbar-nav li').click(function(e) {
    e.preventDefault();

    var moveTo = $($(this).children('a').attr('href'));
    var offsetTop = moveTo.offset().top;

    $('html,body').animate({
        scrollTop: offsetTop
    },'slow')
})

$(window).scroll(function() {
 nav();
})

function nav() {
   var scrollTop = $(this).scrollTop() + 50;
  var kv = $('.kv').offset().top;
  var about = $('#about').offset().top;
  var skills = $('#skills').offset().top;
  var works = $('#works').offset().top;
  var contact = $('#contact').offset().top;
  var n;
  if (scrollTop >= kv) {
    n = 'kv';
  }
  if (scrollTop >= about) {
    n = 0;
  }
  if ( scrollTop >= skills) {
    n = 1;
  } 
  if (scrollTop >= works) {
    n = 2;
  }
  if (scrollTop >= contact) {
    n = 3;
  }
  switch(n) {
   case 'kv':
   $('.navbar-nav li').removeClass('active');
   break;
   case 0:
   $('.navbar-nav li').eq(0).addClass('active').siblings().removeClass('active');
   break;
   case 1:
   $('.navbar-nav li').eq(1).addClass('active').siblings().removeClass('active');
   break;
   case 2:
   $('.navbar-nav li').eq(2).addClass('active').siblings().removeClass('active');
   break;
   case 3:
   $('.navbar-nav li').eq(3).addClass('active').siblings().removeClass('active');
   break;
  }
}