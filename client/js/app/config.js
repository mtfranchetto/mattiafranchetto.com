/*
 * @author Mattia Franchetto
 * Save tags / variables to later use
 *
 */

var app = app || {};

app.config = new function () {
    
    var self             = this;
    
    // classes for section-injected content management
    
    this.TAG_ABOUT      = 'about',
    this.TAG_WORK       = 'work',
    this.TAG_CONTACT    = 'contact';
    this.TAG_BLOG       = 'blog';
    
    // URLs
    
    this.URL_BLOG       = 'http://mtfranchetto.tumblr.com/';
    
    
    //settings
    
    this.PROP_GLOBAL_ANIMATION_TIME = 250;
    
    this.BASE_PAGE_TITLE = 'mattia franchetto';
};