var __path = require('path');
var __through = require('through2');

module.exports = function(options) {
    options = options || {};

    if(!!options) {
        options.fileType = '.js';
    }

    var moduleFiles = [];
    var otherFiles = [];
    var sortedFiles = [];

    return __through.obj(onFile, onEnd);

    function onFile(file, enc, cb) {
        //TODO: Add Gulp error handling. Throw proper gulp stream errors.
        var absolutePath = file.path;
        var ext = __path.extname(absolutePath);
        switch (ext) {
            case options.fileType:
                var baseFilename = __path.basename(absolutePath, ext).toLowerCase()
                var parentDirectory = __path.dirname(absolutePath).split('\\').slice(-1)[0];
                if(baseFilename.toLowerCase() === parentDirectory.toLowerCase()) {
                    moduleFiles.push(file);
                } else {
                    otherFiles.push(file);
                }
                break;
        }
        cb();
    }
    function onEnd(cb) {
        var that = this;
        sortedFiles = moduleFiles.concat(otherFiles);
        sortedFiles.forEach(function(file) {
            that.push(file);
        });
        cb();
    }
};
