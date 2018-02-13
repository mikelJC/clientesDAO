
var clienteListView = (function() {




	function mostrarClientes(data) {
		var HTML = Handlebars.templates.tabla(data);
    	document.getElementById("cont-tabla").innerHTML=HTML;
	}



	return{
      init: function () {
         events.subscribe('crearCliente',mostrarClientes)
         events.subscribe('leer',mostrarClientes)
         events.subscribe('modificar',mostrarClientes)
         events.subscribe('eliminar',mostrarClientes)
      }
	}
	
})()

clienteListView.init();
ClienteList.leer();


    $('#cont-tabla').on("click","#btn-del",function() {

    	var a = $(this).parent().parent()
    	var id = a.children().first().data('id')

    	var cli = Cliente({"id":id})

      var resp = confirm("¿estas seguro de borrar?")

      if(resp){
        ClienteList.eliminar(cli)
      }

	});
	
    $('body').on("click","#openmodalnew, #btn-edit",function() {

        var aTitles = []

        if($(this).attr('id')=="openmodalnew"){
            var data = {"tipoEvent":"Nuevo Cliente","nombre":"","ciudad":"","sexo":"","telefono":"","fechaNacimiento":"","tipo":"newcli","id":""};
            events.publish('llama-modal-new', data);
        }else {

            var aTitles = []

            var id = $(this).closest('tr').find('th').attr('data-id')

            aTitles.push(id)

            $(this).closest('tr').children().each(function( index) {
              if(index!=0){
                aTitles.push($(this).text())
              }
            });

            var data = {"tipoEvent":"Editar Cliente","nombre":aTitles[1],"ciudad":aTitles[2],"provincia":aTitles[3],"direccion":aTitles[4],"sexo":aTitles[5],"telefono":aTitles[6],"fechaNacimiento":aTitles[7],"fechaAlta":aTitles[8],"tipo":"editcli","id":aTitles[0]};
            if(data.sexo=="M"){data.sexo=false}else{data.sexo=true}
            events.publish('llama-modal-new', data);
        }
	});



    $('#cont-tabla').on("click","#btn-del-card, #btn-edit-card, #btn-loc-card" ,function() {

    	var dataId = $(this).attr('data-id')

    	var res = $('tbody i[data-id="'+dataId+'"]')

    	if($(this).attr('id')=="btn-edit-card"){
    		res[0].click()
    	}else if ($(this).attr('id')=="btn-del-card") {
        res[1].click()
      }else{
    		res[2].click()
    	}


	});
