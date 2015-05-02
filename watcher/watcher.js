function Watcher(watchDir, processDir) {
    this.watchDir = watchDir;
    this.processDir = processDir;
}

var events = require('events'),
    util = require('util');
    
util.inherits(Watcher, events.eventEmmiter);

var fs = require('fs'),
    watchDir = './watch',
    processedDir = './done';

Watcher.prototype.watch = function() {
    var watcher = this;
    fs.readdir(this.watchDir, function(err, files) {
        if (err) throw err;
        for(var index in files) {
            if (files[index] !== null) {
                watcher.emit('process', files[index]);
            }
        }
    });
};

Watcher.prototype.start = function() {
    var watcher = this;
    fs.watchFile(watchFile, function() {
        watcher.watch();
    });
};

var watcher = new Watcher(watchDir, processedDir);

watcher.on('process', function process(file) {
    var watchFile = this.watchDir + '/' + file;
    var processedFile = this.processedFile + '/' + file.toLowerCase();
   
    fs.rename(watchFile, processedFile, function(err) {
        if (err) throw err;
    });
});

watcher.start();