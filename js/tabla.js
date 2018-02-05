(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tabla'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <tr>\r\n              <th scope=\"row\" data-id='"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "</th>\r\n              <td>"
    + alias4(((helper = (helper = helpers.nombres || (depth0 != null ? depth0.nombres : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nombres","hash":{},"data":data}) : helper)))
    + "</td>\r\n              <td>"
    + alias4(((helper = (helper = helpers.ciudad || (depth0 != null ? depth0.ciudad : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ciudad","hash":{},"data":data}) : helper)))
    + "</td>\r\n              <td>"
    + alias4(((helper = (helper = helpers.provincia || (depth0 != null ? depth0.provincia : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"provincia","hash":{},"data":data}) : helper)))
    + "</td>\r\n              <td>"
    + alias4(((helper = (helper = helpers.direccion || (depth0 != null ? depth0.direccion : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"direccion","hash":{},"data":data}) : helper)))
    + "</td>\r\n              <td>"
    + alias4(((helper = (helper = helpers.sexo || (depth0 != null ? depth0.sexo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sexo","hash":{},"data":data}) : helper)))
    + "</td>\r\n              <td>"
    + alias4(((helper = (helper = helpers.telefono || (depth0 != null ? depth0.telefono : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"telefono","hash":{},"data":data}) : helper)))
    + "</td>\r\n              <td>"
    + alias4((helpers.fechaReverse || (depth0 && depth0.fechaReverse) || alias2).call(alias1,(depth0 != null ? depth0.fechaNacimiento : depth0),{"name":"fechaReverse","hash":{},"data":data}))
    + "</td>\r\n              <td>"
    + alias4((helpers.fechaReverse || (depth0 && depth0.fechaReverse) || alias2).call(alias1,(depth0 != null ? depth0.fechaAlta : depth0),{"name":"fechaReverse","hash":{},"data":data}))
    + "</td>\r\n              <td><i class=\"fa fa-pencil-square-o btn\" aria-hidden=\"true\" data-toggle=\"modal\" data-target=\"#myModal\" id=\"btn-edit\" data-id='"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "'></i></td>\r\n              <td><i class=\"fa fa-eraser btn\" aria-hidden=\"true\" id=\"btn-del\" data-id='"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "'></i></td>\r\n            </tr>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n<div class=\"card col-12\">\r\n  <div class=\"card-body\" data-id='"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "'>\r\n    <h5 class=\"card-title\">"
    + alias4(((helper = (helper = helpers.nombres || (depth0 != null ? depth0.nombres : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nombres","hash":{},"data":data}) : helper)))
    + "</h5>\r\n  </div>\r\n  <ul class=\"list-group list-group-flush\">\r\n    <li class=\"list-group-item\">"
    + alias4(((helper = (helper = helpers.ciudad || (depth0 != null ? depth0.ciudad : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ciudad","hash":{},"data":data}) : helper)))
    + "</li>\r\n    <li class=\"list-group-item\">"
    + alias4(((helper = (helper = helpers.provincia || (depth0 != null ? depth0.provincia : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"provincia","hash":{},"data":data}) : helper)))
    + "</li>\r\n    <li class=\"list-group-item\">"
    + alias4(((helper = (helper = helpers.direccion || (depth0 != null ? depth0.direccion : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"direccion","hash":{},"data":data}) : helper)))
    + "</li>\r\n    <li class=\"list-group-item\">"
    + alias4(((helper = (helper = helpers.sexo || (depth0 != null ? depth0.sexo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sexo","hash":{},"data":data}) : helper)))
    + "</li>\r\n    <li class=\"list-group-item\">"
    + alias4(((helper = (helper = helpers.telefono || (depth0 != null ? depth0.telefono : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"telefono","hash":{},"data":data}) : helper)))
    + "</li>\r\n    <li class=\"list-group-item\">"
    + alias4((helpers.fechaReverse || (depth0 && depth0.fechaReverse) || alias2).call(alias1,(depth0 != null ? depth0.fechaNacimiento : depth0),{"name":"fechaReverse","hash":{},"data":data}))
    + "</li>\r\n    <li class=\"list-group-item\">"
    + alias4((helpers.fechaReverse || (depth0 && depth0.fechaReverse) || alias2).call(alias1,(depth0 != null ? depth0.fechaAlta : depth0),{"name":"fechaReverse","hash":{},"data":data}))
    + "</li>\r\n  </ul>\r\n  <div class=\"card-footer\">\r\n    <i class=\"fa fa-pencil-square-o btn\" aria-hidden=\"true\" data-toggle=\"modal\"  id=\"btn-edit-card\" data-id='"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "'></i>\r\n    <i class=\"fa fa-eraser btn\" aria-hidden=\"true\" id=\"btn-del-card\" data-id='"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "'></i>\r\n  </div>\r\n</div>\r\n\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\r\n<div class=\"col-md-12 d-none d-md-table\">\r\n      <table class=\"table table-striped\">\r\n          <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>Nombres</th>\r\n              <th>Ciudad</th>\r\n              <th>Provincia</th>\r\n              <th>Dirección</th>\r\n              <th>Sexo</th>\r\n              <th>Teléfono</th>\r\n              <th>Fecha nacimiento</th>\r\n              <th>Fecha Alta</th>\r\n              <th colspan=\"2\">Opciones</th>\r\n            </tr>\r\n        </thead>\r\n          <tbody>\r\n\r\n"
    + ((stack1 = helpers.each.call(alias1,depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n          </tbody>\r\n      </table>\r\n          <i class=\"fa fa-plus-square fa-3x btn\" aria-hidden=\"true\" data-toggle=\"modal\" data-target=\"#myModal\" id=\"openmodalnew\"></i>\r\n</div>\r\n\r\n\r\n\r\n\r\n<div class=\"col-md-12 d-md-none\">\r\n  <i class=\"fa fa-plus-square fa-3x btn newOnCard\" aria-hidden=\"true\" data-toggle=\"modal\" data-target=\"#myModal\" id=\"openmodalnew\"></i>\r\n\r\n"
    + ((stack1 = helpers.each.call(alias1,depth0,{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n</div>\r\n\r\n";
},"useData":true});
})();