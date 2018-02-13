$(document).ready(function() {
	
})





Handlebars.registerHelper('fechaReverse', function(options) {
  //options es el valor que le paso al helper

  var fecha_r = options.split(" ",1);

  var fecha = fecha_r[0].split("-").reverse().join("/");

  return fecha;
});

