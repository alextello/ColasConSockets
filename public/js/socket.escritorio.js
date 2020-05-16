// Comando para establecer conexion
var socket = io();

var searchParams = new URLSearchParams(window.location.search);
if (!searchParams.has('escritorio')) {
	window.location = 'index.html';
	throw new Error('El escritorio es necesario');
}
var escritorio = searchParams.get('escritorio');
var label = $('small');

$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function () {
	socket.emit('atenderTicket', { escritorio: escritorio }, function (resp) {
		if (resp.escritorio) {
			label.text('Ticket: ' + resp.numero);
		} else {
			alert('No hay mas tickets');
			label.text('No hay más tickets');
		}
	});
});
