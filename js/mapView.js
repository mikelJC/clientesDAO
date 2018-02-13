var mapaView = (function() {


  function nuevoMapaModal(coordenadas) {

    //metemos la plantilla en la variable
    var modalMap = Handlebars.templates.modalmap();

      $('#vista-modal-map').html(modalMap);  

      $('#myModal2').on('shown.bs.modal', function () {

          var location = coordenadas; 

        //llamamos a pintar el mapa

        events.publish('pinta-mapa',location)
      });   

      // sacamos el modal a la vista del usuario
      $('#myModal2').modal('toggle')  
    }

	
	return{
      init: function () {

        events.subscribe('llama-modal-mapa',nuevoMapaModal)
      }
	}
})()

mapaView.init();




$('body').on("click","#btn-loc",function() {

  var aTitles = []

    var id = $(this).closest('tr').find('th').attr('data-id')

      aTitles.push(id)

      $(this).closest('tr').children().each(function( index) {
        if(index!=0){
          aTitles.push($(this).text())
        }
      });

      var data = {"tipoEvent":"Editar Cliente","nombre":aTitles[1],"ciudad":aTitles[2],"provincia":aTitles[3],"direccion":aTitles[4],"sexo":aTitles[5],"telefono":aTitles[6],"fechaNacimiento":aTitles[7],"fechaAlta":aTitles[8],"tipo":"editcli","id":aTitles[0]};

      events.publish('tomar-coordenadas', data);
  })
