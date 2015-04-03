'use strict';
var PLUGIN_NAME = 'gulp-ng-module-sort';

var pathUtil = require('path'),
    through = require('through2'),
    gulpUtil = require('gulp-util'),
    PluginError = gulpUtil.PluginError;

function gulpNgModuleSort(options) {
    options = options || {};

    if(!!options) {
        options.fileType = '.js';
    }

    var moduleFiles = [];
    var otherFiles = [];
    var sortedFiles = [];

    return through.obj(onFile, onEnd);

    function onFile(file, enc, cb) {
        if(!file) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Error reading file stream'));
            return cb();
        }

        var absolutePath = file.path;
        var ext = pathUtil.extname(absolutePath);
        if(ext === options.fileType) {
                var baseFilename = pathUtil.basename(absolutePath, ext).toLowerCase()
                var parentDirectory = pathUtil.dirname(absolutePath).split('\\').slice(-1)[0];

                if(!parentDirectory || parentDirectory.length < 1) {
                    var message = 'Parent directory not detected. Matching: fileType: ' + options.fileType;
                    this.emit('error', new PluginError(PLUGIN_NAME, message), {
                        fileName: file.path
                    });
                    return cb();
                }

                if(baseFilename.toLowerCase() === parentDirectory.toLowerCase()) {
                    moduleFiles.push(file);
                } else {
                    otherFiles.push(file);
                }
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

module.exports = gulpNgModuleSort;
