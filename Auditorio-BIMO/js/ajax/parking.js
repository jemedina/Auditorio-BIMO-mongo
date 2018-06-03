var Parking = (function($) {
    var apikey = "?api_key=" + GlobalConfig.apikey;
    var port = "5002";
    var endpoint = "cajones";
    var cajonesPorFuncion = function(funcion_id, cb) {
        $.ajax({
            url:  `${GlobalConfig.host}:${port}/${endpoint}/cajones-ocupados/${funcion_id}`+ apikey
        }).done(function(resp) {
            cb(resp);
        }).fail(function(){
            alert("Error con la conexion al servidor...");
        });
    }

    var reservarCajon = function(id_funcion, no_tarjeta, num_cajon, cb) {
        $.ajax({
            url:  `${GlobalConfig.host}:${port}/${endpoint}/add/${id_funcion}/${no_tarjeta}/${num_cajon}`+ apikey
        }).done(function(resp) {
            cb(resp);
        }).fail(function(){
            alert("Error con la conexion al servidor...");
        });
    }

    return {
        cajonesPorFuncion: cajonesPorFuncion,
        reservarCajon: reservarCajon
    }

})(jQuery);