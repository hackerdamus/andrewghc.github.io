$(document).ready(function() {
    // Vars to avoid repeating animations
    var noRepeatAbout = true,
        noRepeatProjects = true,
        noRepeatContact = true;
    // Set up Notify.js defaults
    $.notify.defaults({
        className: "success",
        arrowShow: false
    });
    $('#fullpage').fullpage({
        // Options for fullpage.js
        menu: '#menu',
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
        navigationTooltips: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
        sectionsColor: ['#fff', '#f5f5f5', '#d8e9f0', '#3498db'],
        recordHistory: false,
        // Handle events when moving between slides
        onLeave: function(index, nextIndex, direction) {
            // Remove navbar on leaving anchor
            $('nav').removeClass('animated fadeIn');
            $('nav').addClass('animated fadeOut');
            // Animate about page
            if (nextIndex === 2 && noRepeatAbout) {
                noRepeatAbout = false;
                setTimeout(function() {
                    $('figure > img').addClass('animated pulse');
                }, 700);
            }
            // Animate slide arrows to make it more obvious the page can be scrolled left & right
            if (nextIndex === 3 && noRepeatProjects) {
                noRepeatProjects = false;
                $('.project-text > h4 strong').notify('Scroll this page left and right!', {
                    position: "top center"
                });
                $('.fp-controlArrow').addClass('animated zoomInUp');
                setTimeout(function() {
                    $('.fp-controlArrow').removeClass('zoomInUp');
                    $('.fp-controlArrow').addClass('shake');
                }, 1000);
            }
            // Animate contact form
            if (nextIndex === 4 && noRepeatContact) {
                noRepeatContact = false;
                $('.email-wrapper').addClass('animated fadeInUp');
            }
            // Change navbar text colour on first and other slides
            if (nextIndex === 1 && $('.navbar-toggle').hasClass('collapsed')) {
                $('a').attr('style', 'color:#eeeeee !important');
            } else {
                $('a').attr('style', 'color:#333333 !important');
            }
        },
        afterLoad: function(anchorLink, index) {
            // Replace navbar on anchor load
            $('nav').removeClass('animated fadeOut');
            $('nav').addClass('animated fadeIn');
        }
    });
});

// Common function to restyle anchors
function anchorAddClass() {
    $('nav').addClass('navbar-custom');
    $('a').addClass('navbar-text-copy');
    $('.navbar-default .navbar-nav > .active > a').attr('style', 'border-bottom: 4px solid #eb586f');
    if ($('body').hasClass('fp-viewing-firstPage')) {
        $('a').attr('style', 'color:white !important');
    }
}

// Revert navbar to default when toggle is clicked to improve legibility, adjusting fonts accordingly
$('.navbar-toggle').on('click', function() {
    if ($(this).hasClass('collapsed')) {
        $('nav').removeClass('navbar-custom');
        $('a').removeClass('navbar-text-copy');
        $('.navbar-default .navbar-nav > .active > a').attr('style', 'border-bottom: none');
        if ($('body').hasClass('fp-viewing-firstPage')) {
            $('a').attr('style', 'color:black !important');
        }
    } else {
        anchorAddClass();
    }
});

// Collapse toggle menu on click
$('.nav > li > a').on('click', function(e) {
    anchorAddClass();
    $('#navbar').collapse('hide');
});
