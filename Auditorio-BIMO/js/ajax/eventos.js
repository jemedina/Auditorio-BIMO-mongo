var Eventos = (function($) {
    var apikey = "?api_key=" + GlobalConfig.apikey;
    var port = "5000";
    var endpoint = "funciones";
    var getAll = function(cb) {
        $.ajax({
            url: `${GlobalConfig.host}:${port}/${endpoint}/all`,
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
        var eventosByFolioEndpoint = `${GlobalConfig.host}:${port}/${endpoint}/datos_eventos/${folio_artista}?api_key=${GlobalConfig.apikey}`;
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
        var asientosPorFuncionIdEndpoint = `${GlobalConfig.host}:${port}/${endpoint}/all-seats/${id_funcion}/${seccion}?api_key=${GlobalConfig.apikey}`;
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
        var preciosPorEventoEndpoint = `${GlobalConfig.host}:${port}/${endpoint}/preciosporevento/${folio_evento}?api_key=${GlobalConfig.apikey}`;
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
        var saveEndpoint = `${GlobalConfig.host}:${port}/${endpoint}/save/${params.get("funcion_id")}/${params.get("folio_artista")}/${params.get("seccion")}/${params.get("asientos")}/${no_tarjeta}/${cvc}/${localDate[0]}/${localDate[1]}/${params.get("total")}?api_key=${GlobalConfig.apikey}`;
        var num_promo = params.get("num_promo");
        if(num_promo) {
            saveEndpoint = `${GlobalConfig.host}:${port}/${endpoint}/save_wpromo/${params.get("funcion_id")}/${params.get("folio_artista")}/${params.get("seccion")}/${params.get("asientos")}/${no_tarjeta}/${cvc}/${localDate[0]}/${localDate[1]}/${params.get("total")}/${num_promo}?api_key=${GlobalConfig.apikey}`;
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
        var eventosReservadosPorTitularEndpoint = `${GlobalConfig.host}:${port}/${endpoint}/asientos-reservados-por-titular/${no_tarjeta}?api_key=${GlobalConfig.apikey}`;
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
        var getDatosEndpoint = `${GlobalConfig.host}:${port}/${endpoint}/eventos-por-id/${id_funcion}?api_key=${GlobalConfig.apikey}`;
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
        var getDatossEndpoint = `${GlobalConfig.host}:${port}/${endpoint}/get-datos/${no_tarjeta}?api_key=${GlobalConfig.apikey}`;
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
        var funcAsociadasEndpoint = `${GlobalConfig.host}:${port}/${endpoint}/funciones-asociadas/${no_tarjeta}?api_key=${GlobalConfig.apikey}`;
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