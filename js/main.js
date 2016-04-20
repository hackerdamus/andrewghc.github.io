$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: false,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        resize: false,
        sectionsColor: ['#ccc', '#fff'],
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction) {
            if (nextIndex === 1) {
                $('a').attr('style', 'color:white !important');
            } else {
                $('a').attr('style', 'color:black !important');
            }
        },
        afterLoad: function(anchorLink, index) {},
        afterRender: function() {},
        afterResize: function() {},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {}
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
