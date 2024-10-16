$(document).ready(function() {
    let checkInOut = $('.checkIncheckOut-btn');
    let dateBtn = $('.date-btn');
    let stay= $('#nav-stays');
    let experience =$('#nav-experiences');

    stay.click(function() {
        
        checkInOut.removeClass('d-none');
        dateBtn.addClass('d-none');
        
        stay.addClass('font-weight-bold');
        experience.removeClass('font-weight-bold');

    });

    experience.click(function() {
        
        checkInOut.addClass('d-none');
        dateBtn.removeClass('d-none');

        stay.removeClass('font-weight-bold');
        experience.addClass('font-weight-bold');

    });
    let owl = $('.owl-carousel');
    owl.owlCarousel({
    margin: 0,
    loop: true,
    nav: false,
    navText: [
      $('#prev-btn').html(),
      $('#next-btn').html()
    ],
    responsive: {
      0: {
        items: 3,
        slideBy: 3
      },
      600: {
        items: 5,
        slideBy: 5
      },
      1000: {
        items: 9,
        slideBy: 9
      }
    }
  });

  // Custom navigation button actions
  $('#prev-btn').click(function() {
    $('.owl-carousel').trigger('prev.owl.carousel');
  });

  $('#next-btn').click(function() {
    $('.owl-carousel').trigger('next.owl.carousel');
  });

  //Show-more functionality

  $('#show-more-btn').on('click', function() {
    $('.more-content').toggleClass('show-more-content');
    var buttonText = $(this).text();
    $(this).text(buttonText === "Show more" ? "Show less" : "Show more");
});


});
