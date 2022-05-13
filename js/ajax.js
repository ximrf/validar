$(document).ready(function() {
	$('formulario').validate({
		submitHandler: function() {
			$.post("insertar.php"), {
				nombre: $('#nombre').val(),
				apaterno: $('#apaterno').val(),
				amaterno: $('#amaterno').val()
			},
			function(data, status){
				alert("Datos: "+ data + " Estatus: " + status);
				$('#formulario').trigger('reset');
			});
		},
		rules: {
			nombre: {
				required: true
			},
			apaterno: {
				required: true
			},
			amaterno{
				required: true
			},
			messages: {
				nombre: {
					required: "Por favor, inserte un nombre"
				},
				apaterno: {
					required: "Por favor, inserte un apellido paterno"
				},
				amaterno: {
					required: "Por favor, inserte un apellido materno"
				}
			}
		});

});
