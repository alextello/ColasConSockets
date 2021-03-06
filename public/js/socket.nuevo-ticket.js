// Comando para establecer la conexion

var socket = io();
var label = $('#lblNuevoTicket');
socket.on('connect', function () {
	console.log('Conectado al servidor');
});

socket.on('estadoActual', function (resp) {
	label.text(resp.actual);
});

socket.on('disconnect', function () {
	console.log('Desconectado al servidor');
});

$('button').on('click', function () {
	// Enviar información
	socket.emit('siguienteTicket', null, function (siguienteTicket) {
		label.text(siguienteTicket);
	});
});
