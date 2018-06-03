$(document).ready(function() { 
    var url = new URL(window.location.href);
    var no_tarjeta = parseInt(url.searchParams.get("no_tarjeta"));
    Eventos.funcAsociadas(no_tarjeta, function(resp){
        console.log(resp);
        if(resp.length >  0) {
           $.each(resp, function(i, data){ 
               $("#carousel-container").append(`
                    
          <div style="min-width: 360px; min-height: 213px; max-width: 360px;">
          <div class="event">
          <div class="info mydraggable">
                    ${data.fecha} <br/>
                    <br/>${data.nombre}
                    </div> 
                    <div class="price">
                       <a href="parking.html?funcion_id=${data.id_funcion}&no_tarjeta=${data.no_tarjeta}"  class="square_btn">Reservar</a>
                    </div>    
              </div>
          </div>  
                   `);  
           }); 
          $.getScript('../css/dist/jquery.carousel-3d.js'); 
        } else {
          $("#carousel-container").append('<div class="nodataWarn">No hay reservaciones con ese numero</div>');
        }
    });
    
    
});