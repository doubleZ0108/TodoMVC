(function(){
    if(!window.localStorage){
        alert("您的浏览器不支持Local Storage");
        return false;
    } else {
        let key = "todos";
        Object.assign(model, {
            init: function(callback){
                let data = window.localStorage.getItem(key);
                if(data){ 
                    model.data = JSON.parse(data);
                }
                if(callback) { callback(); }
            },
            flush: function(callback){
                window.localStorage.setItem(key, JSON.stringify(model.data));
                if(callback) { callback(); }
            }
        });
    }
})()