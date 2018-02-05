var Cliente = function(datoJson){

	return{
		id:datoJson.id,
		nombres:datoJson.nombres,
		ciudad:datoJson.ciudad,
		sexo:datoJson.sexo,
		telefono:datoJson.telefono,
		fechaNacimiento:datoJson.fechaNacimiento,
		direccion:datoJson.direccion,
		provincia:datoJson.provincia,
		fechaAlta:datoJson.fechaAlta
	}

}