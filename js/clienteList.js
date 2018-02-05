
var ClienteList = (function(){


	var aCliente = [];

	function crearCliente(dato){

		$.post( utils.direccion()+"nuevo.php", dato, function(data) {
			var cli = Cliente(dato)
			cli.id=data.id
			aCliente.push(cli)

		  	events.publish('crearCliente',aCliente);
		},"json");

		
	}


	function leer(){

		$.post( utils.direccion()+"consulta.php", function(data) {

			for (var i=0;i<data.length;i++) {
					var cli = Cliente({
							"id":data[i].id*1,
							"nombres":data[i].nombres,
							"ciudad":data[i].ciudad,
							"sexo":data[i].sexo,
							"telefono":data[i].telefono,
							"fechaNacimiento":data[i].fechaNacimiento,
							"direccion":data[i].direccion,
							"provincia":data[i].provincia,
							"fechaAlta":data[i].fechaAlta
					})
					aCliente.push(cli);
				}
		  	events.publish('leer', data);
		  	events.publish('llama-modal-new')
		},"json");
	}






	function modificar(dato){

		$.post( utils.direccion()+"actualizar.php", dato, function(data) {


			for (var i = 0; i < aCliente.length; i++) {
				if(aCliente[i].id==dato.id){
					delete dato['submit']
					aCliente[i]=dato
				}
			}
		  	events.publish('modificar', aCliente);
		},"json");	
	}

	function eliminar(dato){

		$.post(utils.direccion()+"eliminar.php", dato, function(data) {

			for (var i = 0; i < aCliente.length; i++) {
				if(dato.id==aCliente[i].id){
					aCliente.splice(i,1)
				}
			}

		  	events.publish('eliminar', aCliente);
		},"json");
	}

	return {
		crearCliente:crearCliente,
		leer:leer,
		modificar:modificar,
		eliminar:eliminar
	}

})()