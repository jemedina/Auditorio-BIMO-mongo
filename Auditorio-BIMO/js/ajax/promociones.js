var Promociones = (function($) {
    var apikey = "?api_key=" + GlobalConfig.apikey;
    var port = "443";
    var endpoint = "promosapi";
    var getAll = function(cb) {
        $.ajax({
            url:  `${GlobalConfig.host}:${port}/${endpoint}/all?api_key=${GlobalConfig.apikey}`,
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

    var addpromo = function(no_promo, descrip, f_inicio, f_final, descuento, cb) {
        $.ajax({
            url: `${GlobalConfig.host}:${port}/${endpoint}/addpromo/${no_promo}/${descrip}/${f_inicio}/${f_final}/${descuento}${apikey}`,
            method: "get",
            async: true,
            success: function(data) {
                cb(data);
            },
            error: function(err) {
                console.log("Error in addfuncion ", err);
            }
        });
    }

    var updatepromo = function(no_promo, descrip, f_inicio, f_final, descuento, cb) {
        $.ajax({
            url: `${GlobalConfig.host}:${port}/${endpoint}/updatepromo/${no_promo}/${descrip}/${f_inicio}/${f_final}/${descuento}${apikey}`,
            method: "get",
            async: true,
            success: function(data) {
                cb(data);
            },
            error: function(err) {
                console.log("Error in updatepromo ", err);
            }
        });
    }

    var delpromo = function(no_promo, cb) {
        $.ajax({
            url: `${GlobalConfig.host}:${port}/${endpoint}/delpromo/${no_promo}${apikey}`,
            method: "get",
            async: true,
            success: function(data) {
                cb(data);
            },
            error: function(err) {
                console.log("Error in delpromo ", err);
            }
        });
    }


    return {
        getAll: getAll,
        addpromo: addpromo,
        updatepromo: updatepromo,
        delpromo: delpromo
    }
})(jQuery);