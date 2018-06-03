var Eventos = (function($) {
    var baseUrl = "https://apis.bimo.com/eventosapi";
    var apikey = "?api_key=" + GlobalConfig.apikey;
    var getAll = function(cb) {
        $.ajax({
            url: baseUrl + "/all" + apikey,
            method: "get",
            async: true,
            success: function(data) {
                cb(data);
            },
            error: function(err) {
                console.log("Error in getAll ", err);
            }
        });
    }

    var eventosPorFolioArtista = function(folio_artista, cb) {
        var eventosByFolioEndpoint = `https://apis.bimo.com/eventosapi/datos_eventos/${folio_artista}?api_key=${GlobalConfig.apikey}`;
        $.ajax({
            url: eventosByFolioEndpoint,
            method: 'GET'
        }).done(function(resp){
            cb(resp);
        }).fail(function(){
            alert("Error con la conexion al servidor...");
        });
    }

    var asientosPorFuncionId = function(id_funcion, seccion, cb) {
        var asientosPorFuncionIdEndpoint = `https://apis.bimo.com/eventosapi/all-seats/${id_funcion}/${seccion}?api_key=${GlobalConfig.apikey}`;
        $.ajax({
            url: asientosPorFuncionIdEndpoint,
            method: 'GET'
        }).done(function(resp){
            cb(resp);
        }).fail(function(){
            alert("Error con la conexion al servidor...");
        });
    }

    var preciosPorEvento = function(folio_evento, cb) {
        var preciosPorEventoEndpoint = `https://apis.bimo.com/eventosapi/preciosporevento/${folio_evento}?api_key=${GlobalConfig.apikey}`;
        $.ajax({
            url: preciosPorEventoEndpoint,
            method: 'GET'
        }).done(function(resp){
            cb(resp);
        }).fail(function(){
            alert("Error con la conexion al servidor...");
        });
    }

    var guardarReservacion = function(no_tarjeta, cvc, cb){
        var params = (new URL(window.location.href)).searchParams;
        var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
        var localDate = (new Date(Date.now() - tzoffset)).toISOString().slice(0, 19).replace('T', ' ');
        localDate=localDate.split(" ");
        var saveEndpoint = `https://apis.bimo.com/eventosapi/save/${params.get("funcion_id")}/${params.get("folio_artista")}/${params.get("seccion")}/${params.get("asientos")}/${no_tarjeta}/${cvc}/${localDate[0]}/${localDate[1]}/${params.get("total")}?api_key=${GlobalConfig.apikey}`;
        var num_promo = params.get("num_promo");
        if(num_promo) {
            saveEndpoint = `https://apis.bimo.com/eventosapi/save_wpromo/${params.get("funcion_id")}/${params.get("folio_artista")}/${params.get("seccion")}/${params.get("asientos")}/${no_tarjeta}/${cvc}/${localDate[0]}/${localDate[1]}/${params.get("total")}/${num_promo}?api_key=${GlobalConfig.apikey}`;
        }
        
        $.ajax({
            url: saveEndpoint,
            method: 'GET'
        })
        .done(function(resp){ cb(resp) })
        .fail(function(){
            alert("Error con la conexion al servidor...");
        });
    }

    var eventosReservadosPorTitular = function(no_tarjeta, cb) {
        var eventosReservadosPorTitularEndpoint = `https://apis.bimo.com/eventosapi/asientos-reservados-por-titular/${no_tarjeta}?api_key=${GlobalConfig.apikey}`;
        $.ajax({
            url: eventosReservadosPorTitularEndpoint,
            method: 'GET'
        }).done(function(resp){
            cb(resp);
        }).fail(function(){
            alert("Error con la conexion al servidor...");
        });
    } 
    
    var datosEventos = function(id_funcion, cb) {
        var getDatosEndpoint = `https://apis.bimo.com/eventosapi/eventos-por-id/${id_funcion}?api_key=${GlobalConfig.apikey}`;
        $.ajax({
            url: getDatosEndpoint,
            method: 'GET'
        }).done(function(resp){
            cb(resp);
        }).fail(function(){
            alert("Error con la conexion al servidor...");
        });
    } 
    
    var getDatos = function(no_tarjeta, cb) {
        var getDatossEndpoint = `https://apis.bimo.com/eventosapi/get-datos/${no_tarjeta}?api_key=${GlobalConfig.apikey}`;
        $.ajax({
            url: getDatossEndpoint,
            method: 'GET'
        }).done(function(resp){
            cb(resp);
        }).fail(function(){
            alert("Error con la conexion al servidor...");
        });
    } 
    
     var funcAsociadas = function(no_tarjeta, cb) {
        var funcAsociadasEndpoint = `https://apis.bimo.com/eventosapi/funciones-asociadas/${no_tarjeta}?api_key=${GlobalConfig.apikey}`;
        $.ajax({
            url: funcAsociadasEndpoint,
            method: 'GET'
        }).done(function(resp){
            cb(resp);
        }).fail(function(){
            alert("Error con la conexion al servidor...");
        });
    } 
    
    return {
        getAll: getAll,
        eventosPorFolioArtista: eventosPorFolioArtista,
        asientosPorFuncionId: asientosPorFuncionId,
        preciosPorEvento: preciosPorEvento,
        guardarReservacion: guardarReservacion,
        eventosReservadosPorTitular: eventosReservadosPorTitular,
        datosEventos: datosEventos,
        getDatos: getDatos,
        funcAsociadas: funcAsociadas
    }
})(jQuery);