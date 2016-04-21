$(document).ready(function() {
    var noRepeat = true;
    $('#fullpage').fullpage({
        // Navigation options for fullpage.js
        menu: '#menu',
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
        navigationTooltips: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
        // Handle events when moving between slides
        onLeave: function(index, nextIndex, direction) {
            // Animate slide arrows to make it more obvious the page can be scrolled left & right
            if (nextIndex === 3 && noRepeat) {
                noRepeat = false;
                $('.navbar-brand-header').notify('Click the arrows or use your left and right arrow keys to scroll this page!', {
                    className: "success",
                    position: "right center"
                });
                $('.fp-controlArrow').addClass('animated zoomInUp');
                setTimeout(function() {
                    $('.fp-controlArrow').removeClass('zoomInUp');
                    $('.fp-controlArrow').addClass('shake');
                }, 1000);
            }
            // Change navbar text colour on first and other slides
            if (nextIndex === 1) {
                $('a').attr('style', 'color:white !important');
            } else {
                $('a').attr('style', 'color:black !important');
            }
        },
    });
});

// Revert navbar to default when toggle is clicked to improve legibility
$('.navbar-toggle').on('click', function() {
    if ($(this).hasClass('collapsed')) {
        $('nav').removeClass('navbar-custom');
        $('a').removeClass('navbar-text');
    } else {
        $('nav').addClass('navbar-custom');
        $('a').addClass('navbar-text');
    }
});
