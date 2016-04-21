$(document).ready(function() {
    // Vars to avoid repeating animations
    var noRepeatAbout = true,
        noRepeatProjects = true,
        noRepeatContact = true;
    $('#fullpage').fullpage({
        // Navigation options for fullpage.js
        menu: '#menu',
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
        navigationTooltips: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
        // Handle events when moving between slides
        onLeave: function(index, nextIndex, direction) {
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
                $('.navbar-brand-header').notify('Scroll this page left and right!', {
                    className: "success",
                    position: "right center"
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
                $('a').attr('style', 'color:white !important');
            } else {
                $('a').attr('style', 'color:black !important');
            }
        },
    });
});

// Revert navbar to default when toggle is clicked to improve legibility, adjusting fonts accordingly
$('.navbar-toggle').on('click', function() {
    if ($(this).hasClass('collapsed')) {
        $('nav').removeClass('navbar-custom');
        $('a').removeClass('navbar-text');
        if ($('body').hasClass('fp-viewing-firstPage')) {
            $('a').attr('style', 'color:black !important');
        }
    } else {
        $('nav').addClass('navbar-custom');
        $('a').addClass('navbar-text');
        if ($('body').hasClass('fp-viewing-firstPage')) {
            $('a').attr('style', 'color:white !important');
        }
    }
});
