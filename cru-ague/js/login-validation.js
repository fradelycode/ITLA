/** @format */

function validar() {
	let usuario = document.getElementById('usuario').value;
	let contraseña = document.getElementById('clave').value;

	if (
		(usuario == 'saul' && contraseña == '1234') ||
		(usuario == 'sabrina' && contraseña == '1234') ||
		(usuario == 'jose' && contraseña == '1234')
	) {
		window.location = href = '../pages/proyect.html';
	} else {
		alert('Usuario o contraseñas incorrectos, intente de nuevo');
	}
}
