var clienteView = (function() {


	function nuevoClienteModal(data) {
		var HTML = Handlebars.templates.modal(data);

    	$("#vista-modal").html(HTML);
    	$( function() {$( "#datepicker" ).datepicker({dateFormat: "dd/mm/yy"});});
      $( function() {$( "#datepicker2" ).datepicker({dateFormat: "dd/mm/yy"});});
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
    var data = {"submit":1,"nombres":"","ciudad":"","provincia":"","direccion":"","sexo":"","telefono":"","fechaNacimiento":"","fechaAlta":""};

    
    data.nombres= $('#nombre').val()
    data.ciudad= $('#ciudad').val()
    data.provincia = $('#provincia').val()
    data.direccion = $('#direccion').val()
    data.sexo= $('input[name=seleSexo]:checked','form').val()
    data.telefono= $('#telefono').val()
    data.fechaNacimiento= utils.reverseFecha($('#datepicker').val())
    data.fechaNacimiento = data.fechaNacimiento.replace(/\//g , "-")
    data.fechaAlta= utils.reverseFecha($('#datepicker2').val())
    data.fechaAlta = data.fechaAlta.replace(/\//g , "-")

    if($(this).attr('id')=="newcli"){
      ClienteList.crearCliente(data)
    }else{
      data.id = $('#id').attr('value')
      ClienteList.modificar(data)
    }
  
  });