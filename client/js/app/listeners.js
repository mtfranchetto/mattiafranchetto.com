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
		    if (document.body.scrollTop > 50) {
		        $('header').height(60);
		    } else {
		    	$('header').height(110);
		    }
		});
        
        return this;
    };
    
};