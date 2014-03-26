/*
 * @author Mattia Franchetto
 * Bind listeners on DOM elements
 *
 */

var app = app || {};

app.listeners = new function () {
    
    var self = this;
    
    /*
     * Set listeners on the page
     */
    
    this.init = function () {

    	$(window).scroll(function() {
            var widthQuery = { matches: true };
            
            if (window.matchMedia) {
                widthQuery = window.matchMedia("(max-width: 68em)");
            }

		    if (document.body.scrollTop > 50) {
		        $('header').height(60);
		    } else if (!widthQuery.matches) {
		    	$('header').height(110);
		    }
		});
        
        return this;
    };
    
};