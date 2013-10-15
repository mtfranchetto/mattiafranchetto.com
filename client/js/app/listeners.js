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
    
        $('nav li').click(sectionTap);
    
        $('footer li, header span').click(homeTap);
        
        $(window).resize(function () {
            
            app.ui.fitWindow().fitParentContent();
            
        });
        
        $(window).on('hashchange', hashChange);
        
        hashChange();
        
        return this;
    };
    
    /*
     * Home button handler
     * Close main content and delete all the fetched contents
     */
    
    var homeTap = function () {
        
        location.hash = '';
        
        app.request.cancellAll();
        
        app.ui
            .collapseParentContent()
            .emptyParentContent()
            .fitParentContent();
    }
    
    /*
     * Sections handler
     * Fetches content (or retrieve from cache) and enlarges main content
     */
    
    var sectionTap = function () {
        
        if (app.request.isExecuting() || app.ui.isAnimatingMainContent()) {
            return; //check for duplicates 
        }
        
        var tag = $(this).data('tag');
    
        switch (tag) {
            case app.config.TAG_ABOUT:
            case app.config.TAG_WORK:
            case app.config.TAG_CONTACT:
                loadSection(tag);
                break;
            case app.config.TAG_BLOG:
                window.open(app.config.URL_BLOG);
                break;
            default:
                break;
        }
        
    };
    
    var hashChange = function () {
        var hash = location.hash;
        
        if (!hash) {
            homeTap();

            document.title = app.config.BASE_PAGE_TITLE + ' - web & mobile developer';
        } else {
            var index = hash.indexOf('=');
            if (index > -1) {
                var section = hash.substring( index + 1 );
                loadSection(section);

                document.title = app.config.BASE_PAGE_TITLE + ' - ' + section;
            }
        }
    };
    
    var loadSection = function (tag) {

        var cacheData = app.cache.data(tag);
        
        
        var _callback = function (html) {
            
            app.ui
                 .injectParentContent(tag, html)
                 .expandParentContent()
                 .hideLoadIndicator(); 
                 
            location.hash = '!section=' + tag;
        };
        
        if (cacheData) {
            _callback(cacheData);
        } else {
            app.ui.showLoadIndicator();

            app.request.section(tag, function (html) {

                app.cache.data(tag, html, false);
                _callback(html);
        
            }, function () {
                homeTap();
            });   
        }
        
    };
    
};