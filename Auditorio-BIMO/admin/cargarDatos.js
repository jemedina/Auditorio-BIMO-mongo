(function(){
    $(document).ready(function () {

        //Campos para agregar funciones
        var folioEventoSelect = $("#inputFolioEvento");
        var inputID = $("#inputID");
        var inputFecha = $("#inputFecha");
        var inputHorario = $("#inputHorario");

        //Campos para agregar promociones
        var inputNoPromo = $("#inputNoPromo");
        var inputDesc = $("#inputDesc");
        var inputFinicio = $("#inputFinicio");
        var inputf_final = $("#inputf_final");
        var inputDescuento = $("#inputDescuento");
        
        if(folioEventoSelect.length) {
            Eventos.getAll(function(resp) {
                $.each(resp, function(i, elem){
                    folioEventoSelect.append($('<option>', {
                        value: elem.folio,
                        text: `${elem.folio} (${elem.nombre})`
                    }));
                });
            });

            $("#addFuncionBtn").click(function(evt){
                evt.preventDefault()
                Eventos.addfuncion(folioEventoSelect.val(), inputID.val(), inputFecha.val(), inputHorario.val(), function(resp){
                    if(resp == true){
                        alert("Funcion agregada correctamente!");
                        inputID.val('');
                        inputFecha.val('');
                        inputHorario.val('');
                    }
                });
            });
        }
        
        if(inputNoPromo.length) {
            $("#addPromoBtn").click(function(evt){
                evt.preventDefault()
                Promociones.addpromo(inputNoPromo.val(), inputDesc.val(), inputFinicio.val(), inputf_final.val(),inputDescuento.val(), function(resp){
                    if(resp == true){
                        alert("Promocion agregada correctamente!");
                        inputNoPromo.val('');
                        inputDesc.val('');
                        inputFinicio.val('');
                        inputf_final.val('');
                        inputDescuento.val('');
                    }
                });
            });
        }


        $("#genBtn").click(function(e){
            e.preventDefault();
            var numero = Math.floor(Math.random()*1000000 + 1000);
            $("#inputNoPromo").val(numero);
        });

        ////////////////////////////Cabios logic:

        if($("#selectFolio").length) {
            Eventos.getAll(function(folios) {
                $("#selectFolio").empty();
                folios.forEach(function(a){
                    option = document.createElement("option");
                    option.value = a.folio;//folios.text
                    option.text = `${a.folio} (${a.nombre})`;
                    $('#selectFolio').append(option);
                });

                var updateFunciones = function(evt) {
                    $("#selectFunciones").empty();
                    var folio = evt && evt.currentTarget && evt.currentTarget.value || $("#selectFolio").val();
                    var index =folios.findIndex(evento => evento.folio == parseInt(folio));
                    funciones = folios[index].funciones;
                    funciones.forEach(function(func) {
                        var option = document.createElement("option");
                        option.value = func.id;//ids.value
                        option.text = `${func.id} (${func.fecha} - ${func.hora})`;//ids.text
                        $('#selectFunciones').append(option);
                    });
                }

                updateFunciones();

                $("#selectFolio").on('change', updateFunciones);

                $("#EliminarFunc").on('click', function(evt) {
                    evt.preventDefault();
                    Eventos.delfuncion(
                        $("#selectFolio").val(),
                        $("#selectFunciones").val(),
                        function(resp){
                            alert("Funcion eliminada!");
                            window.location.reload();
                        });
                });

                $("#ScambiosFunc").on('click', function(evt) {
                    evt.preventDefault();
                    Eventos.updatefuncion(
                        $("#selectFolio").val(),
                        $("#selectFunciones").val(),
                        $("#inputFecha").val(),
                        $("#inputHorario").val(),
                        function(resp){
                            alert("Funcion actualizada!");
                            window.location.reload();
                        });
                });          

            });

            if($("#selectPromos").length) {
                Promociones.getAll(function(promos){
                    console.log(promos);
                    $("#selectPromos").empty();
                    promos.forEach(function(a){
                        option = document.createElement("option");
                        option.value = a.num_promo;//promos.value
                        option.text = `${a.num_promo} (${a.descripcion})`;//promos.text
                        $('#selectPromos').append(option);
                    });
                    var updateFields = function(evt){
                        var promo = promos.find(promo => promo.num_promo == $("#selectPromos").val());
                        $("#inputDesc").val(promo.descripcion);
                        var fIniArr = promo.fecha_inicio.split("/");
                        var fFinArr = promo.fecha_fin.split("/");
                        $("#inputFinicio").val(fIniArr[2] +"-"+ fIniArr[0] +"-"+ fIniArr[1]);
                        $("#inputf_final").val(fFinArr[2] +"-"+ fFinArr[0] +"-"+ fFinArr[1]);
                        $("#inputDescuento").val(promo.descuento);
                    }
                    updateFields();
                    $("#selectPromos").on('change', updateFields);
                });  
            }

            $("#EliminarPromo").click(function(evt) {
                evt.preventDefault();
                Promociones.delpromo($("#selectPromos").val(), function(resp) {
                    alert("Promo eliminada!");
                    window.location.reload();
                });
            });
            $("#ScambiosPromo").click(function(evt){
                evt.preventDefault();
                Promociones.updatepromo($("#selectPromos").val(), $("#inputDesc").val(), $("#inputFinicio").val(), $("#inputf_final").val(),$("#inputDescuento").val(), function(resp){
                    if(resp == true){
                        alert("Promocion agregada actualizada!");
                        window.location.reload();
                    }
                });
            });


        } 
    });

})();