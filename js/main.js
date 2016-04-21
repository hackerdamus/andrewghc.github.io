$(document).ready(function() {
    $('#fullpage').fullpage({
        menu: '#menu',
        anchors: ['', '', '', ''],

        onLeave: function(index, nextIndex, direction) {
            if (nextIndex === 1) {
                $('a').attr('style', 'color:white !important');
            } else {
                $('a').attr('style', 'color:black !important');
            }
        },
    });
});

$('.navbar-toggle').on('click', function() {
    if ($(this).hasClass('collapsed')) {
        $('nav').removeClass('navbar-custom');
        $('a').removeClass('navbar-text');
    } else {
        $('nav').addClass('navbar-custom');
        $('a').addClass('navbar-text');
    }
});
