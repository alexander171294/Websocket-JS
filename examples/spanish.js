
// wsjs( IP/DOMAIN, PORT, PARSEAR_JS)
var socket = new wsjs('192.168.1.2', 8088);

// funcion de conexion satisfactoria
var conectado = function(){ console.log('SOCKET CONECTADO A '+this.server+':'+this.port); };
// funcion de desconexion
var desconectado = function(){ console.log('SOCKET DESCONECTADO'); };
// funcion de error
var error = function(error){ console.log(' SOCKET ERROR: '+error); };

// conectarse, utilizando las funciones
socket.connect(conectado, desconectado, error);

// enviar un mensaje y establecer la función cuando se reciba una respuesta al mensaje enviado
// si PARSEAR_JS es verdadero, el primer parametro puede ser un objeto y será transformado en JSON
// en la respuesta se recibe un json y será parseado a un objeto de javascript
socket.send({'action':'welcome'}, function(msg){ console.log('respuesta a welcome: '+msg.respuesta); });

// si PARSEAR_JS no es true (por defecto es true), entonces los mensajes se envian y reciben en texto
// var socket = new wsjss('192.168.1.2', 8088, false);