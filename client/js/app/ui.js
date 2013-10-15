/*
 * @author Mattia Franchetto
 * Page UI/UX manager
 *
 */

var app = app || {};

app.ui = new function () {
    
    var self                   = this,
        isAnimatingMainContent = false;
    
    this.showLoadIndicator = function () {
        
        $('section.injected-content').find('.load-indicator-overlay').show();
      
      
        return this;
    };
    
    this.hideLoadIndicator = function () {
      
        $('section.injected-content').find('.load-indicator-overlay').hide();
      
        
        return this;
    };
    
    this.toggleLoadIndicator = function () {

        var load = $('section.injected-content').find('.load-indicator-overlay');
        
        if (load.is(':visible')) {
            load.hide();
        } else {
            load.show();
        }
        
        return this;
      
    };
    
    this.isAnimatingMainContent = function () {
        
        return isAnimatingMainContent;
    };
    
    /*
     * Enlarge main section view
     */
    
    this.expandParentContent = function () {
        
        isAnimatingMainContent = true;
        
        this.fitParentContent();
        
        setTimeout(function () {
            isAnimatingMainContent = false;
        }, app.config.PROP_GLOBAL_ANIMATION_TIME);
            
        return this;
    };
    
    this.fitParentContent = function () {
        
        var wrapperWidth = $('#content-parent').width(),
            wrapperHeight = $('#content-parent').height(),
            navHeight = $('nav').height();
        
        if (location.hash) {
            $('section.injected-content')
                .width(wrapperWidth - (wrapperWidth / 100 * 6)) //delete padding
                .height(wrapperHeight - (wrapperWidth / 100 * 6)) //delete padding
                .css('opacity', 1);
        } else {
            $('section.home')
                .width(wrapperWidth - (wrapperWidth / 100 * 6)) //delete padding
                .height(wrapperHeight - navHeight - (wrapperWidth / 100 * 6)) //delete padding
        }
        
        return this;
              
    };
    
    /*
     * Collapse main section view
     */
    
    this.collapseParentContent = function () {
        
        $('section.injected-content')
            .width(0)
            .height(0)
            .css('opacity', 0);
            
        return this;
    };
    
    /*
     * Load into the main section view the fetched content
     */
    
    this.injectParentContent = function (tag, html) {
        
        var parent = $('section.injected-content');
        
        this.emptyParentContent();
        
        //class handling for styling correctly the main section
        parent.removeClass([app.config.TAG_ABOUT, app.config.TAG_WORK, app.config.TAG_CONTACT].join(" "));
        parent.addClass(tag);
        
        parent.append(html);
        
        return this;
    };
    
    this.emptyParentContent = function () {
        
        $('section.injected-content').children().each(function (i, el) {
            if (i > 0) $(el).remove(); //remove only the real content (not the loader)
        });
        
        return this;
    };
    
    /*
     * Calculate content dimension giving the total window height minus the footer size
     */
    
    this.fitWindow = function () {
        
        var footerHeight = $('footer').height(),
            headerHeight = $('header').height(),
            contentHeight = $(window).height() - footerHeight - headerHeight;
            
        $('#content-parent').height(contentHeight);
        
        return this;
    };
};