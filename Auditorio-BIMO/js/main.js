function showInitialSteps() { 
    var audio = document.getElementById("audio");
    audio.play();
	var enjoyhint_instance = new EnjoyHint({});

	//simple config. 
	//Only one step - highlighting(with description) "New" button 
	//hide EnjoyHint after a click on the button.
	var enjoyhint_script_steps = [
	  {
	    'click .ticketbutton' : 'Da click en el botton del ticket para realizar la compra',
	    'skipButton' : {text: 'Ok! Entiendo', className: 'tootltip_button'}
	  }  
	];

	//set script config
	enjoyhint_instance.set(enjoyhint_script_steps);

	//run Enjoyhint script
	enjoyhint_instance.run();   
} 

function ayuda_asientos() { 
    var audio = document.getElementById("audio");
    audio.play();
	var enjoyhint_instance = new EnjoyHint({});

	//simple config. 
	//Only one step - highlighting(with description) "New" button 
	//hide EnjoyHint after a click on the button.
	var enjoyhint_script_steps = [
	  {
	    'click .checkout-button' : 'Si es necesario deslice el dedo sobre los bloques que aparecen en esta sección hacia arriba / abajo...',
	    'skipButton' : {text: 'Ok! Entiendo', className: 'tootltip_button'}
	  }  
	];

	//set script config
	enjoyhint_instance.set(enjoyhint_script_steps);

	//run Enjoyhint script
	enjoyhint_instance.run();   
} 

function ayuda_eventos() { 
    var audio = document.getElementById("audio");
    audio.play();
	var enjoyhint_instance = new EnjoyHint({});

	//simple config. 
	//Only one step - highlighting(with description) "New" button 
	//hide EnjoyHint after a click on the button.
	var enjoyhint_script_steps = [
	  {
	    'click .desc' : 'Presione la imagen para desplegar los precios del evento...',
	    'skipButton' : {text: 'Ok! Entiendo', className: 'tootltip_button'}
	  }  
	];

	//set script config
	enjoyhint_instance.set(enjoyhint_script_steps);

	//run Enjoyhint script
	enjoyhint_instance.run();   
} 

function ayuda_pagos() { 
    var audio = document.getElementById("audio");
    audio.play();
	var enjoyhint_instance = new EnjoyHint({});

	//simple config. 
	//Only one step - highlighting(with description) "New" button 
	//hide EnjoyHint after a click on the button.
	var enjoyhint_script_steps = [
	  {
	    'click .inputs-number' : 'Ingrese los datos seleccionados...',
	    'skipButton' : {text: 'Ok! Entiendo', className: 'tootltip_button'}
	  }  
	];

	//set script config
	enjoyhint_instance.set(enjoyhint_script_steps);

	//run Enjoyhint script
	enjoyhint_instance.run();   
} 

function ayuda_search() { 
    var audio = document.getElementById("audio");
    audio.play(); 
} 

function ayuda_canjear() { 
    var audio = document.getElementById("audio");
    audio.play();
	var enjoyhint_instance = new EnjoyHint({});

	//simple config. 
	//Only one step - highlighting(with description) "New" button 
	//hide EnjoyHint after a click on the button.
	var enjoyhint_script_steps = [
	  {
	    'click #card-btn' : 'Ingrese los datos de su tarjeta...',
	    'skipButton' : {text: 'Ok! Entiendo', className: 'tootltip_button'}
	  }  
	];

	//set script config
	enjoyhint_instance.set(enjoyhint_script_steps);

	//run Enjoyhint script
	enjoyhint_instance.run();   
} 

function ayuda_aplicar() { 
    var audio = document.getElementById("audio");
    audio.play();
} 

function ayuda_parking() { 
    var audio = document.getElementById("audio");
    audio.play();  
} 