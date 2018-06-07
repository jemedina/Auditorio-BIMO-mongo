(function(){
    $(document).ready(function () {

        //Cargar select/option para los eventos:
        var folioEventoSelect = $("#inputFolioEvento");
        var inputID = $("#inputID");
        var inputFecha = $("#inputFecha");
        var inputHorario = $("#inputHorario");
        
        if(folioEventoSelect.length) {
            Eventos.getAll(function(resp) {
                console.log(resp);
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
    });

    function cargaFolioFunciones(folios) {
        $("#selectFolio").empty();
        for (var a in folios) {
            option = document.createElement("option");
            option.value = 1234;//folios.value
            option.text = "1234";//folios.text
            $('#selectFolio').append(option)
        }
    }

    function cargaIDFunciones(ids) {
        $("#inputID").empty();
        for (var a in ids) {
            option = document.createElement("option");
            option.value = 1234;//ids.value
            option.text = "1234";//ids.text
            $('#inputID').append(option)
        }
    }

    function cargarDatosFunciones(fecha, horario) {
        var fecha = '2018-05-14';// Formato de AAAA-MM-DD
        var horario = '10:20'//Formato de 24 Hrs
        $('#inputFecha').val(fecha);
        $('#inputHorario').val(horario);   
    }


    function cargaNoPromos(promos) {
        $("#selectPromos").empty();
        for (var a in promos) {
            option = document.createElement("option");
            option.value = 1234;//promos.value
            option.text = "1234";//promos.text
            $('#selectPromos').append(option)
        }
    }


    function cargarDatosPromos(descripcion, f_inicio, f_final, descuento) {
        var descripcion= "Hola mundo como estan";
        var f_inicio = '2018-05-14';// Formato de AAAA-MM-DD
        var f_final = '2018-05-18';// Formato de AAAA-MM-DD
        var descuento = 20
        $('#inputDesc').val(descripcion);
        $('#inputFinicio').val(f_inicio);
        $('#inputf_final').val(f_final);
        $('#inputDescuento').val(descuento);
    }
})();