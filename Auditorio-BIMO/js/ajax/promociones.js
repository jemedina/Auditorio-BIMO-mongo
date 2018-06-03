var Promociones = (function($) {
    var apikey = "?api_key=" + GlobalConfig.apikey;
    var port = "5001";
    var endpoints = "promos";
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


    return {
        getAll: getAll
    }
})(jQuery);