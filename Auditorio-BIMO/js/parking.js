$(document).ready(function() {
    //Generar el estacionamiento:
    var init = function() {
        var c = 1; //Contador de cajones
        //c1
        for(var i = 0 ; i < 14; i++) {
            var cajonHTML = $("<div class='cajon cajonVertical cajonDisp' id='cajon"+c+"'>");
            cajonHTML.html(c);
            $(".c1").append(cajonHTML);
            c++;
        }

        //c2
        for(var i = 0 ; i < 6; i++) {
            var cajonHTML = $("<div class='cajon cajonHorizontal cajonDisp' id='cajon"+c+"'>");
            cajonHTML.html(c);
            $(".c2").append(cajonHTML);
            c++;
        }

        //c3
        for(var i = 0 ; i < 6; i++) {
            var cajonHTML = $("<div class='cajon cajonVertical cajonDisp' id='cajon"+c+"'>");
            cajonHTML.html(c);
            $(".c3").append(cajonHTML);
            c++;
        }
        var accesoHTML = $("<div class='acceso'>");
        accesoHTML.append("<span style='font-size: 18pt;'>Acceso al auditorio</span>");
        $(".c3").append(accesoHTML);

        var c4 = $("<div class='subsubfila2 c4'>");
        $(".c3").append(c4);


        //c4
        for(var i = 0 ; i < 3; i++) {
            var cajonHTML = $("<div class='cajon cajonVertical' id='cajon"+c+"'>");
            var wheelchairIconHTML = $("<br/><i class='fas fa-wheelchair fa-3x'>");
            cajonHTML.append(wheelchairIconHTML);
            c4.append(cajonHTML);
            c++;
        }
        //c0
        var cT = c - 1;
        for(var i = 6 ; i > 0; i--) {
            var cajonHTML = $("<div class='cajon cajonHorizontal cajonDisp' id='cajon"+(cT+i)+"'>");
            cajonHTML.html(cT+i);
            $(".c0").append(cajonHTML);
            c++;
        }

        //c5
        for(var i = 0 ; i < 11; i++) {
            var cajonHTML = $("<div class='cajon cajonVertical cajonDisp' id='cajon"+c+"'>");
            cajonHTML.html(c);
            $(".c5").append(cajonHTML);
            c++;
        }


        //c6
        for(var i = 0 ; i < 11; i++) {
            var cajonHTML = $("<div class='cajon cajonVertical cajonDisp' id='cajon"+c+"'>");
            cajonHTML.html(c);
            $(".c6").append(cajonHTML);
            c++;
        }
        var cajonActual;
        $('.cajonDisp').click(function() {
            $('.cajon').removeClass('cajonSelected');
            $(this).addClass('cajonSelected');
            $("#selectedCajon").text($(this).text());
            cajonActual = $(this).text();
        });

        //Cargar cajones ocupados
        var url = new URL(window.location.href);
        var funcion_id = url.searchParams.get("funcion_id"),
        cardNumber = url.searchParams.get("cardNumber");

        if(funcion_id) {
            Parking.cajonesPorFuncion(funcion_id, function(resp) {
                console.log(resp);
                $.each(resp, function(i, elem) {
                    var curCajon = $("#cajon" + elem.num_cajon);
                    curCajon.removeClass('cajonSelected');
                    curCajon.removeClass('cajonDisp');
                    curCajon.addClass('cajonNoDisp');
                    curCajon.unbind("click");
                });
            });
        } else {
            console.log("funcion_id is not present...");
        }

        $("#pagoBtn").click(function(evt) {
            evt.preventDefault();
            if(cajonActual) {
                window.location.href = "pago_estacionamiento.html?funcion_id=" + funcion_id + "&cardNumber=" + cardNumber + "&num_cajon=" + cajonActual;
            } else {
                alert("Seleccione un cajón primero");
            }
        });
        
    }

    init();
});