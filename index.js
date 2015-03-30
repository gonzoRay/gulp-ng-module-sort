'use strict';
const PLUGIN_NAME = 'gulp-ng-module-sort';

var __path = require('path'),
    __through = require('through2'),
    __gutil = require('gulp-util'),
    __PluginError = __gutil.PluginError;

function gulpNgModuleSort(options) {
    options = options || {};

    if(!!options) {
        options.fileType = '.js';
    }

    var moduleFiles = [];
    var otherFiles = [];
    var sortedFiles = [];

    return __through.obj(onFile, onEnd);

    function onFile(file, enc, cb) {
        if(!file) {
            this.emit('error', new __PluginError(PLUGIN_NAME, 'Error reading file stream'));
            return cb();
        }

        var absolutePath = file.path;
        var ext = __path.extname(absolutePath);
        if(ext === options.fileType) {
                var baseFilename = __path.basename(absolutePath, ext).toLowerCase()
                var parentDirectory = __path.dirname(absolutePath).split('\\').slice(-1)[0];

                if(!parentDirectory || parentDirectory.length < 1) {
                    var message = 'Parent directory not detected. Matching: fileType: ' + options.fileType;
                    this.emit('error', new __PluginError(PLUGIN_NAME, message), {
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
