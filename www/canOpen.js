(function(cordova){

    function CanOpen() {
    }

    CanOpen.prototype.check = function (url, cb) {
        console.log('CanOpen Plugin: check:', url);
        cordova.exec(cb, function(){ console.log('CanOpen: No url submitted');}, 'CanOpen', 'appCanOpen', url);
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