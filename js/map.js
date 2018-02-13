var map = (function(){

    /*var mapa={};*/

	function tomarCoordenadas(datos) {
		var url = "https://maps.googleapis.com/maps/api/geocode/json?address="+datos.direccion+","+datos.ciudad+","+datos.provincia+"&key=AIzaSyCupzA9-dN9CxJDWzCcbO8RQMCyRkE1PSU"

		$.post(url, function(data) {

		  coordenadas = data.results[0].geometry.location
          events.publish("llama-modal-mapa", coordenadas)

		}, "json");
	}



	function pintaMapa(location) {
		//creación del mapa, lo inserto en el div map-canvas del modalMapa
        var map = new google.maps.Map(document.getElementById('mapa'), {
          zoom: 17,
          center: location
        });
        //parámetro para crear la marca en el mapa, en la misma posición de la dirección
        var marker = new google.maps.Marker({
          position: location,
          map: map
        });
	}

	return {
      init: function () {

        events.subscribe('tomar-coordenadas',tomarCoordenadas),
        events.subscribe('pinta-mapa',pintaMapa)
      }

	}

})()

map.init();
