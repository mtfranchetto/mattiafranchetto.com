/*
 * @author Mattia Franchetto
 * Page UI/UX manager
 *
 */

var app = app || {};

app.ui = new function () {
    
    var self = this;
    
    this.hideNavBar = function () {
        /mobi/i.test(navigator.userAgent) && setTimeout(function () {
            if (!pageYOffset) {
                window.scrollTo(0, 1);
                app.ui.fitWindow().fitParentContent();
            }
        }, 500);
    }
};