(function(cordova){

    function CanOpen() {
    }

    CanOpen.prototype.check = function (opts, cb, err) {
        console.log('CanOpen Plugin: check:', opts);
        cordova.exec(cb, err, 'CanOpen', 'appCanOpen', deserialise(opts));
    };
    
    cordova.addConstructor(function() {
        if(!window.plugins) window.plugins = {};
        window.plugins.canopen = new CanOpen();
    });

    // Deserialises the object to an array of strings
    function deserialise(obj){
        var arr = [];
        for(key in obj){
          arr.push(obj[key]);
        }
        return arr;
    }

})(window.cordova || window.Cordova);