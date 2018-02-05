var clienteView = (function() {


	function nuevoClienteModal(data) {
		var HTML = Handlebars.templates.modal(data);
    	$("#vista-modal").html(HTML);
    	 $( function() {$( "#datepicker" ).datepicker({dateFormat: "dd/mm/yy"});});

	}

		

	return{
      init: function () {

         events.subscribe('llama-modal-new',nuevoClienteModal)
      }
	}
	
})()

clienteView.init()

  $('body').on("click","#newcli, #editcli",function() {
    //aqui damos de alta el cliente que tenemos en el modal
    var data = {"submit":1,"nombres":"","ciudad":"","sexo":"","telefono":"","fechaNacimiento":""};

    
    data.nombres= $('#nombre').attr('value')
    data.ciudad= $('#ciudad').attr('value')
    data.sexo= $('input[name=seleSexo]:checked','form').val()
    data.telefono= $('#telefono').attr('value')
    data.fechaNacimiento= utils.reverseFecha($('#datepicker').attr('value'))
    data.fechaNacimiento = data.fechaNacimiento.replace(/\//g , "-")


    if($(this).attr('id')=="newcli"){
      ClienteList.crearCliente(data)
    }else{
      data.id = $('#id').attr('value')
      ClienteList.modificar(data)
    }
    
  });
