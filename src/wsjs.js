function wsjs(server, port)
{
    this.server = server;
    this.port = port;
    this.socket = null;
    this.callback = '';
    
    this.connect = function(callback){
        var wsUri = 'ws://'+this.server+':'+this.port;  
        this.socket = new WebSocket(wsUri);
    };
}