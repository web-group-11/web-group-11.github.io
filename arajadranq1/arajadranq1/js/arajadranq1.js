$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});



function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.1883995, lng: 44.5236375},
        zoom: 10,
    });
}


$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#verev').fadeIn();
        } else {
            $('#verev').fadeOut();
        }
    });
    $('#verev').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 3000);
        return false;
    });
});

$( window ).scroll(function() {





});




//
// var sections = $('div')
//     , nav = $('nav')
//     , nav_height = nav.outerHeight();
//
// $(window).on('scroll', function () {
//     var cur_pos = $(this).scrollTop();
//
//     sections.each(function() {
//         var top = $(this).offset().top - nav_height,
//             bottom = top + $(this).outerHeight();
//
//         if (cur_pos >= top && cur_pos <= bottom) {
//             nav.find('a').removeClass('active');
//             sections.removeClass('active');
//
//             $(this).addClass('active');
//             nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
//         }
//     });
// });
//
// nav.find('a').on('click', function () {
//     var $el = $(this)
//         , id = $el.attr('href');
//
//     $('html, body').animate({
//         scrollTop: $(id).offset().top - nav_height
//     }, 500);
//
//     return false;
// });