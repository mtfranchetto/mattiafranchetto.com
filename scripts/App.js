var $ = require('jquery');

$(document).ready(function () {
    $(window).scroll(function () {
        var widthQuery = {matches: true};

        if (window.matchMedia) {
            widthQuery = window.matchMedia("(max-width: 68em)");
        }

        if (document.body.scrollTop > 50) {
            $('header').height(60);
        } else if (!widthQuery.matches) {
            $('header').height(110);
        }
    });

    (function () {
        /mobi/i.test(navigator.userAgent) && setTimeout(function () {
            if (!pageYOffset) {
                window.scrollTo(0, 1);
            }
        }, 500);
    })();
});