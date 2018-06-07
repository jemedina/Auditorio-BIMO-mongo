$(document).ready(function(){
    ! function(a) {
        a(function() {
            var flag=true; 
            a(".button-sent #back").hide(), a(".button-sent #continue").click(function(b) {
                if(flag===true){
                a("#area .master-card").css("transform", "rotateY(180deg)"), a(".button-sent #back").show()
                flag=false; 
                }else{
                    if(($("#number-card1").val()=="" || $("#number-card2").val()=="" || $("#number-card3").val()=="" || $("#number-card4").val()=="" || $("#card-cvc").val()=="") || $("#number-card4").val()!=$("#card-cvc").val() ){   if($("#number-card4").val()!=$("#card-cvc").val()){
                        alert("CVC y ultimos 4 digitos no corresponden");
                        console.log("campos incompletos");
                    }else{
                       alert("Campos Incompletos");
                        console.log("campos incompletos");   
                    }
                    }else{ 
                    var cardNumber = $("#number-card1").val() + $("#number-card2").val() + $("#number-card3").val() + $("#number-card4").val(); 
                    var cardCvc = $("#card-cvc").val();
                    //folio_artista=1&funcion_id=0&seccion=A1&asientos=5_5,5_6,5_7
                    var url = new URL(window.location.href);
                    var funcion_id = parseInt(url.searchParams.get("funcion_id"));
                    var folio_artista = url.searchParams.get("folio_artista");
                    var seccion = url.searchParams.get("seccion");
                    var asientos = url.searchParams.get("asientos"); 
                    var total = url.searchParams.get("total"); 
                    Eventos.guardarReservacion(cardNumber, cardCvc, function(resp) {
                        /*if(resp == true) {

                        } else {
                            alert("Lo sentimos, has intentado insertar mas de 5 asientos, por favor vuelve al menu de inicio e intenta de nuevo");
                        }*/
                    }); 
                        
                        // tiempo de actualizacion del progress
                        TIME = 60;

                        // tag progress y el parrafo
    
                        progress = document.getElementById("progress3");
                        // obtengo el valor maximo
                        max = progress.max;

                        // aumenta progresivamente el valor del meter
                        var loading = false;
                        $("#continue").on("click", functionProgress3(0,TIME, max, loading, cardNumber, funcion_id ));
                }
                    }
                   
            }), a(".button-sent #back").click(function(b) {
                a("#area .master-card").css("transform", "rotateY(0deg)"), a(this).hide()
                flag=true; 
            })
        })
    }(jQuery);
}); 

   
    function functionProgress3(i, TIME, max, loading, cardNumber, funcion_id) {
        $('#continue').prop('disabled', true);
        $('#back').prop('disabled', true);
        $('#helpbutton').prop("onclick", null);
        $('#homeBtn').removeAttr("href");
        $('#progress3_label').show();
        if(!loading){
          // actualizo
          function decrementar(i) {
            console.log("Counting", i);
            progress.value = i;
            if (i >= max){
                console.log("i->",i," max->",max);
                $('#progress3').hide();  
                loading = false;
                popupOpenClose($(".popup"), cardNumber, funcion_id);
                $('#progress3_label').hide();
            }
              if(i < max)
              setTimeout(function() { decrementar(i + 1) }, TIME);
          }

         $('#progress3').show();  
          loading = true;
          decrementar(0);
        }
          // decremento el valor de i al minimo  
    }  

function popupOpenClose(popup, cardNumber, funcion_id) {
	
	/* Add div inside popup for layout if one doesn't exist */
	if ($(".wrapper").length == 0){
		$(popup).wrapInner("<div class='wrapper'></div>");
	}
	
	/* Open popup */
	$(popup).show();
    
    /*go to parking view*/
    $(popup).find("button[name=go]").on("click", function() {
		if ($(".formElementError").is(':visible')) {
			$(".formElementError").remove();
		}
		$(popup).hide();
        console.log("cardNumber -> ", cardNumber, "funcion_id -> ", funcion_id);
        window.location.href = "parking.html?funcion_id=" + funcion_id + "&cardNumber=" + cardNumber;
	});
	
	/* Close popup and remove errors if user clicks on cancel or close buttons */
	$(popup).find("button[name=close]").on("click", function() {
		if ($(".formElementError").is(':visible')) {
			$(".formElementError").remove();
		}
		$(popup).hide();
        window.location.href = "../index.html";
	});
}

$(document).ready(function () {
	$("[data-js=open]").on("click", function() {
		popupOpenClose($(".popup"));
	});
});
