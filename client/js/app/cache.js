/*
 * @author Mattia Franchetto
 * Save and retrieve network responses
 *
 */

var app = app || {};

app.cache = new function () {
    
    var self             = this,
        cache            = {},
        cacheExpire      = 600000, //10 minutes
        timestamps       = {},
        keepInMemory       = {};
        
    var setTimestamp = function (tag) {
        timestamps[tag] = now();
    };
    
    var getTimestamp = function (tag) {
        return timestamps[tag] || 0;
    };
    
    var now = function () {
        return +new Date;
    };
    
    this.setCacheExpire = function (seconds) {
        if (seconds) {
            cacheExpire = seconds * 1000;
        }
        
        return this;
    };
    
    /*
     * @param tag: the key used to save/retrieve the data
     * @param set: data to save (optional)
     * @param expire: if the data expire after the cacheExpire period (optional)
     */
    
    this.data = function (tag, set, expire) {
        if (typeof set !== 'undefined') {
            setTimestamp(tag);
            cache[tag] = set;
            if (expire === false) {
                keepInMemory[tag] = true;
            }
            
            return this;
            
        } else {
            if ((now() - getTimestamp(tag) > cacheExpire) && keepInMemory[tag] !== true) {
                return false;
            } else {
                return cache[tag];
            }
        }
    };
};