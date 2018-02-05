/*var url = (function () {
  var direccion = "http://localhost/API/";

  return{
    direccion:direccion
  }
})()*/


Handlebars.registerHelper('fechaReverse', function(options) {
  //options es el valor que le paso al helper

  var fecha_r = options.split(" ",1);

  var fecha = fecha_r[0].split("-").reverse().join("/");

  return fecha;
});


/*function reverseFecha(dfecha) {

  var fecha = dfecha.split("/").reverse().join("/");

  return fecha;
}
*/

