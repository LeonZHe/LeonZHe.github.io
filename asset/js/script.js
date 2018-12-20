function loadInstaImage() {
    var feed = new Instafeed({
        get: 'user',
        //tagName: 'awesome',
        userId: '6076412082',
        accessToken: '6076412082.1677ed0.a19869db331646fab8cb9725fe4bb2c4',
        clientId: '02fa372b97c44c2d88d0b12100d76b19',
        sortBy: 'most-recent',
        limit: 20,
        resolution: 'standard_resolution',
    });
    feed.run();
}
function smoothScrollInit() {
    $('a.smooth-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 800, 'easeInOutExpo');
        event.preventDefault();
    });
}

$(document).ready(function () {
    "use strict";
    loadInstaImage();
}), $(window).scroll(function () {
    "use strict";
    smoothScrollInit()
});
 
