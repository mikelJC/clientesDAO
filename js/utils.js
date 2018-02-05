var utils = (function () {


function direccion() {
	var direccion = "http://localhost/API/";

	return direccion
}
 


function reverseFecha(dfecha) {

  var fecha = dfecha.split("/").reverse().join("/");

  return fecha;
}


  return{
    direccion:direccion,
    reverseFecha:reverseFecha
  }
})()