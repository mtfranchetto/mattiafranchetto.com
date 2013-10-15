/*
 * @author Mattia Franchetto
 * Network requests to backend
 *
 */

var app = app || {};

app.request = new function () {
    
    var self             = this,
        requestExecuting = null;
    
    
    
    var generic = function (url, success, error) {
        
        var request = $.get(url);

        request.then(function (data) {
            if (data) {
              typeof success == 'function' && success.call(this, [data]);
            } else {
              typeof error == 'function' && error.apply(this, [null]);
            }
            
            requestExecuting = null;
        });

        request.fail(function (obj, status, xhr) {
            if (status != 'abort' && typeof error == 'function') {
              error(obj, status, xhr);
            }
            
            requestExecuting = null;
        });

        requestExecuting = request;
        
        return request;
    };
    
    /*
     * @param tag: used to fetch the right templates
     *
     * Used to load a templates from the server
     *
     */
    
    this.section = function (tag, success, error) {
      
        return generic('/section/' + tag, success, error);
      
    };
    
    this.blog = function (success, error) {
        
        return generic('/blog', success, error);
    }
    
    this.cancellAll = function () {
      
        try {
            requestExecuting && requestExecuting.abort();
        } catch (e) {
            //void
        }
    };
    
    this.isExecuting = function () {
        return requestExecuting != null;
    };
};