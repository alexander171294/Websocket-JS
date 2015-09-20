function wsjs(server, port, jsonparse = true)
{
    this.server = server;
    this.port = port;
    this.socket = null;
    this.jsonp = jsonparse;
    
    this.process = function(msg){
            console.log(this.jsonp);
            console.log(this.callback);
            alert(msg);
            /*
             if(this.jsonp) msg = JSON.parse(msg.data);
             this.callback(msg);
            */
        };
    
    this.send = function(msg, callback){
        this.callback = callback;
        if (this.jsonp) msg = JSON.stringify(msg);
        this.socket.send(msg);
    };
    
    this.connect = function(callback, closeCallback, errorCallback){
        var wsUri = 'ws://'+this.server+':'+this.port;
        this.socket = new WebSocket(wsUri);
        this.socket.onopen = callback;
        this.socket.onclose = closeCallback;
        this.socket.onerror = errorCallback;
        this.socket.onmessage = this.process;
    };
    
}