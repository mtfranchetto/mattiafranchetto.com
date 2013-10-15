var path = require('path');
/*
 * GET home page.
 */

exports.index = function(req, res) {
   res.sendfile(path.normalize(__dirname + '/../public/index.html'));
};

/*
 * GET section template based on the tag passed.
 */

exports.section = function(req, res) {
    var tag, file;
    
    if (req.params) {
        tag = req.params.tag;
        
        if (tag) {
            file = __dirname + '/../public/templates/' + tag + '.html';
        } else {
           file = __dirname + '/../public/index.html'; 
        }
        res.sendfile(path.normalize(file));
    }
};